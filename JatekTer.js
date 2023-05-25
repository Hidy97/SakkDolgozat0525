import Cella from "./Cella.js";
class JatekTer {
    #allapotLista = [];
    #elemLista = [];
    #lepes;

    constructor() {
        this.#lepes = 0;
        this.#allapotLista = ["♙", "♙", "♙", " ", " ", " ", "♟︎", "♟︎", "♟︎"]

        this.#jatekter();
        $(window).on("kapcsolas", (event) => {

        })
    }

    #jatekter() {
        const szuloElem = $("article");
        for (let index = 0; index < this.#allapotLista; index++) {
            this.#elemLista = new Cella(this.#lepes, this.#allapotLista[i], szuloElem);
        }        
    }

    #lepesekkeresese(kivalasztottIndex) {
        this.#lepes = kivalasztottIndex;
    }

    #init() {
        new JatekTer();

    }

    #ellenorzes() {

    }

}

export default JatekTer;