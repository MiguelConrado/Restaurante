num = 0

var total = document.getElementById('total')
var total1 = document.getElementById('total1')
var total2 = document.getElementById('total2')
var total3 = document.getElementById('total3')
var total4 = document.getElementById('total4')
var total5 = document.getElementById('total5')
var total6 = document.getElementById('total6')
var total7 = document.getElementById('total7')

let compras = {
    item:'',
    item1:'', 
    item12:'',
    item13:'',
    item14:'',
    item15:'',
    item16:'',
    item17:'',
}

function comprou1(){
    total = +1
    compras[0].push(Number(total))
    total.innerHTML = `${compras.length}`
}
