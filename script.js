let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []



function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
            return true
    } else {
        return false
    }
}

function isLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !isLista(num.value, valores)) { //Só vai adcionar se for um numero e não estiver já na lista
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionar`
        lista.appendChild(item)
        res.innerHTML = ''
    
    } else {
        window.alert('Valor não valido')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione um numero!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res,innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} numeros de cadastrados! </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p>O menor numero informado foi ${menor}. </p>`
        res.innerHTML += `<p>A soma dos valores da: ${soma}. </p>`
        res.innerHTML += `<p>A media dos valores é ${media}. </p>`
    }
}