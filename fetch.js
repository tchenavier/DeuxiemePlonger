fetch(
    "http://172.29.18.1??/test.json",
    {method: 'GET'}
).then(
    reponse => reponse.json()
).then(
    response2 => console.log(JSON.stringify(reponse2))
).catch (error => console.log ("Erreur :" + error));