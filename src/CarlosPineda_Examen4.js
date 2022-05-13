class Persona {


constructor(nombre, apellido, edad){
this.nombre = nombre;
this.apellido= apellido;
this.edad=edad;
}

getDetails(){
    console.log(nombre);
    console.log(apellido);
    console.log(edad);
}



}

class Empleado extends Persona{

    constructor(nombre, apellido, edad,tipo){
        super(nombre, apellido, edad);
        this.tipo = tipo;
    }

    getDetails(){
        super.getDetails();
        console.log(tipo);

    }

}

class Nomina extends Empleado{

    Pagos(){
        let aleatorio = Math.floor((Math.random() * (15-5)) +5);
        console.log(aleatorio)
        if(Empleado.tipo="S"){
            let Salsind  = (aleatorio * 350)*0.10;


        }esle
        {
            let SalConfi = (aleatorio*500)*0.13;
        }
    }




}