
function gerarEscolhaMaquina() {
  return Math.floor(Math.random() * 3) + 1;
}


function obterEscolhaUsuario() {
  var escolha = parseInt(prompt("Escolha: 1 - Pedra, 2 - Papel, 3 - Tesoura"));
  
  
  if (escolha >= 1 && escolha <= 3) {
    return escolha;
  } else {
    alert("Escolha inválida! Tente novamente.");
    return obterEscolhaUsuario(); 
  }
}

function determinarVencedor(escolhaUsuario, escolhaMaquina) {
  if (escolhaUsuario === escolhaMaquina) {
    return "Empate";
  } else if (
    (escolhaUsuario === 1 && escolhaMaquina === 3) ||
    (escolhaUsuario === 2 && escolhaMaquina === 1) ||
    (escolhaUsuario === 3 && escolhaMaquina === 2)
  ) {
    return "Usuário";
  } else {
    return "Máquina";
  }
}


function jogarPedraPapelTesoura() {
  let pontosUsuario = 0;
  let pontosMaquina = 0;

  while (pontosUsuario < 3 && pontosMaquina < 3) {
    let escolhaUsuario = obterEscolhaUsuario();
    let escolhaMaquina = gerarEscolhaMaquina();

    let resultado = determinarVencedor(escolhaUsuario, escolhaMaquina);

   
    alert(
      "Você escolheu: " +
        escolhaUsuario +
        "\nA máquina escolheu: " +
        escolhaMaquina +
        "\n\nResultado: " +
        resultado
    );

   
    if (resultado === "Usuário") {
      pontosUsuario++;
    } else if (resultado === "Máquina") {
      pontosMaquina++;
    }
  }

  
  if (pontosUsuario === 3) {
    alert("Parabéns! Você venceu o jogo.");
  } else {
    alert("Você perdeu. A máquina venceu o jogo.");
  }
}


jogarPedraPapelTesoura();
