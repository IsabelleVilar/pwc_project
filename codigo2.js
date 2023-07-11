function removerDuplicados(str) {
    var caracterUnico = [];
    var resultado = "";
  
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (!caracterUnico.includes(char)) {
            caracterUnico.push(char);
            resultado += char;
        }
    }
  
    return resultado;
  }
  
  // Caso de teste
  var input = "Hello, World!";
  var expectedOutput = "Helo, Wrd!";
  var output = removerDuplicados(input);
  console.log("Input: " + input);
  console.log("Output: " + output);
  console.log("Expected Output: " + expectedOutput);
  console.log("Passou no teste? " + (output === expectedOutput));