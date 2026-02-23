# 🚀 LiDAR Engine \| Interactive Point Cloud Visualization

Este projeto é um visualizador de **nuvens de pontos (Point Clouds) de alta performance** desenvolvido com **React e Three.js**.\
Ele demonstra a capacidade de renderização de grandes volumes de dados geoespaciais diretamente no navegador, utilizando aceleração de hardware
via WebGL.

------------------------------------------------------------------------

## Diferenciais Técnicos & Decisões de Projeto

### ⚡ Performance via BufferGeometry

Em vez de utilizar objetos Three.js individuais para cada ponto (o que causaria gargalo na CPU), foi utilizado **BufferGeometry com Typed Arrays (Float32Array)**.\
Isso permite que a GPU processe centenas de milhares de pontos mantendo \~60 FPS.

### 🧠 Amostragem Inteligente

O sistema conta com algoritmos de **decimação de dados**, garantindo que arquivos massivos (datasets reais de 2GB+) possam ser visualizados sem estourar o limite de memória da aba do navegador.

------------------------------------------------------------------------

## 🛠️ Stack Tecnológica

**Frontend** - React (Vite) - Tailwind CSS

**3D Engine** - Three.js

**Data Processing** - Lógicas customizadas para mapeamento de cores por elevação (Heatmaps) - Mapeamento por intensidade

------------------------------------------------------------------------

## 📖 Funcionalidades Atuais

-  Renderização dinâmica com suporte para simulações de **100k a 500k pontos**
-  Coloração por atributos (Altitude, Vegetação, Espectro Térmico)
-  Câmera interativa com controles orbitais suaves
-  HUD técnica com monitoramento em tempo real:
    -   Contagem de pontos
    -   Status de aceleração por hardware

------------------------------------------------------------------------

## 📂 Como rodar o projeto

### 1️⃣ Clone o repositório

``` bash
git clone https://github.com/BrunoHtb/lidar-explorer.git
```

### 2️⃣ Instale as dependências

``` bash
npm install
```

### 3️⃣ Inicie o servidor de desenvolvimento

``` bash
npm run dev
```

------------------------------------------------------------------------

## 🎯 Objetivo do Projeto

Demonstrar capacidade técnica em:

-   Processamento de dados LiDAR em larga escala\
-   Visualização 3D de alta performance no navegador\
-   Arquitetura moderna React + WebGL\
