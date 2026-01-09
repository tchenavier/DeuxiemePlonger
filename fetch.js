var MaDiv = document.getElementById("Methode5");
MaDiv.addEventListener("",uneProcedureDAffichageReponse)

fetch(
    "http://172.29.18.130:8080/jason",
    {method: 'GET'}
).then(
    reponse => reponse.json()
).then(
    response2 => console.log(JSON.stringify(reponse2))
).catch (error => console.log ("Erreur :" + error));

function uneProcedureDAffichageReponse(evenement)
{
    MaDiv.innerHTML (reponse2)
}
