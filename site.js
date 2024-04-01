let bienvenida = alert ("hola bienvenidos a nuestra pagina de Nike")
  datosUsuario = prompt ("ingrese su nombre y apellido")  

let allzapatillas = [];

class zapatillas {
    constructor (nombre, precio, iva) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.iva = parseFloat(iva);
        this.array();
    }

    array() {
        allzapatillas.push(this);
    }

    

    ivaincluido() {
    this.iva = this.iva *1.21;
    }
}

const zapatillas1 = new zapatillas ("Air Jordan 1 Retro High J. Balvin", "10" , "10");
const zapatillas2 = new zapatillas ("Air Jordan 1 High OG TS SP Travis Scott", "20" , "20");
const zapatillas3 = new zapatillas ("Air Jordan 1 Low sneakers", "30" , "30");
const zapatillas4 = new zapatillas ("Quest 3 low-top sneakers", "40" , "40");
const zapatillas5 = new zapatillas ("Nike Free RN Flyknit 2018 sneakers", "50" , "50");
const zapatillas6 = new zapatillas ("x Sean Wotherspoon Air Max 97 sneakers", "60" , "60");
const zapatillas7 = new zapatillas ("Kyrie 6 Pre Heat sneakers", "70" , "70");
const zapatillas8 = new zapatillas ("Kyrie 5 sneakers", "80" , "80");
const zapatillas9 = new zapatillas ("Kyrie 1 sneakers", "90" , "90");

zapatillas1.ivaincluido();
console.log(zapatillas1);

zapatillas2.ivaincluido();
console.log(zapatillas2);

zapatillas3.ivaincluido();
console.log(zapatillas3);

zapatillas4.ivaincluido();
console.log(zapatillas5);

zapatillas5.ivaincluido();
console.log(zapatillas5);

zapatillas6.ivaincluido();
console.log(zapatillas6);

zapatillas7.ivaincluido();
console.log(zapatillas7);

zapatillas8.ivaincluido();
console.log(zapatillas8);

zapatillas9.ivaincluido();
console.log(zapatillas9);

console.log(bienvenida);
console.log(datosUsuario);