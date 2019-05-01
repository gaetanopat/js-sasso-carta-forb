// Sasso Carta e Forbice tra due giocatori CPU


// creo un array per i 3 elementi, sasso, carta forbici
var choice = ['Sasso', 'Carta', 'Forbici'];

document.getElementById('rules').innerHTML='REGOLE';
document.getElementById('rules2').innerHTML='Sasso batte Forbici, Carta batte Sasso, Forbici batte Carta e così via, se le due scelte sono uguali allora sarà Parità <br><br>';

// genero una parola random dall'array per pc1
var pc1 = choice[Math.floor(Math.random() * choice.length)];
document.getElementById('pc1').innerHTML='Il giocatore 1 ha scelto: ' + pc1 + '<br>';
// genero una parola random dall'array per pc2
var pc2 = choice[Math.floor(Math.random() * choice.length)];
document.getElementById('pc2').innerHTML='Il giocatore 2 ha scelto: ' + pc2;

// richiamo la funzione per iniziare il gioco
var startGame = Game(pc1, pc2);


// passo i due parametri alla funzione
function Game(pc1choice, pc2choice){
  // nel caso in cui pc1 e pc2 siano uguali
  if((pc1 == 'Sasso' && pc2 == 'Sasso') || (pc1 == 'Carta' && pc2 == 'Carta') || (pc1 == 'Forbici' && pc2 == 'Forbici')){
    document.getElementById('winner').innerHTML='<br> Essendo le due scelte uguali è Parità!';
  }
  // se pc1 è Sasso
  if (pc1 == 'Sasso'){
    if (pc2 == 'Carta'){
      // Carta batte Sasso
      document.getElementById('winner').innerHTML='<br> Carta batte Sasso quindi ha vinto GIOCATORE 2';
    } else if (pc2 == 'Forbici'){
      // Sasso batte Forbici
      document.getElementById('winner').innerHTML='<br> Sasso batte Forbici quindi ha vinto GIOCATORE 1';
    }
  }
  // se pc1 è Carta
  if (pc1 == 'Carta'){
    if (pc2 == 'Sasso'){
      // Carta batte Sasso
      document.getElementById('winner').innerHTML='<br> Carta batte Sasso quindi ha vinto GIOCATORE 1';
    } else if (pc2 == 'Forbici'){
      // Forbici batte Carta
      document.getElementById('winner').innerHTML='<br> Forbici batte Carta quindi ha vinto GIOCATORE 2';
    }
  }
  // se pc1 è Forbici
  if (pc1 == 'Forbici'){
    if (pc2 == 'Sasso'){
      // Sasso batte Forbici
      document.getElementById('winner').innerHTML='<br> Sasso batte Forbici quindi ha vinto GIOCATORE 2';
    } else if (pc2 == 'Carta'){
      // Forbici batte Carta
      document.getElementById('winner').innerHTML='<br> Forbici batte Carta quindi ha vinto GIOCATORE 1';
    }
  }
}
