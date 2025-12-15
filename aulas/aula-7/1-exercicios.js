window.onload = function(e){

    var btn1 = document.getElementById("btn1");

    btn1.onclick = function(e){

        var numerotxt = document.getElementById("txt1").value;

        var numero = parseInt(numerotxt);

        var calculo = raiz(numero);

        alert(calculo);
    };

    function raiz(numero){

        var resultado = numero*numero;

        return resultado;
    }
}