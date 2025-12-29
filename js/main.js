import CONFIG from "./config.js";
import { transformData } from "./dataTransformer.js";
import { initGraph } from "./graph.js";

/**
 * Verifica se é dispositivo mobile
 */
function isMobile() {
  return window.innerWidth <= 768 || "ontouchstart" in window;
}

/**
 * Fecha o modal de instruções
 */
function closeModal() {
  const modal = document.getElementById("instructionsModal");
  if (modal) {
    modal.classList.add("hidden");
    localStorage.setItem("modalShown", "true");
  }
}

/**
 * Inicializa o modal de instruções (apenas mobile)
 */
function initModal() {
  const modal = document.getElementById("instructionsModal");
  const modalBtn = document.querySelector(".modal-btn");

  if (!modal) return;

  // Esconder se não for mobile ou já viu
  if (!isMobile() || localStorage.getItem("modalShown") === "true") {
    modal.classList.add("hidden");
  }

  // Adicionar evento ao botão
  if (modalBtn) {
    modalBtn.addEventListener("click", closeModal);
  }
}

/**
 * Carrega os dados e inicializa o grafo
 */
async function init() {
  try {
    // Inicializar modal
    initModal();

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
