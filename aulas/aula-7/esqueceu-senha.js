window.onload = function (e){

    var btnEsqueceu = document.getElementById("btnEsqueceu");
    
    var txtemail = document.getElementById("txtemail");
    txtemail.focus();

    btnEsqueceu.onclick = function(e){

        var email = txtemail.value;

        if (email == ""){
            mensagemerro("Campo Obrigatorio.");
        }
        else {
            recuperarsenha(email);
        }
    };

    function mensagemerro(mensagem){
        var spnErro = document.getElementById("spnErro");

        spnErro.innerText = mensagem;

        spnErro.style.display = "block";

        setTimeout(function() {
            spnErro.style.display = "none";
        }, 5000);
    };

    function recuperarsenha(mensagem){
        alert("Senha recuperada.");
    }
}