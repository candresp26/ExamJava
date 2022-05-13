
let horaExtra=350;

let horasNormal=40;
let horasTrabajador=53;

if(horasTrabajador>40){
    let extras = horasTrabajador -40;
    let pagoNormales = 40*265;
    let pagoExtra = extras * 350;
    console.log("El total a pagar por horas laborales normal (40hrs) se de : "+pagoNormales);
    console.log("El total a pagar por horas extra"+extras+"hrs es de: "+pagoExtra);

}