var dupla = window.prompt("Digite a quantidade de pessoas para o Rodeio")
for (let contador = 0; contador <= dupla; contador = contador + 1) {
    if (contador % 2 == 0 && contador != 0){
       console.log(contador + "    PAR   está Classificado! - Bem Vindo ao Rodeio!")
    } else if  (contador % 2 != 0) {
       console.log(contador + "    IMPAR está Desclassificado! - Infelizmente não poderá entrar no Rodeio!")
    } else { 
       console.log(contador + '\t numero "ZERO" 0')
    }
}