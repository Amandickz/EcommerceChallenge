function alertBuy(){
    alert("Acquisti non disponibili in questo momento. Per favore riprova più tardi.");
}

function alertEsplora(){
    alert("Impossibile controllare i prodotti ora. Per favore riprova più tardi.");
}

function testeValidacao(field){

    email1 = field.value.substring(0, field.value.indexOf("@"));
    domain1 = field.value.substring(field.value.indexOf("@") + 1, field.value.indexOf("."));
    final1 = field.value.substring(field.value.indexOf(".") + 1, field.value.lenght);

    var email2 = email1;
    var domain2 = domain1;
    var final2 = final1;

    if(email2 == ""){
        alert("E-mail non valida. Per favore controlla e riprova.");
    } else {
        if(domain2 == ""){
            alert("E-mail non valida. Per favore controlla e riprova.");
        } else {
            if(final2 == ""){
                alert("E-mail non valida. Per favore controlla e riprova.");
            } else {
                alert("E-mail registrata nel sistema.");
            }
        }
    }
}