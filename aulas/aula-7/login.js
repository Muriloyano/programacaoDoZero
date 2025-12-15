window.onload = function(e){

    var btnEntrar = document.getElementById("btnEntrar");

    var txtemail = document.getElementById("txtemail");
    txtemail.focus();

    var txtsenha = document.getElementById("txtsenha");

    btnEntrar.onclick = function(e){

        var email = txtemail.value;

        var senha = txtsenha.value;

        if (email == ""){
            mensagemErro("Campo Obrigatorio")
        }
        else if (senha == ""){
            mensagemErro("Campo Obrigatorio")
        }
        else {
            realizarLogin(email, senha)
        }
    };

    function mensagemErro(mensagem){
        var spnErro = document.getElementById("spnErro");

        spnErro.innerText = mensagem;

        spnErro.style.display = "block";

        setTimeout(function() {
            spnErro.style.display = "none";
        }, 5000);
    }

    function realizarLogin(email, senha){
        alert("Login realizado");
    }
}