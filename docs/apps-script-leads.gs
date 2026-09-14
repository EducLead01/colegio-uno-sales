/**
 * Recebe os leads de unosales.com.br e grava na planilha
 * "Leads — Colégio Uno Sales".
 *
 * Como instalar:
 *   1. Abra a planilha
 *   2. Extensões > Apps Script
 *   3. Apague o conteúdo do Code.gs e cole este arquivo inteiro
 *   4. Implantar > Nova implantação > tipo "App da Web"
 *        Executar como ......... Eu
 *        Quem pode acessar ..... Qualquer pessoa
 *   5. Copie a URL gerada (termina em /exec) e me mande
 *
 * O script arruma o cabeçalho sozinho na primeira gravação, então não é
 * preciso mexer nas colunas à mão.
 */

var CABECALHO = [
  'Data/Hora',
  'Nome',
  'Telefone',
  'Origem',
  'Status',
  'Detalhes',
  'Observações'
];

function doPost(e) {
  // Dois envios simultâneos poderiam disputar a mesma linha; o lock serializa.
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    var aba = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    garantirCabecalho(aba);

    var dados = JSON.parse(e.postData.contents);
    var agora = Utilities.formatDate(new Date(), 'America/Sao_Paulo', 'dd/MM/yyyy HH:mm:ss');

    aba.appendRow([
      agora,
      dados.nome || '',
      dados.telefone || '',
      dados.origem || 'Não identificada',
      'Novo',
      dados.detalhes || '',
      ''
    ]);

    return json({ ok: true });

  } catch (err) {
    // Registra a falha numa aba à parte pra nenhum lead sumir sem rastro
    registrarErro(err, e);
    return json({ ok: false, erro: String(err) });

  } finally {
    lock.releaseLock();
  }
}

function garantirCabecalho(aba) {
  var primeira = aba.getRange(1, 1, 1, CABECALHO.length).getValues()[0];
  if (primeira.join('') === CABECALHO.join('')) return;

  aba.getRange(1, 1, 1, CABECALHO.length)
     .setValues([CABECALHO])
     .setFontWeight('bold')
     .setBackground('#0A0F2E')
     .setFontColor('#ffffff');
  aba.setFrozenRows(1);
}

function registrarErro(err, e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var aba = ss.getSheetByName('Erros') || ss.insertSheet('Erros');
    if (aba.getLastRow() === 0) {
      aba.appendRow(['Data/Hora', 'Erro', 'Conteúdo recebido']);
    }
    aba.appendRow([
      new Date(),
      String(err),
      (e && e.postData && e.postData.contents) ? e.postData.contents : '(vazio)'
    ]);
  } catch (ignorado) {}
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/** Teste rápido: rode esta função no editor pra ver uma linha aparecer. */
function testar() {
  doPost({
    postData: {
      contents: JSON.stringify({
        nome: 'Teste Automático',
        telefone: '(62) 90000-0000',
        origem: 'Teste',
        detalhes: 'Linha gerada pela função testar()'
      })
    }
  });
}
