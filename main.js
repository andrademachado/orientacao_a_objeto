const petDoTico = {
    especie:'cachorro',
    raca:'piquenês',
    porte: 'pequeno',
    interege: function() {
        console.log("pulando");
    }
}

const petDoTeco = {
    especie:'gato',
    raca:'siamês',
    porte: 'pequeno',
    interege: function() {
        console.log("pulando");
    }
}

function Pet(especie, raca, porte){
    this.especie = especie;
    this.raca = raca;
    this.porte = porte;
    this.interege = function () {
        console.log("pulando")
    }
}



const petDoTico2= new Pet("cachorro","piquenês","pequeno");
const petDoTeco2= new Pet("gato","siamês","pequeno");
const petDoPatinhas= new Pet("cachorro","pug","pequena");


console.log(petDoTico2);
console.log(petDoTeco2);
console.log(petDoPatinhas);
