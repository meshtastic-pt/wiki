---
title: Mesh Test Bot
description: Projeto independente para organizar testes de alcance Meshtastic e consultar relatórios de receção.
---

## O que é

O **Mesh Test Bot**, criado por [André Cunha (`cunhaax`)](https://github.com/cunhaax), ajuda a realizar testes de alcance numa rede Meshtastic. Envia algumas mensagens curtas num canal de testes, escuta as mensagens de outros bots e gera um relatório no fim da sessão. Pode ser usado numa sessão pontual ou com uma agenda semanal.

É um projeto independente. A documentação, o código e o acompanhamento de problemas são mantidos pelo autor.

## O que mostra o relatório

- Que estações foram ouvidas e quantas mensagens chegaram de cada uma.
- O número de saltos e os valores de sinal, como SNR e RSSI.
- Se uma mensagem chegou por rádio ou apenas por MQTT, para não confundir uma entrega pela Internet com alcance por rádio.

Os relatórios são guardados em formatos de texto e JSON, no computador onde o bot está instalado.

## Antes de usar

O bot precisa de um rádio Meshtastic já configurado com o canal de testes. Pode correr com Docker ou Python; a [documentação do projeto](https://cunhaax.github.io/mesh-test-bot/pt/) explica as formas de ligar o rádio e instalar o software.

Como envia mensagens automaticamente, começa por um **canal privado de testes**. Combina antecipadamente qualquer teste num canal partilhado, para não criar tráfego inesperado para outras pessoas. A opção de limites menos restritivos do projeto destina-se apenas a testes em canais privados.

## Ligações

- [Apresentação e funcionalidades em português](https://cunhaax.github.io/mesh-test-bot/pt/)
- [Guia para começar, em português](https://cunhaax.github.io/mesh-test-bot/pt/start.html)
- [Código, licença e documentação no GitHub](https://github.com/cunhaax/mesh-test-bot)
- [Comunicar um problema ou sugerir uma melhoria ao autor](https://github.com/cunhaax/mesh-test-bot/issues)
