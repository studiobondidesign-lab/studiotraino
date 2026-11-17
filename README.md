# StudioTraino

App de treino para usar na academia: monte os treinos, registre séries, cargas e repetições, use o timer de descanso e veja o histórico. Funciona offline e pode ser instalado na tela de início do celular.

É um site estático, sem etapa de build. O login e a sincronização usam o Supabase.

## Publicar no Cloudflare Pages

1. No Cloudflare, vá em **Workers & Pages > Create > Pages > Connect to Git** e escolha este repositório.
2. Preencha assim:
   - **Framework preset:** None
   - **Build command:** deixe vazio
   - **Build output directory:** `/`
3. Clique em **Save and Deploy**. Depois disso, cada push na `main` publica sozinho.

## Configurar o Supabase (login e sincronização)

1. Crie um projeto em [supabase.com](https://supabase.com).
2. Abra **SQL Editor**, cole o conteúdo de [`supabase/schema.sql`](supabase/schema.sql) e clique em **Run**.
3. Em **Authentication > URL Configuration**, coloque o endereço do site do Cloudflare (por exemplo `https://studiotraino.pages.dev`) em **Site URL** e em **Redirect URLs**.
4. Se não quiser confirmar o e-mail ao criar a conta, desligue **Confirm email** em **Authentication > Sign In / Providers > Email**.
5. Em **Project Settings > API**, copie a **Project URL** e a chave pública (**anon** ou **publishable**) para o [`config.js`](config.js).

A chave pública pode ficar no código. Quem protege os dados é a regra de acesso do `schema.sql`, que deixa cada pessoa ler e gravar só as próprias linhas. Nunca coloque a chave **service_role** ou **secret** aqui.

Com o `config.js` vazio, o app funciona normalmente, mas os dados ficam só no aparelho.

## Instalar no celular

- **iPhone:** abra o site no Safari, toque em Compartilhar e depois em **Adicionar à Tela de Início**.
- **Android:** abra no Chrome e toque em **Instalar app**.

## Arquivos

| Arquivo | Para que serve |
| --- | --- |
| `index.html` | O app inteiro: telas, biblioteca de exercícios e ilustrações |
| `config.js` | Endereço e chave pública do Supabase |
| `sw.js` | Service worker que guarda o app para funcionar offline |
| `manifest.webmanifest`, `icons/` | Nome e ícone do app instalado |
| `vendor/supabase.js` | Cliente do Supabase (supabase-js 2.45.4, licença MIT) |
| `supabase/schema.sql` | Tabela e regras de acesso |
| `_headers` | Cabeçalhos de cache do Cloudflare Pages |
