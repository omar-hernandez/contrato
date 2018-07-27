function funciona(){
    var ciudadusuario = "";
    var paisusuario ="";
    var diausuario = 0;
    var mesusuario = "";
    var añousuario = 0;
    var vendedor = "";
    var comprador = "";
    var nacionalidadvendedor = "";
    var bienmueble = "";
    var domiciliovendedor = "";
    var domiciliocomprador = "";
    var importe = 0;
    var descripcion = "";
    var pagosmensuales = 0;

    var encabezado = "";
    var declaracion4 = "";
    var declaracion5 = "";
    var declaracion6 = "";
    var declaracion7 = "";
    var clausula1 = "";
    var clausula2 = "";
    var clausula6 = "";
    var ultimoparrafo = "";
    var firmaVendedor = "";
    var firmaComprador = "";


    ciudadusuario = document.getElementById("ciudadusuario").value.toUpperCase();
    paisusuario = document.getElementById("paisusuario").value.toUpperCase();
    diausuario = document.getElementById("diausuario").value;
    mesusuario = document.getElementById("mesusuario").value.toUpperCase();
    añousuario = document.getElementById("añousuario").value;
    vendedor = document.getElementById("vendedor").value.toUpperCase();
    comprador = document.getElementById("comprador").value.toUpperCase();
    encabezado = "CONTRATO DE COMPRAVENTA QUE CELEBRAN EN " + ciudadusuario + ", " + paisusuario + ", " + "EL DÍA " + diausuario +  " DE " + mesusuario + " DE " + añousuario + ", POR UNA PARTE " + vendedor + ", PERSONA FÍSICA QUE EN LO CONSIGUIENTE SE LE DENOMINARA VENDEDOR, Y POR LA OTRA " + comprador + ", PERSONA FÍSICA QUE EN LO SUCESIVO SE LE DENOMINARA COMPRADOR, MISMOS QUE MANIFIESTAN SU VOLUNTAD PARA SUJETARSE A LAS SIGUIENTES DECLARACIONES Y CLÁUSULAS:";
    document.getElementById("encabezado").innerHTML = encabezado;


    nacionalidadvendedor = document.getElementById("nacionalidadvendedor").value;
    bienmueble = document.getElementById("bienmueble").value;
    declaracion4 = "IV.	Declara el vendedor ser de nacionalidad " + nacionalidadvendedor + ", ser mayor de edad y tener plena capacidad para celebrar el presente contrato, así como ser el propietario del bien mueble objeto del presente contrato, siendo un " + bienmueble + " descrito en la cláusula segunda.";
    document.getElementById("declaracion4").innerHTML = declaracion4;


    domiciliovendedor = document.getElementById("domiciliovendedor").value;
    declaracion5 = "V.	Señala el vendedor como domicilio para oír y recibir notificaciones, emplazamientos y recepción de demandas de cualquier tipo, el ubicado en " + domiciliovendedor + ".";
    document.getElementById("declaracion5").innerHTML = declaracion5;


    domiciliocomprador = document.getElementById("domiciliocomprador").value;
    declaracion6 = "VI.	Declara el comprador ser de nacionalidad " + domiciliocomprador + ", tener plenas facultades jurídicas, estar legitimado para dar cumplimiento a este contrato y contar con el capital necesario para cubrir el precio pactado por ambas partes por el bien mueble objeto del presente acuerdo de voluntades.";
    document.getElementById("declaracion6").innerHTML = declaracion6;


    declaracion7 = "VII.	Señala el vendedor como domicilio para oír y recibir notificaciones, emplazamientos y recepción de demandas de cualquier tipo, el ubicado en " + domiciliovendedor + ".";
    document.getElementById("declaracion7").innerHTML = declaracion7;

    
    importe = document.getElementById("importe").value;
    clausula1 = "<span class='negrilla'>PRIMERA.</span> Este acuerdo de voluntades tiene por objeto que el vendedor transfiera la propiedad y posesión al comprador de un " + bienmueble + " a cambio de una cantidad cierta y en dinero. Esta cantidad será de " + importe + ", cantidad que el comprador deberá cubrir en Una sola exhibición.";
    document.getElementById("clausula1").innerHTML = clausula1;
    
    importe = document.getElementById("importe").value;
    pagosmensuales = document.getElementById("pagosmensuales").value;
    if(pagosmensuales<2){
        clausula1 = "<span class='negrilla'>PRIMERA.</span> Este acuerdo de voluntades tiene por objeto que el vendedor transfiera la propiedad y posesión al comprador de un " + bienmueble + " a cambio de una cantidad cierta y en dinero. Esta cantidad será de " + importe + ", cantidad que el comprador deberá cubrir en Una sola exhibición.";
        document.getElementById("clausula1").innerHTML = clausula1;
    }
    else{
        clausula1 = "<span class='negrilla'>PRIMERA.</span> Este acuerdo de voluntades tiene por objeto que el vendedor transfiera la propiedad y posesión al comprador de un " + bienmueble + " a cambio de una cantidad cierta y en dinero. Esta cantidad será de " + importe + ", cantidad que el comprador deberá cubrir en " + pagosmensuales + " pagos mensuales";
        document.getElementById("clausula1").innerHTML = clausula1;
    }   
       
    descripcion = document.getElementById("descripcion").value;
    clausula2 = "<span class='negrilla'>SEGUNDA.</span> El vendedor entregara un bien mueble a continuación descrito:" + descripcion + ".";
    document.getElementById("clausula2").innerHTML = clausula2;
    
    clausula6 = "<span class='negrilla'>SEXTA.</span> Para cualquier cosa relacionada con la interpretación y cumplimiento de este contrato las partes se someten a la competencia y jurisdicción de los tribunales de "  + ciudadusuario + ", " + paisusuario + ".";
    document.getElementById("clausula6").innerHTML = clausula6;

    ultimoparrafo = "Enterados tanto vendedor como comprador de los términos y alcances de este documento, firman de conformidad en" + ciudadusuario + ", " + paisusuario + ", el día" + diausuario +  " DE " + mesusuario + " DE " + añousuario + ".";
    document.getElementById("ultimoparrafo").innerHTML = ultimoparrafo;

    firmaVendedor = "EL VENDEDOR                " + vendedor;
    document.getElementById("firmaVendedor").innerHTML = firmaVendedor;

    firmaComprador = "EL COMPRADOR                " + comprador;
    document.getElementById("firmaComprador").innerHTML = firmaComprador;
   
}


