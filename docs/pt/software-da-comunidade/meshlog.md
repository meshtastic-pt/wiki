---
title: Meshlog
description: Ferramenta web para visualizar, explorar e analisar redes Meshtastic através de mapas geográficos, topologia lógica, ligações RF, traceroutes e registos de debug.
---

## O que é

O **Meshlog** é uma ferramenta web para visualizar e analisar informação de redes Meshtastic. Disponibiliza diferentes formas de explorar os nós e as ligações da rede, incluindo uma vista geográfica, uma representação da topologia lógica, a análise das ligações RF e a consulta de traceroutes.

A ferramenta está disponível em [meshlog.camal.eu](https://meshlog.camal.eu/). A interface identifica o projeto como desenvolvido por **NXDOMAIN**.

É um projeto independente. A sua inclusão nesta wiki não significa que seja um serviço alojado, mantido ou administrado pela Comunidade Meshtastic Portugal.

## O que permite fazer

- **Geo Map:** visualizar os nós num mapa e consultar informação individual de cada nó.
- **Logical Network:** explorar a topologia lógica da rede e as ligações entre nós.
- **Longest Links:** consultar as ligações RF mais longas identificadas nos dados disponíveis.
- **Traceroutes:** explorar os percursos e saltos registados nas comunicações.
- **Análise de nós:** consultar informação como identificador, nome, hardware, número de pacotes, bateria e histórico de telemetria, quando esses dados estão disponíveis.
- **Análise de tráfego:** consultar pacotes recentes e informação detalhada dos pacotes através da área de *Deep Packet Inspection*.
- **Importação de logs:** selecionar um ficheiro de texto (`.txt`) de debug do Meshtastic para análise local no navegador.
- **Mapas partilhados:** consultar mapas da comunidade, guardar mapas pessoais e partilhar uma visualização através das opções disponibilizadas pela aplicação.
- **Instalação como aplicação:** em dispositivos e navegadores compatíveis, utilizar a opção para instalar o Meshlog como aplicação web.

## Explorar a rede

A ferramenta disponibiliza diferentes vistas, cada uma orientada para um tipo de análise.

### Geo Map

A vista geográfica apresenta os nós num mapa. A simbologia ajuda a distinguir os papéis dos nós, incluindo Router / Repeater, Router Late, Client Base, Client Mute e Standard Client.

Quando existe informação suficiente, também apresenta indicadores de qualidade do sinal (SNR) e de transporte, permitindo distinguir ligações RF, ligações através de gateway de Internet/MQTT e situações híbridas.

Ao selecionar um nó, é possível abrir informação adicional, como métricas, bateria e histórico de telemetria. Os controlos de filtragem permitem procurar ou limitar os nós por identificador, número de saltos (*hop count*) ou idade da informação.

### Logical Network

A vista lógica representa as relações entre os nós, permitindo observar a estrutura da rede sem depender exclusivamente da sua localização geográfica.

A representação utiliza diferentes formas e cores para distinguir os papéis dos nós. O tamanho dos nós representa o volume de tráfego e a espessura das ligações representa a qualidade do sinal (SNR), de acordo com a legenda da aplicação.

É também possível reorganizar a visualização arrastando os nós.

### Longest Links

A secção **Longest Links** apresenta as ligações RF diretas mais longas identificadas nos dados disponíveis, incluindo a distância e o SNR quando esses valores existem.

Esta vista pode ajudar a identificar ligações de maior alcance e a estudar a propagação da rede. Os resultados dependem da informação recolhida e disponível na aplicação.

### Traceroutes

A secção **Traceroutes** permite consultar percursos de comunicação e os respetivos saltos entre nós. Inclui pesquisa por Node ID e controlos para acompanhar, pausar ou limpar a visualização dos registos.

Os traceroutes são úteis para estudar a forma como os pacotes atravessam a rede e identificar possíveis limitações nos percursos.

## Analisar um log Meshtastic

O Meshlog inclui um **Meshtastic Log Mapper**, que permite selecionar um ficheiro de log de debug em formato `.txt` para análise offline no navegador.

1. Obtém um ficheiro de log de debug produzido por uma aplicação ou ferramenta Meshtastic.
2. Abre [meshlog.camal.eu](https://meshlog.camal.eu/).
3. Localiza a secção **Meshtastic Log Mapper**.
4. Seleciona o ficheiro `.txt` que pretendes analisar.
5. Consulta os resultados apresentados pela ferramenta.

A análise de ficheiros é indicada para estudar registos de uma sessão ou de um equipamento sem ter de introduzir manualmente os dados. A compatibilidade depende do formato e do conteúdo do log.

## Antes de utilizar

- Utiliza um navegador moderno e atualizado.
- Para explorar mapas e dados da rede, é necessária uma ligação à Internet e a disponibilidade dos dados apresentados pela aplicação.
- Para analisar um log, prepara um ficheiro de texto `.txt` de debug do Meshtastic.
- A informação apresentada depende dos dados recebidos, carregados ou disponibilizados à aplicação. Nem todos os nós terão necessariamente posição, telemetria ou informação de traceroute.
- As opções de instalação como aplicação web dependem do navegador e do dispositivo.

## Privacidade e partilha de dados

Os logs Meshtastic podem conter identificadores de nós, nomes, posições, mensagens, informação de telemetria e outros dados operacionais.

Antes de carregar, guardar ou partilhar um log ou mapa:

- confirma que tens autorização para divulgar os dados;
- verifica se o ficheiro contém posições ou informação que permita identificar pessoas ou locais privados;
- evita publicar mensagens ou outros dados que não devam ser partilhados;
- confirma o conteúdo de um mapa antes de utilizar a opção de partilha.

A possibilidade de analisar um ficheiro no navegador não significa, por si só, que todos os dados da aplicação sejam tratados exclusivamente no dispositivo. Consulta a informação do próprio projeto para perceber o funcionamento e o tratamento de dados antes de carregares informação sensível.

## Ligações

- [Meshlog — aplicação web](https://meshlog.camal.eu/)
