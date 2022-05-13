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

    constructor(Empleado = []){
        super.getDetails;
    }

    pagos(){
        let aleatorio = Math.floor((Math.random() * (15-5)) +5);
        console.log(aleatorio)
        for (let index = 0; index < Empleado.length; index++) {
            if(Empleado[index].tipo="S"){
                let Salsind  = (aleatorio * 350)*0.10;
                console.log( Empleado[index].nombre+" "+Empleado[index].apellido+" de "+ Empleado[index].edad+" pertenece a sindicato con un sueldo de "+ Salsind+" por "+aleatorio+" dias trabajados" )


            }esle
            {
                let SalConfi = (aleatorio*500)*0.13;
                console.log( Empleado[index].nombre+" "+Empleado[index].apellido+" de "+ Empleado[index].edad+" pertenece a empleado de confianza con un sueldo de "+ Salsind+" por "+aleatorio+" dias trabajados" )
            }

        }

    }


    calcularNomina(){

        let empleado1 = new Nomina ("Carlos","Pineda",30,C);
        let empleado2 = new Nomina ("Andres","Perez",31,C);
        let empleado3 = new Nomina ("Roberto","Jimenez",32,S);

        empleado1.pagos;
        empleado2.pagos;
        empleado3.pagos;

    }




}