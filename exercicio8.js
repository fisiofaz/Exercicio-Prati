//Seção 1: Estruturas de Controle Avançadas
//1. Validação de Datas

function ehDataValida(dia, mes, ano) {
    if (ano < 1 || mes < 1 || mes > 12 || dia < 1) return false;
    
    const diasPorMes = [31, (ehBissexto(ano) ? 29 : 28), 31, 30, 31, 30, 
                        31, 31, 30, 31, 30, 31];
    
    return dia <= diasPorMes[mes - 1];
}

function ehBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

//2. Jogo de Adivinhação

function jogoAdivinhacao() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativa;
    let tentativas = 0;

    while (tentativa !== numeroSecreto) {
        tentativa = parseInt(prompt("Adivinhe o número entre 1 e 100:"));
        tentativas++;

        if (tentativa < numeroSecreto) {
            alert("Mais alto!");
        } else if (tentativa > numeroSecreto) {
            alert("Mais baixo!");
        } else {
            alert(`Parabéns! Você acertou em ${tentativas} tentativas.`);
        }
    }
}

jogoAdivinhacao(); 

//3. Palavras Únicas

function palavrasUnicas(texto) {
    const palavras = texto.split(" ");
    const unicas = [];

    for (let i = 0; i < palavras.length; i++) {
        if (!unicas.includes(palavras[i])) {
            unicas.push(palavras[i]);
        }
    }

    return unicas;
}

// Exemplo de uso:
console.log(palavrasUnicas("olá olá mundo mundo"));

//Seção 2: Funções e Recursão
//4. Fatorial Recursivo

function fatorial(n) {
    if (n < 0) {
        throw new Error("Fatorial não definido para n < 0");
    }
    if (n === 0) {
        return 1;
    }
    return n * fatorial(n - 1);
}

// Exemplo de uso:
console.log(fatorial(5)); // 120

//5. Debounce

function debounce(fn, delay) {
    let timeoutId;

    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}

// Exemplo de uso:
 const log = debounce(() => console.log('Executado!'), 1000);
log();
log(); 

//6. Memoization

function memoize(fn) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    }
}

// Exemplo de uso:
const slowFn = (n) => n ** 2;
const memoizedFn = memoize(slowFn);
console.log(memoizedFn(5)); // Calcula
console.log(memoizedFn(5)); // Do cache

//Seção 3: Arrays e Objetos Complexos
//7. Mapeamento e Ordenação

function nomesOrdenadosPorPreco(produtos) {
    return produtos
        .sort((a, b) => a.preco - b.preco)
        .map(produto => produto.nome);
}

// Exemplo de uso:
const produtos = [{nome: 'A', preco: 30}, {nome: 'B', preco: 10}, {nome: 'C', preco: 20}];
console.log(nomesOrdenadosPorPreco(produtos)); // ['B', 'C', 'A']

//8. Agrupamento por Propriedade

function agruparPorCliente(vendas) {
    return vendas.reduce((acc, venda) => {
        if (!acc[venda.cliente]) {
            acc[venda.cliente] = 0;
        }
        acc[venda.cliente] += venda.total;
        return acc;
    }, {});
}

// Exemplo de uso:
const vendas = [{cliente: 'João', total: 100}, {cliente: 'Maria', total: 200}, {cliente: 'João', total: 50}];
console.log(agruparPorCliente(vendas)); // {João: 150, Maria: 200}

//9. Conversão Entre Formatos

function paresParaObjeto(pares) {
    return Object.fromEntries(pares);
}

function objetoParaPares(obj) {
    return Object.entries(obj);
}

// Exemplo de uso:
const pares = [['a', 1], ['b', 2]];
console.log(paresParaObjeto(pares)); // {a: 1, b: 2}

const obj = {a: 1, b: 2};
console.log(objetoParaPares(obj)); // [['a', 1], ['b', 2]]




