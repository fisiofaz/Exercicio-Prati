// Exercicio 32 a 38
// Exercício 32: Dividir Linhas pelo Maior Módulo
function dividirLinhasPeloMaiorModulo() {
    const matrizM = [];
    console.log("Digite os elementos da Matriz M (12x13):");
    for (let i = 0; i < 12; i++) {
      matrizM[i] = [];
      for (let j = 0; j < 13; j++) {
        const valor = parseFloat(prompt(`Digite o valor para M[${i + 1}][${j + 1}]:`));
        matrizM[i][j] = valor;
      }
    }
  
    const matrizModificada = [];
    for (let i = 0; i < 12; i++) {
      let maiorModulo = 0;
      for (let j = 0; j < 13; j++) {
        const moduloAtual = Math.abs(matrizM[i][j]);
        if (moduloAtual > maiorModulo) {
          maiorModulo = moduloAtual;
        }
      }
  
      matrizModificada[i] = [];
      if (maiorModulo !== 0) {
        for (let j = 0; j < 13; j++) {
          matrizModificada[i][j] = matrizM[i][j] / maiorModulo;
        }
      } else {
        matrizModificada[i] = [...matrizM[i]]; // Se maior módulo é 0, mantém a linha original
      }
    }
  
    console.log("\nMatriz M lida:");
    matrizM.forEach(linha => console.log(linha.join("\t")));
    console.log("\nMatriz M modificada:");
    matrizModificada.forEach(linha => console.log(linha.join("\t")));
}
  
dividirLinhasPeloMaiorModulo();

// Exercício 33: Multiplicar Diagonal Principal pela Média da Secundária
function multiplicarDiagonalPelaMediaSecundaria() {
    const matriz = [];
    console.log("Digite os elementos da Matriz (3x3):");
    for (let i = 0; i < 3; i++) {
      matriz[i] = [];
      for (let j = 0; j < 3; j++) {
        const valor = parseFloat(prompt(`Digite o valor para a matriz[${i + 1}][${j + 1}]:`));
        matriz[i][j] = valor;
      }
    }
  
    let somaDiagonalSecundaria = 0;
    for (let i = 0; i < 3; i++) {
      somaDiagonalSecundaria += matriz[i][2 - i];
    }
    const mediaDiagonalSecundaria = somaDiagonalSecundaria / 3;
  
    for (let i = 0; i < 3; i++) {
      matriz[i][i] *= mediaDiagonalSecundaria;
    }
  
    console.log("\nMatriz após a multiplicação:");
    matriz.forEach(linha => console.log(linha.join("\t")));
}
  
multiplicarDiagonalPelaMediaSecundaria();

// Exercício 34: Multiplicar Linhas pelo Elemento da Diagonal Principal
function multiplicarLinhasPelaDiagonalPrincipal() {
    const matriz = [];
    console.log("Digite os elementos da Matriz (50x50):");
    for (let i = 0; i < 50; i++) {
      matriz[i] = [];
      for (let j = 0; j < 50; j++) {
        const valor = parseFloat(prompt(`Digite o valor para a matriz[${i + 1}][${j + 1}]:`));
        matriz[i][j] = valor;
      }
    }
  
    const matrizModificada = [];
    for (let i = 0; i < 50; i++) {
      const elementoDiagonal = matriz[i][i];
      matrizModificada[i] = [];
      for (let j = 0; j < 50; j++) {
        matrizModificada[i][j] = matriz[i][j] * elementoDiagonal;
      }
    }
  
    console.log("\nMatriz após as multiplicações:");
    matrizModificada.forEach(linha => console.log(linha.join("\t")));
}
  
multiplicarLinhasPelaDiagonalPrincipal();

// Exercício 35: Separar Pares e Ímpares em Vetores
function separarParesImpares() {
    const pares = [];
    const impares = [];
  
    for (let i = 0; i < 30; i++) {
      const valor = parseInt(prompt(`Digite o ${i + 1}º valor inteiro:`));
      if (valor % 2 === 0) {
        pares.push(valor);
        if (pares.length === 5) {
          console.log("Vetor de pares cheio:", pares);
          pares.length = 0; // Limpa o vetor
        }
      } else {
        impares.push(valor);
        if (impares.length === 5) {
          console.log("Vetor de ímpares cheio:", impares);
          impares.length = 0; // Limpa o vetor
        }
      }
    }
  
    console.log("\nConteúdo final do vetor de pares:", pares);
    console.log("Conteúdo final do vetor de ímpares:", impares);
}
  
separarParesImpares();

// Exercício 36: Loto Esportiva
function verificarLotoEsportiva() {
    const gabarito = [];
    console.log("Digite o gabarito da loteria esportiva (13 números inteiros):");
    for (let i = 0; i < 13; i++) {
      const numero = parseInt(prompt(`Digite o ${i + 1}º número do gabarito:`));
      gabarito.push(numero);
    }
  
    for (let apostador = 1; apostador <= 2; apostador++) { // Usando 2 para teste, substituir por 100
      const numeroCartao = prompt(`Digite o número do cartão do apostador ${apostador}:`);
      const respostas = [];
      console.log(`Digite as 13 respostas do apostador ${numeroCartao}:`);
      for (let i = 0; i < 13; i++) {
        const resposta = parseInt(prompt(`Digite a ${i + 1}ª resposta:`));
        respostas.push(resposta);
      }
  
      let acertos = 0;
      for (let i = 0; i < 13; i++) {
        if (respostas[i] === gabarito[i]) {
          acertos++;
        }
      }
  
      console.log(`\nApostador: ${numeroCartao}, Número de acertos: ${acertos}`);
      if (acertos === 13) {
        console.log("Parabéns, tu foi o GANHADOR!");
      }
    }
}
  
verificarLotoEsportiva();

// Exercício 37: Gabarito de Prova
function verificarGabaritoProva() {
    const gabarito = [];
    console.log("Digite o gabarito da prova (20 caracteres):");
    for (let i = 0; i < 20; i++) {
      const letra = prompt(`Digite a ${i + 1}ª letra do gabarito:`).toUpperCase();
      gabarito.push(letra);
    }
  
    for (let aluno = 1; aluno <= 2; aluno++) { // Usando 2 para teste, substituir por 50
      const respostas = [];
      console.log(`\nDigite as 20 respostas do aluno ${aluno}:`);
      for (let i = 0; i < 20; i++) {
        const resposta = prompt(`Digite a ${i + 1}ª resposta:`).toUpperCase();
        respostas.push(resposta);
      }
  
      let acertos = 0;
      for (let i = 0; i < 20; i++) {
        if (respostas[i] === gabarito[i]) {
          acertos++;
        }
      }
  
      console.log(`Aluno ${aluno}: Número de acertos: ${acertos}`);
      if (acertos >= 12) {
        console.log("APROVADO");
      } else {
        console.log("REPROVADO");
      }
    }
  }
  
verificarGabaritoProva();

// Exercício 38: Operações em Vetor
function operarVetor() {
    const vetor = [];
    console.log("Digite 6 números para o vetor:");
    for (let i = 0; i < 6; i++) {
      const numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
      vetor.push(numero);
    }
  
    const operacao = parseInt(prompt(
      "Digite a operação a ser realizada:\n" +
      "1 - Soma dos elementos\n" +
      "2 - Produto dos elementos\n" +
      "3 - Média dos elementos\n" +
      "4 - Ordenar os elementos em ordem crescente\n" +
      "5 - Mostrar o vetor"
    ));
  
    switch (operacao) {
      case 1:
        const soma = vetor.reduce((acc, curr) => acc + curr, 0);
        console.log("Soma dos elementos:", soma);
        break;
      case 2:
        const produto = vetor.reduce((acc, curr) => acc * curr, 1);
        console.log("Produto dos elementos:", produto);
        break;
      case 3:
        const media = vetor.reduce((acc, curr) => acc + curr, 0) / vetor.length;
        console.log("Média dos elementos:", media);
        break;
      case 4:
        const vetorOrdenado = [...vetor].sort((a, b) => a - b);
        console.log("Vetor ordenado:", vetorOrdenado);
        break;
      case 5:
        console.log("Vetor:", vetor);
        break;
      default:
        console.log("Operação inválida.");
    }
}
  
operarVetor();

