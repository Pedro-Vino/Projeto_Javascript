function mensagem() {
    var nome = prompt("Qual é o seu nome?");
    alert("Olá " + nome + ", é um prazer te ver!");
  };
  
  function semana() {
      var semana = Number(prompt("Digite um número de 1 a 7!"));
      switch(semana) {
          case 1 : var mensagem = "DOMINGO"; break;
          case 2 : var mensagem = "SEGUNDA"; break;
          case 3 : var mensagem = "TERÇA"; break;
          case 4 : var mensagem = "QUARTA"; break;
          case 5 : var mensagem = "QUINTA"; break;
          case 6 : var mensagem = "SEXTA"; break;
          case 7 : var mensagem = "SABADO"; break;
          default : var mensagem = "ERRO"; break;
      }
      alert("O dia da semana é " +mensagem + "!");
  }
  
  function desvio() {
    let numeros = [];
    var limite = Number(prompt("Digite a quantidade de elementos que deseja inserir"));
    var controle = 0;
  
    for(var i = 0; i < limite; i++){
      controle = i+1;
      numeros[i] = Number(prompt("Digite o " + controle + " º valor"));
    }
    
    for(var i = 0; i < limite; i++){
      alert(numeros[i])
    }
    alert(" Sequência ao contrário ");
    for(var i = limite-1; i >= 0; i--){
      alert(numeros[i])
    }
  }