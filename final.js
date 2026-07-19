// -------------------------
// FINAL SCREEN
// -------------------------

function birthdayScreen() {


    document.body.className = "birthday-mode";


    document.querySelector(".mission").innerHTML = `


        <div class="birthday-card">


            <h1>
            SAVE FILE COMPLETE
            </h1>



            <h2>
            BUON COMPLEANNO ORSETTO MIO!
            <br>
            NICHOLAS
            </h2>



            <p>
            Dopo tutti i livelli superati,
            le missioni completate
            e gli imprevisti incontrati lungo il percorso...
            </p>



            <p>
            sei arrivato alla fine
            del nostro piccolo gioco.
            </p>



            <p>
            O meglio, alla fine del primo capitolo del nostro primo gioco.
            Stiamo aspettando con ansia il sequel.
            </p>



            <p>
            Ad altri mille capitoli da scrivere.
            </p>



            <hr>



            <p>
            PLAYER 1:
            <br>
            Villone64
            </p>



            <p>
            PLAYER 2:
            <br>
            elysf_
            </p>



            <p class="green">
            STATUS:
            <br>
            STILL PLAYING ♡
            </p>



            <button class="birthday-button" onclick="finalLetter()">
            OPEN FINAL MESSAGE 
            </button>



        </div>


    `;

}




// -------------------------
// FINAL LETTER
// -------------------------

function finalLetter() {


    document.querySelector(".mission").innerHTML = `


        <div class="birthday-card">


            <h1>
            Per il mio Nicholas.
            </h1>



            <p>
            Se sei arrivato fin qui,
            significa che hai completato
            il nostro piccolo viaggio.
            </p>



            <p>
            Come ti ho gia detto questo non e un finale, ma nemmeno un inizio.
            </p>



            <p>
            E la storia che pian piano stiamo costruendo,
            che VOGLIAMO costruire.
            di quello che possiamo fare,
            sia da soli, ma ancora di piu insieme.
            </p>



            <p>
            Ho voluto fare questo per ripercorrere il nostro percorso insieme a te,
            per farti vedere al meglio l'emozioni che provavo. 
            Perche nessuno dei due si sarebbe mai aspettato che un momento di svago si sarebbe
            rivelata nella persona piu importante che io conosca.
            Tu sei la mia persona.
            </p>



            <p>
            Grazie per tutti i piccoli momenti.
            </p>



            <p>
            Per le risate,
            le prese in giro,
            le sfide a carte,
            i gelati,
            i ragebait,
            e anche per i momenti difficili.
            </p>



            <p>
            E importante ricordare.
            </p>



            <p>
            Buon compleanno Nicholas.
            </p>



            <p>
            Ti amo.
            </p>


        </div>


    `;

}