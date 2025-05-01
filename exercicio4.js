// Exercicio 23 a 31
// Exercício 23: Matriz Identidade 7x7
function criarMatrizIdentidade(tamanho) {
    const matriz = [];
    for (let i = 0; i < tamanho; i++) {
      matriz[i] = [];
      for (let j = 0; j < tamanho; j++) {
        matriz[i][j] = i === j ? 1 : 0;
      }
    }
    return matriz;
  }
  
  const matrizIdentidade = criarMatrizIdentidade(7);
  console.log("\nMatriz Identidade 7x7:");
  matrizIdentidade.forEach(linha => console.log(linha.join("\t")));

//Exercício 24: Contar Negativos por Linha
function contarNegativosPorLinha() {
    const matrizM = [];
    console.log("Digite os elementos da Matriz M (6x8):");
    for (let i = 0; i < 6; i++) {
      matrizM[i] = [];
      for (let j = 0; j < 8; j++) {
        const valor = parseInt(prompt(`Digite o valor para M[${i + 1}][${j + 1}]:`));
        matrizM[i][j] = valor;
      }
}
  
    const vetorC = [];
    for (let i = 0; i < 6; i++) {
      let negativos = 0;
      for (let j = 0; j < 8; j++) {
        if (matrizM[i][j] < 0) {
          negativos++;
        }
      }
      vetorC[i] = negativos;
    }    
  
    console.log("\nMatriz M:");
    matrizM.forEach(linha => console.log(linha.join("\t")));
    console.log("\nVetor C (quantidade de negativos por linha):", vetorC);
}
  
contarNegativosPorLinha();

// Exercício 25: Soma das Colunas da Matriz 15x20
function somarColunasMatriz() {
    const matriz = [];
    console.log("Digite os elementos da Matriz (15x20):");
    for (let i = 0; i < 15; i++) {
      matriz[i] = [];
      for (let j = 0; j < 20; j++) {
        const valor = parseFloat(prompt(`Digite o valor para a matriz[${i + 1}][${j + 1}]:`));
        matriz[i][j] = valor;
      }
    }
  
    const somaColunas = new Array(20).fill(0);
    for (let j = 0; j < 20; j++) {
      for (let i = 0; i < 15; i++) {
        somaColunas[j] += matriz[i][j];
      }
    }
  
    console.log("\nMatriz lida:");
    matriz.forEach(linha => console.log(linha.join("\t")));
    console.log("\nSoma de cada coluna:", somaColunas);
}
  
somarColunasMatriz();

// Exercício 26: Multiplicação de Matrizes 3x5
function multiplicarMatrizes() {
    const matrizA = [];
    console.log("Digite os elementos da Matriz A (3x5):");
    for (let i = 0; i < 3; i++) {
      matrizA[i] = [];
      for (let j = 0; j < 5; j++) {
        const valor = parseFloat(prompt(`Digite o valor para A[${i + 1}][${j + 1}]:`));
        matrizA[i][j] = valor;
      }
    }
  
    const matrizB = [];
    console.log("\nDigite os elementos da Matriz B (3x5):");
    for (let i = 0; i < 3; i++) {
      matrizB[i] = [];
      for (let j = 0; j < 5; j++) {
        const valor = parseFloat(prompt(`Digite o valor para B[${i + 1}][${j + 1}]:`));
        matrizB[i][j] = valor;
      }
    }
  
    const matrizP = [];
    for (let i = 0; i < 3; i++) {
      matrizP[i] = [];
      for (let j = 0; j < 5; j++) {
        let soma = 0;
        for (let k = 0; k < 3; k++) {
          soma += matrizA[i][k] * matrizB[k][j];
        }
        matrizP[i][j] = soma;
      }
    }
  
    console.log("\nMatriz A:");
    matrizA.forEach(linha => console.log(linha.join("\t")));
    console.log("\nMatriz B:");
    matrizB.forEach(linha => console.log(linha.join("\t")));
    console.log("\nMatriz Produto P:");
    matrizP.forEach(linha => console.log(linha.join("\t")));
}
  
multiplicarMatrizes();

// Exercício 27: Multiplicar Matriz por Valor e Colocar em Vetor
function multiplicarMatrizPorValor() {
    const matrizM = [];
    console.log("Digite os elementos da Matriz M (6x6):");
    for (let i = 0; i < 6; i++) {
      matrizM[i] = [];
      for (let j = 0; j < 6; j++) {
        const valor = parseFloat(prompt(`Digite o valor para M[${i + 1}][${j + 1}]:`));
        matrizM[i][j] = valor;
      }
    }
  
    const valorA = parseFloat(prompt("Digite o valor A para multiplicar a matriz:"));
    const vetorV = [];
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        vetorV.push(matrizM[i][j] * valorA);
      }
    }
  
    console.log("\nMatriz M:");
    matrizM.forEach(linha => console.log(linha.join("\t")));
    console.log(`\nVetor V (Matriz M multiplicada por ${valorA}):`, vetorV);
}
  
multiplicarMatrizPorValor();

// Exercício 28: Soma Acima e Abaixo da Diagonal Principal
function somarAcimaAbaixoDiagonal() {
    const matriz = [];
    console.log("Digite os elementos da Matriz (10x10):");
    for (let i = 0; i < 10; i++) {
      matriz[i] = [];
      for (let j = 0; j < 10; j++) {
        const valor = parseFloat(prompt(`Digite o valor para a matriz[${i + 1}][${j + 1}]:`));
        matriz[i][j] = valor;
      }
    }
  
    let somaAcima = 0;
    let somaAbaixo = 0;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (j > i) {
          somaAcima += matriz[i][j];
        } else if (j < i) {
          somaAbaixo += matriz[i][j];
        }
      }
    }
  
    console.log("\nMatriz lida:");
    matriz.forEach(linha => console.log(linha.join("\t")));
    console.log("\nSoma dos elementos acima da diagonal principal:", somaAcima);
    console.log("Soma dos elementos abaixo da diagonal principal:", somaAbaixo);
}
  
somarAcimaAbaixoDiagonal();

// Exercício 29: Somas na Matriz 5x5
function calcularSomasMatriz5x5() {
    const matrizM = [];
    console.log("Digite os elementos da Matriz M (5x5):");
    for (let i = 0; i < 5; i++) {
      matrizM[i] = [];
      for (let j = 0; j < 5; j++) {
        const valor = parseFloat(prompt(`Digite o valor para M[${i + 1}][${j + 1}]:`));
        matrizM[i][j] = valor;
      }
    }
  
    let somaLinha4 = 0;
    for (let j = 0; j < 5; j++) {
      somaLinha4 += matrizM[3][j]; // Linha 4 (índice 3)
    }
  
    let somaColuna2 = 0;
    for (let i = 0; i < 5; i++) {
      somaColuna2 += matrizM[i][1]; // Coluna 2 (índice 1)
    }
  
    let somaDiagonalPrincipal = 0;
    for (let i = 0; i < 5; i++) {
      somaDiagonalPrincipal += matrizM[i][i];
    }
  
    let somaTotal = 0;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        somaTotal += matrizM[i][j];
      }
    }
  
    console.log("\nMatriz M:");
    matrizM.forEach(linha => console.log(linha.join("\t")));
    console.log("\nSoma da linha 4:", somaLinha4);
    console.log("Soma da coluna 2:", somaColuna2);
    console.log("Soma da diagonal principal:", somaDiagonalPrincipal);
    console.log("Soma de todos os elementos da matriz:", somaTotal);
}
  
calcularSomasMatriz5x5();

// Exercício 30: Somas de Linhas e Colunas em Vetores
function somasLinhasColunasMatriz() {
    const matrizM = [];
    console.log("Digite os elementos da Matriz M (5x5):");
    for (let i = 0; i < 5; i++) {
      matrizM[i] = [];
      for (let j = 0; j < 5; j++) {
        const valor = parseFloat(prompt(`Digite o valor para M[${i + 1}][${j + 1}]:`));
        matrizM[i][j] = valor;
      }
    }
  
    const somaLinhas = new Array(5).fill(0);
    const somaColunas = new Array(5).fill(0);
  
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        somaLinhas[i] += matrizM[i][j];
        somaColunas[j] += matrizM[i][j];
      }
    }
  
    console.log("\nMatriz M:");
    matrizM.forEach(linha => console.log(linha.join("\t")));
    console.log("\nVetor SL (soma das linhas):", somaLinhas);
    console.log("Vetor SC (soma das colunas):", somaColunas);
}
  
somasLinhasColunasMatriz();

// Exercício 31: Contar e Filtrar Valor em Matriz
function contarIguaisACriarMatrizDiferentes() {
    const valorA = parseInt(prompt("Digite o valor inteiro A:"));
    const matrizV = [];
    console.log("Digite os elementos da Matriz V (30x30):");
    for (let i = 0; i < 30; i++) {
      matrizV[i] = [];
      for (let j = 0; j < 30; j++) {
        const valor = parseInt(prompt(`Digite o valor para V[${i + 1}][${j + 1}]:`));
        matrizV[i][j] = valor;
      }
    }
  
    let contadorA = 0;
    for (let i = 0; i < 30; i++) {
      for (let j = 0; j < 30; j++) {
        if (matrizV[i][j] === valorA) {
          contadorA++;
        }
      }
    }
  
    const matrizX = [];
    for (let i = 0; i < 30; i++) {
      matrizX[i] = [];
      for (let j = 0; j < 30; j++) {
        if (matrizV[i][j] !== valorA) {
          matrizX[i].push(matrizV[i][j]);
        }
      }
    }
  
    console.log(`\nO valor ${valorA} aparece ${contadorA} vezes na Matriz V.`);
    console.log("\nMatriz V:");
    matrizV.forEach(linha => console.log(linha.join("\t")));
    console.log("\nMatriz X (elementos diferentes de A):");
    matrizX.forEach(linha => console.log(linha.join("\t")));
}
  
contarIguaisACriarMatrizDiferentes();
