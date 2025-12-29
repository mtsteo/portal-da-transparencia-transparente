/**
 * Configurações do grafo de licitações
 */
const CONFIG = {
  // Caminho dos dados
  dataPath: "./dataset/data.json",

  // Configurações dos nós
  nodes: {
    prefeitura: {
      id: "prefeitura",
      name: "Prefeitura de Capitão Poço",
      size: 15,
    },
    licitacao: {
      size: 5,
    },
    contratado: {
      size: 3,
    },
  },

  // Configurações da câmera
  camera: {
    clickDistance: 40,
    transitionDuration: 3000,
  },
};

export default CONFIG;
