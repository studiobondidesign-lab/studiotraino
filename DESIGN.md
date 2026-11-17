---
name: StudioTraino
description: Ficha de treino de bolso para registrar séries, cargas e descanso na academia.
colors:
  laranja-carga: "#ff9500"
  laranja-carga-escuro: "#ff9f0a"
  laranja-texto: "#c25e00"
  laranja-texto-escuro: "#ffb340"
  tinta-do-laranja: "#1f1200"
  verde-feito: "#34c759"
  verde-feito-escuro: "#30d158"
  verde-feito-texto: "#248a3d"
  vermelho-descartar: "#ff3b30"
  vermelho-descartar-escuro: "#ff453a"
  vermelho-descartar-texto: "#d70015"
  fundo-cinza-ios: "#f2f2f7"
  fundo-preto: "#000000"
  superficie-branca: "#ffffff"
  superficie-grafite: "#1c1c1e"
  texto: "#000000"
  texto-escuro: "#ffffff"
  texto-secundario: "#6c6c72"
  texto-secundario-escuro: "#98989f"
  preenchimento: "rgba(118,118,128,.12)"
  preenchimento-escuro: "rgba(118,118,128,.24)"
  pilula-timer: "rgba(30,30,32,.9)"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, system-ui, Roboto, sans-serif"
    fontSize: "34px"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, system-ui, Roboto, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, system-ui, Roboto, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  secondary:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, system-ui, Roboto, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.35
  caption:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, system-ui, Roboto, sans-serif"
    fontSize: "12px"
    fontWeight: 400
  tab-label:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, system-ui, Roboto, sans-serif"
    fontSize: "11px"
    fontWeight: 500
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, system-ui, Roboto, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    letterSpacing: "0.04em"
  numero-timer:
    fontFamily: "ui-rounded, SF Pro Rounded, -apple-system, system-ui, sans-serif"
    fontSize: "38px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "tnum"
  numero-serie:
    fontFamily: "ui-rounded, SF Pro Rounded, -apple-system, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    fontFeature: "tnum"
rounded:
  marca: "6px"
  foco: "8px"
  campo: "10px"
  controle: "12px"
  botao: "14px"
  card: "16px"
  ilustracao: "18px"
  pilula-timer: "22px"
  sheet: "24px"
  pilula: "999px"
spacing:
  xs: "6px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "22px"
components:
  button-primary:
    backgroundColor: "{colors.laranja-carga}"
    textColor: "{colors.tinta-do-laranja}"
    rounded: "{rounded.botao}"
    height: "50px"
    padding: "0 20px"
  button-secondary:
    backgroundColor: "{colors.preenchimento}"
    textColor: "{colors.texto}"
    rounded: "{rounded.botao}"
    height: "50px"
    padding: "0 20px"
  button-plain:
    textColor: "{colors.laranja-texto}"
    rounded: "{rounded.botao}"
    height: "50px"
  button-small:
    backgroundColor: "{colors.preenchimento}"
    rounded: "{rounded.pilula}"
    height: "36px"
    padding: "0 14px"
  card:
    backgroundColor: "{colors.superficie-branca}"
    rounded: "{rounded.card}"
    padding: "16px"
  stepper:
    backgroundColor: "{colors.preenchimento}"
    typography: "{typography.numero-serie}"
    rounded: "{rounded.controle}"
    height: "50px"
  set-check:
    backgroundColor: "{colors.preenchimento}"
    rounded: "{rounded.controle}"
    height: "50px"
    width: "50px"
  set-check-done:
    backgroundColor: "{colors.verde-feito}"
    textColor: "{colors.superficie-branca}"
  chip:
    backgroundColor: "{colors.preenchimento}"
    rounded: "{rounded.pilula}"
    padding: "5px 11px"
  rest-timer:
    backgroundColor: "{colors.pilula-timer}"
    textColor: "{colors.superficie-branca}"
    typography: "{typography.numero-timer}"
    rounded: "{rounded.pilula-timer}"
---

# Design System: StudioTraino

## Overview

**Creative North Star: "Ferramenta de Bolso"**

O StudioTraino é um instrumento, não uma vitrine. Ele se comporta como um app que já veio no iPhone: preciso, sóbrio e previsível, com títulos grandes, cartões agrupados, materiais translúcidos e folhas que sobem de baixo. A pessoa não precisa aprender nada novo. Tudo é cinza do sistema, e o laranja aparece só onde importa: a próxima ação, a carga e o progresso. Os números são o centro da tela, grandes, arredondados e sem pular.

A precisão vem do uso real. A ferramenta é usada em pé entre as séries, com uma mão, cansado e às vezes com a mão suada, então os controles do treino têm 50px de altura e cada leitura precisa funcionar de relance. Uma boa ferramenta não chama atenção para si mesma: ela some quando não está sendo usada e responde na hora quando é tocada.

A densidade é baixa no treino ativo e média nas listas. Cada série é uma linha de controles com 50px de altura. A tela de treino ativo mostra só o que importa agora: o exercício, a última vez que ele foi feito e as séries. O timer de descanso flutua por cima de tudo, sem nunca trocar de tela.

O movimento é físico e curto: um toque responde na hora, com escala para 0,97, as folhas sobem com a curva de gaveta e o que entra sai pelo mesmo caminho. Tudo respeita a preferência de movimento reduzido, transparência reduzida e alto contraste.

**Key Characteristics:**
- Idioma do iOS: títulos grandes que passam para a barra translúcida ao rolar, cartões agrupados e barra de abas translúcida.
- Um laranja só, para a ação principal, a carga e o progresso. O verde quer dizer "feito" e nada mais.
- Números arredondados com algarismos de largura fixa em tudo que é carga, repetição ou tempo.
- Alvos de toque de 50px no treino ativo, porque a mão está cansada.
- Tema claro e escuro completos. O escuro é preto puro, para a academia e para OLED.

## Colors

Neutros do sistema iOS com um único acento laranja quente e um verde reservado para "feito".

### Primary
- **Laranja Carga** (#ff9500; no escuro #ff9f0a): o botão principal (Iniciar, Salvar), o cartão do treino em andamento, a barra de progresso, o membro em esforço nas ilustrações e o fim do descanso, quando a pílula do timer fica toda laranja. O texto sobre ele é a **Tinta do Laranja** (#1f1200), nunca branco.
- **Laranja Texto** (#c25e00; no escuro #ffb340): a versão do laranja com contraste para texto. Aba ativa, links, números dos exercícios, "Studio**Traino**".

### Secondary
- **Verde Feito** (#34c759; no escuro #30d158): a série concluída, o selo de exercício completo, o interruptor ligado e o ponto de "Sincronizado". O **Verde Feito Texto** (#248a3d) é usado quando o verde vira texto.

### Tertiary
- **Vermelho Descartar** (#ff3b30; no escuro #ff453a): só para destruir dados. Aparece no preenchimento dos botões de segurar para confirmar e nos links de remover. O **Vermelho Texto** (#d70015) é usado para o rótulo.

### Neutral
- **Fundo Cinza iOS** (#f2f2f7) / **Fundo Preto** (#000000): o fundo da página, que fica atrás dos cartões.
- **Superfície Branca** (#ffffff) / **Superfície Grafite** (#1c1c1e): cartões, grupos e folhas.
- **Preenchimento** (rgba(118,118,128,.12) / .24 no escuro): o fundo dos controles: steppers, botões secundários, chips, campos e o quadro das ilustrações.
- **Texto Secundário** (#6c6c72 / #98989f): metadados, rótulos de seção e o "da última vez".
- **Pílula do Timer** (rgba(30,30,32,.9)): o fundo escuro e translúcido do descanso, igual nos dois temas.

### Named Rules
**A Regra do Laranja Único.** O laranja marca a próxima ação ou a carga, e só uma coisa laranja grita por tela. Botões secundários são cinza.
**A Regra do Verde Merecido.** O verde só aparece depois que a pessoa fez alguma coisa. Nunca é usado como decoração ou para "sucesso" genérico.

## Typography

**Display Font:** fonte do sistema (SF Pro no iPhone, Roboto no Android)
**Body Font:** a mesma fonte do sistema
**Label/Mono Font:** SF Pro Rounded (ui-rounded) para todos os números

**Character:** A fonte do sistema deixa o app com cara de nativo. A versão arredondada nos números dá um tom mais amigável e de "placar" à carga e ao tempo, e os algarismos de largura fixa impedem que o timer fique pulando.

### Hierarchy
- **Display** (700, 34px, 1.08): título grande da tela (Treinos, nome do treino ativo). Some ao rolar e reaparece em 17px na barra.
- **Headline** (600, 20px, 1.2): nome do treino no cartão e título das folhas.
- **Body** (400, 17px, 1.35): texto corrido, campos e linhas de lista.
- **Secondary** (400, 14–15px): metadados do treino, observações, "da última vez".
- **Label** (500, 13px, 0.04em, maiúsculas): rótulos de seção e cabeçalho das séries (11px).
- **Números** (SF Pro Rounded, 600–700, tabular): 20px no stepper, 34px no relógio do treino, 38px no timer de descanso, 24–30px nos resumos.

### Named Rules
**A Regra do Número Redondo.** Todo número que a pessoa lê durante o treino (carga, repetições, tempo, volume) usa a fonte arredondada com algarismos de largura fixa. Texto nunca usa essa fonte.

## Layout

Coluna única centralizada, com no máximo 560px, e margens laterais de 16px que respeitam a área segura do iPhone. A página tem um espaço de 170px embaixo para o conteúdo passar por baixo da barra de abas e do timer. O ritmo vertical é de 12px entre cartões, 22px antes de um rótulo de seção e 6px entre as linhas de série. No treino ativo, cada série é uma grade de quatro colunas: número (20px), carga (1,3fr), repetições (1fr) e o check (50px). Em telas com menos de 380px, o texto de sincronização some e fica só o ponto.

## Elevation & Depth

O app é plano em repouso. A profundidade vem das camadas: os cartões brancos ou grafite ficam sobre o fundo cinza ou preto, sem sombra. A sombra aparece só no que flutua sobre o conteúdo: a pílula do timer, as folhas e o botão do interruptor. As barras de cima e de baixo usam material translúcido (desfoque de 20px com saturação de 180%) e uma linha de meio pixel. A barra de cima só ganha o material quando há conteúdo rolando por baixo dela.

### Shadow Vocabulary
- **Flutuante** (`box-shadow: 0 12px 32px rgba(0,0,0,.28), inset 0 .5px 0 rgba(255,255,255,.14)`): a pílula do timer de descanso.
- **Folha** (`box-shadow: 0 -10px 40px rgba(0,0,0,.2)`): as folhas que sobem de baixo.
- **Botão do interruptor** (`box-shadow: 0 3px 8px rgba(0,0,0,.15), 0 1px 1px rgba(0,0,0,.16)`): a bolinha do interruptor.

### Named Rules
**A Regra do Plano em Repouso.** Cartão não tem sombra. Sombra quer dizer "isto está flutuando por cima e vai embora".

## Shapes

Cantos arredondados contínuos e um pouco mais suaves quanto maior a peça: 10px nos campos, 12px nos controles, 14px nos botões, 16px nos cartões, 22px na pílula do timer, 24px no topo das folhas e totalmente redondo nos chips e botões pequenos. As linhas que separam itens têm meio pixel e começam alinhadas ao texto, não à borda. As ilustrações são figuras de palito com traço de 5,5px e pontas arredondadas, e o membro que trabalha fica em laranja.

## Components

### Buttons
- **Shape:** cantos suaves (14px), altura mínima de 50px e texto em 17px/600.
- **Primary:** fundo Laranja Carga com Tinta do Laranja, para Iniciar, Salvar e Concluir.
- **Secondary:** fundo Preenchimento com texto padrão, para Editar e Cancelar.
- **Plain:** sem fundo, com Laranja Texto, para ações terciárias como "Esqueci a senha".
- **Small:** pílula de 36px de altura, para Fechar nas folhas.
- **Press:** escala 0,97 em 160ms ao tocar. Desativado fica com 40% de opacidade.
- **Segurar para confirmar:** para descartar ou sair, o vermelho vai preenchendo da esquerda para a direita em 900ms lineares enquanto o dedo segura, e volta rápido (200ms) se soltar antes.

### Chips
- **Style:** pílula com fundo Preenchimento e texto de 13px/500. O chip de destaque usa laranja suave.
- **State:** o filtro selecionado inverte as cores (fundo da cor do texto e texto da cor do fundo).

### Cards / Containers
- **Corner Style:** 16px.
- **Background:** Superfície Branca ou Grafite.
- **Shadow Strategy:** nenhuma (A Regra do Plano em Repouso).
- **Internal Padding:** 16px. Grupos de linhas usam 0 16px com divisória de meio pixel.
- **Treino em andamento:** o único cartão laranja, com o botão invertido (Tinta do Laranja com texto laranja).

### Inputs / Fields
- **Style:** sem borda, com fundo Preenchimento e cantos de 10–12px. Os números ficam centralizados na fonte arredondada.
- **Focus:** anel interno de 2px em Laranja Carga.
- **Stepper:** botões de − e + com 32px nas pontas e o valor no meio, com 50px de altura. Segurar o botão repete o passo.

### Navigation
- **Barra de abas:** fixa embaixo e translúcida, com 56px de altura, ícone de 26px e rótulo de 11px. A aba ativa fica em Laranja Texto. A aba "Agora" só aparece com um treino em andamento e mostra um ponto laranja.
- **Barra de cima:** marca à esquerda e indicador de sincronização (que também é o botão de conta) à direita. Ao rolar, a marca some e o título da tela aparece no centro.

### Série (Signature Component)
Uma linha com o número da série, o stepper de carga, o stepper de repetições e o check. Ao marcar o check, ele fica verde com o ícone branco, os steppers ganham um verde suave e o descanso começa sozinho. Quando todas as séries do exercício estão feitas, o cartão ganha um contorno verde de 2px e um selo que aparece com escala.

### Timer de Descanso (Signature Component)
Uma pílula escura que flutua acima da barra de abas, com o tempo em 38px, o nome do próximo exercício e os botões de −15 e +15 segundos. Uma barra laranja de 3px corre na base. Ao zerar, a pílula inteira vira laranja, vibra e toca um bipe. Arrastar para baixo dispensa.

## Do's and Don'ts

### Do:
- **Do** manter os alvos de toque do treino ativo com 50px de altura ou mais.
- **Do** usar a fonte arredondada com algarismos de largura fixa em todo número de treino.
- **Do** usar Tinta do Laranja (#1f1200) sobre o laranja, nunca branco.
- **Do** fazer o que entra sair pelo mesmo caminho, com a curva de gaveta (cubic-bezier(.32,.72,0,1)) nas folhas e no timer.
- **Do** proteger toda ação destrutiva com o botão de segurar para confirmar.
- **Do** desenhar cada tela nos temas claro e escuro, e testar com movimento reduzido.

### Don't:
- **Don't** colocar sombra em cartões que estão parados.
- **Don't** usar o verde para nada que a pessoa ainda não fez.
- **Don't** ter dois elementos laranja chamando atenção na mesma tela.
- **Don't** abrir uma tela nova no meio do treino para algo que cabe numa folha.
- **Don't** usar caixa de diálogo de confirmar ou cancelar para apagar coisas. Use segurar para confirmar.
