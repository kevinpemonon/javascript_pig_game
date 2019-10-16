var $buttonDes = document.querySelector(".launch-it");
var $des1 = document.querySelector(".dice1");
var $des2 = document.querySelector(".dice2");
var $totalLancerJ1 = document.querySelector(".total-value");
var $scoreCourant = document.querySelector(".stock");
var $joueur = document.querySelector(".player-name");

function lancerLesDesJ1 () {
  var $valeurDes1 = Math.floor(Math.random() * 6) + 1;
  var $valeurDes2 = Math.floor(Math.random() * 6) + 1;
  $des1.innerHTML = $valeurDes1;
  $des2.innerHTML = $valeurDes2;
  $totalLancerJ1.innerHTML = $valeurDes1 + $valeurDes2;
  $scoreCourant.innerHTML = Number($scoreCourant.innerHTML) + Number($totalLancerJ1.innerHTML);
  
  if ($valeurDes1 === 1 || $valeurDes2 === 1) {
    $scoreCourant.innerHTML = 0;
    if ($joueur.innerHTML === "Joueur 1") {
      $joueur.innerHTML = "Joueur 2";
    }
    else {
      $joueur.innerHTML = "Joueur 1";
    }  
  }
}
$buttonDes.addEventListener("click", lancerLesDesJ1);


var $buttonStock = document.querySelector(".sock-it");
var $scoreJ1 = document.querySelector(".score1");
var $scoreJ2 = document.querySelector(".score2");
var $vainqueur = document.querySelector(".winner");

function stockerPoints () {
  if ($joueur.innerHTML === "Joueur 2") {
    $scoreJ2.innerHTML = Number($scoreJ2.innerHTML) + Number($scoreCourant.innerHTML);
    $scoreCourant.innerHTML = 0;
    $joueur.innerHTML = "Joueur 1";     
  }
  else {
    $scoreJ1.innerHTML = Number($scoreJ1.innerHTML) + Number($scoreCourant.innerHTML);
    $scoreCourant.innerHTML = 0;
    $joueur.innerHTML = "Joueur 2";
  }
} 
$buttonStock.addEventListener("click", stockerPoints);

var $recommencer = document.querySelector(".reset");

function reset() {
  $scoreJ1.innerHTML = 0;
  $scoreJ2.innerHTML = 0;
}

$recommencer.addEventListener("click", reset);