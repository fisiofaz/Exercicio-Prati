// 1. Verificar se um número é par ou ímpar:
const numero = parseInt(prompt("Digite um número inteiro:"));

if (numero % 2 === 0) {
  console.log(`O número ${numero} é par.`);
} else {
  console.log(`O número ${numero} é ímpar.`);
}

// 2. Classificar a idade em categorias:
const idade = parseInt(prompt("Digite a idade da pessoa:"));

if (idade < 12) {
  console.log("Criança");
} else if (idade < 18) {
  console.log("Adolescente");
} else if (idade < 60) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}

// 3. Classificar nota:
const nota = parseFloat(prompt("Digite a nota (de 0 a 10):"));

if (nota >= 7.0 && nota <= 10.0) {
  console.log("Aprovado");
} else if (nota >= 5.0 && nota < 7.0) {
  console.log("Recuperação");
} else if (nota >= 0.0 && nota < 5.0) {
  console.log("Reprovado");
} else {
  console.log("Nota inválida.");
}

// 4. Menu interativo com switch-case:
while (true) {
    const opcao = prompt(
      "\nEscolha uma opção:\n1. Opção 1\n2. Opção 2\n3. Opção 3\n4. Sair\nDigite o número da sua escolha:"
    );
  
    switch (opcao) {
      case "1":
        console.log("Você escolheu a Opção 1.");
        // Lógica para a Opção 1
        break;
      case "2":
        console.log("Você escolheu a Opção 2.");
        // Lógica para a Opção 2
        break;
      case "3":
        console.log("Você escolheu a Opção 3.");
        // Lógica para a Opção 3
        break;
      case "4":
        console.log("Saindo do programa.");
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  
    if (opcao === "4") {
      break;
    }
}

// 5. Calcular IMC e classificar peso:
const peso = parseFloat(prompt("Digite o seu peso em kg:"));
const altura = parseFloat(prompt("Digite a sua altura em metros:"));

const imc = peso / (altura ** 2);
console.log(`Seu IMC é: ${imc.toFixed(2)}`);

if (imc < 18.5) {
  console.log("Baixo peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
  console.log("Sobrepeso");
} else {
  console.log("Obesidade");
}

// 6. Verificar tipo de triângulo:
const a = parseFloat(prompt("Digite o lado A do triângulo:"));
const b = parseFloat(prompt("Digite o lado B do triângulo:"));
const c = parseFloat(prompt("Digite o lado C do triângulo:"));

if (a < b + c && b < a + c && c < a + b) {
  console.log("Os lados formam um triângulo.");
  if (a === b && b === c) {
    console.log("Triângulo Equilátero");
  } else if (a === b || a === c || b === c) {
    console.log("Triângulo Isósceles");
  } else {
    console.log("Triângulo Escaleno");
  }
} else {
  console.log("Os lados não formam um triângulo.");
}

// 7. Calcular valor total da compra de maçãs:
const numMacas = parseInt(prompt("Digite o número de maçãs compradas:"));

let precoUnitario;
if (numMacas < 12) {
  precoUnitario = 0.30;
} else {
  precoUnitario = 0.25;
}

const valorTotal = numMacas * precoUnitario;
console.log(`O valor total da compra é: R$ ${valorTotal.toFixed(2)}`);

// 8. Ler e escrever dois valores em ordem crescente:
const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
const valor2 = parseFloat(prompt("Digite o segundo valor:"));

if (valor1 < valor2) {
  console.log(`Em ordem crescente: ${valor1}, ${valor2}`);
} else {
  console.log(`Em ordem crescente: ${valor2}, ${valor1}`);
}

// 9. Contagem regressiva de 10 a 1:
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 10. Escrever um número 10 vezes:
const numeros = parseInt(prompt("Digite um número inteiro:"));
for (let i = 0; i < 10; i++) {
  console.log(numeros);
}

//11. Calcular a soma de 5 números:
let soma1 = 0;
for (let i = 0; i < 5; i++) {
  const numero1 = parseFloat(prompt(`Digite o ${i + 1}º número:`));
  soma1 += numero1;
}
console.log(`A soma total dos números é: ${soma}`);

// 12. Exibir a tabuada de um número:
const numero2 = parseInt(prompt("Digite um número para ver a tabuada:"));
console.log(`Tabuada do ${numero2}:`);
for (let i = 1; i <= 10; i++) {
  const resultado = numero2 * i;
  console.log(`${numero2} x ${i} = ${resultado}`);
}

// 13. Calcular a média aritmética de números decimais (até digitar 0):
let soma2 = 0;
let contador = 0;
while (true) {
  const numero3 = parseFloat(prompt("Digite um número decimal (ou 0 para sair):"));
  if (numero3 === 0) {
    break;
  }
  soma2 += numero3;
  contador++;
}

if (contador > 0) {
  const media = soma2 / contador;
  console.log(`A média aritmética dos números digitados é: ${media.toFixed(2)}`);
} else {
  console.log("Nenhum número foi digitado.");
}

// 14. Calcular o fatorial de um número:
const numero4 = parseInt(prompt("Digite um número inteiro para calcular o fatorial:"));

if (numero4 < 0) {
  console.log("O fatorial não está definido para números negativos.");
} else if (numero4 === 0) {
  console.log("O fatorial de 0 é 1.");
} else {
  let fatorial = 1;
  for (let i = 1; i <= numero4; i++) {
    fatorial *= i;
  }
  console.log(`O fatorial de ${numero4} é ${fatorial}`);
}

// 15. Gerar e imprimir os primeiros 10 números da sequência de Fibonacci:
let d = 0;
let e = 1;
console.log(d);
console.log(e);
for (let i = 0; i < 8; i++) {
  const proximo = d + e;
  console.log(proximo);
  d = e;
  e = proximo;
}