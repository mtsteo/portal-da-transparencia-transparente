import CONFIG from "./config.js";

/**
 * Gera o label/tooltip para um nó
 * @param {Object} node
 * @returns {string}
 */
function getNodeLabel(node) {
  switch (node.grupo) {
    case "prefeitura":
      return `<b>${node.name}</b><br/>Portal da Transparência`;

    case "licitacao":
      const valor = node.valor
        ? `R$ ${Number(node.valor).toLocaleString("pt-BR")}`
        : "Valor não informado";
      return `<b>${node.name}</b><br/>Modalidade: ${node.modalidade}<br/>Valor: ${valor}`;

    case "contratado":
      return `<b>${node.name}</b><br/>CNPJ: ${node.cpf_cnpj || "N/A"}`;

    default:
      return node.name;
  }
}

/**
 * Retorna o tamanho do nó baseado no grupo
 * @param {Object} node
 * @returns {number}
 */
function getNodeSize(node) {
  return CONFIG.nodes[node.grupo]?.size || 3;
}

/**
 * Cores dos nós por grupo (consistente com a legenda CSS)
 */
const NODE_COLORS = {
  prefeitura: "#ff6b6b",
  licitacao: "#4ecdc4",
  contratado: "#ffe66d",
};

/**
 * Retorna a cor do nó baseado no grupo
 * @param {Object} node
 * @returns {string}
 */
function getNodeColor(node) {
  return NODE_COLORS[node.grupo] || "#ffffff";
}

/**
 * Retorna a cor do link baseado na origem
 * @param {Object} link
 * @returns {string}
 */
function getLinkColor(link) {
  const sourceNode = typeof link.source === "object" ? link.source : null;
  if (sourceNode) {
    if (sourceNode.grupo === "prefeitura") return "rgba(255, 107, 107, 0.4)";
    if (sourceNode.grupo === "licitacao") return "rgba(78, 205, 196, 0.5)";
  }
  return "rgba(255, 255, 255, 0.3)";
}

/**
 * Handler de clique no nó - movimenta câmera
 * @param {Object} node
 * @param {Object} Graph
 */
function handleNodeClick(node, Graph) {
  const distance = CONFIG.camera.clickDistance;
  const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

  const newPos =
    node.x || node.y || node.z
      ? {
          x: node.x * distRatio,
          y: node.y * distRatio,
          z: node.z * distRatio,
        }
      : { x: 0, y: 0, z: distance };

  Graph.cameraPosition(newPos, node, CONFIG.camera.transitionDuration);
}

/**
 * Inicializa o grafo 3D
 * @param {HTMLElement} container
 * @param {Object} graphData - { nodes, links }
 * @returns {Object} - Instância do grafo
 */
export function initGraph(container, graphData) {
  const Graph = new ForceGraph3D(container)
    .graphData(graphData)
    .nodeLabel(getNodeLabel)
    .nodeColor(getNodeColor)
    .nodeVal(getNodeSize)
    // Links com cor baseada na origem e partículas animadas
    .linkColor(getLinkColor)
    .linkWidth(1.5)
    .linkOpacity(0.6)
    .linkDirectionalParticles(2)
    .linkDirectionalParticleWidth(1.5)
    .linkDirectionalParticleSpeed(0.005)
    .linkDirectionalParticleColor(getLinkColor)
    .onNodeClick((node) => handleNodeClick(node, Graph));

  return Graph;
}
