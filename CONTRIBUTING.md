# Contribuir para a Wiki da Comunidade Meshtastic Portugal

Obrigado por ajudares a tornar a wiki mais útil. Podes corrigir uma frase, acrescentar uma imagem, partilhar um teste ou escrever um guia completo. Todas as propostas são feitas por Pull Request para que possam ser revistas antes de chegar ao site.

## Por onde começar

1. [Consulta a wiki](https://meshtastic.pt/wiki) e procura uma página sobre o tema. Uma melhoria numa página existente costuma ser o melhor primeiro passo.
2. Se encontraste um erro ou queres discutir um tema antes de escrever, [abre uma Issue](https://github.com/meshtastic-pt/wiki/issues/new). Explica o que falta e, se possível, liga a página relevante.
3. Se já sabes o que alterar, edita o ficheiro correspondente em `docs/pt/` e abre um Pull Request para `main`. O GitHub permite fazer uma correção diretamente no navegador; podes usar um fork ou um ramo do repositório se tiveres acesso de escrita.

## Escrever ou atualizar uma página

Cada artigo em português está em `docs/pt/`. Para criar um, escolhe um nome curto em minúsculas, sem acentos e com hífenes, por exemplo `docs/pt/escolher-antena.md`. Adiciona depois `escolher-antena` à secção adequada de `wiki.json`; sem isso, a página não entra na navegação.

Começa o ficheiro com um título e uma descrição curta:

```md
---
title: Escolher uma antena
description: O que observar antes de escolher uma antena para o teu equipamento.
---

## Antes de começar

Texto do artigo.
```

O site apresenta o título definido no início do ficheiro. No corpo do artigo, usa `##` para secções e `###` para subsecções. Faz ligações para outras páginas com caminhos relativos, como `[Primeiros passos](./primeiros-passos.md)`.

Guarda imagens em `assets/` e usa formatos PNG, JPEG, WebP ou GIF. A partir de `docs/pt/`, uma imagem pode ser ligada com `![Descrição da imagem](../../assets/exemplo.webp)`. Usa imagens tuas ou para as quais tens autorização, e escreve texto alternativo que explique o que mostram.

## Ajudar quem vai ler

- Escreve em português de Portugal, com frases diretas e passos pela ordem em que devem ser executados.
- Confirma os procedimentos antes de os recomendar. Indica fontes fiáveis e explica como fizeste os testes.
- Quando uma instrução depende do modelo, da região ou da versão do firmware, diz a que casos se aplica.
- Distingue resultados observados de recomendações gerais. Se não tens a certeza, assinala a dúvida no Pull Request.
- Não incluas credenciais, dados pessoais ou imagens de outras pessoas sem autorização.

## Verificar e enviar a proposta

Se editaste os ficheiros no teu computador, executa `node scripts/validate.mjs` na raiz do repositório. O mesmo check corre automaticamente no Pull Request e verifica a estrutura das páginas, as imagens e as ligações internas. Se editaste no navegador, podes abrir o Pull Request e acompanhar o resultado do check no GitHub.

Na descrição do Pull Request, resume **o que mudaste**, **porquê** e **como confirmaste** as informações técnicas. Responde aos comentários da revisão e atualiza a proposta quando necessário. Depois da integração em `main`, o site tenta publicar a nova versão; se a validação da publicação falhar, a versão anterior permanece visível.

## Traduções

O artigo em português é a base. Também podes propor traduções em `docs/en/` ou `docs/es/`, registando-as em `wiki.json`. Se uma tradução ainda não existir, o site apresenta o artigo em português com um aviso.
