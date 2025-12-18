

var compteur = 0;
var compteur2 =0;

var MaDiv1 = document.getElementById("Methode2");
MaDiv1.addEventListener("click", uneProcedureQuiChangeLetext);

MaDive = document.getElementById("Methode3");
MaDive.addEventListener("mouseover", uneProcedureQuiSurvole);

MaDiv = document.getElementById("Methode4");
MaDiv.addEventListener("keydown", uneProcedureQuiEcrit);

function uneProcedureQuiEcrit(evenement)
{
    evenement.target.innerHTML = "On a appuyé sur : " + evenement.key; //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

}
function uneProcedureQuiChangeLetext(evenement)
{
    compteur++;
    evenement.target.innerHTML = "On a cliqué : " + compteur + "fois";
    MaDiv1.classList.add("divC")
    MaDiv1.classList.remove("divD")
}
function uneProcedureQuiSurvole(evenement)
{
    evenement.target.innerHTML = "On m'a survollé : " + compteur2 +"fois";
    compteur2 ++;
    
        //div.style.display = "block"; // affiche
        MaDive.style.display = "none"; // Cache complètement //https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Properties/display
}