# Análise da loja lolitajoias.com (24/11/2026)

Loja Shopify (tema Atelier), vende em euros para Portugal e UE, 65 produtos, preço mediano 27 €.

## Por que tem visitas e não tem vendas (por ordem de impacto)

| # | Problema encontrado | Porque mata a venda | Correção |
|---|---|---|---|
| 1 | **Não existe política de envio nem de devolução** (`/policies/shipping-policy` e `/policies/refund-policy` dão erro 404). Não aparece em lado nenhum quanto custa o envio nem quanto tempo demora. | A cliente não compra a alguém que não conhece sem saber prazo, custo e como devolve. Na UE o direito de livre resolução de 14 dias é obrigatório e tem de estar visível. | Definições → Políticas: criar Envio, Reembolso, Termos e Informação de contacto (com NIF). Barra de anúncio no topo: "Envio grátis acima de 40 € · Entrega em 2–4 dias úteis". |
| 2 | **Marca com 4 nomes**: UseLolita, Use Lolita, Lolita Semijoias, Lolitas Semijoias. O domínio é *lolitajoias*, o e-mail é *uselolitajoias@gmail.com* e o Instagram é **@diad.ela**. | Parece loja improvisada. Quem vem do Instagram não reconhece o site, e quem vê o site não encontra o Instagram. | Escolher **um** nome ("Use Lolita") e usá-lo em tudo. Instagram da loja com o mesmo nome. E-mail com domínio próprio (ola@lolitajoias.com). |
| 3 | **Fotos**: 63 das 65 peças têm 1 só foto, em fundo branco. Pelos nomes dos ficheiros (ex.: `172305.jpgANELSOLITARIO...22.jpg`), parecem fotos do catálogo do fornecedor. | Sem foto na orelha ou no pescoço não se percebe o tamanho. E a mesma foto existe noutras lojas: a cliente pesquisa por imagem e encontra mais barato, ou desconfia. | Mínimo 3 fotos por peça: fundo branco + **na pessoa** + ao lado de uma moeda/régua. Telemóvel e luz da janela chegam. Comece pelas 10 mais vistas. |
| 4 | **Sem avaliações de clientes** em nenhuma peça. | Prova social é o 2.º maior motivo de compra em bijutaria/semijoia online. | Instalar Judge.me (gratuito), pedir avaliação com foto a quem já comprou e oferecer 10% na próxima compra em troca. |
| 5 | **15 das 65 peças esgotadas**, e o "Produto em destaque" da página inicial (Conjunto ponto de luz) **está esgotado**. | A cliente clica na peça em destaque e não pode comprar. É o pior primeiro clique possível. | Trocar o destaque por uma peça com stock. Esconder esgotados ou mandá-los para o fim (Coleções → Ordenação). |
| 6 | **Descrição igual em todos os produtos**, sem medidas. | Sem medidas não há confiança no tamanho. Para o Google são 65 páginas duplicadas. | Ver `seo-textos-prontos.md`: 3 linhas únicas por peça, com medidas em cm. |
| 7 | **A página inicial não diz porquê comprar aqui.** O banner diz "Compre agora os melhores conjuntos de semi-joias", com o botão "Shop now" em inglês. Não fala de garantia, de envio nem de nada que diferencie. | A visitante tem ~5 segundos. A garantia de 1 ano e o "livre de níquel", que são os seus melhores argumentos, estão escondidos dentro da descrição do produto. | Faixa logo abaixo do banner com 4 ícones: Ouro 18k · Hipoalergénico · 1 ano de garantia · Envio grátis acima de X €. |
| 8 | **Restos em inglês e gralhas**: "Shop now", "You may also like", botão "Submit" no contacto, "redes socias", "elos lidos". | Sinal de pouco cuidado numa loja que vende cuidado e detalhe. | Loja online → Temas → ⋯ → Editar idioma: procurar e traduzir. |
| 9 | **As cores do site não são as da marca.** O logo é creme, castanho-mocha e dourado; o tema está a preto e branco puro. | A loja parece genérica e não "conversa" com o logo nem com o Instagram. | Tema → Definições → Cores: fundo `#FBF4EE`, texto `#2E211E`, destaque `#6E5049`, detalhes `#C9A47F`. |

### A pergunta que mais importa (e que eu não consigo ver daqui)
**De onde vêm as visitas?** Abra Shopify → Análises → "Sessões por origem de tráfego" e "Sessões por país".
- Se vêm do **Brasil** (amigos e seguidores do Instagram pessoal), elas **nunca vão comprar**: o preço está em euros e o envio é para a Europa. As visitas não são o problema, o público é que é o errado.
- Se vêm de **anúncios** com taxa de conversão abaixo de 0,5%, é o anúncio que está a atrair o público errado.
- Se vêm de bots ou de "spam" (sessões de 0 segundos), o número está inflacionado e o problema é menor do que parece.

## Google (aparecer nas pesquisas)
Estado atual:
- Página inicial **sem meta descrição** e com o título só "UseLolita". Nenhuma página do site tem descrição.
- 15 de 28 imagens da página inicial **sem texto alternativo**. Nenhuma foto de produto tem.
- O sitemap e o robots.txt estão corretos (o Shopify gera-os sozinho). Os dados estruturados de Produto existem.
- Numa pesquisa `site:lolitajoias.com` não encontrei nenhuma página. A ferramenta que usei não é o Google, por isso é preciso confirmar.

Passo a passo:
1. **Google Search Console** (search.google.com/search-console): adicionar `lolitajoias.com`, verificar pelo Shopify (Preferências → meta tag) e submeter `https://lolitajoias.com/sitemap.xml`. **Sem isto, o resto demora muito mais.**
2. Colar os títulos e descrições de `seo-textos-prontos.md`.
3. **Google Merchant Center**: instalar a app "Google & YouTube" no Shopify. As peças aparecem de graça no separador Shopping do Google, que é a via mais rápida para semijoias.
4. **Perfil de Empresa no Google**, se tiver morada ou ponto de recolha.
5. Expectativa realista: o SEO orgânico para "semijoias Portugal" leva 3 a 6 meses. Shopping e Instagram trazem resultado esta semana.

## Black Friday (sexta, 27/11)
- Banner em `black-friday/` (desktop 1920×700 e telemóvel 1080×1350), nas cores do logo.
- **A oferta no banner (−20% em compras acima de 30 € + frete grátis acima de 40 €) é uma sugestão minha.** Confirme a margem antes de publicar. Os textos editam-se no `banner.html`.
- Use **desconto automático** (Descontos → Criar → Automático) e não código: cada campo a mais no checkout faz perder vendas.
- Frete grátis acima de 40 € com uma peça mediana de 27 € leva a cliente a juntar a 2.ª peça. Aumenta o ticket médio, que vale mais que o desconto.
- Barra de anúncio no mesmo período: "BLACK FRIDAY · 20% acima de 30 € · frete grátis acima de 40 € · até 30/11".

## Ordem de execução (80/20, faça hoje e amanhã)
1. Políticas de envio e devolução + barra de anúncio com o envio. *(30 min)*
2. Trocar o produto em destaque esgotado; esconder esgotados. *(10 min)*
3. Traduzir "Shop now" / "Submit" / "You may also like". *(15 min)*
4. Search Console + sitemap. *(15 min)*
5. Banner + desconto automático da Black Friday. *(20 min)*
6. Fotos na pessoa das 10 peças mais vistas. *(1 tarde)*
7. Unificar o nome e o Instagram da marca. *(decisão sua)*
