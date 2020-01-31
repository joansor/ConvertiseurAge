// Écrivez ici votre script

let age = document.getElementById("age").value;
let secondes = document.getElementById("inputSecondes");
let minutes = document.getElementById("inputMinutes");
let heures = document.getElementById("inputMinutes");
let jours = document.getElementById("inputJours");



//functin au click du bouton
document.getElementById("button").onclick = function() {

   
    //calcul en secondes
  if (document.getElementById("inputSecondes").checked) {
    
    
   let secondResult = document.getElementById("age").value*86400*365;
  

   document.getElementById("result").innerHTML = secondResult;
   

    } 
    
  //calcule en minutes
  if (document.getElementById("inputMinutes").checked) {
    
    let minutesResult = document.getElementById("age").value*1440*365;
    console.log(minutesResult);
  }

  //calcule en heures
  if (document.getElementById("inputHeures").checked) {
    
    let heuresResult = document.getElementById("age").value*24*365;
    console.log(heuresResult);
  }

  //calcule en jours
  if (document.getElementById("inputJours").checked) {

    let joursResult = document.getElementById("age").value*365;
    console.log(joursResult);
  }
};

function date_heure(id)
{
        date = new Date;
        annee = date.getFullYear();
        moi = date.getMonth();
        mois = new Array('Janvier', 'F&eacute;vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Ao&ucirc;t', 'Septembre', 'Octobre', 'Novembre', 'D&eacute;cembre');
        j = date.getDate();
        jour = date.getDay();
        jours = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
        h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        resultat = 'Nous sommes le '+jours[jour]+' '+j+' '+mois[moi]+' '+annee+' il est '+h+':'+m+':'+s;
        document.getElementById("result").innerHTML = resultat + ' et tu as <br>'+ id;
        return true;
}