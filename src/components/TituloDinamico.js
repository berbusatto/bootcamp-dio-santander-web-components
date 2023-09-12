class TituloDinamico extends HTMLElement {
    constructor () {
        super();

        const shadow = this.attachShadow({mode: "open"});

        // estrutura
        const componentRoot = document.createElement("h1");

        console.log(this.getAttribute("titulo"));
        // props
        componentRoot.textContent = this.getAttribute("titulo");
        // componentRoot.textContent = "titulo";


        const style = document.createElement("style");
        style.textContent = `
            h1 {
                color: green;
            }
        `
        //enviar para a shadowDOM
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

// precisa ter hifen!!!
customElements.define('titulo-dinamico', TituloDinamico) 
