const button = document.getElementById("startButton");

button.addEventListener("click", function() {

    missionOneQuiz();

});


// -------------------------
// Missione 01
// -------------------------

function missionOneQuiz() {

    document.querySelector(".mission").innerHTML = `

        <h1>
        Beginning
        </h1>

        <p class="green">
        MATCH FOUND - RANKED
        </p>

        <p>
        Rainbow Six Siege<br>
        PLAYER DETECTED:<br>
        Villone64
        </p>

        <hr>

        <h2>
        Prima Domanda:
        </h2>

        <p>
        Qual e stata la prima impressione di Villone64
        sentendo la voce di elysf_?
        </p>


        <button onclick="wrongPlayer()">
        La Miglior giocatrice di Siege
        </button>

        <br><br>


        <button onclick="correctAnswer()">
        Un bambino di 12 Anni
        </button>

        <br><br>


        <button onclick="wrongClass()">
        Una mosca troppo rumorosa
        </button>

    `;

}


// -------------------------
// Giusto!
// -------------------------

function correctAnswer() {

    document.querySelector(".mission").innerHTML = `

        <h1>
        Hai azzeccato eh..
        </h1>

        <p class="green">
        +100 XP
        </p>


        <h2>
         ACHIEVEMENT UNLOCKED:
        </h2>


        <p>
        Prima Impressione... potevi risparmiartela.
        </p>


        <hr>


        <p>
        La prima cosa che Villone64 penso
        sentendo la voce di elysf_ fu:
        </p>


        <p>
        "Perche c'e un bambino in questa vocale?
        </p>


        <p>
        Solo dopo arrivo la scoperta:
        non era un bambino.
        Era la miglior giocatrice di quel gioco.
        Colei che lo uccise.
        Colei che carryo quella partita ad una vincita.
        </p>


        <p>
       E quella persona incontrata per caso
       su Rainbow Six si sarebbe rivelata essere
       la sua fottutissima compagna di ITS.
       
       Una persona che abitava a 800 cazzo di chilometri di distanza.
        </p>


        <button onclick="missionTwo()">
        CONTINUE
        </button>

    `;

}



// -------------------------
// RISPOSTA SBAGLIATA 1
// -------------------------

function wrongPlayer() {

    document.querySelector(".mission").innerHTML = `

        <h1>
        MEEEH
        </h1>


        <p>
        Nemmeno una domanda cosi semplice?
        </p>


        <p>
        Sei serio? 
        </p>


        <button onclick="missionOneQuiz()">
        Riprova dai.
        </button>

    `;

}



// -------------------------
// RISPOSTA SBAGLIATA 2
// -------------------------

function wrongClass() {

    document.querySelector(".mission").innerHTML = `

        <h1>
        Ma come ti permetti
        </h1>


        <p>
        La prossima volta che mi dai della mosca rumorosa
        </p>


        <p>
        sara l'ultimo giorno che potrai vedere con gli occhi.
        </p>


        <button onclick="missionOneQuiz()">
        Riprova, anche se non te lo meriti.
        </button>

    `;

}

// -------------------------
// MISSIONE 02
// -------------------------

function missionTwo() {

    document.querySelector(".mission").innerHTML = `

        <h1>
        #2 Competition
        </h1>


        <p class="green">
        Teammate
        </p>


        <p>
        LOCATION:
        <br>
        BELLUNO
        </p>


        <hr>


        <h2>
        Seconda Domanda:
        </h2>


        <p>
        Quale piccolo gesto inizio a cambiare qualcosa?
        </p>


        <button onclick="correctGesture()">
        La tranquillita e l'ammirazione che iniziavano a crescere nei
        riguardi di Nicholas
        </button>


        <br><br>


        <button onclick="wrongCarte()">
        Provare a battermi a carte
        </button>


        <br><br>


        <button onclick="wrongRage()">
        Ragebaitarmi
        </button>

    `;

}



function correctGesture() {

    document.querySelector(".mission").innerHTML = `

        <h1>
        Ora e imbarazzante, bravo giusto.. anche se era ovvio.
        </h1>


        <p class="green">
        +100 XP
        </p>


        <h2>
        ACHIEVEMENT UNLOCKED:
        </h2>


        <p>
        Le piccole cose.
        </p>


        <p>
        E iniziato tutto dalle piccole cose:
        ascoltarmi,
        interessarti a quello che dicevo,
        spostare una pianta per farmi passare,
        ridere insieme,
        creare una competizione sana sulle cose
        che piu ci piacevano,
        le prese in giro,
        e tutti i momenti condivisi.
        </p>


        <p>
        Tutti piccoli dettagli
        che per me ogni giorno
        diventavano sempre piu presenti,
        felici,
        importanti.
        </p>


        <button onclick="missionThree()">
        CONTINUE
        </button>

    `;

}

// -------------------------
// MISSIONE 02 - RISPOSTA SBAGLIATA CARTE
// -------------------------

function wrongCarte(){

    document.querySelector(".mission").innerHTML = `

        <h1>
        Vivi nel mondo dei sogni,
        </h1>

        <button onclick="missionTwo()">
        Ti concedo un'altra possibilita.
        </button>

    `;

}



// -------------------------
// MISSIONE 02 - RISPOSTA SBAGLIATA RAGE
// -------------------------

function wrongRage() {

    document.querySelector(".mission").innerHTML = `

        <h1>
        Ma dimmi un po'...
        </h1>


        <p>
        Lo trovi cosi divertente?
        </p>


        <p>
        Davvero?
        </p>


        <button onclick="missionTwo()">
        Clicca qua prima che cambio idea. 
        </button>

    `;

}
// -------------------------
// MISSIONE 03
// -------------------------

function missionThree() {

    document.querySelector(".mission").innerHTML = `

        <h1>
        #3 Primi Segnali
        </h1>


        <p class="green">
        Sblocco dei Sentimenti
        </p>


        <p>
        LOCATION:
        <br>
        COMING BACK FROM TRENTO
        </p>


        <hr>


        <h2>
        Terza Domanda:
        </h2>


        <p>
        Quando Elena ha iniziato a capire
        che Nicholas era qualcosa di piu
        di un semplice amico?
        </p>


        <button onclick="wrongTravel()">
        Quando ha iniziato a batterla sempre a carte
        </button>


        <br><br>


        <button onclick="correctTravel()">
        Durante il viaggio verso Trento,
        con le cuffiette condivise e quella playlist,
        appoggiata sulla sua spalla.
        </button>


        <br><br>


        <button onclick="wrongTravelTwo()">
        Quando le ha offerto il gelato
        </button>

    `;

}
function correctTravel() {

    document.querySelector(".mission").innerHTML = `

        <h1>
        Giusto!
        </h1>


        <p class="green">
        +100 XP
        </p>


        <h2>
        ACHIEVEMENT UNLOCKED:
        </h2>


        <p>
        Primi Sentimenti
        </p>


        <hr>


        <p>
        Non e ovviamente successo tutto in un momento preciso.
        </p>


        <p>
        E successo piano piano.
        Nei piccoli gesti,
        nelle conversazioni,
        nella voglia di vederti.
        </p>


        <p>
        Ma quel viaggio..
        </p>


        <p>
        Anche se me l'hai solo detto dopo della playlist,
        le emozioni che stavo provando mentre ero appoggiata su di te
        erano infinite.
        Ogni movimento che facevo con la paura di star sbagliando,
        l'ansia che cresceva ad ogni momento in cui ero cosi tanto vicina a te
        La paura che mi divorava quando prendevo coraggio e magari ti facevo
        dei semplici grattini sul braccio.
        </p>


        <p>
        Sembravano tutti sentimenti negativi,
        ma con un buon fine.
        La voglia di starti accanto, e non solo fisicamente,
        cresceva ogni giorno di piu.
        Ma in quel momento ancora non lo sapevo.
        </p>


        <button onclick="missionFour()">
        CONTINUE
        </button>

    `;

}
function wrongTravel() {

    document.querySelector(".mission").innerHTML = `

        <h1>
        Sto perdendo la pazienza.
        </h1>

        <p>
        Smettila di pensare che tutto giri attorno 
        alle carte.
        </p>

        <p>
        STOP
        </p>

        <button onclick="missionThree()">
        Riprova.
        </button>

    `;

}


function wrongTravelTwo() {

    document.querySelector(".mission").innerHTML = `

        <h1>
        Beh..
        </h1>

        <p>
        Poteva definirsi domanda a trabochetto?
        </p>

        <button onclick="missionThree()">
        Andiamo a prendere il gelato assieme <3.
        </button>

    `;

}
// -------------------------
// MISSIONE 04
// -------------------------

function missionFour() {

    document.querySelector(".mission").innerHTML = `


        <h1>
        #4 Primo Contatto.
        </h1>


        <p class="green">
        EVENTO IMPORTANTE LOCALIZZATO
        </p>


        <p>
        LOCATION:
        <br>
        NICHOLAS' HOUSE
        </p>


        <p>
        STATUS:
        <br>
        MOVIE NIGHT
        </p>


        <hr>


        <h2>
        Quarta Domanda:
        </h2>


        <p>
        Cosa e successo quella sera mentre Nicholas ed Elena guardavano Borat 2?
        </p>



        <button onclick="wrongMovie()">
        Elena e caduta dalle scale
        </button>


        <br><br>



        <button onclick="correctMovie()">
        Disaronno, un letto condiviso, e tanto desiderio.
        </button>


        <br><br>



        <button onclick="wrongMovieTwo()">
        Nicholas ha sbattuto la testa ed e svenuto
        </button>



    `;

}




// -------------------------
// RISPOSTA GIUSTA
// -------------------------

function correctMovie() {


    document.querySelector(".mission").innerHTML = `


        <h1>
        Cristo se sbagliavi questa...
        </h1>



        <p class="green">
        +100 XP
        </p>



        <h2>
        ACHIEVEMENT UNLOCKED:
        </h2>



        <p>
        FIRST KISS
        </p>



        <hr>



        <p>
        Una sera tranquilla.
        </p>


        <p>
        Borat 2 in sottofondo,
        qualche bicchiere di Disaronno,
        io sdraiata su di te.
        </p>



        <p>
        Poi mi sono addormentata.
        </p>



        <p>
        Mi hai detto:
        </p>


        <p>
        "O vai nella tua stanza
        o ti butto sul mio letto."
        </p>



        <p>
        E ovviamente sappiamo tutti
        quale opzione e stata scelta.
        </p>



        <p>
        Tra coccole,
        pochi centimetri di distanza,
        forse l'alcool che ha portato un po' di coraggio
        </p>



        <p>
        Ci siamo baciati.
        </p>



        <p>
        E quella notte notte ho finalmente avuto la conferma
        che non ti volevo solo come mio amico,
        volevo baciarti ancora,
        volevo toccarti ancora,
        volevo essere al tuo fianco per ogni tuo obiettivo,
        volevo stare con te. 
        </p>



        <button onclick="missionFive()">
        CONTINUE
        </button>



    `;

}




// -------------------------
// RISPOSTE SBAGLIATE
// -------------------------


function wrongMovie() {


    document.querySelector(".mission").innerHTML = `


        <h1>
        ...
        </h1>



        <p>
        .............
        </p>



        <button onclick="missionFour()">
        ...........................
        </button>



    `;

}




function wrongMovieTwo() {


    document.querySelector(".mission").innerHTML = `


        <h1>
        No, ma...
        </h1>



        <p>
        ma se fosse successo sarebbe stata una scena molto divertente
        </p>



        <p>
        Non che il resto non lo sia stato...
        </p>



        <button onclick="missionFour()">
        Sbagliato comunque, riprova.
        </button>



    `;

}
// -------------------------
// MISSIONE 05
// -------------------------

function missionFive() {

    document.querySelector(".mission").innerHTML = `


        <h1>
        #5 CONNECTION LOST
        </h1>


        <p class="green">
        SIGNAL INTERRUPTION
        </p>


        <p>
        LOCATION:
        <br><br>
        JESOLO 
        <br>
        |
        <br>
        ALGHERO
        </p>


        <p>
        STATUS:
        <br>
        CONNECTION UNSTABLE
        </p>


        <hr>


        <h2>
        WARNING:
        </h2>


        <p>
        A difficult level has started.
        </p>


        <br>


        <p>
        La distanza e arrivata.
        </p>


        <p>
        Due citta diverse.
        Due vite che iniziavano
        a prendere ritmi diversi.
        </p>


        <p>
        Eppure abbiamo provato.
        </p>


        <p>
        Ogni sera c'era una chiamata.
        </p>


        <p>
        Abbiamo cercato di rimanere vicini,
        anche quando eravamo lontani.
        </p>


        <hr>


        <p>
        Ma alcuni livelli sono piu difficili
        di quanto ci aspettiamo.
        </p>


        <p>
        La distanza ha portato dubbi,
        paure e domande.
        ...
        </p>


        <br>


        <h2>
        CONNECTION LOST
        </h2>



        <button onclick="connectionLost()">
        RECONNECT TO THE SERVER
        </button>


    `;

}




// -------------------------
// SECONDA SCHERMATA
// -------------------------

function connectionLost() {


    document.querySelector(".mission").innerHTML = `


        <p class="green">
        SIGNAL OFFLINE
        </p>


        <hr>

        <p>
        La partita sembrava finita.
        </p>


        <p>
        Ma da bravi player che si rispettino...
        </p>


        <br>


        <h2>
        SAVE FILE STATUS:
        </h2>


        <p class="green">
        PAUSED
        </p>


        <hr>


        <p>
        Abbiamo perso,
        </p>


        <p>
        Abbiamo capito, abbiamo studiato.
        </p>


        <p>
        E con grande speranza, abbiamo cliccato "TRY AGAIN".
        </p>


        <br>


        <button onclick="missionSix()">
        TRY AGAIN.
        </button>


    `;

}
// -------------------------
// MISSIONE 06
// -------------------------

function missionSix() {

    document.querySelector(".mission").innerHTML = `


        <h1>
        #6 NEW SAVE CREATED
        </h1>


        <p class="green">
        CONNECTION RESTORED
        </p>


        <p>
        LOCATION:
        <br><br>
        FIUME ARDO - SOPRACORDA
        </p>


        <p>
        STATUS:
        <br>
        NEW BEGINNING DETECTED
        </p>


        <hr>


        <h2>
        Sesta domanda:
        </h2>


        <p>
        Cosa rappresenta quel giorno al fiume?
        </p>



        <button onclick="wrongRiver()">
        Una semplice giornata fuori.
        </button>


        <br><br>



        <button onclick="correctRiver()">
        Il momento in cui abbiamo scelto
        di costruire qualcosa di nuovo.
        </button>


        <br><br>



        <button onclick="wrongRiverTwo()">
        Una sfida per vedere chi attraversava
        il fiume piu velocemente.
        </button>



    `;

}





// -------------------------
// RISPOSTA GIUSTA
// -------------------------

function correctRiver() {


    document.querySelector(".mission").innerHTML = `


        <h1>
        SAVE CREATED
        </h1>


        <p class="green">
        +100 XP
        </p>



        <h2>
        ACHIEVEMENT UNLOCKED:
        </h2>



        <p>
        NEW BEGINNING
        </p>



        <hr>



        <p>
        Non siamo tornati indietro.
        </p>



        <p>
        Abbiamo scelto di ripartire
        da qualcosa che esisteva gia.
        </p>



        <p>
        Ma in modo diverso.
        </p>



        <br>



        <p>
        Quel giorno abbiamo attraversato
        un fiume vestiti.
        </p>



        <p>
        Eravamo completamente zuppi,
        ma stavamo ridendo.
        </p>



        <p>
        Abbiamo fatto l'amore,
        ci siamo lavati insieme nel fiume,
        e poi siamo rimasti li.
        </p>



        <p>
        Seduti su una roccia,
        vestiti,
        con una sigaretta in mano.
        </p>



        <p>
        A parlare di noi.
        </p>



        <br>



        <p>
        Mentre due bambini facevano i tuffi,
        noi stavamo facendo qualcosa
        di molto piu importante.
        </p>



        <p>
        Stavamo scegliendo di provarci ancora.
        </p>



        <hr>



        <p class="green">
        NEW SAVE CREATED
        </p>



        <button onclick="memoryHub()">
        Memory Hub
        </button>



    `;

}





// -------------------------
// RISPOSTE SBAGLIATE
// -------------------------

function wrongRiver() {


    document.querySelector(".mission").innerHTML = `


        <h1>
        NOPE
        </h1>


        <p>
        Dai Nicholas...
        </p>


        <p>
        Era un pochino piu importante
        di una semplice giornata fuori.
        </p>



        <button onclick="missionSix()">
        Usa i neuroni.
        </button>



    `;

}




function wrongRiverTwo() {


    document.querySelector(".mission").innerHTML = `


        <h1>
        CLASSICO.
        </h1>


        <p>
        Riesci sempre a trasformare
        tutto in una competizione.
        </p>


        <p>
        Ma questa volta non era una gara.
        </p>



        <button onclick="missionSix()">
        Clicca qua se pensi che Elena sia l'essere piu bello che esista nella terra
        </button>



    `;

}