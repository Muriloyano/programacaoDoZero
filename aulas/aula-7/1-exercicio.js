window.onload = function(e)
{
    var btn1 = document.getElementById("btn1");

    btn1.onclick = function(e){
        var mensagem = "Ola mundo";

        exibirmensagem(mensagem);
    };

    function exibirmensagem(mensagem){

        alert(mensagem);
    }
}