let clrButton;
let applesDataArray, basketballsDataArray, lightbulbsDataArray, pizzasDataArray, swordsDataArray;

function setup(){
  // Create Canvas
  let canvas = createCanvas(560, 560);
  canvas.parent("canvas");
  
  // Leinwand wir mit weiß gefüllt
  background(255);
  
  // Setzt die Leinwand bei Klick auf den Löschen-Knopf zurück
  document.getElementById("clrButton").addEventListener("click", () => background(255));
  
  // Datensets nach 3 Sekunden laden
  window.setTimeout(() => loadData(), 3000);
  
  document.getElementById("info-x-button").addEventListener("click", (...ev) => {
      w3.hide("#info-x-button");
      w3.hide("#info-wrapper");
    }
  );
}

function draw(){
  // Schwarzer Pinsel
  stroke(0);
  strokeWeight(8);
  if(mouseIsPressed){
    // Wenn die Maus gerückt wird, dann zeichne eine Linie
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function loadData(){
  w3.hide("#loading-init-wrapper");
  w3.show("#info-wrapper");
  document.getElementById("info-text").innerHTML="<i class=\"material-icons w3-display-topright w3-jumbo\">cloud_download</i>\
    <br>Es werden nun Datensets geladen: Dies kann mehrere Minuten in Anspruch nehmen.\
    <br><div class=\"w3-center\">Bitte haben sie Geduld...</div>";
  window.setTimeout( () => {
    w3.hide("#info-wrapper");
    loadDataFromFile("./data/apples10000.bin").then( DATA =>{
      applesDataArray = DATA;
      loadDataFromFile("./data/basketballs10000.bin").then( DATA => {
        basketballsDataArray = DATA;
        loadDataFromFile("./data/lightbulbs10000.bin").then( DATA => {
          lightbulbsDataArray = DATA;
          loadDataFromFile("./data/pizzas10000.bin").then( DATA => {
            pizzasDataArray = DATA;
            loadDataFromFile("./data/swords10000.bin").then( DATA => {
              swordsDataArray = DATA;
              w3.show("#info-wrapper");
              document.getElementById("info-text").innerHTML="<div class=\"w3-xxxlarge\">\
                </span>Fertig <i class=\"material-icons w3-xxxlarge\">cloud_done</i></div>";
              w3.show("#info-x-button");
            });
          });
        });
      });
    }).catch(ERR => {
      console.error(ERR);
      w3.show("#info-wrapper");
      document.getElementById("info-text").innerHTML="<i class=\"material-icons w3-xxlarge\">sync_problem</i> \
        Folgender Fehler ist aufgetreten:<hr><div class=\"monospace\">" + ERR + "</div>";
      throw(ERR);
      return null;
    });
  }, 5000);
}
