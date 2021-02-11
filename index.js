var gas, alc, result, repete

do {

gas = prompt ('Insira o preço da gasolina: ')
alc = prompt ('Insira o preço do alcool: ')

result = gas / alc
alert (result)

if (result > 0.7) {

    alert ('Abasteça com gasolina')
 } 

if (result === 0.7) {

  alert ('Abasteça com alcool ou gasolina')
}

if (result < 0.7) {

  alert ('Abasteça com alcool')
}

repete = prompt ("Deseja refazer os cálculos? (s/n)")

}while (repete == 's' || repete == 'S' ) {

if (repete != 's'){

  alert ('Ok. Programa encerrado')
  
}

}
