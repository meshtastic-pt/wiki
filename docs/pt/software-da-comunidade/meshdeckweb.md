---
title: MeshDeckWeb
description: Cliente web independente para acompanhar nós, mensagens, mapas e métricas de uma rede Meshtastic.
---

## O que é

O **MeshDeckWeb**, desenvolvido por [Tiago Veiga (`tiuksferve`)](https://github.com/tiuksferve), é uma interface web para usar um nó Meshtastic a partir do telemóvel, tablet ou computador. Um pequeno servidor em Python liga-se ao rádio por TCP ou USB e disponibiliza a interface no navegador. O projeto foi otimizado para o ClockworkPi uConsole CM4, mas também pode correr noutras máquinas com Python 3.

É um projeto independente, instalado e administrado por quem o utiliza. A sua inclusão nesta wiki não significa que seja um serviço alojado pela Comunidade Meshtastic Portugal.

## O que permite fazer

- Consultar os nós visíveis, pesquisar nomes e acompanhar o estado e a qualidade do sinal.
- Ler e enviar mensagens em canais ou mensagens diretas.
- Explorar os nós num mapa e visualizar traceroutes.
- Consultar métricas do rádio e da rede, incluindo tráfego, bateria e qualidade da ligação.
- Alterar a configuração do nó através da interface.

## Antes de instalar

Precisas de um nó Meshtastic acessível por TCP ou ligado por USB, além de uma máquina com Python 3. O [guia em português](https://github.com/tiuksferve/MeshDeckWeb/blob/main/README_PT.md) explica a instalação e os requisitos em detalhe.

O acesso à interface permite alterar a configuração do rádio, incluindo os canais. Se a abrires a outros dispositivos, usa uma rede de confiança e define uma palavra-passe. A documentação do projeto explica também como ativar HTTPS para funcionalidades que o exigem no telemóvel.

## Ligações

- [Apresentação, instalação e funcionalidades em português](https://github.com/tiuksferve/MeshDeckWeb/blob/main/README_PT.md)
- [Código e licença no GitHub](https://github.com/tiuksferve/MeshDeckWeb)
- [Comunicar um problema ou sugerir uma melhoria ao autor](https://github.com/tiuksferve/MeshDeckWeb/issues)
