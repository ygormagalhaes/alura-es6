class Negociacao {

    constructor(data, quantidade, valor) {
        /**
         * Copiando o objeto data para que a mesma
         * não possa ser alterada no futuro.
         */
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        /**
         * Congelando o objeto e deixando suas propriedades
         * somente leitura.S
         */
        Object.freeze(this);
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        /**
         * Retornando uma cópia da propriedade.
         */
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
    
}