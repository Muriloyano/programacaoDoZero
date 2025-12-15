window.onload = function(e){
    var btnCadastrar = document.getElementById("btnCadastrar");

    var txtnome = document.getElementById("txtnome");

    var txtemail = document.getElementById("txtemail");

    var txtcpf = document.getElementById("txtcpf");

    var txttelefone = document.getElementById("txttelefone");

    var slcgenero = document.getElementById("slcgenero");

    var txtsenha = document.getElementById("txtsenha");

    txtnome.focus();

    btnCadastrar.onclick = function(e){

        e.preventDefault();

        var nome = txtnome.value;

        var email = txtemail.ariaValueMax;

        var sobrenome = txtsobrenome.value;

        var telefone = txttelefone.value;

        var genero = slcgenero.value;

        var senha = txtsenha.value;

        if (nome == ""){
            mensagemerro("campo obrigatorio");
        }
        else if(email == ""){
            mensagemerro("campo obrigatorio");
        }
        else if(sobrenome == ""){
            mensagemerro("campo obrigatorio");
        }
        else if(genero == ""){
            mensagemerro("campo obrigatorio");
        }
        else if(senha == ""){
            mensagemerro("campo obrigatorio");
        }
        else if(telefone == ""){
            mensagemerro("campo obrigatorio");
        }
    };

    function mensagemerro(mensagem){

        var spnErro = document.getElementById("spnErro");

        spnErro.innerText = mensagem;

        spnErro.style.display = "block";

        setTimeout(function(){
            spnErro.style.display = "none";
        }, 5000);
    }

    function cadastrar(nome, email, sobrenome, genero, senha){
        alert("Cadastro realizado.")
    }
}