function palindromo1(nome) {
    var palavra = "";

    for (var i = 0; i < nome.length; i++) {
        for (var j = i; j < nome.length; j++) {
            var substring = nome.substring(i, j + 1);
            if (palindromo2(substring) && substring.length > palavra.length) {
                palavra = substring;
            }
        }
    }

    return palavra;
}
  
function palindromo2(str) {
    var reverso = str.split("").reverse().join("");
    return str === reverso;
}
  
// Caso de teste
var input = "babad";
var expectedOutput = "bab";
var output = palindromo1(input);
console.log("Input: " + input);
console.log("Output: " + output);
console.log("Expected Output: " + expectedOutput);
console.log("Passou no teste? " + (output === expectedOutput));