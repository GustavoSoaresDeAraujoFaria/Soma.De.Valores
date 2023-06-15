document.getElementById("botao").addEventListener("click", function() {
    var valor1 = parseInt(document.getElementById("inserirvalor1").value);
    var valor2 = parseInt(document.getElementById("inserirvalor2").value);
    
    if (isNaN(valor1) || isNaN(valor2)) {
    window.alert("Insira valores numéricos válidos nos campos.");
    
    }
    
    if (isNaN(valor2)) {
        window.alert("Insira valores numéricos válidos nos campos.");
    }
    
    if (isNaN(valor2)) {
        window.alert("Insira valores numéricos válidos nos campos.");
    }
    
    if (valor1 > valor2) {
    window.alert("Valor inválido, tente novamente. ");
    }
    
    else if (valor1 < valor2) {
        window.alert("Valor válido!");
    } 
    
    else {
        window.alert("Os valores são iguais.");
    }
})