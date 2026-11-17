# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Dan**, o dono do app. Treina musculação há tempo suficiente para montar os próprios treinos. Treina na Ironberg Taguatinga (Brasília), uma academia grande com vários aparelhos para cada grupo muscular.
- **Lívia**, namorada do Dan. Não monta o próprio treino: o Dan monta para ela. Ela abre o app para seguir um treino pronto e registrar o que fez.
- **Amigos convidados** que quiserem usar, cada um com a própria conta. Não é um produto público.

O momento de uso é a academia: celular na mão entre as séries, com pressa, cansado e às vezes sem sinal.

## Product Purpose

Registrar cada série (carga e repetições) durante o treino e, no treino seguinte, mostrar as últimas cargas usadas em cada exercício, para que a evolução fique medida e a pessoa saiba quanto colocar hoje. O app dá certo quando registrar uma série custa um toque e a carga de hoje já aparece preenchida com a da última vez.

## Positioning

Um app pessoal, feito para duas pessoas e alguns amigos, em vez de um app de academia genérico com feed, planos e assinatura. Por isso ele pode ser opinativo: substituições só do mesmo trecho do músculo, ilustrações próprias para cada exercício e um treino que outra pessoa monta para você.

## Operating Context

- Usado em pé, entre as séries, com uma mão, em intervalos de 60 a 120 segundos.
- A academia pode ter sinal ruim: o app precisa funcionar offline e sincronizar depois.
- O Dan monta os treinos dele e da Lívia. Hoje cada conta tem os próprios treinos, então ele monta o da Lívia entrando na conta dela ou no celular dela.
- Instalado na tela de início do iPhone como app (PWA).

## Capabilities and Constraints

- Treinos com exercícios, séries, repetições-alvo, carga, descanso e observações.
- Modo de treino ativo com steppers de carga e repetições, check por série, timer de descanso flutuante com bipe e vibração, e a tela mantida acesa.
- Cada série já vem preenchida com o que foi feito da última vez, e mostra "da última vez".
- Ao concluir, a pessoa pode atualizar as cargas do treino salvo com as de hoje.
- Histórico com estatísticas.
- Biblioteca de cerca de 97 exercícios, com ilustração animada, dicas de execução e substituições.
- **Regra de substituição (do Dan):** só oferecer exercícios que trabalham a mesma porção do músculo-alvo. Supino reto é peitoral médio, então nunca oferecer inclinado como troca.
- Login por e-mail e senha (Supabase). Dados privados por pessoa, protegidos por row level security. Sem login, funciona só no aparelho.
- Hospedado como site estático no Cloudflare Pages (studiotraino.pages.dev), sem etapa de build.
- Interface toda em português do Brasil.
- **Progressão (pronta):** dupla progressão. Se todas as séries chegaram ao topo da faixa de repetições, o app sugere "Subir para X kg"; se não, "Buscar N reps com X kg". Os dois são botões que aplicam a meta nas séries ainda não feitas. O passo de carga vem dos Ajustes (halteres e barra/máquina).
- **Em aberto:** um jeito de o Dan montar o treino da Lívia sem precisar entrar na conta dela.

## Brand Commitments

- Nome: **StudioTraino**, escrito como "Studio**Traino**" na marca.
- Ícone escolhido pelo Dan: anel de progresso laranja com uma barra, sobre fundo preto (`icons/icon.svg`).
- O Dan pediu que a interface siga as diretrizes de design da Apple e a filosofia de Emil Kowalski (detalhes, movimento e acabamento).

## Evidence on Hand

- Não há usuários além do Dan e da Lívia, nem depoimentos ou números de uso. Não inventar.
- A biblioteca de exercícios é genérica, não é o inventário real da Ironberg.

## Product Principles

1. **Um toque por série.** Registrar o que foi feito nunca pode custar mais que um toque quando a pessoa repetiu a carga da última vez.
2. **A última vez sempre à vista.** A carga e as repetições anteriores aparecem exatamente onde a decisão de hoje é tomada.
3. **Funciona sem sinal.** Nada no treino depende da internet. A sincronização acontece depois, sem a pessoa perceber.
4. **Feito para quem segue um treino pronto.** A Lívia não monta treino; abrir o app e começar precisa ser óbvio sem explicação.
5. **Opinativo no que importa.** Substituições respeitam a porção do músculo, mesmo que isso mostre menos opções.

## Accessibility & Inclusion

Uso com uma mão, suor e cansaço: alvos de toque grandes (50px no treino ativo) e números legíveis de relance. Respeitar movimento reduzido, transparência reduzida e alto contraste, nos temas claro e escuro.
