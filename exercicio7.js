// Exercicio 49 e 50
// Exercício 49: Agrupar Transações por Categoria
function agruparTransacoesPorCategoria(transacoes) {
    const transacoesPorCategoria = {};
  
    for (const transacao of transacoes) {
      const categoria = transacao.categoria;
      if (!transacoesPorCategoria[categoria]) {
        transacoesPorCategoria[categoria] = {
          transacoes: [],
          subtotal: 0,
        };
      }
      transacoesPorCategoria[categoria].transacoes.push(transacao);
      transacoesPorCategoria[categoria].subtotal += transacao.valor;
    }
  
    return transacoesPorCategoria;
  }
  
  const transacoes = [
    { id: 1, valor: 50, data: "2025-05-01", categoria: "Alimentação" },
    { id: 2, valor: 120, data: "2025-05-01", categoria: "Transporte" },
    { id: 3, valor: 30, data: "2025-05-02", categoria: "Alimentação" },
    { id: 4, valor: 80, data: "2025-05-02", categoria: "Lazer" },
    { id: 5, valor: 45, data: "2025-05-03", categoria: "Transporte" },
];
  
const transacoesAgrupadas = agruparTransacoesPorCategoria(transacoes);
console.log("Transações agrupadas por categoria:", transacoesAgrupadas);

// Exercício 50: Sistema de Reserva de Hotéis (Console)
const hoteis = [];
const reservas = [];
let proximoIdHotel = 1;
let proximoIdReserva = 1;

function adicionarHotel() {
  const nome = prompt("Digite o nome do hotel:");
  const cidade = prompt("Digite a cidade do hotel:");
  const quartosTotais = parseInt(prompt("Digite o número total de quartos:"));
  const novoHotel = {
    id: proximoIdHotel++,
    nome,
    cidade,
    quartosTotais,
    quartosDisponiveis: quartosTotais,
  };
  hoteis.push(novoHotel);
  console.log(`Hotel "${nome}" adicionado com ID ${novoHotel.id}.`);
}

function buscarHoteisPorCidade() {
  const cidadeBusca = prompt("Digite a cidade para buscar hotéis:");
  const hoteisEncontrados = hoteis.filter(hotel =>
    hotel.cidade.toLowerCase() === cidadeBusca.toLowerCase() && hotel.quartosDisponiveis > 0
  );

  if (hoteisEncontrados.length > 0) {
    console.log(`\nHoteis disponíveis em ${cidadeBusca}:`);
    hoteisEncontrados.forEach(hotel =>
      console.log(`- ID: ${hotel.id}, Nome: ${hotel.nome}, Quartos Disponíveis: ${hotel.quartosDisponiveis}`)
    );
  } else {
    console.log(`Não há hotéis disponíveis em ${cidadeBusca}.`);
  }
}

function fazerReserva() {
  const idHotelReserva = parseInt(prompt("Digite o ID do hotel para fazer a reserva:"));
  const hotel = hoteis.find(h => h.id === idHotelReserva);

  if (!hotel) {
    console.log("Hotel não encontrado.");
    return;
  }

  if (hotel.quartosDisponiveis > 0) {
    const nomeCliente = prompt("Digite o nome do cliente:");
    const novaReserva = {
      idReserva: proximoIdReserva++,
      idHotel: hotel.id,
      nomeCliente,
    };
    reservas.push(novaReserva);
    hotel.quartosDisponiveis--;
    console.log(`Reserva para "${nomeCliente}" no hotel "${hotel.nome}" (ID Reserva: ${novaReserva.idReserva}) realizada com sucesso.`);
  } else {
    console.log(`Não há quartos disponíveis no hotel "${hotel.nome}".`);
  }
}

function cancelarReserva() {
  const idReservaCancelamento = parseInt(prompt("Digite o ID da reserva para cancelar:"));
  const reservaIndex = reservas.findIndex(r => r.idReserva === idReservaCancelamento);

  if (reservaIndex === -1) {
    console.log("Reserva não encontrada.");
    return;
  }

  const reservaCancelada = reservas.splice(reservaIndex, 1)[0];
  const hotel = hoteis.find(h => h.id === reservaCancelada.idHotel);
  if (hotel) {
    hotel.quartosDisponiveis++;
    console.log(`Reserva ${reservaCancelada.idReserva} para "${reservaCancelada.nomeCliente}" no hotel "${hotel.nome}" cancelada.`);
  }
}

function listarReservas() {
  if (reservas.length === 0) {
    console.log("Não há reservas cadastradas.");
    return;
  }

  console.log("\nLista de Reservas:");
  reservas.forEach(reserva => {
    const hotel = hoteis.find(h => h.id === reserva.idHotel);
    if (hotel) {
      console.log(
        `- ID Reserva: ${reserva.idReserva}, Cliente: ${reserva.nomeCliente}, Hotel: ${hotel.nome} (ID: ${hotel.id}), Cidade: ${hotel.cidade}`
      );
    } else {
      console.log(`- ID Reserva: ${reserva.idReserva}, Cliente: ${reserva.nomeCliente}, Hotel ID: ${reserva.idHotel} (Hotel não encontrado)`);
    }
  });
}

function exibirMenu() {
  console.log("\nSistema de Reserva de Hotéis");
  console.log("1. Adicionar Hotel");
  console.log("2. Buscar Hotéis por Cidade");
  console.log("3. Fazer Reserva");
  console.log("4. Cancelar Reserva");
  console.log("5. Listar Reservas");
  console.log("6. Sair");
}

async function iniciarSistema() {
  let opcao;
  do {
    exibirMenu();
    opcao = prompt("Escolha uma opção:");

    switch (opcao) {
      case "1":
        adicionarHotel();
        break;
      case "2":
        buscarHoteisPorCidade();
        break;
      case "3":
        fazerReserva();
        break;
      case "4":
        cancelarReserva();
        break;
      case "5":
        listarReservas();
        break;
      case "6":
        console.log("Saindo do sistema.");
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  } while (opcao !== "6");
}

// Iniciar o sistema (executar no console do navegador)
iniciarSistema();
