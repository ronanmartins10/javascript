//! FUNÇÃO RECURSIVA 
//? (é um processo onde algo se define ou se repete com base em si mesmo. Na programação, refere-se a uma função que chama a si mesma para resolver um problema, dividindo-o em partes menores e idênticas até chegar a um "caso base" (a condição mais simples que pode ser resolvida diretamente). É importante ter esse caso base para evitar um loop infinito. )

function fatorial (n){
    if (n == 1) {
        return 1
    } else {
        return n * fatorial (n-1)
    }
}

console.log(fatorial(5))

/* 

    5! = 5 x 4 x 3 x 2 x 1 = 120
    5! = 5 x 4!

    n! = n x (n-1)
    1! = 1
*/



