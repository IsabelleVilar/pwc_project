function primeiraLetraMaiuscula(str) {
    var frases = str.split(/([.!?] )/);

    for (var i = 0; i < frases.length; i++) {
        var frase = frases[i];
        frase = frase.charAt(0).toUpperCase() + frase.slice(1);
        frases[i] = frase;
    }

    return frases.join("");
}
  
// Caso de teste
var input = "hello. how are you? i'm fine, thank you.";
var expectedOutput = "Hello. How are you? I'm fine, thank you.";
var output = primeiraLetraMaiuscula(input);
console.log("Input: " + input);
console.log("Output: " + output);
console.log("Expected Output: " + expectedOutput);
console.log("Passou no teste? " + (output === expectedOutput));