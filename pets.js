function Especie(cachorro) {
    this.cachorro = cachorro;
    this.dizAu = function() {
        console.log(this.cachorro + " diz Au Au");
    }

   
}

function Bichoestimacao(cachorro, pelagem, comportamento){    
    this.pelagem = pelagem;
    this.comportamento = comportamento;

    this.dizComportamento = function(){
        console.log(this.comportamento);
    }

    Especie.call(this, cachorro);
}


const bichoestimacao1 = new Bichoestimacao("Dálmata","baixa","dócil");
console.log(bichoestimacao1);
bichoestimacao1.dizAu();
bichoestimacao1.dizComportamento();

