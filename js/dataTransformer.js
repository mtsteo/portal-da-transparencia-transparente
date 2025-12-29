import CONFIG from "./config.js";

/**
 * Transforma os dados do JSON para o formato do grafo
 * @param {Object} data - Dados do JSON
 * @returns {Object} - { nodes, links }
 */
export function transformData(data) {
  const nodes = [];
  const links = [];
  const nodeSet = new Set();

  // Adicionar nó principal da Prefeitura
  const prefeituraId = CONFIG.nodes.prefeitura.id;
  nodes.push({
    id: prefeituraId,
    name: CONFIG.nodes.prefeitura.name,
    grupo: "prefeitura",
  });
  nodeSet.add(prefeituraId);

  // Processar licitações
  data.nodes.forEach((licitacao, index) => {
    const licitacaoId = `licitacao_${index}`;

    // Adicionar nó da licitação
    nodes.push({
      id: licitacaoId,
      name: licitacao.numero_processo,
      grupo: "licitacao",
      modalidade: licitacao.modalidade,
      objeto: licitacao.objeto,
      valor: licitacao.valores?.total || null,
    });
    nodeSet.add(licitacaoId);

    // Link: Prefeitura -> Licitação
    links.push({
      source: prefeituraId,
      target: licitacaoId,
    });

    // Processar contratados
    if (licitacao.contratados?.length > 0) {
      licitacao.contratados.forEach((contratado) => {
        const contratadoId = createContratadoId(contratado);

        // Adicionar nó do contratado (se não existir)
        if (!nodeSet.has(contratadoId)) {
          nodes.push({
            id: contratadoId,
            name: contratado.nome,
            grupo: "contratado",
            cpf_cnpj: contratado.cpf_cnpj,
          });
          nodeSet.add(contratadoId);
        }

        // Link: Licitação -> Contratado
        links.push({
          source: licitacaoId,
          target: contratadoId,
        });
      });
    }
  });

  return { nodes, links };
}

/**
 * Cria ID único para contratado baseado no CNPJ/CPF
 * @param {Object} contratado
 * @returns {string}
 */
function createContratadoId(contratado) {
  const identifier = contratado.cpf_cnpj || contratado.nome;
  return `contratado_${identifier.replace(/[^a-zA-Z0-9]/g, "_")}`;
}
