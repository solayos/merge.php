$(document).ready(function () {
    $('#areaScript ul li').hide();
    $('#botaoSortear').click(function () {
        var i = 0;
        var quantidade = parseInt(prompt("Quantos numeros vamos ordenar? \t\n (com ate 3 digitos)"));
        var areaScript = 'areaScript';
        var base = 'base';

        //criaElementos (pai, tipo, quantidade)
        var tipo = base;
        $('#' + areaScript).criaFilho(areaScript, tipo, 1);

        while (i < quantidade) {
            $('#' + areaScript + ' .' + tipo).criaLista(tipo, 1);

            i++;
        }

        if (quantidade > 8) {
            $('#' + areaScript + ' .base').css('height', '9em');
        }

        alert($('#' + areaScript + ' .' + tipo + ' ul li'));

        while (i < quantidade) {
            $('#' + areaScript + ' .' + tipo + ' ul li').eq(i).show().animate(
                {
                    opacity: 1,
                    color: "#000000",
                    padding: "5px 5px",
                    width: "60px"
                }, "slow");
            i++;
        }
    });
});

$.fn.criaFilho = function (pai, tipo, quantidade) {
    meuPai = $('#' + pai);
    if (tipo === 'base' || tipo === 'result' || tipo === 'childlevel1' || tipo === 'childlevel2' || tipo === 'childlevel3') {
        var filho = $('<div>').attr('id', tipo);
        meuPai.append(filho);
        meuPai.find('.' + tipo).hide();
    }
};

$.fn.criaLista = function (pai, limite) {
    meuPai = $('#' + pai);
    var i = 0;
    var listaLocal = getNumbers();

    while (i < limite) {
        meuPai.append('<ul>');
        meuPai.find('ul').eq(i).append('<li>' + listaLocal + '</li>');
        i++;
    }
};

function removeItem(item) {
    var itemRemover = item.lastChild;
    removeChild(itemRemover);
}

function getNumbers() {
    var entr;
    do {
        entr = prompt("Digite um numero");
    } while (entr == null || entr == "");
    return entr;
}

function merge_sort(arr) {
    var l = arr.length, m = Math.floor(l / 2);
    if (l <= 1) return arr;
    return merge(merge_sort(arr.slice(0, m)), merge_sort(arr.slice(m)));
}

function merge(left, right) {
    var result = [];
    var ll = left.length, rl = right.length;
    while (ll > 0 && rl > 0) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
            ll--;
        } else {
            result.push(right.shift());
            rl--;
        }
    }
    if (ll > 0) {
        result.push.apply(result, left);
    } else if (rl > 0) {
        result.push.apply(result, right);
    }
    return result;
}

/* codes in javascript */
function criaFilhoJS(pai, tipo, quantidade) {
    if (tipo === 'base' || tipo === 'result' || tipo === 'childlevel1' || tipo === 'childlevel2' || tipo === 'childlevel3') {
        var minhaBase = document.getElementById(pai);
        console.log(minhaBase);
        var filho = minhaBase.innerHTML();
        minhaBase.setAttribute('class', tipo);
    }
}

function criaListaJS(pai, limite) {
    var i = 0;
    var lista = pai.createElement('ul');

    while (i < limite) {
        var itemList = getNumbers();
        var item = lista.createElement('li');
        var valor = document.createTextNode(itemList);
        item.eq(i).appendChild(valor);
        i++;
    }
}
