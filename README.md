# 🏛️ Portal da Transparência Transparente

<div align="center">

![Status](https://img.shields.io/badge/status-ativo-brightgreen)
![Licença](https://img.shields.io/badge/licen%C3%A7a-MIT-blue)
![Versão](https://img.shields.io/badge/vers%C3%A3o-1.0.0-orange)

**Visualização interativa 3D das licitações públicas de Capitão Poço/PA**

[Demonstração](#-demonstração) •
[Funcionalidades](#-funcionalidades) •
[Tecnologias](#-tecnologias) •
[Instalação](#-instalação) •
[Estrutura](#-estrutura-do-projeto)

</div>

---

## 📖 Sobre o Projeto

O **Portal da Transparência Transparente** é uma ferramenta de visualização de dados públicos que transforma informações de licitações municipais em um **grafo 3D interativo**. O projeto foi desenvolvido para tornar os dados de contratações públicas mais acessíveis e compreensíveis para cidadãos, jornalistas e pesquisadores.

### 🎯 Objetivo

Democratizar o acesso às informações de licitações públicas da Prefeitura Municipal de Capitão Poço/PA, permitindo uma análise visual intuitiva das relações entre processos licitatórios e empresas contratadas.

---

## ✨ Funcionalidades

- 🌐 **Visualização 3D Interativa** - Navegue pelo grafo com rotação, zoom e pan
- 🔍 **Exploração de Dados** - Clique nos nós para aproximar e ver detalhes
- 📊 **Informações Detalhadas** - Tooltips com dados completos de cada licitação
- 🎨 **Interface Intuitiva** - Legenda com código de cores para fácil identificação
- 📱 **Responsivo** - Funciona em diferentes tamanhos de tela

### Tipos de Nós

| Cor | Tipo | Descrição |
|-----|------|-----------|
| 🔴 Vermelho | Prefeitura | Nó central representando a Prefeitura Municipal |
| 🟢 Verde-água | Licitação | Processos licitatórios (Pregão Eletrônico, etc.) |
| 🟡 Amarelo | Contratado | Empresas vencedoras das licitações |

---

## 🛠️ Tecnologias

- **HTML5** - Estrutura da aplicação
- **CSS3** - Estilização com design moderno e glassmorphism
- **JavaScript (ES6+)** - Lógica da aplicação com módulos ES
- **[3D Force Graph](https://github.com/vasturiano/3d-force-graph)** - Biblioteca para renderização do grafo 3D
- **Three.js** - Motor gráfico 3D (dependência do 3D Force Graph)

---

## 🚀 Instalação

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Servidor web local (para servir os arquivos)

### Passos

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/transparencia-capitao-poco.git
   cd transparencia-capitao-poco
   ```

2. **Inicie um servidor local**
   
   Usando Python:
   ```bash
   python -m http.server 8000
   ```
   
   Ou usando Node.js (com npx):
   ```bash
   npx serve
   ```
   
   Ou usando a extensão Live Server do VS Code.

3. **Acesse no navegador**
   ```
   http://localhost:8000
   ```

---

## 📁 Estrutura do Projeto

```
CP/
├── index.html              # Página principal
├── README.md               # Documentação
├── css/
│   └── styles.css          # Estilos da aplicação
├── dataset/
│   └── data.json           # Dados das licitações (extraídos do portal)
└── js/
    ├── config.js           # Configurações do grafo
    ├── dataTransformer.js  # Transformação dos dados para o grafo
    ├── graph.js            # Configuração e renderização do grafo 3D
    └── main.js             # Ponto de entrada da aplicação
```

---

## 📊 Dados

Os dados são extraídos do **Portal da Transparência** oficial da Prefeitura de Capitão Poço/PA e incluem:

- **160 processos licitatórios**
- **350 contratos**
- Informações de modalidade, objeto, valores e empresas contratadas

### Estrutura do JSON

```json
{
  "metadados": {
    "fonte": "Prefeitura - Portal da Transparência",
    "ano": 2025,
    "estatisticas": {
      "total_licitacoes": 160,
      "total_contratos": 350
    }
  },
  "nodes": [
    {
      "numero_processo": "029/2025",
      "modalidade": "Pregão Eletrônico",
      "objeto": "Descrição do objeto...",
      "valores": { "total": "100000.00" },
      "contratados": [...]
    }
  ]
}
```

---

## 🖱️ Como Usar

1. **Navegar pelo grafo** - Arraste para rotacionar, scroll para zoom
2. **Ver detalhes** - Passe o mouse sobre os nós para ver informações
3. **Aproximar** - Clique em um nó para centralizar a câmera nele
4. **Identificar relações** - As linhas conectam licitações às empresas vencedoras

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abrir um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Mateus Eufrasio**

- Desenvolvido com 💚 para a transparência pública

---

<div align="center">

⭐ Se este projeto foi útil para você, considere dar uma estrela!

**2025** • Portal da Transparência Transparente

</div>
