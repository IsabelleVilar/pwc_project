function reverterPalavras(frase) {
    var palavras = frase.split(" ");
    var palavrasRevertidas = palavras.reverse();
    var fraseRevertida = palavrasRevertidas.join(" ");
    return fraseRevertida;
}

// Caso de teste
var input = "Hello, World! OpenAI is amazing.";
var expectedOutput = "amazing. is OpenAI World! Hello,";
var output = reverterPalavras(input);
console.log("Input: " + input);
console.log("Output: " + output);
console.log("Expected Output: " + expectedOutput);
console.log("Passou no teste? " + (output === expectedOutput));