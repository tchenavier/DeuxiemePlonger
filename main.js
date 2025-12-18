

var compteur = 0;
var compteur2 =0;

var MaDiv = document.getElementById("Methode2");
MaDiv.addEventListener("click", uneProcedureQuiChangeLetext);

MaDiv = document.getElementById("Methode3");
MaDiv.addEventListener("mouseover", uneProcedureQuiSurvole);

MaDiv = document.getElementById("Methode4");
MaDiv.addEventListener("keydown", uneProcedureQuiEcrit);

function uneProcedureQuiEcrit(evenement)
{
    evenement.target.innerHTML = "On a appuyé sur : " + evenement.key;

}
function uneProcedureQuiChangeLetext(evenement)
{
    compteur++;
    evenement.target.innerHTML = "On a cliqué : " + compteur + "fois";
}
function uneProcedureQuiSurvole(evenement)
{
    evenement.target.innerHTML = "On m'a survollé : " + compteur2 +"fois";
    compteur2 ++;
    
}