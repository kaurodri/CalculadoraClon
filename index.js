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
            var resultado = (100 * lista.get(opcao)[potencia - 1]) / 100;
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
    if (opcao == "AT" || opcao == "HP") {

        if (resultado - 1 < valor2 && valor2 < resultado + 1) {
            alert("Parabéns! Seu Clon está Perfeito.");
        } else {
            alert("Ops! Seu Clon não está Perfeito. Você está perdendo " + Math.trunc(resultado - valor2) + " de " + opcao);
        }

    }
    if (opcao == "BL") {

        if (valor2.toFixed(2) == resultado.toFixed(2)) {
            alert("Parabéns! Seu Clon está Perfeito.");
        } else {
            alert("Ops! Seu Clon não está Perfeito. Você está perdendo " + (resultado - valor2).toFixed(2) + "% de " + opcao);
        }
    }
    if (opcao == "EV" || opcao == "CT") {

        if (valor2.toFixed(2) == resultado.toFixed(2)) {
            alert("Parabéns! Seu Clon está Perfeito.");
        } else {
            alert("Ops! Seu Clon não está Perfeito. Você está perdendo " + (resultado - valor2).toFixed(2) + "% de " + opcao);
        }

    }
}

{
    document.getElementById("opcao").addEventListener("change", function () {
        if (document.getElementById("opcao").value == "BL") {
            document.getElementById("valor1").type = 'text';
            document.getElementById("valor1").value = "00.00%";
            document.getElementById("valor1").readOnly = true;
            
        } else {
            document.getElementById("valor1").type = 'number';
            document.getElementById("valor1").value = "0";
            document.getElementById("valor1").readOnly = false;
        }
    })
}

{
    const myInput = document.getElementById("valor2");
    myInput.addEventListener("input", function () {
        if(document.getElementById("opcao").value == "BL"){
            if (myInput.value > lista.get(document.getElementById("opcao").value)[Number(document.getElementById("potencia").value) - 1]){
                myInput.value = '';
                alert("Por favor coloque um número válido. " + lista.get(document.getElementById("opcao").value)[Number(document.getElementById("potencia").value) - 1]);
            }
        } else {
            if (myInput.value > (Number(document.getElementById("valor1").value) * lista.get(document.getElementById("opcao").value)[Number(document.getElementById("potencia").value) - 1]) / 100) {
                myInput.value = '';
                alert("Por favor coloque um número válido.");
            }
        }
    });
}

{
    document.getElementById("opcao").addEventListener("change", function () {
        if (document.getElementById("opcao").value == "AT") {
            document.getElementById("textoClon").textContent = "Ataque";
        } if (document.getElementById("opcao").value == "CT") {
            document.getElementById("textoClon").textContent = "Golpe Crítico";
        } if (document.getElementById("opcao").value == "BL") {
            document.getElementById("textoClon").textContent = "Bloquear";
        } if (document.getElementById("opcao").value == "EV") {
            document.getElementById("textoClon").textContent = "Evitar";
        } if (document.getElementById("opcao").value == "HP") {
            document.getElementById("textoClon").textContent = "HP Max";
        }
    })
}

{
    let opcao = document.getElementById("potencia");
    var textoClon = document.getElementById("clonNum");

    opcao.addEventListener("change", function () {
        if (opcao.value == "1") {
            textoClon.src = "banco-imagens/clon-1.png";
        } if (opcao.value == "2") {
            textoClon.src = "banco-imagens/clon-2.png";
        } if (opcao.value == "3") {
            textoClon.src = "banco-imagens/clon-3.png";
        } if (opcao.value == "4") {
            textoClon.src = "banco-imagens/clon-4.png";
        } if (opcao.value == "5") {
            textoClon.src = "banco-imagens/clon-5.png";
        } if (opcao.value == "6") {
            textoClon.src = "banco-imagens/clon-6.png";
        } if (opcao.value == "7") {
            textoClon.src = "banco-imagens/clon-null.png";
        } if (opcao.value == "8") {
            textoClon.src = "banco-imagens/clon-8.png";
        } if (opcao.value == "9") {
            textoClon.src = "banco-imagens/clon-null.png";
        } if (opcao.value == "10") {
            textoClon.src = "banco-imagens/clon-10.png";
        } if (opcao.value == "11") {
            textoClon.src = "banco-imagens/clon-null.png";
        } if (opcao.value == "12") {
            textoClon.src = "banco-imagens/clon-null.png";
        } if (opcao.value == "13") {
            textoClon.src = "banco-imagens/clon-null.png";
        } if (opcao.value == "14") {
            textoClon.src = "banco-imagens/clon-null.png";
        } if (opcao.value == "15") {
            textoClon.src = "banco-imagens/clon-15.png";
        } 
    })
}  

{

    document.getElementById("opcao").addEventListener("change", function () {
        if (document.getElementById("opcao").value == "AT") {
            document.getElementById("baseatt").src = "banco-imagens/att-at.png";
        } if (document.getElementById("opcao").value == "CT") {
            document.getElementById("baseatt").src = "banco-imagens/att-ct.png";
        } if (document.getElementById("opcao").value == "BL") {
            document.getElementById("baseatt").src = "banco-imagens/att-bl.png";
        } if (document.getElementById("opcao").value == "EV") {
            document.getElementById("baseatt").src = "banco-imagens/att-ev.png";
        } if (document.getElementById("opcao").value == "HP") {
            document.getElementById("baseatt").src = "banco-imagens/att-hp.png";
        }
    })
}