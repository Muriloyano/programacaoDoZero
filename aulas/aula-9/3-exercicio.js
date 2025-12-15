window.onload = function(e){

    var btn2 = document.getElementById("btn2");

    var n1 = document.getElementById("txt1");

    var n2 = document.getElementById("txt2");

    btn2.onclick = function(e){
        
        num1 = parseInt(n1.value);

        num2 = parseInt(n2.value);

        soma(num1,num2);
    }

    function soma(num1, num2) {
        // 1. Mostra no console os números que a função recebeu
        console.log("Função 'soma' chamada com:", num1, num2);
    
        var url = `http://localhost:5167/api/aula8/Adicao?num1=${num1}&num2=${num2}`;    
        // 2. Mostra a URL final para garantir que ela foi montada corretamente
        console.log("URL da requisição:", url);
    
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
    
        xhr.addEventListener('readystatechange', function() {
            // A requisição pode ter vários estados, mas só nos interessa o final (4)
            if (this.readyState === 4) {
                console.log("A requisição terminou!");
                console.log("Status da resposta:", this.status); // Ex: 200, 404, 500
                console.log("Dados recebidos (responseText):", this.responseText);
    
                // 3. SÓ mostra o alert se a requisição foi um SUCESSO (status 200)
                if (this.status === 200) {
                    // Se a resposta não estiver vazia
                    if (this.responseText) {
                        alert("Resultado: " + this.responseText);
                    } else {
                        alert("O servidor respondeu com sucesso, mas não enviou um resultado.");
                    }
                } else {
                    // Se deu erro (404, 500, etc)
                    alert("Ocorreu um erro na requisição. Verifique o Console para mais detalhes.");
                }
            }
        });
    
        xhr.open('GET', url);
        xhr.send();
    }
}