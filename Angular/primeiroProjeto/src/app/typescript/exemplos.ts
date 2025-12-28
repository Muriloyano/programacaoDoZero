function calcularArea() {
    const obj = {width: 10, height: 30};

    const area = obj.width * obj.height;

    return area;
}

function usuario(){
    const usuario  ={
        nome: 'Murilo',

        idade: 18
    }
}

function calculo(){
    return Math.random() < 5;
}

function validacao(){
    const valor = Math.random() < 5 ? 'a' : 'b';

    if (valor == 'a'){

    }
    else if( valor == 'b'){

    }
}

function exibirMensagem(pessoa: string, data: string){

    console.log('Ola' + pessoa + ', hoje é' + data);
}
exibirMensagem('murilo', '17/12/25');

let mensagem: string = 'hello world';
let mensagem2 = 'hello world';

let num: number = 3.2;
let num2 = 2;

let obj: any = {x: 0};
obj.y;

let isTrue: boolean = false;

function olaMundo(mensagem: string) {

    return `Ola Mundo ${mensagem}`; 
}

function exibirCoordenadas(pont: {x: number, y: number}) {

    return `${pont.x} ${pont.y}`;
}
exibirCoordenadas({x: 5, y: 4});

function exibirNome(obj: {nome: string, sobrenome?: string}){

    let mensagem = `Seu nome é ${obj.nome} ${obj.sobrenome}`;

    return mensagem;
}
exibirNome({nome: 'Murilo', sobrenome: 'Yano'});

function exibirId(id: number | string) {

    if (typeof id == 'number') {
        mensagem = 'seu id é numerico' + id;
    }
    else {
        mensagem = id.toUpperCase();
    }

    return mensagem = `Seu id é: ${id}`;
}
exibirId(2);
exibirId("123");

class Point {
    x: number = 0;
    y: number = 0;
}
let p = new Point();
p.x = 3;
p.y = 6;
console.log(`${p.x} ${p.y}`);

class BoasVindas {
    mensagem!: string;

    contructor(){
        this.mensagem = 'Bem vindo';
    }
}
let m = new BoasVindas;
console.log(m.mensagem);