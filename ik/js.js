var random = Math.floor(Math.random() * 8);

var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);  //JSON.parse = "átkonvertálja" a json fájlt, úgy mintha az JS tartalmú kód lenne(szintaktikailag), hogy megtudjuk jeleníteni az objet vagy array tartalmát. 
            var velemeny = response.velemeny;

            var output = '';  
            var output2 = '';   //Kezdetben az üres String változó amibe majd "belepakoljuk" a tartalmakat amiket megakarunk jeleníteni.
            output = '"' + velemeny[random].text + '"';
            output2 = '-' + velemeny[random].nev + '-';  //A kezdetben üres String változóba "belepakoljuk" a fájlból a name adatait, felsorolás formájában <li></li>.
            document.getElementById('idezet').innerHTML = output;  
            document.getElementById('szerzo').innerHTML = output2; //Kiíratás.
          }
      };
      xhttp.open("GET", "velemeny.json", true);   //Adatlekérés GET-el a people.json fájlból.
      xhttp.send();