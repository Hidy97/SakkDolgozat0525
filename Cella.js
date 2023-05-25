class Cella {
    #adat;
    #id;
    #divElem;

    constructor(id, adat, szuloElem) {
        this.id = id;
        this.adat = adat;

        szuloElem.append(`<div id="${this.id}" class="cella">${this.#adat}</div>`);

        this.#divElem = $(".cella:last-child");

        this.#divElem.on("click", () => {
            this.kattintasTrigger();
            this.setAllapot()
        })
    }

    setAllapot() {
        szinBeallit();
    }

    #szinBeallit() {
        if (this.#id%2 == 0) {
            this.#divElem.css("background-color", "grey");
        }else{
            this.#divElem.css("background-color", "white");
        }
    }

    kattintasTrigger() {
        const kapcsolas = new CustomEvent("kapcsolas", { detail: this });
        window.dispatchEvent(kapcsolas);
    }
}

export default Cella;