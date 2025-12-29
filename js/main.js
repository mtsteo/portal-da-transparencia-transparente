import CONFIG from "./config.js";
import { transformData } from "./dataTransformer.js";
import { initGraph } from "./graph.js";

/**
 * Carrega os dados e inicializa o grafo
 */
async function init() {
  try {
    const response = await fetch(CONFIG.dataPath);
    const data = await response.json();

    const graphData = transformData(data);

    console.log("📊 Dados carregados:");
    console.log(`   Total de nós: ${graphData.nodes.length}`);
    console.log(`   Total de links: ${graphData.links.length}`);

    const container = document.getElementById("3d-graph");
    initGraph(container, graphData);
  } catch (error) {
    console.error("❌ Erro ao carregar dados:", error);
  }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", init);
