//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//Este é meu primeiro challenge, uma lista para Sorteio de Amigo Secreto.
//Código feito por Herivelto Coutinho
//Feito em 21012025 Alura Oracle 

let listaParaSortear = []

//Função para adicionar amigo a lista do sorteio

function adicionarAmigo()
{
    let nomeDoAmigo = document.querySelector("input").value;
    if(nomeDoAmigo == '')
    {
        alert('Você não digitou o nome para o sorteio!');
    } else
        {
            listaParaSortear.push(nomeDoAmigo);
            console.log(listaParaSortear);
            listarNomes();
        }
    limparSorteio();
}

//Função para lista nomes para o sorteio

function listarNomes()
{
    let listaAmigo = document.getElementById("listaAmigos").innerHTML;
    listaAmigo += "<li>" +listaParaSortear[listaParaSortear.length -1] + "<li>"
    document.getElementById("listaAmigos").innerHTML = listaAmigo;
}

//Função sorteio

function sortearAmigo() 
{
    let tamanhoLista = listaParaSortear.length;
    let sorteioNumero = Math.floor(Math.random() * tamanhoLista);
    let amigoSorteado = listaParaSortear[sorteioNumero];
    console.log(sorteioNumero);
    console.log(tamanhoLista);

    if (listaParaSortear == "") 
        {
            alert('Nenhum nome foi adicionado!');
        } else 
        {
            let resultadoSorteio = document.getElementById("resultado").innerHTML;
            resultadoSorteio = "<li>"+"O amigo sorteado é: "+amigoSorteado+"</li>";
            document.getElementById("resultado").innerHTML = resultadoSorteio;
            document.getElementById("listaAmigos").innerHTML ="";
            listaParaSortear = [];
        } 
} 

//Função para limpar o sorteio

function limparSorteio()
{
    nomeDoAmigo = document.querySelector("input");
    nomeDoAmigo.value = '';
}