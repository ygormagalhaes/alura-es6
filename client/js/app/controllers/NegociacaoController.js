class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
    
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
    }

    adiciona(event) {
        event.preventDefault();

        let dataHelper = new DateHelper();

        let negociacao = new Negociacao(
            dataHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
        
        this.limpaFormulario();

        console.log(negociacao);

        console.log(dataHelper.dataParaTexto(negociacao.data))
    }

    limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1
        this._inputValor.value = 0;

        this._inputData.focus();
    }
}