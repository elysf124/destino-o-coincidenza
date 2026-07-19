// -------------------------
// MEMORY HUB
// -------------------------

function memoryHub() {

    document.body.className = "memory-hub";


    document.querySelector(".mission").innerHTML = `


        <h1>
     BRAVO CE L'HAI FATTA!
        </h1>


        <p>
        benvenuto nei contenuti bonus...
        </p>


        <hr>



        <button class="birthday-button" onclick="easterEgg()">
        EASTER EGG
        <br>
        Una piccola cosa che non sai...
        </button>


        <br><br>



        <button class="birthday-button" onclick="photoGallery()">
        FOTO RICORDO
        <br>
        Gallery unlocked
        </button>


        <br><br>



        <button class="birthday-button" onclick="mapMemory()">
         MAPPA
        <br>
        Locations discovered
        </button>


        <br><br>



        <button class="birthday-button" onclick="songsMemory()">
        CANZONI
        <br>
        Our soundtrack
        </button>


        <br><br>



        <button class="birthday-button" onclick="birthdayScreen()">
        FINAL SCREEN
        </button>



    `;

}





// -------------------------
// EASTER EGG - NEVEGAL
// -------------------------

function easterEgg() {


    document.querySelector(".mission").innerHTML = `


        <h1>
        SECRET MEMORY FOUND
        </h1>


        <p>
        File nascosto trovato...
        </p>



        <p>
        LOCATION:
        <br>
        NEVEGAL 
        </p>



        <p>
        DATE:
        <br>
        31/01/2026
        </p>



        <hr>



        <h2>
        UNKNOWN MEMORY
        </h2>



        <p>
        C'è una cosa che non sai.
        </p>



        <p>
        Quel giorno,
        che mi hai portata a camminare sulla neve, ci siamo imbattuti
        in una casetta.
        Mentre tu facevi la pipi dietro quella casetta.
        Io dentro ho trovato un libro.
        </p>



        <p>
        Non era un regalo.
        <br>
        Non era una promessa.
        </p>



        <p>
        Era solo un momento felice
        che volevo conservare.
        </p>



        <button class="birthday-button" onclick="openNevegalSecret()">
        Apri il file nascosto.
        </button>



    `;

}





// -------------------------
// FILE SEGRETO NEVEGAL
// -------------------------

function openNevegalSecret() {


    document.querySelector(".mission").innerHTML = `


        <h1>
        Memory Unlocked
        </h1>



        <p>
        File segreto aperto
        </p>

        <hr>



        <p>
        Quando siamo arrivati alla casetta,
        c'era un libro.
        </p>



        <p>
        Io ho lasciato il nostro segno.
        </p>



        <br>



        <h2>
        Elena + Nicholas
        <br>
        31/01/2026
        </h2>



        <br>



        <p>
        Tu non lo sapevi.
        </p>



        <p>
        Ma quel giorno,
        per me,
        era gia un ricordo importante.
        Non per vanto,
        Non per farlo vedere agli altri.
        Solo perche me lo sentivo.
        </p>

        <img src="images/Nevegal.jpg" style="width:180px; height:auto; border-radius:10px;">


       <br><br>
       <button onclick="easterEggTwo()">
       Secondo Easter Egg
       </button>
       <p>
       Nel primo biglietto che hai ricevuto da me..
       </p>

    `;

}

function easterEggTwo(){

    document.querySelector(".mission").innerHTML = `

        <h1>
        Secondo Easter Egg!
        </h1>

        <p class="green">
        Catullo?
        </p>

        <hr>

        <button class="birthday-button" onclick="catulloPoem()">
        LEGGI LA POESIA
        </button>

        <br><br>

        <button class="birthday-button" onclick="easterEgg()">
        TORNA AGLI EASTER EGG
        </button>

    `;

}


   function catulloPoem(){

    document.querySelector(".mission").innerHTML = `

        <h1>
        CATULLO
        </h1>

        <p class="green">
        Carme V
        </p>

        <hr>

        <p>

        Tu dammi mille baci, e quindi cento

        <br><br>

        e poi altri mille, e quindi cento

        <br><br>

        quindi mille continui, e quindi cento

        <br><br>

        E poi quando saranno mille e mille,

        <br><br>

        nasconderemo il loro vero numero,

        <br><br>

        che non getti il malocchio l'invidioso

        <br><br>

        per un numero di baci cosi alto.

        </p>

        <br><br>

       <button class="birthday-button" onclick="memoryHub()">
       TORNA ALLA MEMORY HUB
       </button>

    `;

}



// -------------------------
// FOTO RICORDO
// -------------------------

function photoGallery() {

    document.querySelector(".mission").innerHTML = `

        <h1>
        Galleria Foto Sbloccata..
        </h1>

        <p>
        Ti sei messo con un'influencer
        <br>
        e pensavi non ci fossero state foto?
        </p>

        <hr>

        <img src="images/gallery/Bacio1.jpg" class="memory-image">

        <p>
        Io amo il mare...
        </p>

        <hr>

        <img src="images/gallery/Bacio2.jpg" class="memory-image">

        <p>
        e tu la montagna..
        </p>

        <hr>

        <img src="images/gallery/lupus.jpg" class="memory-image">

        <p>
        ma tanto L per entrambi perche ci amiamo a vicenda.
        </p>

        <img src="images/gallery/sesso.jpg" class="memory-image">

        <p>
        e siamo anche un po dei pervertiti ogni tanto... forse piu di tanto
        </p>

        <img src="images/gallery/post.jpg" class="memory-image">

        <p>
        Ma l'importante e che ci guardiamo, ogni giorno di piu. Ogni giorno con piu
        consapevolezza del giorno prima.
        </p>
        <hr>

        <button class="birthday-button" onclick="memoryHub()">
        TORNA AL MENU
        </button>

    `;

}




// -------------------------
// MAPPA
// -------------------------

function mapMemory() {


document.querySelector(".mission").innerHTML = `


<h1>
Il nostro percorso...
</h1>


<p>
Un inaspettata connessione.
</p>


<hr>



<h2>
1
<br>
Dove tutto comincio!
</h2>



<div class="map-container">


<img src="images/italia.jpg" class="map-image">



<button class="map-marker spezia" onclick="speziaPlace()">
1
</button>



<button class="map-marker belluno-main" onclick="bellunoPlace()">
2
</button>


</div>



<br>



<button class="birthday-button" onclick="bellunoMap()">
ZOOM INTO BELLUNO 
</button>



<br><br>


<button class="birthday-button" onclick="memoryHub()">
TORNA AL MENU
</button>


`;

}

function bellunoMap(){


document.querySelector(".mission").innerHTML = `


<h1>
Belluno's Map
</h1>


<p>
Una nuova regione e stata sbloccata...
</p>


<hr>


<div class="map-container">


<img src="images/belluno.jpg" class="map-image">


<button class="map-marker nevegal" onclick="nevegalPlace()">
3
</button>


<button class="map-marker fiume" onclick="fiumePlace()">
4
</button>


<button class="map-marker its" onclick="itsPlace()">
5
</button>


<button class="map-marker gelato" onclick="gelatoPlace()">
6
</button>


</div>



<br>


<button class="birthday-button" onclick="mapMemory()">
TORNA ALLA MAPPA GRANDE
</button>


`;

}




// -------------------------
// CANZONI
// -------------------------

function songsMemory() {


    document.querySelector(".mission").innerHTML = `


        <h1>
         OUR SOUNDTRACK
        </h1>



        <p>
        Alcune canzoni non sono solo canzoni.
        </p>



        <p>
        Sono momenti.
        <br>
        Ricordi.
        <br>
        Persone.
        </p>



        <hr>



        <p>
        🎧 My Love Mine All Mine
        </p>



        <p>
        La canzone del viaggio verso Trento.
        </p>



        <button class="birthday-button" onclick="memoryHub()">
        TORNA AL MENU
        </button>



    `;

}
// -------------------------
// MAP POPUP
// -------------------------

function openMapPopup(title, text){

    document.getElementById("popupTitle").innerHTML = title;

    document.getElementById("popupText").innerHTML = text;


    document.getElementById("mapPopup").style.display = "flex";

}



function closeMapPopup(){

    document.getElementById("mapPopup").style.display = "none";

}
function speziaPlace(){

openMapPopup(

" La Spezia",

`
Io sono cresciuta qui!

<br><br>

E da qui ti ho anche conosciuto!
`

);

}



function bellunoPlace(){

openMapPopup(

" Belluno",

`
Qua invece ci sei tu!

<br><br>

E qua e dove ci siamo incontrati,
ed io sono venuta proprio qua!!!
`

);

}



function itsPlace(){

openMapPopup(

" ITS",

`
IL NOSTRO CORSOO

<br><br>

Il destino ci ha portati entrambi qui!

<br><br>

Il destino, non la coincidenza.
`

);

}



function nevegalPlace(){

openMapPopup(

" Nevegal",

`
Sento ancora la stanchezza..

<br><br>

La prima volta che ho camminato in montagna sulla neve..
che io ricorda...
O almeno averlo fatto con la persona che amo!
`

);

}



function fiumePlace(){

openMapPopup(

" Fiume",

`
Eravamo fottutamente zuppi.

<br><br>

Ma penso che non provavo un emozione
cosi forte da un sacco di tempo.
`

);

}



function gelatoPlace(){

openMapPopup(

" Gelato",

`
#IlNostroPostoPreferito

<br><br>
Mi manca tantissimo prendere il gelato assieme a te,
ed ogni volta si trasforma in un momento per me
unico.

`

)

}
function songsMemory(){

    document.querySelector(".mission").innerHTML = `

        <h1>
         DO RE MI FA SOL LA SI DO
        </h1>

        <p>

        Ho fatto questa pensandoti,
        ad ogni momento, ad ogni cosa che 
        mi fai provare.
        Tutto cio che mi fa pensare a noi.

        <br><br>

        Mi piace pensarti.

        </p>

        <br>

        <a href="https://open.spotify.com/playlist/17dnfr9wPJKsK8y2BOrPsy?si=fHSup_I7Sfyz3sQMkkWZdQ"
           target="_blank"
           class="birthday-button">

           APRI LA PLAYLIST

        </a>

        <br><br>

        <button class="birthday-button" onclick="memoryHub()">
        TORNA AL MENU
        </button>

    `;

}