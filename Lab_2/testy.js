const res = require('express/lib/response');
const dane = require('./dane')

function zad_2_1(...argumenty) {
    console.log(argumenty)
    let sum = 0
    console.log(argumenty.reduce((previous, current) => {
        return previous + current;
    }))
}
zad_2_1(4, 6, 7, 9, 0, 2) // [4, 6, 7, 9, 0, 2]

function zad_2_2() {
    dane.listaZadan.forEach(element => {
        console.log(element.tekst)
    });

    let map = []
    dane.listaZadan.map(x => map.push(x.tekst))
    console.log(map)

    const result = dane.listaZadan.filter(element => element.zrealizowano)
    console.log(result)
}
zad_2_2()

function zad_2_3() {
    const result = dane.poniedzialek.concat(dane.wtorek)
    console.log(result)

    let map = result
        .map(x => x.czas /= 60)
        .filter(x => x > 2)
        .map(x => x *= 35)
        .reduce((previous, current) => { return previous + current })

    console.log(map.toFixed(2) + " PLN")
}
zad_2_3()

function zad_2_4() {
    let result = dane.firmy.filter(x => x.kategoria == "IT")
    console.log(result)

    result
        .filter(e => e.koniec < 2000 && e.poczatek >= 1990)
        .forEach(e => console.log(e))

    result
        .filter(e => e.koniec - e.poczatek > 10)
        .forEach(e => console.log(e))
}
zad_2_4()

const calc = require('./calc.js')

function zad_2_5(){
    console.log(calc.calc(1,2,3))
}
zad_2_5()