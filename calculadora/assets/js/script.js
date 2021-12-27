
function calculadora() {
    let opcao = parseInt(prompt(`Escolha a operação\n
    1 - Soma(+)\n 
    2 - Subtração(-)\n 
    3 - Multiplicação(*)\n
    4 - Divisão(/)\n
    5 - Divisão Inteira(%)\n
    6 - Potenciação(**)`));

    if (opcao >= 1 && opcao <= 6) {
        let number1 = Number(prompt("Primeiro número"));
        let number2 = Number(prompt("Segundo número"));
        if (!isNaN(number1) && !isNaN(number2)) {
            switch (opcao) {
                case 1:
                    soma(number1, number2);
                    break;
                case 2:
                    subtração(number1, number2);
                    break;
                case 3:
                    multiplicação(number1, number2);
                    break;
                case 4:
                    divisao(number1, number2);
                    break;
                case 5:
                    divisaoInteira(number1, number2);
                    break;
                case 6:
                    potenciação(number1, number2);
                    break;
                default:
                    alert("Opção incorreta!");
                    novaOperacao();
                    break;
            }
        } else {
            alert("Digite valores validos");
            calculadora();
        }
    } else {
        alert("Digite opção valida");
        novaOperacao();
    }
}

calculadora();

function soma(n1, n2) {
    alert(`${n1} + ${n2} = ${n1 + n2}`);
    novaOperacao();
}

function subtração(n1, n2) {
    alert(`${n1} - ${n2} = ${n1 - n2}`);
    novaOperacao();
}

function multiplicação(n1, n2) {
    alert(`${n1} * ${n2} = ${n1 * n2}`);
    novaOperacao();
}

function divisao(n1, n2) {
    alert(`${n1} / ${n2} = ${n1 / n2}`);
    novaOperacao();
}

function divisaoInteira(n1, n2) {
    alert(`Resto da divisão entre ${n1} e ${n2} é ${n1 % n2}`);
    novaOperacao();
}

function potenciação(n1, n2) {
    alert(`${n1} elevado na ${n2} = ${n1 ** n2}`);
    novaOperacao();
}

function novaOperacao() {
    let novaop = Number(prompt(`
    Deseja fazer outra operação? \n
    1 - Sim
    2 - Nao
    `))
    novaop === 1 ? calculadora() : "ok";
}
