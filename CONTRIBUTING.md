# Contribuir para a wiki

Obrigado por ajudares a melhorar a documentação Meshtastic Portugal. Todas as alterações passam por Pull Request e revisão antes de aparecerem no site.

## Antes de escrever

Pesquisa se já existe um artigo sobre o tema. Para correções pequenas, edita a página atual. Para assuntos novos, abre uma Issue se a estrutura ou o conteúdo técnico ainda precisarem de discussão.

## Criar ou alterar um artigo

1. Faz um fork e cria um branch para a alteração.
2. Escreve em português de Portugal, com linguagem clara e instruções verificáveis.
3. Guarda o artigo em `docs/pt/<slug>.md` e adiciona o slug a `wiki.json` quando criares uma página nova.
4. Coloca imagens em `assets/`, usa texto alternativo útil e liga-as com caminhos relativos.
5. Executa `node scripts/validate.mjs` e abre um Pull Request para `main`.

Os artigos usam front matter com `title` e `description`. O corpo começa em `##`; o título principal é apresentado automaticamente pelo site. Usa `###` para subsecções. Ligações para outros artigos devem apontar para o ficheiro `.md` relativo, por exemplo `[Como contribuir](./contribuir.md)`.

## Revisão

Explica no PR o que mudou e como confirmaste instruções técnicas. Os revisores verificam clareza, exatidão, segurança e ligações. Quando o check automático passa e a revisão é aprovada, a equipa pode fazer merge. O site valida novamente o conteúdo inteiro antes de publicar; uma falha mantém a versão anterior no ar.

### Idiomas

O português é obrigatório. Traduções são opcionais: cria `docs/en/` ou `docs/es/` e adiciona essas páginas às secções do idioma em `wiki.json`. Enquanto uma tradução faltar, o site mostra o artigo português com um aviso.
