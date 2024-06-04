// Johann Sebastian Bauer e José Roberto Rodrigues.


//------------------------ atv 1 --------------------------
var arr = [1,2,3,4,5]
var atv1 = (array) => 
array.map((a) => a *= 2);
console.log(atv1(arr))

//------------------------ atv 2 --------------------------

var arr2 = ["JSOFJIEFNIEGIEGIG", "jo", "jooj", "joojo"]
var atv2 = (arr) => 
arr.sort((a, b) => a.length - b.length);
console.log(atv2(arr2));

//------------------------ atv 3 --------------------------

var arr3 = [1,2,3,4,5,6,7,8,9]
var arrNew = arr3.filter(a => a % 2 === 0)
console.log(arrNew)

/*---------------------- Pesquisa -------------------------

Arrow function basicamente servem para escrever a sintaxe de 
uma função de forma mais curta, porém só irá funcionar se a 
função tiver instruções doque deve fazer. Os parâmetros de-
vem ir dentro dos parênteses, porém se tiver apenas um parâ-
metro, podemos tirar os parênteses também. Segue os exemplos:

Sem arrow function: hello = function() {
                        return "Hello World!";
                    }

Com arrow function: hello = () => "Hello World!";

Arrow function com parâmetros:  hello = (val) => "Hello " + val;

Arrow function com 1 parâmetro: hello = val => "Hello " + val;

*/