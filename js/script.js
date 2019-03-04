function myFunction() {
  var search = document.getElementById("search").value;
  if (search === '') {
    document.getElementById("titre").innerHTML = "Aucun resultat";
    document.getElementById("contenu").innerHTML = "";
    document.getElementById("menuGauche").innerHTML = "Aucun resultat";
  } else {
    URL = 'https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=' + search + '';
    fetch(URL).then(function(response) {
        response.json().then(function(data) {

          var titre = "<div>" + data[0] + "</div>";
          var nom = data[1];
          var description = data[2];
          var liens = data[3];

          var resultat = "";
          var name = "";

          for (var i = 0; i <= nom.length - 1; i++) {
            if (nom[i] === '') {} else {
              resultat += "<div class='accordion' id='accordionExample'><div class='card'><div class='card-header text-center' id='heading" +
                [i] + "'><h2 class='mb-0 text-center'><button class='btn btn-link' type='button' data-toggle='collapse' data-target='#collapse" +
                [i] + "' aria-expanded='false' aria-controls='collapse" + [i] + "'>" +
                nom[i] + "</button></h2>" + description[i] + "</div><div id='collapse" + [i] + "' class='collapse' aria-labelledby='heading" +
                [i] + "' data-parent='#accordionExample'><div class='card-body'><iframe src='" +
                liens[i] + "'></iframe></div></div></div></div>";

              name += "<a href=" + liens[i] + ">" + nom[i] + "</a><br>";

              document.getElementById("titre").innerHTML = "";
              document.getElementById("contenu").innerHTML = resultat;
              document.getElementById("menuGauche").innerHTML = name;
            }
          }
        });
      });
    }
  };
