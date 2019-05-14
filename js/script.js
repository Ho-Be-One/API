let title = document.getElementById("title");
let link = document.getElementById("link");
let menuGauche = document.getElementById("menuGauche");
let search = document.getElementById("search");
let myBtn = window.document.getElementById("myBtn")
let linkIframe = window.document.getElementById("btnOpenFram")

myBtn.addEventListener("click", ()=>{
    if (!search.value) {
        link.innerHTML = "";
        menuGauche.innerHTML = "";
    }
    else {
        URL = 'https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=' + search.value + '';
        fetch(URL).then((response)=>{
            response.json().then((data)=>{
                console.log(data);

                let title = "<div id='separ'>" + data[0] + "</div>";
                let nom = data[1];
                let description = data[2];
                let liens = data[3];
                let resultat = "";
                let name = "";
                let linkIframe;
                let frame;

                for (var i = 0; i <= nom.length - 1; i++) {

                    frame = "<iframe src='" + liens[i] + "'></iframe>"; 
                    linkIframe = "<br><br><button type='button' id=" + i + "  >Voir le site " + i + "</button>";

                    resultat += "<div id='separ'><span class='sousTitre'><div id='open'>" + nom[i] + "</div></span><br>" + description[i] + linkIframe + "</div>" + frame;
                    name += "<a href=" + liens[i] + ">" + nom[i] + "</a><br>";

                }
                title.innerHTML = '';
                link.innerHTML = resultat;
                menuGauche.innerHTML = name;
               
            });
        });
    }
});

