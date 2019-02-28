function myFunction() {
    var search = document.getElementById("search").value;
    if (search === '') {
        document.getElementById("titre").innerHTML = "Aucun resultat";
        document.getElementById("lien").innerHTML = "";
        document.getElementById("menuGauche").innerHTML = "";
    }
    else {
        URL = 'https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=' + search + '';
        fetch(URL).then(function (response) {
            response.json().then(function (data) {

                var titre = "<div id='separ'>" + data[0] + "</div>";
                var nom = data[1];
                var description = data[2];
                var liens = data[3];

                var resultat = "";
                var name = "";
                
                // function show() {
                // document.getElementById("open").style.display= "block";
                // };
                // show();

                for (var i = 0; i <= nom.length - 1; i++) {
                    if (nom[i] === '') { } else {
                        resultat += "<div id='separ'><span class='sousTitre'><div id='open'>" + nom[i] + "</div></span><br>" + description[i] + "</div> <iframe src='" + liens[i] + "'></iframe>  ";
                        name += "<a href=" + liens[i] + ">" + nom[i] + "</a><br>";

                        document.getElementById("lien").innerHTML = resultat;
                        document.getElementById("menuGauche").innerHTML = name;

                    }
                }
            });
        });
    }
};
// onclick="document.getElementById('demo').innerHTML = Date()