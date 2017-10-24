class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
    
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
    }

    adiciona(event) {
        event.preventDefault();

        let data = new Date(
            ...this._inputData.value.split("-")
            .map((item, indice) => item - indice % 2));

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );
        
        this.limpaFormulario();

        console.log(negociacao);
    }

    limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1
        this._inputValor.value = 0;

        this._inputData.focus();
    }
}