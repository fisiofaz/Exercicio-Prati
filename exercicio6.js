// Exercicio 39 a 48
// Exercício 39: Compactar Vetor
function compactarVetor() {
    const vetorA = [];
    console.log("Digite 100 números para o vetor A:");
    for (let i = 0; i < 100; i++) {
      const numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
      vetorA.push(numero);
    }
  
    const vetorB = [];
    for (const numero of vetorA) {
      if (numero > 0) {
        vetorB.push(numero);
      }
    }
  
    console.log("\nVetor A:", vetorA);
    console.log("Vetor B (compactado):", vetorB);
}
  
compactarVetor();

// Exercício 40: Loto (Quina)
function verificarLotoQuina() {
    const resultadoOficial = [];
    console.log("Digite os 5 números do resultado oficial da Loto:");
    for (let i = 0; i < 5; i++) {
      const numero = parseInt(prompt(`Digite o ${i + 1}º número:`));
      resultadoOficial.push(numero);
    }
  
    for (let apostador = 1; apostador <= 2; apostador++) { // Usando 2 para teste, substituir por 50
      const aposta = [];
      console.log(`\nDigite os 5 números da aposta do apostador ${apostador}:`);
      for (let i = 0; i < 5; i++) {
        const numero = parseInt(prompt(`Digite o ${i + 1}º número da aposta:`));
        aposta.push(numero);
      }
  
      let ganhou = true;
      for (let i = 0; i < 5; i++) {
        if (!resultadoOficial.includes(aposta[i])) {
          ganhou = false;
          break;
        }
      }
  
      if (ganhou) {
        console.log(`Apostador ${apostador}: GANHADOR!`);
      } else {
        console.log(`Apostador ${apostador}: Não ganhou.`);
      }
    }
}
  
verificarLotoQuina();

// Exercício 41: Acessar e Adicionar Propriedade a Objeto
const pessoa = {
    nome: "João",
    idade: 30,
};
  
console.log("Idade da pessoa:", pessoa.idade);
  
pessoa.email = "joao@email.com";
console.log("Objeto pessoa com email adicionado:", pessoa);

// Exercício 42: Filtrar Propriedades do Tipo Array
function filtrarPropriedadesArray(objeto) {
    const arraysEncontrados = {};
    for (const chave in objeto) {
      if (Array.isArray(objeto[chave])) {
        arraysEncontrados[chave] = objeto[chave];
      }
    }
    return arraysEncontrados;
  }
  
  const dados = {
    nome: "Maria",
    idades: [25, 32, 40],
    cidade: "São Paulo",
    telefones: ["11 9999-9999", "21 8888-8888"],
    ativo: true,
};
  
const apenasArrays = filtrarPropriedadesArray(dados);
console.log("Propriedades do tipo array:", apenasArrays);

// Exercício 43: Combinar Objetos com Precedência
function combinarObjetosComPrecedencia(obj1, obj2) {
    const objetoCombinado = { ...obj1, ...obj2 };
    return objetoCombinado;
  }
  
  const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: 5,
  };
  
  const obj2 = {
    c: 4,
    e: 6,
    b: 7,
};
  
const objetoFinal = combinarObjetosComPrecedencia(obj1, obj2);
console.log("Objeto combinado:", objetoFinal);

// Exercício 44: Contar Propriedades do Tipo String
function contarPropriedadesString(objeto) {
    let contador = 0;
    for (const chave in objeto) {
      if (typeof objeto[chave] === 'string') {
        contador++;
      }
    }
    return contador;
  }
  
  const info = {
    nome: "Carlos",
    idade: 28,
    cidade: "Rio de Janeiro",
    profissao: "Engenheiro",
    hobbies: ["música", "livros"],
};
  
const numeroStrings = contarPropriedadesString(info);
console.log("Número de propriedades do tipo string:", numeroStrings);

// Exercício 45: Criar Objeto com Contagem de Strings
function contarOcorrenciasString(arrayDeStrings) {
    const contagem = {};
    for (const str of arrayDeStrings) {
      contagem[str] = (contagem[str] || 0) + 1;
    }
    return contagem;
}
  
const frutas = ["maçã", "banana", "maçã", "laranja", "banana", "banana"];
const contagemFrutas = contarOcorrenciasString(frutas);
console.log("Contagem de ocorrências de strings:", contagemFrutas);

// Exercício 46: Sumarizar Vendas por Vendedor
function sumarizarVendasPorVendedor(vendas) {
    const totalVendas = {};
    for (const venda of vendas) {
      const vendedor = venda.vendedor;
      const valor = venda.valor;
      totalVendas[vendedor] = (totalVendas[vendedor] || 0) + valor;
    }
    return totalVendas;
  }
  
  const vendasRealizadas = [
    { vendedor: "Ana", valor: 150 },
    { vendedor: "Bruno", valor: 200 },
    { vendedor: "Ana", valor: 100 },
    { vendedor: "Carlos", valor: 300 },
    { vendedor: "Bruno", valor: 120 },
];
  
const vendasPorVendedor = sumarizarVendasPorVendedor(vendasRealizadas);
console.log("Total de vendas por vendedor:", vendasPorVendedor);

// Exercício 47: Transformar Propriedades do Objeto
function transformarPropriedades(objeto, funcao) {
    const objetoTransformado = {};
    for (const chave in objeto) {
      objetoTransformado[chave] = funcao(objeto[chave]);
    }
    return objetoTransformado;
  }
  
  const numeros = {
    a: 5,
    b: 10,
    c: -3,
  };
  
  const quadrado = (num) => num * num;
  const numerosAoQuadrado = transformarPropriedades(numeros, quadrado);
  console.log("Números ao quadrado:", numerosAoQuadrado);
  
  const texto = {
    nome: "alice",
    cidade: "nova york",
};
  
const uppercase = (str) => str.toUpperCase();
const textoUppercase = transformarPropriedades(texto, uppercase);
console.log("Texto em maiúsculo:", textoUppercase);

// Exercício 48: Combinar Inventários de Lojas
function combinarInventarios(inventarioA, inventarioB) {
    const inventarioCombinado = { ...inventarioA };
    for (const item in inventarioB) {
      inventarioCombinado[item] = (inventarioCombinado[item] || 0) + inventarioB[item];
    }
    return inventarioCombinado;
  }
  
  const inventarioLojaA = {
    maçã: 10,
    banana: 20,
    laranja: 15,
  };
  
  const inventarioLojaB = {
    banana: 5,
    uva: 12,
    maçã: 8,
};

const inventarioTotal = combinarInventarios(inventarioLojaA, inventarioLojaB);
console.log("Inventário combinado:", inventarioTotal);

