let txt = 'ATx3x6x9x14x19x24x34x44x54x69x84x99x114x129x144' +
    '\nCTx15x30x45x70x95x120x170x220x270x345x420x495x570x645x720' +
    '\nBLx2x4x6x9x12x15x21x27x33x42x51x60x69x78x87' +
    '\nEVx12x24x36x56x76x96x136x176x216x276x336x296x456x516x576' +
    '\nHPx2x4x6x9x12x15x19x23x27x31x35x39x44x49x54';
let dados = txt.split("\n");
const players = [];
let tam = dados.length;

var c = 0;
while (c < tam) {
    try {
        let dadi = dados[c].split("x")
        dadi.shift()
        players.push([dados[c].split("x")[0], dadi])
        c++;
    } catch (erro) {
        console.log('[Erro] - :' + erro.message)
    }
}
var lista = new Map(players)

function calcular() {

    // Obter valores das caixas de entrada
    var valor1 = Number(document.getElementById("valor1").value);
    var valor2 = Number(document.getElementById("valor2").value);

    // Obter valores das caixas de seleção
    var potencia = Number(document.getElementById("potencia").value);
    var opcao = document.getElementById("opcao").value;
    var base = valor1;

    // Calcular o valor da exponenciação de acordo com a opção selecionada
    switch (opcao) {
        case "AT":
            var resultado = (base * lista.get(opcao)[potencia - 1]) / 100;
            break;
        case "CT":
            var resultado = (base * lista.get(opcao)[potencia - 1]) / 100;
            break;
        case "BL":
            var resultado = (base * lista.get(opcao)[potencia - 1]) / 100;
            break;
        case "EV":
            var resultado = (base * lista.get(opcao)[potencia - 1]) / 100;
            break;
        case "HP":
            var resultado = (base * lista.get(opcao)[potencia - 1]) / 100;
            break;
        default:
            alert("Selecione uma opção válida!");
            return;
    }

    // Verificar se o resultado bate com o valor da segunda caixa de entrada
    if (resultado - 1 < valor2 && valor2 < resultado + 1) {
        alert("Parabéns! Seu Clon está Perfeito.");
    } else {
        alert("Ops! Seu Clon não está Perfeito. Para que ele seja perfeito o valor deveria ser " + Math.trunc(resultado) + ".");
    }
}

{
    const myInput = document.getElementById("valor2");
    myInput.addEventListener("input", function () {
        if (myInput.value > (Number(document.getElementById("valor1").value) * lista.get(document.getElementById("opcao").value)[Number(document.getElementById("potencia").value) - 1]) / 100) {
            myInput.value = '';
            alert("Por favor coloque um número válido.");
        }
    });
}