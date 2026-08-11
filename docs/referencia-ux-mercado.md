# Referência UX/Mercado — Colégio Uno Sales

Documentação progressiva de referências de mercado (prints/telas de produtos
concorrentes ou de inspiração) usadas pra construir seções do
`index.html`. Ver skill `reference-teardown`.

## Rastreador

| Referência | Status |
|---|---|
| Carrossel hero + card de estatísticas (Cursos Hélio Couto) | ✅ Documentado |
| Implementação no `index.html` (seção `#destaques`) | ✅ Implementado |
| Cards de etapa de ensino com faixa overlay (InterSchool Brasil) | ✅ Documentado |
| Implementação no `index.html` (seção `#matriculas`) | ✅ Implementado |
| Tabs "Seis Pilares Pedagógicos" (RED HOUSE) — **clone exato**, não inspiração | ✅ Documentado |
| Implementação no `index.html` (seção `#pilares`) | ✅ Implementado |
| "Nossa Identidade" (Internacional+Bilíngue+Brasileira, RED HOUSE) — **clone exato** | ✅ Documentado |
| Implementação no `index.html` (seção `#identidade`) | ✅ Implementado e testado (Playwright, desktop+mobile) |
| Formulário multi-step "Agende sua visita" (Marista Brasil) | ✅ Documentado (passo 1 e 2 dos prints; passo 3 não foi mostrado) |
| Implementação no `index.html` (seção `#captacao`) | ✅ Implementado e testado (Playwright, desktop+mobile) — envio final ainda é placeholder (`console.log`), sem CRM plugado |
| Tira de 4 diferenciais com ícone circular (Marista Goiânia) | ✅ Documentado (print + confirmado via firecrawl_scrape) |
| Implementação no `index.html` (seção `#diferenciais`) | ✅ Implementado e testado (Playwright, mobile/tablet/desktop) |
| Ticker de estatísticas em marquee (PipeLovers/edgeeng.com.br) | ✅ Documentado (print + confirmado via firecrawl_scrape) |
| Implementação no `index.html` (mecanismo aplicado em `#diferenciais`) | ✅ Implementado e testado (Playwright, mobile+desktop) |
| Badges "VALORES SOMOS" com ícone recortado (SOMOS Educação) | ✅ Documentado (print + confirmado via firecrawl_scrape, é a seção real do site) |
| Implementação no `index.html` (seção `#diferenciais`, substituiu o ticker) | ✅ Implementado e testado (Playwright, mobile/tablet/desktop) |
| Carrossel "Campus Goiânia" com dots + anel de progresso (RED HOUSE) | ✅ Documentado (print + confirmado via firecrawl_scrape) |
| Implementação no `index.html` (seção `#novidades`) | ✅ Implementado e testado (Playwright, mobile+desktop) — conteúdo placeholder |

---

## 1. Carrossel hero + card de estatísticas

**Fonte:** https://www.cursosheliocouto.com.br/m/courses (área de membros —
plataforma Curseduca/HeroSpark de cursos de "expansão da consciência").
Print enviado pelo usuário + confirmado via `firecrawl_scrape`.

### Mecanismo exato

- **Carrossel de banners**, 3 slides visíveis no rastreador (mais no total —
  o markdown extraído mostra ~5 pares de imagem desktop/mobile, mas o
  usuário especificou **3 slides** pro nosso uso).
- Cada slide é uma **imagem única full-bleed** (não HTML estruturado em
  cima — o banner em si já traz título, badge e CTA embutidos na arte,
  exceto no slide de destaque do print que tem overlay HTML real: título
  "NECESSIDADES HUMANAS / PARTE 1", botão pill branco "Quero assistir →",
  selo circular dourado "NOVA AULA 2026").
- Controles: setas **Anterior / Próximo** nas laterais (círculo escuro
  semitransparente, ícone chevron), texto alt-label "Anterior" / "Próximo"
  confirma que são botões acessíveis, não só ícones.
- Fundo do slide de destaque: gradiente vermelho escuro com foto do
  instrutor à esquerda + estátua/elemento gráfico dourado.

### Card de estatísticas (logo abaixo do carrossel)

- Container escuro (quase preto, ligeiramente mais claro que o fundo da
  página), **cantos arredondados**, borda sutil de 1px, **overlap leve**
  sobre a borda inferior do carrossel (não é uma seção separada, "gruda"
  visualmente no banner de cima).
- **3 colunas** separadas por **linha vertical fina** (divider), largura
  igual, alinhamento central.
- Cada coluna: número grande em **negrito roxo/violeta** (`#8b5cf6`
  aproximado) + label cinza claro pequeno abaixo:
  - `+600.000` — "Alunos ativos"
  - `+500h` — "De conteúdo"
  - `4.9★` — "Avaliação média"
- Padrão de conteúdo: **1 número absoluto de escala** (alunos), **1 número
  de volume** (horas de conteúdo), **1 nota/prova social** (avaliação com
  estrela inline no valor, não como ícone separado).

### Implicação prática pro nosso build

- O componente é reutilizável como **"hero carousel + trust bar"**: carrossel
  full-bleed com overlay de texto/CTA no slide de destaque, e uma barra de
  credibilidade de 3 métricas logo abaixo, com leve sobreposição visual.
- Pra aplicar no Colégio Uno Sales, precisamos definir:
  1. **Onde** esse padrão entra na página (Hero atual? Seção "Níveis de
     Ensino"? — pendente de confirmação com o usuário).
  2. **3 imagens/slides** — o que cada slide mostra (ex: fachada, sala de
     aula, atividade) e se algum leva CTA/selo como no print de referência.
  3. **3 métricas reais do colégio** pra substituir Alunos/Horas/Nota — ex:
     nº de alunos matriculados, anos de história, nota em avaliação
     (ENEM/IDEB) ou depoimentos — **não inventar número**, aguardar dado
     real do usuário.
  4. Cor de destaque do card: manter `#0baef8` (azul, padrão desta página)
     em vez do roxo do concorrente, pra não quebrar a identidade visual já
     estabelecida no `index.html`.

### Decisões tomadas na implementação

- Localização: **seção nova**, `id="destaques"`, logo abaixo do Hero (não
  substituiu Hero nem Níveis de Ensino).
- 3 slides = 3 fotos reais já hospedadas em `unosales.com.br/adm/uploads/...`
  (mesmas usadas na Galeria) — sem overlay de texto/CTA por slide (só
  gradiente pra legibilidade), diferente do slide de destaque do print de
  referência que tinha título+CTA+selo.
- Card de estatísticas com os 3 itens reais fornecidos pelo usuário:
  - `Nº1` — "Colégio mais bem avaliado da região Leste de Goiânia"
  - `4.9★` — "Avaliação média dos pais"
  - `Nacional` — "Destaque em olimpíadas estudantis"
  - Cor de destaque **azul `#0baef8`** (não roxo, pra manter identidade da
    página).
- Setas Anterior/Próximo com loop infinito (wrap), autoplay a cada 6s,
  dots de posição — JS em `destaquesGo`/`destaquesNav` no `<script>` final
  do `index.html`.
- Array `PRES` (sidebar de apresentação lateral) estava desatualizado desde
  a criação de Quem Somos/Novidades/Jornal Semanal — corrigido junto pra
  refletir a ordem real das seções no DOM.

### Notas de posicionamento (Schwartz)

- Não aplicável a fundo aqui — a referência é uma plataforma de cursos
  (produto totalmente diferente do Colégio Uno Sales), o teardown é só de
  **padrão de UI/mecanismo de prova social**, não de copy/oferta. Sem
  claims de mercado pra comparar nesse caso.

---

## 2. Cards de etapa de ensino com faixa overlay

**Fonte:** https://www.interschoolbrasil.com.br/matriculas (concorrente
direto — escola, página de matrículas). Print enviado pelo usuário mostra 3
cards lado a lado: **Educação Infantil** (subtítulo "Baby | Pre K | Kinder
I | Kinder II"), **Ensino Fundamental** (subtítulo "Anos Iniciais") e
**Ensino Fundamental** (subtítulo "Anos Finais").

### Mecanismo exato

- Card = **foto vertical (proporção ~3:4)** com cantos arredondados, sem
  borda visível.
- Faixa **azul-marinho sólida** (não gradiente) sobrepondo a base da foto
  (~25–30% da altura), cantos arredondados só embaixo, contendo:
  - **Título**: fonte bold, tracking espaçado entre letras (letter-spacing
    largo, tipo "E N S I N O"), branco, quebra em 2 linhas quando o nome é
    longo.
  - **Subtítulo**: mesma fonte, bem menor, também com tracking largo,
    branco/cinza claro — descreve a faixa etária/série coberta.
- Grid de 3 colunas, gap generoso entre cards, sem título de seção visível
  no recorte do print (pode existir acima, fora do crop).

### Implicação prática pro nosso build

- Reaproveitamos o mecanismo (foto + faixa sólida overlay com
  título+subtítulo) mas **trocamos a cor da faixa** de azul-marinho pra
  manter a paleta do site (`rgba(10,10,10,0.88)` com blur, mesmo tom
  escuro das outras seções) em vez de importar uma cor nova — mesma lógica
  aplicada no card de estatísticas do carrossel (seção 1 deste doc).
- Como é o mesmo tipo de conteúdo (etapas de ensino) que a seção
  `#niveis` já existente, decisão do usuário foi manter as duas: `#niveis`
  como está (4 etapas, estilo card com CTA "Saiba Mais" no hover) e criar
  `#matriculas` como seção **nova e separada**, só com Fundamental
  I/II/Médio (sem Educação Infantil), sem link no menu principal.

### Decisões tomadas na implementação

- Seção nova `id="matriculas"`, inserida entre `#niveis` e `#novidades`.
- 3 cards: **Ensino Fundamental I** (1º ao 5º ano), **Ensino Fundamental
  II** (6º ao 9º ano), **Ensino Médio** (1ª à 3ª série) — subtítulos de
  faixa/série são convenção padrão do sistema brasileiro, não dado
  exclusivo do colégio; ajustar se a nomenclatura interna do Uno Sales for
  diferente.
- Reaproveitadas 3 fotos de estoque já usadas na seção `#niveis` (Pexels
  8471876, 5905445, 4145354) em vez de introduzir imagens novas.
- CTA "Quero saber mais" (WhatsApp) abaixo do grid, mesmo padrão das
  outras seções comerciais da página.
- Sem link dessa seção no menu principal (não fazia parte da lista de 5
  itens definida antes).
- Ajustada a alternância de fundo `#0A0A0A`/`#0D0D0D` de `#novidades` em
  diante pra manter o ritmo visual com a seção nova inserida no meio.

---

## 3. Tabs "Seis Pilares Pedagógicos" — CLONE EXATO (não inspiração)

**Fonte:** https://redhouse.com.br/ (concorrente direto — escola bilíngue
internacional, IB). Print enviado pelo usuário + confirmado via
`firecrawl_scrape` (markdown da home completa). **O usuário foi explícito:
"não é inspiração, é clone"** — replicar o mecanismo visual com fidelidade,
não só se inspirar nele.

### Mecanismo exato

- **Layout de 2 colunas**: lista de tabs verticais à esquerda (pills), painel
  de conteúdo à direita.
- **Tabs (6 itens)**, pill totalmente arredondada (`border-radius` alto):
  - Tab **ativa**: fundo sólido dourado/bronze (~`#A98F5C`), texto branco
    bold, sem borda visível.
  - Tabs **inativas**: fundo branco/creme, borda fina dourada/bronze
    (~1px), texto escuro bold.
  - Empilhadas verticalmente com gap pequeno entre elas.
- **Painel de conteúdo à direita**: fundo creme (mesmo tom do fundo geral
  da seção, ~`#F5EFE7`), **borda vermelha** (~`#C21233` — confirmado via
  `theme-color` do site) contornando um formato **não-retangular**: o lado
  esquerdo do painel tem uma ponta/chanfro apontando pra dentro (forma tipo
  "seta"/"bookmark" invertido — o painel "encaixa" visualmente ao lado das
  tabs, como se apontasse pra elas). Cantos direitos arredondados.
  - Conteúdo interno: título (mesma fonte bold do resto do site, vermelho),
    parágrafo de descrição (cinza escuro), botão CTA "Agende uma reunião"
    (pill dourada/bronze, mesma cor das tabs ativas) alinhado à esquerda
    dentro do painel.
- **Badge/emblema vermelho** sobreposto na borda direita do painel: formato
  pentagonal (como uma fita/flag apontando), fundo vermelho sólido, ícone
  branco (lápis/formulário) + texto branco "Agende uma reunião" em duas
  linhas, pequeno, sobrepõe fisicamente a borda do card (não fica contido
  dentro dele).
- Comportamento: clicar em cada tab troca o conteúdo do painel (nome do
  pilar + texto descritivo), sem reload — mecanismo JS simples de
  show/hide ou troca de estado.

### Conteúdo completo dos 6 pilares (extraído via firecrawl, texto literal)

1. **The Learner Profile** — "Conjunto de dez competências e habilidades
   que são o eixo de nosso currículo e contemplam as dimensões cognitiva,
   social e emocional do aluno, constituindo a nossa proposição de valor:
   Learn to Know, Learn to Be, Learn to Do."
2. **Agency and Action** — "Agency refere-se à capacidade dos alunos de
   agir de forma independente e fazer as próprias escolhas. Envolve a
   habilidade de tomar decisões e exercer influência sobre a própria vida.
   Action é o processo de colocar em prática os conhecimentos, habilidades
   e competências. Envolve resolver problemas do mundo real com pensamento
   crítico e criatividade."
3. **Currículo Modular** — "A modularidade do currículo da RED HOUSE é
   essencial para dar maior flexibilidade na implementação dos processos
   educacionais e pedagógicos."
4. **Aprendizado Autêntico** — "O Aprendizado Autêntico consiste no uso de
   metodologias pedagógicas de relevância e que já demonstraram eficácia
   nos processos de ensino e aprendizagem com base em evidências e
   pesquisas na área da Science of Learning."
5. **Avaliação Continuada** — "A avaliação do aluno acontece de forma
   contínua com base na geração e coleta de evidências do aprendizado."
6. **Pedagogia Integrada** — "Integra diferentes áreas do conhecimento e
   dimensões do desenvolvimento de forma interdisciplinar, considerando o
   aluno como agente ativo no processo de aprendizagem."

Título da seção no original: "Os Seis Pilares Pedagógicos" / subtítulo:
"Os pilares pedagógicos constituem a base de nossas Metodologias de Ensino
e Aprendizagem."

### Implicação prática pro nosso build — pendente de decisão do usuário

- Esse conteúdo é **específico do currículo IB/bilíngue da RED HOUSE**
  (termos como "Learner Profile", "Agency and Action" são vocabulário
  oficial do International Baccalaureate) — não faz sentido usar esse
  texto literal pro Colégio Uno Sales a menos que ele também siga esse
  currículo. Preciso confirmar com o usuário: reaproveitar a estrutura
  (6 tabs, mesmo mecanismo visual) com **conteúdo próprio do Uno Sales**,
  ou ele quer literalmente esse texto também.
- Falta definir: em qual seção da página esse componente entra.

### Atualização — conteúdo literal RED HOUSE substituído

Texto placeholder (IB) trocado por conteúdo próprio do Uno Sales, sem
jargão IB/inglês, mantendo os mesmos 6 pilares e o mecanismo de tabs:
Metodologia por Competências, Protagonismo do Aluno, Currículo Flexível,
Aprendizagem na Prática, Avaliação Contínua, Pedagogia Integrada. Título/
subtítulo da seção não mudaram. Mecanismo visual (tabs + painel com seta,
cores creme/vermelho/dourado do clone) permanece igual — só o texto
mudou.

### Decisões tomadas na implementação

- Usuário confirmou inicialmente: usar o **texto do RED HOUSE literalmente**
  (incluindo termos IB como "Learner Profile"), como placeholder
  até o usuário mandar o conteúdo real do Uno Sales — **já substituído,
  ver "Atualização" acima**.
- Seção nova `id="pilares"`, inserida logo depois de `#quem-somos`, antes
  de `#visibilidade` (não entrou no menu principal).
- **Cores mantidas exatamente como a referência** (`#F5EFE7` fundo creme,
  `#C21233` vermelho, `#A98F5C` dourado/bronze) mesmo quebrando a paleta
  escura do resto da página — decisão deliberada pelo pedido explícito de
  "clone exato, não inspiração". Se o usuário quiser depois adaptar pra
  paleta azul/preta do site, é só re-aplicar as cores do restante das
  seções.
- Forma do painel (ponta apontando pra dentro à esquerda, cantos
  arredondados à direita) implementada via `<svg>` com `path` customizado
  (`clip-path` puro não dava pra combinar ponta + cantos arredondados ao
  mesmo tempo).
- Badge vermelho pentagonal via `clip-path: polygon(...)` sobrepondo a
  borda direita do painel.
- Tabs e conteúdo do painel trocam via JS (`pilaresGo`), sem reload —
  mesmo padrão dos outros carrosséis/interações da página.

### Bug encontrado e corrigido (sessão seguinte)

Usuário reportou "ficou errado" (layout empilhado em 1 coluna também no
desktop, deveria ser 2 colunas ≥1024px). Investigado com Chromium
automatizado (Playwright) rodando local — sem servidor, `file://` direto —
tirando screenshot de `#pilares` em 390px e 1280px.

Causa raiz **dupla**, ambas relacionadas a especificidade de CSS:
1ª tentativa de fix trocou classes Tailwind (`absolute`, `grid grid-cols-1`
etc.) por `style` inline achando que era conflito com o CDN do Tailwind —
mas isso **piorou**: `style` inline tem especificidade máxima, então
`grid-template-columns:1fr` inline passou a vencer a media query
`.pilares-grid` sempre, travando em 1 coluna mesmo no desktop. Fix real:
`grid-template-columns` só existe na classe `.pilares-grid` (regra base
1fr + `@media (min-width:1024px)` pra 300px 1fr), nunca no `style` inline
do elemento. Confirmado corrigido nos dois breakpoints via screenshot.

---

## 4. "Nossa Identidade" (Internacional + Bilíngue + Brasileira)

**Fonte:** https://redhouse.com.br/quem-somos/nossa-identidade/. Prints
enviados pelo usuário (4 imagens: 1 desktop, 3 mobile/accordion) +
confirmado via `firecrawl_scrape` (markdown completo da página). **Clone
exato**, mesmo padrão da seção 3.

### Conteúdo completo (extraído via firecrawl, texto literal)

Título da página: "Nossa Identidade" / subtítulo: "Nossa essência
traduzida em uma equação." — equação visual: RED HOUSE = Internacional +
Bilíngue + Brasileira.

**Internacional** (ícone globo) — descrição curta: "Diversas unidades de
nosso grupo são certificadas pelo International Baccalaureate." — 3
sub-itens (cada um com imagem própria):
1. **Mentalidade global** — "Valorização da diversidade cultural,
   promovendo o respeito, o diálogo e a compreensão de múltiplos pontos
   de vista."
2. **Currículo internacional** — "Currículo reconhecido e aceito por
   universidades do Brasil e do exterior."
3. **Contextos globais e aplicações reais** — "Os alunos são incentivados
   a aplicar seus conhecimentos e habilidades para enfrentar desafios
   mundiais e a contribuir com suas comunidades (do global ao local)."

**Bilíngue** (ícone balão de fala) — 3 sub-itens:
1. **Aquisição da linguagem** — "O desenvolvimento da linguagem ocorre de
   forma natural, por meio da exposição contínua à língua."
2. **Metodologia própria** — "Metodologia própria de aquisição de
   linguagem criada por um time de especialistas em linguística,
   neuropsicologia e neurociências."
3. **Educamos em inglês** — "A educação bilíngue utiliza duas línguas de
   instrução e ambas se complementam na educação do aluno."

**Brasileira** (ícone escudo/olho) — tem uma imagem de capa própria
("arraiá"/festa junina) + 2 sub-itens:
1. **BNCC** — "O nosso currículo está alinhado à Base Nacional Comum
   Curricular (BNCC), que são as diretrizes curriculares do Ministério da
   Educação para a educação básica. Desta forma, as competências e
   conteúdos previstos na BNCC compõem o nosso programa."
2. **Identidade brasileira** — "Seguimos o calendário brasileiro e
   valorizamos os aspectos culturais do nosso país. Priorizamos a
   literatura, a cultura e os conteúdos referentes do Brasil na formação
   do nosso aluno, que são engajados a valorizar nossa cultura."

### Mecanismo visual (dos prints)

- **3 categorias** no topo em forma de **escudo/bandeirola** (mesmo
  formato pentagonal do badge da seção 3, mas maior — ponta pra baixo):
  categoria ativa = preenchida dourado/bronze com texto branco; inativas =
  fundo branco, borda dourada fina, ícone + texto vermelho/escuro.
  Conectadas por sinais vermelhos `=` (entre logo RED HOUSE e a 1ª) e `+`
  (entre as categorias seguintes) — a "equação" visual do subtítulo.
- **Desktop** (print 1): ao clicar numa categoria, abaixo aparece **uma
  imagem à esquerda** + **bloco(s) de texto empilhados à direita**
  (título + parágrafo, sem imagem individual por sub-item nesse layout).
- **Mobile** (prints 2–4): as 3 categorias viram um **acordeão vertical**
  — cada categoria é uma pílula com ícone + label + botão circular
  dourado com `+`/`−` à direita. Fechada = só a pílula. Aberta = expande
  **abaixo da própria pílula** mostrando uma imagem com **overlay
  escuro no rodapé** contendo título (branco, bold) + parágrafo (branco,
  menor) — mesmo padrão visual de "card com faixa" já usado nas seções 1
  e 2 deste documento. Sinal `=`/`+` vermelho aparece centralizado acima
  de cada pílula (versão vertical da equação).

### Pontos em aberto — preciso confirmar antes de implementar

Os prints mostram só **1 sub-item por categoria expandida** (ex:
"Mentalidade global" pra Internacional, "Aquisição da linguagem" pra
Bilíngue), mas cada categoria tem **3 sub-itens** com conteúdo próprio
(confirmado no firecrawl). Não ficou claro nos prints se:
(a) mobile mostra só o 1º sub-item de cada categoria (os outros 2 ficam
de fora), ou (b) os 3 sub-itens aparecem empilhados/em carrossel dentro
do acordeão aberto, só não capturado no print. Mesma dúvida pro desktop:
o print de "Brasileira" mostra 2 blocos de texto empilhados (BNCC +
Identidade brasileira) mas só 1 imagem fixa à esquerda — não dá pra saber
se essa imagem muda ao interagir com cada bloco de texto ou fica fixa.

### Decisões confirmadas pelo usuário e implementação

- **Mobile**: acordeão abre e mostra os **3 sub-itens empilhados** (cada
  um com imagem própria + faixa escura no rodapé com título/texto),
  fechando os outros ao abrir um novo (accordion de item único aberto).
- **Desktop**: imagem à esquerda **muda por sub-item** — clicar em
  qualquer bloco de texto à direita troca a imagem e marca aquele bloco
  como ativo (borda vermelha à esquerda do bloco).
- Seção nova `id="identidade"`, inserida logo depois de `#pilares` (mesma
  família de clones RED HOUSE, mesma paleta creme/vermelho/dourado, fica
  agrupada visualmente).
- 8 sub-itens (3 Internacional + 3 Bilíngue + 2 Brasileira) usam as 8
  fotos reais já hospedadas em `unosales.com.br/adm/uploads/...` (mesmas
  da Galeria) — nenhuma imagem de estoque nova.
- Testado com Chromium via Playwright local (sem servidor, `file://`
  direto): troca de categoria, troca de sub-item (imagem+destaque) e
  abertura do acordeão mobile — sem erros de console, visual confere com
  os prints de referência do usuário.

### Categorias renomeadas (sessão seguinte, deixa de ser clone literal)

Usuário pediu pra trocar as 3 categorias de "Internacional + Bilíngue +
Brasileira" (texto literal RED HOUSE) por **"Tradicional + Inovadora +
Goiana"** — específico do Uno Sales, não é mais placeholder RED HOUSE
nessa seção. Como cada categoria tinha subitens de texto amarrados ao
significado antigo (ex: "Bilíngue" tinha "Aquisição da linguagem"),
usuário confirmou que eu deveria **redigir subitens novos como
placeholder** pros 3 temas novos, não só trocar os títulos.

- **Tradicional** (ícone: livro) — 3 subitens: "Décadas de
  experiência", "Valores sólidos", "Relação próxima com as famílias".
- **Inovadora** (ícone: lâmpada) — 3 subitens: "Metodologia
  atualizada", "Ferramentas digitais", "Educação em constante
  evolução".
- **Goiana** (ícone: pin de localização) — 2 subitens: "Raízes em
  Goiânia", "Compromisso com a região" (mantido em 2 itens, mesmo
  padrão de contagem da antiga "Brasileira").
- Ícones trocados de `ICONE_GLOBO`/`ICONE_BALAO`/`ICONE_ESCUDO` pra
  `ICONE_TRADICAO`/`ICONE_INOVACAO`/`ICONE_GOIANA` (SVGs novos: livro,
  lâmpada, pin de mapa) — os ícones antigos não faziam mais sentido
  pros novos temas.
- Imagens: reaproveitadas as mesmas 8 fotos já usadas antes (mesma
  ordem), só o texto/título mudou.
- **Texto ainda é placeholder** (redigido por mim, não é conteúdo
  oficial do colégio) — troca quando o usuário mandar o texto real.
- Testado com Playwright (desktop: troca dos 3 escudos + mobile:
  abertura do acordeão) — subitens e imagens trocam corretamente, sem
  erros de console.

### Reposicionamento (sessão seguinte)

Usuário pediu pra `#niveis` virar a **3ª seção física da página**
(contando Destaques=1, Quem Somos=2, Níveis=3) — movida pra logo depois de
`#quem-somos`, antes de `#visibilidade`. **`#matriculas` não acompanhou**
(ficou onde estava, agora entre `#captacao` e `#novidades`).

**Ajuste seguinte:** usuário pediu pra `#niveis` ficar **acima** de
`#quem-somos` (referência: "acima da seção 'Um novo conceito de escola'",
que é o H2 dentro de Quem Somos) — as duas seções trocaram de posição de
novo. Ordem final do DOM: Hero → Destaques → **Níveis de Ensino** → Quem
Somos → Visibilidade → Galeria → Captação → Matrículas → Novidades →
Jornal Semanal → Como Funciona → Investimento. Alternância
`#0A0A0A`/`#0D0D0D` recalculada pra toda a página manter o ritmo (nenhuma
seção adjacente com o mesmo fundo).

---

## 5. Formulário multi-step "Agende sua visita"

**Fonte:** site institucional do Marista Brasil (rede de colégios —
concorrente/inspiração direta, mesmo segmento). 4 prints enviados pelo
usuário: 1 do passo 1, 1 do passo 2, e 2 crops repetidos do mesmo estado
do passo 2 (dropdown "Turno" aberto). **Passo 3 não foi mostrado** — só
existe o indicador "03" no rastreador de progresso, sem conteúdo visível.

### Mecanismo exato

- **Card único centralizado**, fundo azul-marinho escuro sólido, cantos
  arredondados, sem imagem — só formulário.
- **Cabeçalho fixo** (repete em todos os passos): título "Agende sua
  visita" (branco, bold, centralizado) + subtítulo "Venha conhecer nossa
  estrutura e conversar sobre a educação do seu filho." (branco
  semi-transparente, menor, centralizado).
- **Indicador de progresso** (stepper) logo abaixo do cabeçalho: 3 círculos
  numerados `01` `02` `03` conectados por uma linha horizontal fina.
  - Passo atual: círculo **preenchido azul claro** (destaque), número em
    branco.
  - Passo já concluído: círculo com contorno azul claro, preenchido (no
    print 2, o `01` aparece com bolinha azul menor dentro, indicando
    "concluído" — visualmente distinto do ativo).
  - Passo futuro: círculo vazio, contorno cinza/branco translúcido, número
    cinza translúcido.
  - Linha conectora entre os círculos já percorridos fica azul; entre os
    futuros, cinza translúcida.
- **Campos de input**: fundo branco sólido, cantos arredondados grandes,
  texto placeholder cinza-azulado, sem label separada (o placeholder faz
  esse papel), padding generoso. Campo focado ganha borda escura visível
  (print 1, campo "Nome do responsável" ativo mostra contorno azul-escuro
  mais grosso).
- **Dropdowns** (selects): mesmo visual de input branco arredondado, com
  chevron `⌄` à direita. Ao abrir, menu suspenso branco com a opção
  placeholder destacada em cinza claro no topo (ex: "Ano letivo
  pretendido", "Turno") e as opções reais abaixo em texto azul-escuro,
  lista simples sem ícone.
- **Checkboxes**: quadrado pequeno com contorno branco fino (sem
  preenchimento quando desmarcado), label ao lado em branco/branco
  translúcido, texto longo quebra em várias linhas, com trechos em
  **bold branco puro** (ex: "Política de Privacidade e Proteção de
  Dados") destacando links/termos legais dentro do texto corrido.
- **Botão "+ Adicionar estudante"** (só no passo 2): botão secundário,
  fundo azul acinzentado translúcido (mais escuro que os inputs, mais
  claro que o fundo do card), ícone `+` à esquerda, texto branco,
  cantos arredondados — permite adicionar múltiplos estudantes no mesmo
  formulário (indica que o form suporta N filhos por responsável).
- **Botão de avançar**: pill totalmente arredondado, fundo **branco
  sólido**, texto "Avançar" azul-marinho escuro bold, centralizado,
  largura quase total do card, sem ícone de seta. Mesmo botão deve virar
  "Enviar"/"Concluir" no passo 3 (não confirmado nos prints, passo 3 não
  foi mostrado).

### Campos exatos por passo (dos prints)

**Passo 1 — Responsável** (indicador `01` ativo):
1. Nome do responsável (texto)
2. Sobrenome do responsável (texto)
3. Celular (xx) xxxxx-xxxx (texto, placeholder já mostra máscara)
4. E-mail (texto/email)
5. Checkbox opcional: "Quero receber conteúdos exclusivos e ofertas
   personalizadas do Marista Brasil, de acordo com a **Política de
   Privacidade e Proteção de Dados** (opcional)."
6. Botão "Avançar"

**Passo 2 — Estudante** (indicador `02` ativo, `01` concluído):
1. Nome do estudante (texto)
2. Ano letivo pretendido (dropdown: 2026, 2027, 2028, 2029, 2030, 2031)
3. Nível pretendido (dropdown, opções não visíveis no crop)
4. Turno (dropdown: Manhã, Tarde)
5. Checkbox: "Realiza algum acompanhamento especializado extern[o]..."
   (texto cortado no print, provavelmente pergunta sobre acompanhamento
   terapêutico/pedagógico externo do aluno)
6. Botão secundário "+ Adicionar estudante" (permite repetir o bloco
   estudante N vezes antes de avançar)
7. Checkbox (obrigatório, sem "opcional" no texto): "Aceito comunicar
   meus dados neste formulário e receber contato para agendamento da
   visita no Colégio."

**Passo 3 — não documentado.** Só o indicador `03` aparece nos prints, sem
conteúdo. Prováveis conteúdos (não confirmado): confirmação de
data/horário de visita, resumo dos dados, ou tela de sucesso — **não
assumir, perguntar ao usuário se ele tem mais prints ou se decide o
conteúdo do passo 3 na hora de implementar**.

### Implicação prática pro nosso build

- É um mecanismo de **formulário em etapas (wizard)** com stepper visual —
  bem mais robusto que o formulário atual de `#captacao` (3 campos soltos
  + botão único que abre WhatsApp). Adotar esse padrão significa: (a)
  esconder/mostrar blocos de campos via JS conforme o passo, (b) validar
  campos do passo atual antes de habilitar "Avançar", (c) desenhar o
  stepper com os 3 estados (concluído/ativo/futuro).
- **Diferença de intenção**: o form da Marista parece alimentar um
  CRM/backend real (sem CTA de WhatsApp visível) — nosso `#captacao` atual
  termina em `wa.me` (abre WhatsApp direto, sem backend). Precisa decidir
  se o wizard novo também termina em WhatsApp (juntando todos os campos
  preenchidos numa mensagem pré-formatada) ou se vai precisar de um
  backend/CRM real pra receber os dados — **pendente de decisão**.
- O usuário já indicou (mensagem enviada junto com os prints) que quer o
  **passo 1 com campos diferentes do original**: "Nome do responsável,
  Sobrenome, WhatsApp do responsável" — ou seja, **substituir Celular +
  E-mail separados por um único campo WhatsApp**, alinhado com o padrão
  já usado no form atual do site (que só pede WhatsApp, não e-mail).
  Ainda não confirmado: mantém os checkboxes do print, mantém passo 2
  (dados do estudante) igual ao original, e o que fazer no passo 3.

### Notas de posicionamento (Schwartz)

- Aqui sim é comparável: Marista Brasil é concorrente direto de mercado
  (rede de colégios), e o mecanismo em si (form multi-step com stepper
  numerado) é uma **alegação implícita de processo estruturado/sério**
  vs. formulário simples de 1 tela — sugere ao prospect "aqui o processo
  de matrícula é organizado, profissional". Isso é meio-caminho andado
  pra sofisticação de mercado: pais que já viram forms de 1 campo em
  vários concorrentes podem perceber um wizard de 2-3 passos como sinal
  de instituição mais estruturada — **mecanismo replicável sem violar
  nada específico da marca Marista** (é um padrão de UX genérico de
  formulário, não copy proprietária deles).
- Risco a evitar: se o wizard ficar longo demais (3 passos completos) sem
  necessidade real, pode aumentar abandono vs. o form atual de 3 campos +
  1 clique pro WhatsApp, que é bem mais rápido de preencher no mobile.
  Vale pesar tamanho do form vs. taxa de conclusão quando decidir o
  escopo final.

---

## 6. Tira de 4 diferenciais com ícone circular

**Fonte:** https://colegiosmaristas.com.br/goiania (concorrente direto —
mesma rede Marista, unidade Goiânia). Print enviado pelo usuário +
confirmado via `firecrawl_scrape` (markdown completo da página —
apareceu **duas vezes** no site: uma versão como slide de carrossel logo
abaixo do hero, com imagem de fundo por item, e a versão da tira simples
com ícone (a que o usuário mandou o print), que fica **depois** da seção
"Agende sua visita" e **antes** dos números de resultados ("4.727
Aprovações", etc.) — ambas com títulos parecidos mas textos diferentes;
o print documentado aqui é da segunda versão, mais simples).

### Mecanismo exato (do print)

- **4 colunas** em grid horizontal, separadas por **linha vertical fina
  cinza clara** entre cada item (divider sutil, não chega às bordas).
- Cada coluna, de cima para baixo:
  1. **Badge circular** (~56px), fundo **azul clarinho sólido**
     (~`#BFE3F5`, tom pastel), com um **ícone outline azul mais escuro**
     centralizado (traço fino, ~2px) — cada item tem um ícone diferente:
     check (✓) pra "Formação Integral", aperto de mãos pra "Acompanhamento
     próximo", medalha/selo com estrela pra "Excelência com valores", mão
     segurando pessoa (proteção/acolhimento) pra "Ambiente acolhedor".
  2. **Barra curta horizontal** azul sólida (~28px de largura, 3-4px de
     altura, cantos arredondados) logo abaixo do círculo, meio
     sobrepondo a base dele — funciona como "sublinhado" do ícone,
     detalhe gráfico de assinatura visual.
  3. **Título em negrito**, texto escuro, alinhado à esquerda, tamanho
     médio (~16-18px).
  4. **Descrição curta** (1-2 linhas), cinza médio, tamanho menor
     (~13-14px), alinhada à esquerda, largura limitada (quebra em 2
     linhas nos textos mais longos).
- Todo o bloco alinhado à esquerda dentro de cada coluna (não
  centralizado), diferente do padrão de `.feature-card` que já existe no
  nosso site (que é mais "card" com padding/borda; aqui é mais "tira"
  solta sem card/borda ao redor de cada item, só a linha divisória entre
  colunas).
- **Nota à parte**: o print também mostra, no canto superior direito,
  um botãozinho preto arredondado com ícone de áudio/mute — isso é um
  widget de acessibilidade (provavelmente leitor de tela / "ouvir
  página") do site Marista, **não faz parte do padrão a replicar**.

### Conteúdo completo (confirmado via firecrawl, texto literal)

1. **Formação Integral** — "Desenvolvemos o potencial acadêmico,
   emocional e social do estudante."
2. **Acompanhamento próximo** — "Atenção individualizada para valorizar
   a trajetória do seu filho."
3. **Excelência com valores** — "Ensino forte que inspira escolhas
   éticas e cidadania."
4. **Ambiente acolhedor** — "Respeito, solidariedade e fé em uma
   comunidade que acolhe de verdade."

Contexto no site original: essa tira fica logo abaixo do título "##
Resultados que refletem uma formação para a vida" / "Excelência
acadêmica que prepara para o futuro e para a vida." — funciona como um
resumo visual rápido de 4 pilares, imediatamente antes dos números de
aprovação (4.727 aprovações, 155 alunos em 1º lugar, etc.).

### Implicação prática pro nosso build — pendente de decisão do usuário

- Mecanismo é bem mais simples que os 6 pilares em tabs do RED HOUSE
  (seção 3 deste doc) — aqui não tem interação/clique, é só uma tira
  estática de 4 itens. Mais parecido em espírito com a seção
  `#abordagem` ("Como Transformamos a Presença Digital") que já existe
  no nosso site, mas com **ícone circular + sublinhado** em vez do
  quadrado com borda que usamos hoje em `.feature-card`.
- Cores: a referência usa **azul pastel** nos círculos — nosso site
  trocou recentemente o accent de azul pra **laranja** (`#E8821E`,
  inspirado na logo do Uno Sales). Precisa decidir: importar o azul
  exato da Marista (clone de cor também) ou adaptar pro laranja da
  nossa paleta atual (mais provável, dado que acabamos de rebrandear o
  site inteiro pra laranja).
- Conteúdo: os 4 textos da Marista são genéricos o suficiente pra
  praticamente qualquer escola ("Formação Integral", "Ambiente
  acolhedor" etc.) — preciso confirmar se o usuário quer usar esse texto
  literal como placeholder (como fizemos com RED HOUSE) ou já escrever
  algo específico do Uno Sales.
- Falta definir onde entra na página: como uma seção nova separada, ou
  substituindo/complementando a seção `#abordagem` que já existe com
  proposta parecida (4 cards de diferenciais).

### Decisões tomadas na implementação

- **Cor**: laranja da paleta atual do site (`#E8821E`), não o azul da
  referência — badge circular `rgba(232,130,30,0.15)` + ícone/sublinhado
  `#E8821E`, consistente com o resto do site pós-rebrand.
- **Conteúdo**: texto da Marista usado literalmente como placeholder
  (mesmo padrão já seguido com RED HOUSE) — trocar pelo conteúdo real do
  Uno Sales quando o usuário mandar.
- **Posição**: seção nova `id="diferenciais"`, inserida entre
  `#quem-somos` e `#pilares`. Fundo `#EFE6D8` (tom creme alternado) pra
  criar respiro visual entre `#quem-somos` e `#pilares`, que agora usam
  o mesmo creme `#F5EFE7` e ficam grudados sem essa seção no meio.
- Ícones são SVGs genéricos (capelo/formatura, pessoas, medalha,
  coração) — aproximação livre dos ícones da referência (que não foram
  extraídos em detalhe do print), não são os SVGs exatos da Marista.
- Badge de acessibilidade preto (áudio/mute) visível no canto do print
  **não foi replicado** — é um widget do site Marista, não faz parte do
  padrão visual.
- Divisórias entre colunas implementadas com classes responsivas do
  Tailwind (`sm:border-l`, `lg:border-l`) em vez de `style` inline fixo
  — testado que a borda não fica "órfã" no layout 2 colunas do
  tablet/mobile (lição já registrada antes: cuidado com `style` inline
  vs. classes responsivas pra regras de layout).
- Testado com Chromium via Playwright local em 3 larguras (390px mobile,
  700px tablet, 1440px desktop) — sem erros de console.

### Decisões tomadas na implementação

- **Escopo confirmado pelo usuário**: 2 passos (Responsável → Estudante),
  sem passo 3. Cores adaptadas à paleta do site (`#0baef8` no lugar do
  azul-claro genérico do stepper de referência), não clone exato — só
  inspiração de mecanismo (diferente das seções `#pilares`/`#identidade`).
- **Passo 1** com os 3 campos que o usuário pediu (diferente do original):
  Nome do responsável, Sobrenome do responsável, WhatsApp do responsável
  (sem Celular+E-mail separados) + checkbox opcional de opt-in.
- **Passo 2** replicado como no print: Nome do estudante, Ano letivo
  (2026–2031), Nível pretendido (usa os 4 níveis já existentes na seção
  `#niveis`: Educação Infantil, Fund. Anos Iniciais, Fund. Anos Finais,
  Ensino Médio — não inventado, reaproveitado do conteúdo real do site),
  Turno (Manhã/Tarde), checkbox de acompanhamento especializado externo
  (texto do print estava cortado, completado com exemplos genéricos:
  fonoaudiólogo/psicopedagogo/terapeuta ocupacional — **confirmar com o
  usuário se faz sentido pro Uno Sales**), botão "+ Adicionar estudante"
  funcional (permite múltiplos estudantes no mesmo envio, cada um com seu
  próprio bloco e botão "Remover"), checkbox obrigatório de consentimento.
- **Backend/CRM**: usuário confirmou que existe um CRM real, mas decidiu
  adiar a integração ("bora fazer o front" primeiro) — por ora o submit
  final só monta um objeto `{ responsavel, estudantes[] }` e faz
  `console.log`, com comentário `// TODO: integrar com o CRM` no
  `<script>` marcando o ponto de integração futura. **Não perguntei ainda
  qual CRM é** — próxima sessão sobre esse formulário deve retomar essa
  pergunta antes de plugar o envio de verdade.
- Bug encontrado e corrigido no teste: label de checkbox com `<strong>`
  inline dentro de `display:flex` quebra errado (cada nó de texto vira um
  flex item separado, JavaScript/HTML — não CSS de grid como o bug
  anterior). Fix: envolver todo o texto do label (fora do `<input>`) num
  `<span>` único.
- Testado com Chromium via Playwright local (`file://`, sem servidor) em
  390px e 1280px: preenchimento passo 1 → validação bloqueando avanço com
  campos vazios → passo 2 com 2 estudantes adicionados dinamicamente →
  submit → estado de sucesso. Sem erros de console nos dois breakpoints.

### Dropdowns customizados (sessão seguinte)

Usuário reportou que a cor de destaque da opção selecionada dentro do
`<select>` nativo (Ano letivo, Nível pretendido, Turno) usa o azul do
sistema operacional, não controlável via CSS — pediu pra trocar por
dropdown customizado (HTML/JS) pra poder usar o azul-marinho do site
(`#0A0F2E`) nessa cor de destaque.

- `<select>` nativo substituído por `.captacao-select-wrap`: um
  `<button>` (`.captacao-select-trigger`, mesmo visual de
  `.captacao-field`) mostrando o valor atual + chevron, um
  `<input type="hidden">` guardando o valor real (**mesmo `id` de
  antes**, então todo o código de leitura/validação existente
  continuou funcionando sem mudança), e um painel
  `.captacao-select-panel` com as opções (hover/seleção em
  `#0A0F2E`, texto branco).
- **Pegadinha resolvida**: `input[type=hidden]` **não participa da
  validação nativa do HTML5**, mesmo com `required` — o navegador não
  bloqueia o submit se estiver vazio (diferente do `<select
  required>` original). Adicionada checagem manual no handler de
  `submit`: se algum hidden `required` estiver vazio, cancela o envio e
  pinta a borda do trigger de vermelho (`#C21233`).
- Funções novas: `captacaoSelectHtml()` (gera o HTML),
  `captacaoToggleSelect()` (abre/fecha, fecha os outros primeiro),
  `captacaoSelectPick()` (seleciona opção, atualiza label e hidden
  input). Listener global de `click` no `document` fecha qualquer
  painel aberto ao clicar fora.
- Texto do trigger truncado com `text-overflow:ellipsis` +
  `white-space:nowrap` (opção "Ensino Fundamental I" não cabia numa
  linha só no espaço do campo) — valor armazenado continua completo,
  só a exibição trunca visualmente.
- Testado via Playwright: abrir dropdown → hover mostrando destaque
  navy → clicar opção → confirmado `document.getElementById(...).value`
  igual ao texto clicado → preencheu os 3 dropdowns + submit → estado
  de sucesso. Testado em 390px (mobile) e 1440px (desktop). Sem erros
  de console.

---

## 7. Ticker de estatísticas em marquee

**Fonte:** https://edgeeng.com.br/ (landing page da PipeLovers —
"maior universidade corporativa de vendas B2B do Brasil", produto
totalmente diferente do Colégio Uno Sales — teardown é só de
**mecanismo de UI**, não de oferta/copy). Print enviado pelo usuário +
confirmado via `firecrawl_scrape`.

### Mecanismo exato

- **Barra horizontal full-width**, fundo **azul-marinho bem escuro**
  quase preto (~`#0a0e1f`/`#0d1128`), sem padding vertical generoso —
  tira fina, não é uma seção com título/subtítulo, só a faixa de
  números.
- **5 itens** em sequência horizontal: `4.000 Usuários` · `450
  Empresas` · `700 Horas de aula` · `600 Experts de mercado` · `5 Aulas
  ao vivo/semana` — cada item é **número em azul vibrante bold** +
  label em branco/cinza claro ao lado (mesma linha, não empilhado).
- **Separador**: bolinha (`•`) pequena entre os itens, cor
  branca/cinza translúcida.
- **Confirmado via firecrawl que é looping infinito**: o markdown
  extraído mostra a **lista inteira duplicada em sequência** (os 5
  itens aparecem 2x seguidos no DOM) — sinal claro de que é uma
  **marquee/ticker com scroll horizontal automático e loop contínuo**
  (técnica padrão: duplicar o conteúdo e animar `translateX` de 0% a
  -50%, quando o CSS reseta pro início o segundo bloco idêntico já
  está no lugar certo, criando looping sem salto visível). Sem
  interação/clique, sem pausa ao hover confirmada (não testado, só
  inferido do HTML).

### Implicação prática pro nosso build — pendente de decisão do usuário

- **Tipo de conteúdo é diferente** do que já existe na seção
  `#diferenciais` que acabamos de construir (que são 4 afirmações
  qualitativas com ícone+título+descrição, tipo "Formação Integral").
  Esse padrão da PipeLovers é **numérico** (métricas/números de
  escala), mais parecido com o card de estatísticas que já existe em
  `#destaques` (Nº1 / 4.9★ / Nacional) — só que aquele é estático (grid
  fixo), não um ticker em movimento.
- Pra aplicar isso de verdade no Colégio Uno Sales, preciso saber: (a)
  isso **substitui o conteúdo/estilo de `#diferenciais`** (trocando os
  4 itens qualitativos por métricas numéricas em ticker), ou é uma
  **seção nova separada** (ex: virar o novo formato do card de
  estatísticas de `#destaques`, ou uma faixa adicional em outro ponto
  da página)? (b) se for numérico, preciso dos **números reais do
  colégio** pra preencher (ex: nº de alunos, anos de história, nº de
  professores, nº de aprovações em vestibular etc.) — **não inventar
  número**, aguardar dado real do usuário, mesma regra já aplicada ao
  card de estatísticas de `#destaques`.
- Cor: referência usa azul-marinho + azul vibrante — nosso site é
  creme + laranja (`#E8821E`) desde o rebrand recente; adaptar pra
  manter identidade, a menos que o usuário quera importar o azul-escuro
  como "exceção" (tipo o Hero, que ficou escuro de propósito).

### Decisões tomadas na implementação

- Usuário confirmou: **só o mecanismo de scroll**, mantendo o conteúdo
  qualitativo que já existia em `#diferenciais` (não virou numérico, não
  virou seção separada) — a seção inteira foi convertida do grid
  estático de 4 colunas pro ticker em movimento.
- Fundo trocado de creme (`#F5EFE7`) pra **preto** (`#0A0A0A`, mesmo
  tom do header) — não importamos o azul-marinho da referência, usamos
  o preto que já existe no site (mesma lógica de sempre: adaptar cor pra
  identidade já estabelecida, não importar cor nova).
- Ícones mantidos (mesmos 4 SVGs de antes: capelo, pessoas, medalha,
  coração), mas sem o badge circular pastel — viraram ícones inline
  pequenos (20px) antes do título, cor laranja sólida.
- Título em branco `font-black`, descrição em `text-white/45
  font-light` na mesma linha (não empilhado como no card antigo) —
  layout compacto pra caber no formato de faixa.
- Separador `•` (bullet) entre os blocos, igual à referência.
- **Loop infinito**: conteúdo renderizado 2x via JS (array `DIFERENCIAIS`
  + função `diferenciaisRender()`) dentro de um container
  `#diferenciais-track` com `width:max-content` e animação CSS
  `@keyframes diferenciaisScroll` (`translateX(0)` → `translateX(-50%)`,
  32s linear infinite) — quando a primeira metade sai de tela, a
  segunda metade idêntica já está no lugar certo, sem salto visível.
  Mesma técnica confirmada no HTML da referência (conteúdo duplicado no
  DOM).
- Pausa ao passar o mouse (`#diferenciais:hover #diferenciais-track {
  animation-play-state: paused; }`) — detalhe de usabilidade não
  confirmado na referência, mas adicionado por ser padrão comum em
  tickers e ter custo zero.
- Bônus de layout: a seção ficou **preta entre duas seções creme**
  (`#quem-somos` e `#pilares`), o que resolve sozinho o problema
  registrado antes (várias seções seguidas com o mesmo fundo creme sem
  alternância visual).
- Testado com Chromium via Playwright local (390px mobile + 1440px
  desktop): confirmado que o track tem 16 filhos (4 itens × 2 cópias ×
  2 elementos por item) e que a posição do texto muda entre dois
  screenshots tirados com 1.5s de intervalo (animação rodando de
  verdade). Sem erros de console.

---

## 8. Badges "VALORES SOMOS" com ícone recortado

**Fonte:** https://somoseducacao.com.br/quemsomos.php (grupo SOMOS
Educação/Cogna — maior grupo de educação básica do Brasil, fornecedor
de sistemas de ensino B2B pra escolas, não concorrente direto mas
referência de mercado educacional). Print enviado pelo usuário +
confirmado via `firecrawl_scrape`: é a seção real "VALORES SOMOS:" do
site, texto bate exatamente com o print (Autonomia e Apoio, Bem-Estar,
Inovação — mais 2 valores não capturados no crop: Excelência e
Liderança).

### Mecanismo exato

- **Card quadrado com borda fina colorida** (~1.5-2px), fundo branco,
  cantos levemente arredondados — **cada card tem sua própria cor de
  borda**: rosa/pink (`Autonomia e Apoio`), roxo (`Bem-Estar`), azul
  (`Inovação`), e pelo scrape mais 2 valores com suas próprias cores
  (amarelo pra `Excelência`, verde pra `Liderança`, inferido pelo
  padrão — não confirmado visualmente no crop).
- **Badge circular grande** centralizado no topo do card, **preenchido
  na mesma cor da borda do card** (sólido, não pastel) — formato
  **recortado tipo "pac-man"/engrenagem**: um quadrante do círculo tem
  um contorno menor concêntrico "mordendo" o círculo maior (visualmente
  como um círculo grande com uma marca de mordida no canto
  superior-direito, revelando o fundo branco do card por trás) — dá um
  efeito de "flor de 2 pétalas" ou broche.
- **Ícone branco de linha fina** centralizado dentro de um círculo
  branco menor no meio do badge (punho fechado = Autonomia, rosto com
  coração = Bem-Estar, mão com lâmpada = Inovação) — ícone sempre
  branco/outline, nunca colorido.
- **Título em negrito preto**, centralizado, abaixo do badge, dentro do
  card.
- Grid horizontal de cards do mesmo tamanho, gap generoso entre eles.
- Título de seção "VALORES SOMOS:" acima do grid, caixa alta, negrito,
  alinhado à esquerda, sem eyebrow tag.

### Conteúdo completo (confirmado via firecrawl, texto literal)

1. **Autonomia e Apoio** — "Somos um coletivo de fazedores que tomam
   iniciativa e se apoiam para chegar cada vez mais longe."
2. **Bem-Estar** — "Somos parte e peça de um ambiente seguro,
   respeitoso e transparente, onde cada um pode ser a sua melhor versão
   e exercer seu potencial máximo."
3. **Inovação** — "Somos obcecados pelo novo e por tudo aquilo que
   ainda não foi pensado. Adoramos romper fronteiras, testar novas
   ideias e nunca abatemos qualquer iniciativa na decolagem.
   Experimentamos!"
4. **Excelência** — "Somos apaixonados pelo que fazemos, buscamos altos
   patamares de atuação e reconhecemos o mérito de cada contribuição."
5. **Liderança** — "Somos líderes que inspiram, formamos equipes
   incríveis com enorme senso de pertencimento. Compartilhamos ideias,
   sabemos ouvir, aceitar opiniões, elogiar e criticar
   construtivamente." (os textos de descrição não aparecem no card, só
   o título — a descrição só existe no HTML/scrape, possivelmente um
   tooltip ou texto que só aparece em outro breakpoint/estado, não
   confirmado no print.)

### Implicação prática pro nosso build — pendente de decisão do usuário

- O pedido do usuário foi especificamente **trocar o estilo do ícone**
  ("esse estilo de ícone quero trocar pelo do site da soma educação").
  A dúvida é **onde** aplicar: a seção mais parecida em propósito no
  nosso site hoje é `#diferenciais`, mas ela virou **ticker/marquee**
  na sessão anterior (faixa preta, ícones pequenos inline, sem badge,
  sem card) — bem diferente do mecanismo aqui (grid estático de cards
  quadrados com borda colorida + badge grande recortado). Precisa
  confirmar: volta `#diferenciais` a ser grid estático (desfazendo o
  ticker) só pra caber esse estilo de ícone, ou aplica o ícone
  recortado em outro lugar/formato mantendo o ticker como está?
- Cor: referência usa **uma cor diferente por item** (rosa, roxo, azul,
  amarelo, verde — paleta multicolor "one brand color per value") — é
  bem diferente do padrão que já seguimos no site (accent único
  laranja `#E8821E` pra tudo). Precisa decidir: manter só laranja (ícone
  recortado mas monocromático) ou importar a ideia de "uma cor por
  valor" mesmo quebrando o padrão atual de accent único.

### Decisões tomadas na implementação

- **Desfeito o ticker** da sessão anterior — `#diferenciais` voltou a
  ser um **grid estático** (`#diferenciais-grid`, 1/2/4 colunas
  responsivas), já que o mecanismo de badge recortado + card não cabe
  numa faixa rolando.
- **"Uma cor por item" confirmada pelo usuário**, mas em vez de
  importar rosa/roxo/verde novos, **reaproveitamos cores que já
  existem no site**: laranja `#E8821E` (Formação Integral, o "principal"),
  azul `#0baef8` (Acompanhamento próximo — o antigo accent do site,
  reaproveitado como cor secundária), vermelho `#C21233` (Excelência
  com valores — mesmo vermelho do clone RED HOUSE em `#pilares`), e
  dourado `#A98F5C` (Ambiente acolhedor — mesmo dourado do RED HOUSE).
  Decisão de manter tudo dentro do vocabulário de cor que o site já
  usa, em vez de introduzir tons totalmente novos.
- **Badge recortado** implementado com 3 camadas absolutas: círculo
  colorido de fundo (`.diferenciais-badge-main`), círculo branco pequeno
  sobreposto no canto superior-direito simulando a "mordida"
  (`.diferenciais-badge-bite`), e círculo branco central com o ícone
  (na cor do badge, via `stroke="currentColor"` + `color` inline)
  por cima de tudo (`.diferenciais-badge-inner`) — 3 `<div>`
  posicionados via `position:absolute` dentro de um wrapper
  `position:relative` de 92px.
- Card branco com **borda na mesma cor do badge** (1.5px), cantos
  arredondados 18px, título + descrição centralizados abaixo do badge
  — mantivemos a descrição (a referência não mostra no card, só no
  HTML/scrape) porque já fazia parte do conteúdo construído antes e é
  mais informativo.
- Testado com Chromium via Playwright local (390px/700px/1440px): grid
  responsivo 1/2/4 colunas, badges renderizando com cor e recorte
  corretos nos 3 tamanhos, sem erros de console.

### Flip no hover (sessão seguinte)

Usuário mandou novo print da SOMOS mostrando o **card "Bem-Estar" em
estado de hover**: vira e revela um fundo sólido na cor do badge com
título branco + parágrafo de descrição branco, substituindo
completamente o conteúdo (badge some). Pediu pra replicar esse
comportamento.

- Implementado com **flip 3D em CSS puro** (`perspective` +
  `transform-style:preserve-3d` + `rotateY(180deg)` no hover),
  `backface-visibility:hidden` nas duas faces pra esconder o verso
  invertido durante a transição.
- Estrutura: `.diferenciais-flip` (wrapper com `perspective`, altura
  fixa 260px) → `.diferenciais-flip-inner` (roda 180°) → duas faces
  absolutas empilhadas: `.diferenciais-card` (frente: badge+título,
  como já existia) e `.diferenciais-card-back` (verso: fundo sólido na
  cor do item, título branco + descrição branca).
- A descrição (`d.texto`) que já existia no array `DIFERENCIAIS` só
  aparece agora **no verso**, não mais estática abaixo do título na
  frente — mudança de comportamento em relação à versão anterior desta
  sessão.
- Limitação conhecida e não resolvida: **hover não funciona em touch
  (mobile/tablet)** — mesma limitação que a referência provavelmente
  tem. Não foi pedido alternativa por toque (tap-to-flip), não
  implementado.
- Testado com Chromium via Playwright local (1440px): screenshot normal
  + screenshot com `.hover()` do Playwright no 2º card, confirmando
  visualmente que o flip ocorre e mostra o texto certo na cor certa.
  Sem erros de console.

### Scroll/marquee de volta (sessão seguinte)

Usuário pediu pra reaplicar o efeito de rolagem horizontal (igual à
seção 7 deste doc) **em cima** do grid de cards com flip — ou seja,
combinar as duas mecânicas: cards rolando em loop infinito horizontal
E cada card ainda vira no hover.

- `#diferenciais-grid` (grid estático) virou de volta `#diferenciais-track`
  (flex row, `width:max-content`), com os cards (`.diferenciais-flip`)
  ganhando `width:280px` fixo + `flex-shrink:0` (antes o tamanho vinha
  das colunas do grid, agora precisa ser explícito pra funcionar numa
  fileira). Conteúdo duplicado 2x via JS (mesma técnica da seção 7).
- **Bug real encontrado e corrigido**: a pausa no hover
  (`#diferenciais:hover #diferenciais-track { animation-play-state:
  paused; }`) não funcionava — `getComputedStyle().animationPlayState`
  continuava `"running"` mesmo com `:hover` confirmadamente batendo
  (`element.matches(':hover')` → `true`). Causa: a propriedade
  `animation` (shorthand) estava declarada no **`style` inline** do
  elemento (`style="animation:diferenciaisScroll 38s linear
  infinite;"`), e `style` inline sempre vence qualquer regra de
  `<style>` pra aquela propriedade, **mesmo seletor de ID** — o mesmo
  bug de especificidade já registrado antes neste documento (seção 3,
  "Bug encontrado e corrigido"). Fix: mover o `animation` do `style`
  inline pra uma classe `.diferenciais-track-anim` declarada no
  `<style>`, deixando só `width:max-content` inline. Com isso a regra
  de pausa (mesma origem/stylesheet, seletor de ID mais específico que
  a classe) passou a vencer corretamente.
- **Lição reforçada**: nunca declarar `animation`/propriedades que
  precisam ser sobrescritas condicionalmente (`:hover`, `.active` etc.)
  via `style` inline — sempre usar classe, mesmo que pareça mais
  simples inline. Vale tanto pra layout (bug original) quanto pra
  animação (este bug).
- Testado via Playwright: `page.mouse.move()` até o centro da seção
  (bypassa o "stability check" do `.hover()` do Playwright, que dá
  timeout em elementos se movendo) + leitura de
  `getComputedStyle(...).animationPlayState` antes/depois — confirmado
  `"paused"` corretamente após o fix. Screenshot mostra o card do meio
  ("Excelência com valores") virado e travado durante a pausa, com os
  outros cards parados ao redor. Sem erros de console nos 3
  breakpoints (390/700/1440px).

---

## 9. Carrossel "Campus Goiânia" com dots + anel de progresso

**Fonte:** https://redhouse.com.br/unidades/goiania.htm (mesma
referência RED HOUSE já usada nas seções 3 e 4 — clone exato lá, aqui o
usuário não especificou se é clone exato ou inspiração, **perguntar**).
3 prints enviados pelo usuário (carrossel completo, close nos dots, close
no anel de progresso) + confirmado via `firecrawl_scrape`: a página tem
uma seção "Campus Goiânia" com um carrossel de 5 imagens do campus +
texto descritivo ao lado, e o scrape capturou um `7s` solto no meio do
conteúdo — bate com a hipótese do usuário de um temporizador de ~7
segundos por slide.

### Mecanismo exato (dos prints + scrape)

- **Layout 2 colunas** (desktop): imagem grande à esquerda (cantos
  arredondados), painel de texto branco à direita **com o mesmo recorte
  em seta/bookmark** já usado no painel de `#pilares` (seção 3 deste
  doc) — ponta apontando pra esquerda (encaixando visualmente ao lado
  da imagem), cantos arredondados à direita. Mesmo mecanismo, reaproveitável
  do código que já existe (`svg path` custom em `#pilares`).
- **Badge vermelho pentagonal** no canto direito do painel, mesmo
  padrão do badge "Agende uma reunião" de `#pilares` (só a letra "u"
  aparece no crop, cortado — provavelmente "Agende **u**ma reunião" ou
  similar, não confirmado o texto completo).
- **Dots de navegação** (5 bolinhas) no canto inferior-esquerdo da
  imagem, sobrepostos — mesmo padrão de dots que já usamos em
  `#destaques` e no carrossel mobile de `#niveis` (bolinha ativa maior/
  preenchida, inativas menores).
- **Anel de progresso circular** (o "relógio"): um círculo pequeno,
  contorno fino, que **preenche progressivamente** (provavelmente
  girando no sentido horário, como um timer) ao longo da duração do
  slide atual — quando completa a volta inteira, avança pro próximo
  slide automaticamente. Substitui o padrão de setas
  anterior/próximo que usamos em `#destaques` (lá são botões de
  círculo escuro com chevron; aqui é só o indicador de tempo, sem
  botões de seta visíveis nos prints — não confirmado se existem botões
  de navegação manual além dos dots, ou se dots+anel são os únicos
  controles).
- Texto do scrape confirma o conteúdo real da seção "Campus Goiânia":
  descrição do terreno de ~12 mil m², playgrounds, quadra, pista de
  atletismo, "a unidade entrará em operação no ano letivo de 2027" —
  **texto específico da unidade de Goiânia da RED HOUSE** (concorrente
  direto no mesmo mercado/cidade do Uno Sales), não genérico.

### Implicação prática pro nosso build — pendente de decisão do usuário

- **Onde entra o conteúdo**: o usuário indicou que quer isso na seção
  `#novidades`, que hoje é só um placeholder "Em breve" **sem nenhum
  conteúdo real ainda**. A referência é sobre "Campus/infraestrutura",
  não sobre "novidades/notícias" — precisa alinhar: (a) o usuário tem
  fotos/texto reais de novidades do Uno Sales pra popular o carrossel
  agora, ou (b) usa texto placeholder (como fizemos com RED HOUSE em
  `#pilares`/`#identidade`) até ter conteúdo real, ou (c) o mecanismo
  (carrossel+dots+anel) é o que importa, aplicado a qualquer conteúdo
  que fizer sentido pra "Novidades" (ex: foto do campus + texto
  institucional, similar ao que a referência faz, em vez de notícias
  propriamente ditas).
- **Clone exato ou inspiração**: diferente das seções 3/4 (marcadas
  explicitamente "clone exato"), o usuário não especificou dessa vez —
  **perguntar** antes de decidir se replica cor vermelha/dourada da
  RED HOUSE ou adapta pro laranja/creme do Uno Sales (mesmo padrão de
  decisão já tomado em outras referências desta sessão).
- **Mecanismo do anel de progresso é novo** no nosso código — nenhuma
  seção existente tem esse padrão (as outras usam dots simples ou
  setas). Precisa implementar do zero: SVG `<circle>` com
  `stroke-dasharray`/`stroke-dashoffset` animado via CSS ou JS,
  sincronizado com a troca de slide (duração igual ao tempo de
  autoplay, ex. os "7s" identificados no scrape).

### Decisões tomadas na implementação

- **Cor: laranja** (`#E8821E`), confirmado pelo usuário — painel,
  badge e anel de progresso usam o accent do site, não o vermelho/
  dourado da RED HOUSE.
- **Conteúdo: placeholder**, confirmado pelo usuário — 4 slides
  reaproveitando fotos já hospedadas em `unosales.com.br/adm/uploads/`
  (mesmas da Galeria/Identidade) com títulos/textos genéricos sobre a
  estrutura do colégio ("Nossa Estrutura", "Ambientes de
  Aprendizagem", "Áreas de Convivência", "Fachada do Colégio") — **não
  é conteúdo de notícias real**, é só pra a seção `#novidades` deixar
  de ser um placeholder vazio "Em breve" enquanto não chega conteúdo
  de novidades de verdade. Trocar quando o usuário mandar notícias
  reais.
- **Painel reaproveita o SVG path exato de `#pilares`**
  (`M40,0 L386,0 Q400,0 400,14 L400,286 Q400,300 386,300 L40,300 L0,150 Z`,
  só ajustando os valores de altura pra 300 em vez de 200) — mesmo
  mecanismo de ponta-à-esquerda + cantos arredondados à direita.
  **Badge pentagonal "Fique por dentro" removido** a pedido do usuário
  logo depois da implementação — só ficou o painel + título + texto,
  sem o elemento de badge que existe em `#pilares`.
- **Anel de progresso**: `<circle>` com `stroke-dasharray="94.25"`
  (circunferência de raio 15) + `stroke-dashoffset` animado via
  `@keyframes novidadesRing` (7s linear) declarado em **classe/ID no
  `<style>`, não inline** (lição já aplicada corretamente desde o
  início dessa vez). Reinício sincronizado com troca de slide via JS:
  `ring.style.animation = 'none'` + leitura forçada de `offsetWidth`
  (força reflow) + reatribuição da animação — técnica padrão pra
  reiniciar uma CSS animation via JS.
- Troca de slide automática a cada 7s (`setInterval`) + manual via
  clique nos dots (`novidadesGo(i)`), ambos reiniciam o anel.
- Testado com Chromium via Playwright: `getComputedStyle(...).strokeDashoffset`
  lido em dois momentos (t0 e +2s) confirmando que o valor diminui de
  verdade (anel enchendo); clique no 2º dot testado, confirmando troca
  de imagem/título/texto e dot ativo. Sem erros de console em 390px e
  1440px. No mobile, o painel empilha abaixo da imagem (mesmo
  comportamento já aceito em `#pilares`/`#identidade` — a ponta do
  recorte fica bem perto da borda esquerda em telas estreitas, não é
  bug novo, é a mesma forma de sempre).

### Mecanismo trocado de novo — setas de navegação (sessão seguinte)

Usuário mandou print de um carrossel diferente, dessa vez do site real
do **Colégio Marista Goiânia** (https://colegiosmaristas.com.br/goiania,
não confundir com "Marista Brasil" da seção 5 nem RED HOUSE) — a mesma
página já tinha sido raspada via `firecrawl_scrape` bem no início desta
sessão (documentado então como parte da pesquisa do formulário
multi-step). O carrossel em questão é o de **"Formação Integral" /
"Ambiente Acolhedor" / "Tradição e Inovação"**, com controles
"Previous slide"/"Next slide" — mecanismo mais simples que o anel de
progresso do RED HOUSE: card branco arredondado (foto + texto) com
**setas circulares de navegação azul-marinho** flanqueando os lados,
sem dots, sem indicador de tempo.

- Usuário confirmou: **substitui** o mecanismo de `#novidades` (não é
  seção nova) — saiu o anel de progresso SVG + dots + painel recortado
  em seta (svg `path` custom), entrou card único `rounded-2xl` (foto +
  painel branco lado a lado, cantos arredondados em conjunto) + 2
  botões circulares `#0A0F2E` com seta posicionados **fora** do card
  (metade pra fora, `left:-22px`/`right:-22px`, centralizados
  verticalmente).
- Conteúdo mantido o mesmo (Nossa Estrutura / Ambientes de Aprendizagem
  / Áreas de Convivência / Fachada do Colégio) — só o mecanismo visual
  mudou, não o texto/imagens.
- Autoplay mantido (7s, `setInterval`) mesmo sem indicador visual de
  tempo — decisão própria pra manter consistência com o resto do site
  (outros carrosséis como `#destaques` também têm autoplay), já que a
  referência não deixa claro se tem autoplay ou não.
- CSS/JS órfão removido: `@keyframes novidadesRing`, `#novidades-ring`,
  `novidadesRestartRing()`, `novidadesRenderDots()` — tudo que só
  existia pro mecanismo antigo.
- Testado via Playwright (390px + 1440px): clique na seta "Próximo"
  confirmado trocando o título corretamente, sem erros de console, sem
  clipping das setas no mobile (ficam na costura entre foto e card).
