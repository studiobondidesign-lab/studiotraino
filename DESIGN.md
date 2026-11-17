---
name: StudioTraino
description: Ficha de treino de bolso para registrar séries, cargas e descanso na academia.
colors:
  laranja-carga: "#ff9500"
  laranja-carga-escuro: "#ff9f0a"
  laranja-texto: "#a04c00"
  laranja-texto-escuro: "#ffb340"
  laranja-suave: "rgba(255,149,0,.14)"
  laranja-suave-escuro: "rgba(255,159,10,.18)"
  tinta-do-laranja: "#1f1200"
  verde-feito: "#34c759"
  verde-feito-escuro: "#30d158"
  verde-feito-texto: "#1f7a35"
  verde-feito-preenchimento: "#248a3d"
  vermelho-descartar: "#ff3b30"
  vermelho-descartar-escuro: "#ff453a"
  vermelho-descartar-texto: "#d70015"
  vermelho-descartar-texto-escuro: "#ff6961"
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
  preenchimento-forte: "rgba(118,118,128,.2)"
  preenchimento-forte-escuro: "rgba(118,118,128,.36)"
  segmento-ativo-escuro: "#636366"
  pilula-timer: "rgba(30,30,32,.9)"
  pilula-timer-escuro: "rgba(58,58,60,.92)"
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
  instrucao:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, system-ui, Roboto, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.4
  secondary:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, system-ui, Roboto, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.35
  meta:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, system-ui, Roboto, sans-serif"
    fontSize: "14px"
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
  glifo-stepper:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, system-ui, Roboto, sans-serif"
    fontSize: "22px"
    fontWeight: 400
  numero-timer:
    fontFamily: "ui-rounded, SF Pro Rounded, -apple-system, system-ui, sans-serif"
    fontSize: "38px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "tnum"
  numero-estatistica:
    fontFamily: "ui-rounded, SF Pro Rounded, -apple-system, system-ui, sans-serif"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    fontFeature: "tnum"
  numero-data:
    fontFamily: "ui-rounded, SF Pro Rounded, -apple-system, system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "tnum"
  numero-resumo:
    fontFamily: "ui-rounded, SF Pro Rounded, -apple-system, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 700
    letterSpacing: "-0.02em"
    fontFeature: "tnum"
  numero-serie:
    fontFamily: "ui-rounded, SF Pro Rounded, -apple-system, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    fontFeature: "tnum"
  numero-campo:
    fontFamily: "ui-rounded, SF Pro Rounded, -apple-system, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    fontFeature: "tnum"
rounded:
  alca-timer: "2px"
  alca-folha: "3px"
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
  button-tinted:
    backgroundColor: "{colors.laranja-suave}"
    textColor: "{colors.laranja-texto}"
    rounded: "{rounded.botao}"
    height: "50px"
    padding: "0 20px"
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
    backgroundColor: "{colors.verde-feito-preenchimento}"
    textColor: "{colors.superficie-branca}"
  chip:
    backgroundColor: "{colors.preenchimento}"
    rounded: "{rounded.pilula}"
    padding: "5px 11px"
  chip-accent:
    backgroundColor: "{colors.laranja-suave}"
    textColor: "{colors.laranja-texto}"
    rounded: "{rounded.pilula}"
    padding: "5px 11px"
  target:
    backgroundColor: "{colors.laranja-suave}"
    textColor: "{colors.laranja-texto}"
    rounded: "{rounded.pilula}"
    height: "40px"
    padding: "0 14px"
  target-hint:
    backgroundColor: "{colors.preenchimento}"
    textColor: "{colors.texto}"
    rounded: "{rounded.pilula}"
    height: "40px"
    padding: "0 14px"
  settings-row:
    backgroundColor: "{colors.superficie-branca}"
    typography: "{typography.body}"
    height: "50px"
    padding: "6px 16px"
  segmented:
    backgroundColor: "{colors.preenchimento}"
    rounded: "{rounded.campo}"
    padding: "2px"
  segmented-on:
    backgroundColor: "{colors.superficie-branca}"
    rounded: "{rounded.foco}"
    height: "32px"
    padding: "0 10px"
  switch:
    backgroundColor: "{colors.preenchimento-forte}"
    rounded: "{rounded.pilula}"
    height: "31px"
    width: "51px"
  switch-on:
    backgroundColor: "{colors.verde-feito}"
  toast:
    backgroundColor: "{colors.pilula-timer}"
    textColor: "{colors.superficie-branca}"
    typography: "{typography.secondary}"
    rounded: "{rounded.card}"
    height: "48px"
    padding: "6px 6px 6px 16px"
  live-card:
    backgroundColor: "{colors.laranja-carga}"
    textColor: "{colors.tinta-do-laranja}"
    rounded: "{rounded.card}"
    padding: "14px 14px 14px 16px"
  live-card-draft:
    backgroundColor: "{colors.superficie-branca}"
    textColor: "{colors.texto}"
    rounded: "{rounded.card}"
    padding: "14px 14px 14px 16px"
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

A densidade é baixa no treino ativo e média nas listas. Cada série é uma linha de controles com 50px de altura. A tela de treino ativo mostra só o que importa agora: o exercício, a última vez que ele foi feito, a meta de hoje e as séries. O timer de descanso flutua por cima de tudo, sem nunca trocar de tela. Os ajustes ficam fora das abas, atrás da engrenagem no canto da barra de cima, numa lista agrupada no idioma do iOS.

O movimento é físico e curto: um toque responde na hora, com escala para 0,97, as folhas sobem com a curva de gaveta e o que entra sai pelo mesmo caminho. Errar é barato: o que dá para desfazer some na hora e deixa um aviso com "Desfazer"; só o que não tem volta pede para segurar. Tudo respeita a preferência de movimento reduzido, transparência reduzida, alto contraste e texto grande.

**Key Characteristics:**
- Idioma do iOS: títulos grandes que passam para a barra translúcida ao rolar, cartões agrupados e barra de abas translúcida.
- Um laranja só, para a ação principal, a carga e o progresso. O verde quer dizer "feito" e nada mais.
- Números arredondados com algarismos de largura fixa em tudo que é carga, repetição ou tempo.
- Alvos de toque de 50px no treino ativo, porque a mão está cansada.
- Tema claro e escuro completos. O escuro é preto puro, para a academia e para OLED.
- Desfazer em vez de perguntar: aviso com "Desfazer" para o reversível, segurar para confirmar para o irreversível.

## Colors

Neutros do sistema iOS com um único acento laranja quente e um verde reservado para "feito".

### Primary
- **Laranja Carga** (#ff9500; no escuro #ff9f0a): o botão principal (Iniciar, Salvar, Concluir), o cartão do treino em andamento, a barra de progresso, o membro em esforço nas ilustrações e o fim do descanso, quando a pílula do timer fica toda laranja. O texto sobre ele é a **Tinta do Laranja** (#1f1200), nunca branco.
- **Laranja Texto** (#a04c00; no escuro #ffb340): a versão do laranja com contraste de 4,5:1 ou mais para texto, inclusive sobre o laranja suave. Aba ativa, links, números dos exercícios, marcadores das instruções, mês no histórico, "Studio**Traino**".
- **Laranja Suave** (rgba(255,149,0,.14); no escuro rgba(255,159,10,.18)): o fundo tingido dos botões de apoio que ainda são "da marca" (Novo treino, Modelos, Iniciar de um treino que não é o próximo), do chip de destaque e do botão da meta de hoje. Sempre com Laranja Texto por cima.

### Secondary
- **Verde Feito** (#34c759; no escuro #30d158): a série concluída, o selo de exercício completo, o interruptor ligado, o selo do resumo final e o ponto de "Sincronizado". O **Verde Feito Texto** (#1f7a35) é usado quando o verde vira texto. No tema claro, o check marcado usa o preenchimento #248a3d com ícone branco, e no escuro usa #30d158 com ícone quase preto (#00210b), para o ícone ter contraste.

### Tertiary
- **Vermelho Descartar** (#ff3b30; no escuro #ff453a): só para destruir dados ou indicar "Offline". Aparece no preenchimento dos botões de segurar para confirmar e nos links de remover. O **Vermelho Texto** (#d70015; no escuro #ff6961) é usado para o rótulo.

### Neutral
- **Fundo Cinza iOS** (#f2f2f7) / **Fundo Preto** (#000000): o fundo da página, que fica atrás dos cartões.
- **Superfície Branca** (#ffffff) / **Superfície Grafite** (#1c1c1e): cartões, grupos, linhas de ajustes, folhas e o segmento escolhido no tema claro.
- **Preenchimento** (rgba(118,118,128,.12) / .24 no escuro): o fundo dos controles: steppers, botões secundários, chips, campos, controle segmentado, a lista de exercícios de um modelo e o quadro das ilustrações.
- **Preenchimento Forte** (rgba(118,118,128,.2) / .36 no escuro): o estado pressionado dos botões do stepper, o interruptor desligado e a alça das folhas.
- **Segmento Ativo** (#ffffff / #636366 no escuro): a pastilha do segmento escolhido no controle segmentado.
- **Texto Secundário** (#6c6c72 / #98989f): metadados, rótulos de seção e o "da última vez".
- **Pílula do Timer** (rgba(30,30,32,.9); no escuro rgba(58,58,60,.92), um pouco mais clara para se destacar do preto): o fundo escuro e translúcido do descanso e do aviso com Desfazer.

### Named Rules
**A Regra do Laranja Único.** O laranja marca a próxima ação ou a carga, e só uma coisa laranja grita por tela. Botões secundários são cinza.
**A Regra do Primário Único.** Cada tela tem no máximo um botão laranja sólido. Na lista de treinos ele vai só para o próximo treino sugerido; os outros "Iniciar" usam o Laranja Suave. Com um treino em andamento, o cartão laranja do treino é a coisa que grita.
**A Regra do Verde Merecido.** O verde só aparece depois que a pessoa fez alguma coisa. Nunca é usado como decoração ou para "sucesso" genérico.

## Typography

**Display Font:** fonte do sistema (SF Pro no iPhone, Roboto no Android)
**Body Font:** a mesma fonte do sistema
**Label/Mono Font:** SF Pro Rounded (ui-rounded) para todos os números

**Character:** A fonte do sistema deixa o app com cara de nativo. A versão arredondada nos números dá um tom mais amigável e de "placar" à carga e ao tempo, e os algarismos de largura fixa impedem que o timer fique pulando.

### Hierarchy
- **Display** (700, 34px, 1.08): título grande da tela (Treinos, Ajustes, nome do treino ativo). Some ao rolar e reaparece em 17px na barra.
- **Headline** (600, 20px, 1.2): nome do treino no cartão, título das folhas e do resumo final.
- **Body** (400, 17px, 1.35): texto corrido, campos, linhas de lista e linhas de ajustes. O nome do modelo usa 17px/600.
- **Instrução** (400, 16px, 1.4): os passos numerados de execução do exercício, um pouco maiores que o secundário para ler em pé.
- **Secondary** (400, 15px, 1.35): subtítulos, observações, valor à direita nas linhas de ajustes, texto do aviso e da meta de hoje.
- **Meta** (400, 14px, 1.35): metadados do cartão de treino, a linha "da última vez", nomes dos exercícios no cartão e subtítulos do histórico.
- **Label** (500, 13px, 0.04em, maiúsculas): rótulos de seção. O cabeçalho das séries e os rótulos dos campos usam 11px.
- **Glifo do stepper** (400, 22px): os sinais − e + do stepper, na fonte do sistema e em Texto Secundário (18px na tela estreita).
- **Números** (SF Pro Rounded, 600–700, tabular): 18px nos campos do editor e no número da série dentro do check, 20px no stepper, 24px no resumo final, 26px no dia do histórico, 30px nas estatísticas, 34px no relógio do treino e 38px no timer de descanso (30px na tela estreita).

### Named Rules
**A Regra do Número Redondo.** Todo número que a pessoa lê durante o treino (carga, repetições, tempo, volume, datas) usa a fonte arredondada com algarismos de largura fixa. Texto nunca usa essa fonte.

## Layout

Coluna única centralizada, com no máximo 560px, e margens laterais de 16px que respeitam a área segura do iPhone. A página tem um espaço de 170px embaixo para o conteúdo passar por baixo da barra de abas e do timer. O ritmo vertical é de 12px entre cartões, 22px antes de um rótulo de seção e 6px entre as linhas de série. No treino ativo, cada série é uma grade de três colunas: carga (1,25fr), repetições (1fr) e o check (50px), que mostra o número da série até ser marcado. Os resumos (estatísticas do histórico e números do resumo final) são grades de três colunas iguais com 8px de espaço.

Pontos de quebra:
- **Menos de 380px:** o texto de sincronização some e fica só a engrenagem com o ponto.
- **Menos de 370px:** os botões − e + do stepper passam de 44px para 38px.
- **Até 300px (iPhone com texto a 200%):** a tela muda de forma em vez de encolher. O cabeçalho das séries some; os steppers de carga e repetições se empilham, um em cima do outro, cada um com a unidade (kg, reps) escrita em 10px embaixo do número, e o check vira uma coluna de 40px na altura das duas linhas. A pílula do descanso fica compacta (só o tempo em 30px e os botões essenciais), as abas mostram só o ícone (52px de altura) e o aviso ocupa a largura toda com 12px de margem.

## Elevation & Depth

O app é plano em repouso. A profundidade vem das camadas: os cartões brancos ou grafite ficam sobre o fundo cinza ou preto, sem sombra. A sombra aparece só no que flutua sobre o conteúdo ou é uma peça física que se move: a pílula do timer, o aviso, as folhas, a bolinha do interruptor e a pastilha do controle segmentado. As barras de cima e de baixo usam material translúcido (desfoque de 20px com saturação de 180%) e uma linha de meio pixel; a pílula do timer e o aviso usam desfoque de 24px. A barra de cima só ganha o material quando há conteúdo rolando por baixo dela.

### Shadow Vocabulary
- **Flutuante** (`box-shadow: 0 12px 32px rgba(0,0,0,.28), inset 0 .5px 0 rgba(255,255,255,.14)`): a pílula do timer de descanso.
- **Aviso** (`box-shadow: 0 10px 28px rgba(0,0,0,.24)`): o aviso com Desfazer.
- **Folha** (`box-shadow: 0 -10px 40px rgba(0,0,0,.2)`): as folhas que sobem de baixo.
- **Botão do interruptor** (`box-shadow: 0 3px 8px rgba(0,0,0,.15), 0 1px 1px rgba(0,0,0,.16)`): a bolinha do interruptor.
- **Segmento** (`box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 0 0 .5px rgba(0,0,0,.04)`): a pastilha do segmento escolhido.

### Named Rules
**A Regra do Plano em Repouso.** Cartão não tem sombra. Sombra quer dizer "isto está flutuando por cima e vai embora" ou "isto é uma peça que desliza".

## Shapes

Cantos arredondados contínuos e um pouco mais suaves quanto maior a peça: 8px no segmento escolhido e no anel de foco, 10px nos campos e no controle segmentado, 12px nos controles e nos blocos de resumo, 14px nos botões e nas estatísticas, 16px nos cartões e no aviso, 22px na pílula do timer, 24px no topo das folhas e totalmente redondo nos chips, botões pequenos, meta de hoje, interruptor e barra de progresso. A barra de progresso usa 99px, que numa barra de 6px dá o mesmo resultado que a pílula. As alças de arrastar são pílulas pequenas com o raio na metade da altura: 2px na alça de 4px do timer e 3px na alça de 5px das folhas. As linhas que separam itens têm meio pixel e começam alinhadas ao texto, não à borda. As ilustrações são figuras de palito com traço de 5,5px e pontas arredondadas, e o membro que trabalha fica em laranja.

## Components

### Buttons
- **Shape:** cantos suaves (14px), altura mínima de 50px e texto em 17px/600.
- **Primary:** fundo Laranja Carga com Tinta do Laranja, para Iniciar, Salvar e Concluir. Um por tela (A Regra do Primário Único).
- **Tinted:** fundo Laranja Suave com Laranja Texto, para ações da marca que não são a principal: Novo treino, Modelos e o Iniciar dos treinos que não são o próximo.
- **Secondary:** fundo Preenchimento com texto padrão, para Editar e Cancelar.
- **Plain:** sem fundo, com Laranja Texto, para ações terciárias como "Esqueci a senha".
- **Small:** pílula de 36px de altura, para Fechar nas folhas.
- **Press:** escala 0,97 em 160ms ao tocar. Desativado fica com 40% de opacidade.
- **Segurar para confirmar:** só para o que não tem volta (excluir um treino, apagar uma sessão do histórico, descartar o treino em andamento, trocar um treino por um modelo, sair da conta). O vermelho vai preenchendo da esquerda para a direita em 900ms lineares enquanto o dedo segura, e volta rápido (200ms) se soltar antes.

### Chips
- **Style:** pílula com fundo Preenchimento e texto de 13px/500. O chip de destaque usa Laranja Suave com Laranja Texto: "Próximo" no cartão do treino sugerido e "Comece por aqui" ao lado do nome do modelo recomendado. Dentro da linha de metadados, o chip fica compacto (1px 8px, 12px/600).
- **State:** o filtro selecionado inverte as cores (fundo da cor do texto e texto da cor do fundo).

### Cards / Containers
- **Corner Style:** 16px.
- **Background:** Superfície Branca ou Grafite.
- **Shadow Strategy:** nenhuma (A Regra do Plano em Repouso).
- **Internal Padding:** 16px. Grupos de linhas usam 0 16px com divisória de meio pixel.
- **Treino em andamento:** o único cartão laranja, com o botão invertido (Tinta do Laranja com texto laranja).
- **Edição não salva:** a mesma faixa no topo da lista de treinos, mas em Superfície com o texto "Edição não salva" em Texto Secundário e o botão "Continuar editando" em Laranja Suave. Lembra sem gritar.

### Inputs / Fields
- **Style:** sem borda, com fundo Preenchimento e cantos de 10–12px. Os números ficam centralizados na fonte arredondada (18px nos campos do editor, 20px no stepper).
- **Focus:** anel interno de 2px em Laranja Carga.
- **Stepper:** botões de − e + com 44px nas pontas e o valor no meio, com 50px de altura. Segurar o botão repete o passo.
- **Controle segmentado:** trilho Preenchimento com 2px de folga e cantos de 10px; cada segmento tem 32px de altura e 14px/500. O escolhido vira uma pastilha de Segmento Ativo com 8px de canto, 600 e a sombra de Segmento. Usado para tema e passo de carga.
- **Interruptor:** 51 × 31px, desligado em Preenchimento Forte, ligado em Verde Feito, com a bolinha branca de 27px deslizando 20px em 260ms.

### Navigation
- **Barra de abas:** fixa embaixo e translúcida, com 56px de altura, ícone de 26px e rótulo de 11px. A aba ativa fica em Laranja Texto. A aba "Agora" só aparece com um treino em andamento e mostra um ponto laranja. Nos ajustes nenhuma aba fica marcada.
- **Barra de cima:** marca à esquerda e, à direita, o botão de ajustes: uma engrenagem de 24px com o ponto de sincronização de 7px como selo no canto (verde sincronizado, laranja conectando, vermelho offline, cinza no aparelho), seguida do texto do estado. Sem conta, vira o link "Entrar" em Laranja Texto. Ao rolar, a marca some e o título da tela aparece no centro.

### Ajustes
Uma tela com título grande e grupos de linhas agrupados no idioma do iOS, separados por rótulos de seção (Conta, Descanso, Passo de carga, Aparência, Dados). Cada linha tem no mínimo 50px, padding de 6px 16px e 17px; o rótulo pode levar uma explicação em 13px embaixo. À direita vem o valor em 15px e Texto Secundário com uma seta de 14px, um controle segmentado ou um interruptor. Linhas de ação (Entrar, Exportar) usam Laranja Texto. Tocar uma linha acende o Preenchimento em 120ms. Observações vão embaixo do grupo em 13px. Sair da conta usa segurar para confirmar.

### Modelos de treino
Uma folha com a lista de modelos num grupo de linhas: cada linha tem no mínimo 60px, o nome em 17px/600 e "N treinos · dias · nível" em 13px embaixo. O modelo recomendado leva o chip "Comece por aqui" ao lado do nome. Ao abrir um modelo, os exercícios aparecem num bloco Preenchimento de 12px de canto, uma linha por exercício em 15px com séries e repetições à direita em Texto Secundário tabular. "Adicionar aos meus treinos" é o primário; trocar um treino existente pelo modelo usa segurar para confirmar.

### Série (Signature Component)
Uma linha com o stepper de carga, o stepper de repetições e o check, que mostra o número da série (18px) até ser marcado. Os botões − e + têm 44px de largura (38px em telas com menos de 370px). Quando a carga passa da última vez, aparece uma pequena seta laranja acima do número. Mudar a carga, pelo stepper ou digitando, leva o mesmo valor para as séries seguintes que ainda não foram marcadas. Ao marcar o check, ele fica verde com o ícone, os steppers ganham um verde suave e o descanso começa sozinho. Quando todas as séries do exercício estão feitas, o cartão ganha um contorno verde de 2px e um selo que aparece com escala.

### Meta de Hoje (Signature Component)
Abaixo do nome do exercício, a linha "Última vez, há 3 dias: 4 × 62,5 kg × 8" (14px) agrupa séries iguais. Embaixo dela vem a meta de hoje, pela regra de progressão dupla, numa pílula de 40px com ícone de 16px e 15px/600. Se todas as séries da carga mais alta bateram o topo da faixa de repetições, aparece o botão em Laranja Suave "Subir para 65 kg" com uma seta para cima; se não, o botão "Buscar 10 reps com 62,5 kg" com um check. Tocar aplica a meta às séries não marcadas, e o botão vira a pílula cinza "Meta de hoje: …" (Preenchimento, 500). O passo é 2 kg em halteres e 2,5 kg no resto, ajustável nos Ajustes.

### Timer de Descanso (Signature Component)
Uma pílula escura que flutua acima da barra de abas, com o tempo em 38px, o nome do próximo exercício e os botões de −15 e +15 segundos. Uma barra laranja de 3px corre na base. Ao zerar, a pílula inteira vira laranja, vibra e toca um bipe. Arrastar para baixo dispensa.

### Aviso com Desfazer
Uma pílula escura (Pílula do Timer) de 48px, 16px de canto e 15px, que sobe 16px do fundo em 320ms acima da barra de abas (ou acima do timer, quando ele está aberto). O texto diz o que aconteceu ("Exercício removido", "Alterações descartadas") e o botão "Desfazer" à direita tem 36px, 11px de canto, texto 600 em Laranja Carga e fundo branco a 10%. Sem ação, é só a mensagem (por exemplo, "salvo").

### Resumo Final
Dentro da folha de concluir: um selo redondo verde de 36px com check, o título em 20px, os números do treino em blocos Preenchimento de 12px de canto (24px arredondado com rótulo de 12px), uma nota em 15px e a lista do que mudou em relação à última vez. "Salvar no histórico" é o primário, "Continuar treinando" é o secundário e "Segure para descartar" fecha a pilha.

## Do's and Don'ts

### Do:
- **Do** manter os alvos de toque do treino ativo com 50px de altura ou mais.
- **Do** usar a fonte arredondada com algarismos de largura fixa em todo número de treino.
- **Do** usar Tinta do Laranja (#1f1200) sobre o laranja, nunca branco.
- **Do** fazer o que entra sair pelo mesmo caminho, com a curva de gaveta (cubic-bezier(.32,.72,0,1)) nas folhas e no timer.
- **Do** executar na hora as ações destrutivas que dá para desfazer (remover exercício, descartar edição) e mostrar o aviso com "Desfazer".
- **Do** proteger com segurar para confirmar só o que não tem volta.
- **Do** levar a carga digitada ou ajustada para as séries seguintes que ainda não foram marcadas.
- **Do** desenhar cada tela nos temas claro e escuro, e testar com movimento reduzido e com texto a 200% (até 300px de largura).

### Don't:
- **Don't** colocar sombra em cartões que estão parados.
- **Don't** usar o verde para nada que a pessoa ainda não fez.
- **Don't** ter dois elementos laranja chamando atenção na mesma tela, nem dois botões laranja sólidos.
- **Don't** abrir uma tela nova no meio do treino para algo que cabe numa folha.
- **Don't** usar caixa de diálogo de confirmar ou cancelar para apagar coisas. Use Desfazer para o reversível e segurar para confirmar para o irreversível.
- **Don't** colocar um rótulo pequeno acima do título (eyebrow). O título se sustenta sozinho.
