

edad = Number(prompt("Hola!, cual es tu edad?"));
if (edad<18){
    alert ("Para ingresar tenes que ser mayor de edad") 
            }   

while (edad >=18)
{ 


alert ("Bienvenidos a R&B indumentaria");

alert ("Contamos con remeras a 2500$, buzos a $4000 y pantalones a $5000");
    const saludar = ()=> console.log ("gracias por tu compra");
     
let ejer=Number(prompt("Llevas 1, 2 o 3 articulos?"));

switch ( ejer) 
{ 
case 1:
    let articulos=prompt("Llevas remeras, buzos o pantalones?");
    articulos=articulos.toLowerCase();
    switch (articulos)
    { 
        //llevo remeras
    case "remeras":
        let remeras=Number(prompt ( " Cuantas remeras quisieras comprar?"));
        let monto1 = remeras*2500;
        console.log ("Llevas "+ remeras + " a 2500$ c/u")
        alert ("el monto es $ "+monto1);
        saludar();
    break;
        //llevo buzo
    case "buzos":
        let buzos=Number(prompt ( " Cuantos buzos quisieras comprar?"));
        let monto2 = buzos*4000;
        console.log ("Llevas "+ buzos + " a 4000$ c/u")
        alert ("el monto es $ "+monto2);
        saludar();
    break;
        //llevo pantalon
    case "pantalones":
        let pantalones=Number(prompt ( " Cuantos pantalones quisieras comprar?"));
        let monto3 = pantalones*5000;
        console.log ("Llevas "+ pantalones + " a 5000$ c/u")
        alert ("el monto es $ "+monto3);
        saludar();
    break;  

    }



break;


case 2:
    art2= Number(prompt(" Llevas 1: remeras y buzos, 2: remeras y pantalones 3: buzos y pantalones?"));
         switch (art2)
    
         { 
             // llevo remera y buzo
            case 1:
                let remeras1=Number(prompt ( " Cuantas remeras quisieras comprar?"));
                let monto11 = remeras1*2500;
                console.log ("Llevas "+ remeras1 + " remeras a 2500$ c/u")
         
                let buzos1=Number(prompt ( " Cuantos buzos quisieras comprar?"));
                let monto22 = buzos1*4000;
                console.log ("Llevas "+ buzos1 + " buzos a 4000$ c/u")

                let monto = monto11+monto22;
                 alert (" Serian $ "+ monto + " que tengas un buen dia"); 
                saludar();
             break;

             //llevo remeras y pantalones
            case 2:
                let remeras=Number(prompt ( " Cuantas remeras quisieras comprar?"));
                let monto1 = remeras*2500;
                console.log ("Llevas "+ remeras + " remeras a 2500$ c/u")

                let pantalones1=Number(prompt ( " Cuantos pantalones quisieras comprar?"));
                let monto3 = pantalones1*5000;
                console.log ("Llevas "+ pantalones1 + " pantalones a 5000$ c/u")

                let monto2 = monto1+monto3;
                alert (" Serian $ "+ monto2 + " que tengas un buen dia"); 
                saludar();
              break;

              // llevo buzos y pantalones
            case 3:
                let buzos=Number(prompt ( " Cuantos buzos quisieras comprar?"));
                let monto222 = buzos*4000;
                console.log ("Llevas "+ buzos + " buzos a 4000$ c/u")

                let pantalones=Number(prompt ( " Cuantos pantalones quisieras comprar?"));
                let monto33 = pantalones*5000;
                console.log ("Llevas "+ pantalones + " pantalones a 5000$ c/u")

                let monto4 = monto222+monto33;   
                alert (" Serian $ "+ monto4 + " que tengas un buen dia"); 
                saludar();
            break;
         }

break;




case 3:
    //llevo todo
    let remeras=Number(prompt ( " Cuantas remeras quisieras comprar?"));
    let monto1 = remeras*2500;
    console.log ("Llevas "+ remeras + " remeras a 2500$ c/u")

    let buzos=Number(prompt ( " Cuantos buzos quisieras comprar?"));
    let monto2 = buzos*4000;
    console.log ("Llevas "+ buzos + " buzos a 4000$ c/u")

    let pantalones=Number(prompt ( " Cuantos pantalones quisieras comprar?"));
    let monto3 = pantalones*5000;
    console.log ("Llevas "+ pantalones + " pantalones a 5000$ c/u")
         
    let monto = monto1+monto2+monto3;
    alert (" Serian $ "+ monto + " que tengas un buen dia");
    saludar();
break;

 }


 console.log (" Esperamos que vuelvas a Visitarnos");
 
}

 

