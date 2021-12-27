let less = document.getElementById('decrement');
let plus = document.getElementById('increment');

let number = document.getElementById('number');
let inicio = 0;



plus.addEventListener('click', function () {
    inicio < 10 ? inicio += 1 : inicio;
    number.innerHTML = inicio;
})

less.addEventListener('click', function () {
    inicio > 0 ? inicio -= 1 : inicio;
    number.innerHTML = inicio;
})