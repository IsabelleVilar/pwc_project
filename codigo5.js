function anagramaDePalindromo(str) {
    var contagemDeLetras = {};
  
    // Contagem de ocorrências de cada caractere
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (contagemDeLetras[char] === undefined) {
            contagemDeLetras[char] = 1;
        } else {
            contagemDeLetras[char]++;
        }
    }
  
    // Contagem de caracteres com contagem ímpar
    var contagemImpar = 0;
    for (var char in contagemDeLetras) {
        if (contagemDeLetras[char] % 2 !== 0) {
            contagemImpar++;
        }
    }
  
    // Verificação do palíndromo
    if (contagemImpar <= 1) {
        return str;
    } else {
        return false;
    }
}
  
// Caso de teste
var input = "racecar";
var expectedOutput = "racecar";
var output = anagramaDePalindromo(input);
console.log("Input: " + input);
console.log("Output: " + output);
console.log("Expected Output: " + expectedOutput);
console.log("Passou no teste? " + (output === expectedOutput));