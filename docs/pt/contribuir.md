---
title: Como contribuir
description: Propõe melhorias à wiki através de um Pull Request, com revisão da comunidade antes da publicação.
---

## Propor uma alteração

O conteúdo desta wiki vive no repositório [meshtastic-pt/wiki](https://github.com/meshtastic-pt/wiki). Faz um fork, cria um branch, altera o ficheiro Markdown e abre um Pull Request para o branch `main`.

O Pull Request é validado automaticamente. Depois da revisão e aprovação, a alteração pode ser integrada e publicada no site.

## Criar uma página

Guarda o artigo em `docs/pt/nome-do-artigo.md`. O início do ficheiro precisa de `title` e `description`:

```yaml
---
title: Nome do artigo
description: Uma frase curta que explica o que a pessoa vai aprender.
---
```

Depois adiciona o slug à secção apropriada em `wiki.json`. Usa títulos `##` e `###` dentro do artigo; o título principal vem dos metadados.

## Imagens e ligações

Coloca as imagens em `assets/` e usa caminhos relativos no Markdown. Por exemplo, a partir de `docs/pt/`, uma imagem em `assets/radio.webp` é referida como `../../assets/radio.webp`.

Para ligar a outra página da wiki, usa um caminho relativo para o seu `.md`. Ligações para páginas já existentes do site podem começar por `/`.

## Rever e publicar

O Pull Request deve explicar o motivo da alteração e, quando houver instruções técnicas, como foram verificadas. Os revisores podem pedir correções antes do merge. A publicação no site só acontece depois do merge em `main` e da importação bem-sucedida.
