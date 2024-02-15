function validerFornavn(Fornavn){
    let regexp = /^[a-zA-ZæøåÆØÅ .\-]{2,20}$/;
    let ok = regexp.test(Fornavn);
    if(!ok) {
        $("#feilNavn").html("Fornavn må bestå av 2 til 20 bokstaver");
        return false;
    }
    else {
        $("#feilNavn").html("");
        return true;
    }
}



function validerAlternativer(){
    if (document.getElementById('Alternativer').selectedIndex !== "Velg film her") {
        $("#feilAlternativ").html("Velg en av filmene");
        return false;
    }
    return true;

}
function validerAntall(Antall){
    let regexp = /^[0-9]{1,2}$/;
    let ok = regexp.test(Antall);
    if(!ok) {
        $("#feilAntall").html("Velg antall billetter mellom 1 og 99");
        return false;
    }
    else {
        $("#feilAntall").html("");
        return true;
    }
}
function validerEtternavn(Etternavn){
    let regexp = /^[a-zA-ZæøåÆØÅ .\-]{2,20}$/;
    let ok = regexp.test(Etternavn);
    if(!ok) {
        $("#feilEtternavn").html("Etternavn må bestå av 2 til 20 bokstaver");
        return false;
    }
    else {
        $("#feilEtternavn").html("");
        return true;
    }
}

function validerTelefonnr(Telefonnr){
    let regexp = /^[0-9. \-]{8}$/;
    let ok = regexp.test(Telefonnr);
    if(!ok) {
        $("#feilTelefonnr").html("Telefonnr må bestå av åtte siffer");
        return false;
    }
    else {
        $("#feilTelefonnr").html("");
        return true;
    }
}

function validerEpost(Epost){
    let regexp = /^[a-zA-ZæøåÆØÅ0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let ok = regexp.test(Epost)
    if(!ok) {
        $("#feilEpost").html("Ugyldig epostadresse");
        return false;
    }
    else {
        $("#feilEpost").html("");
        return true;
    }
}
function ValiderOgKjopbillett() {
    let AlternativerOK = validerAlternativer($("#Alternativer").val());
    let AntallBilletterOK = validerAntall($("#Antall").val());
    let FornavnOK = validerFornavn($("#Fornavn").val());
    let EtternavnOK = validerEtternavn($("#Etternavn").val());
    let TelefonnrOK = validerTelefonnr($("#Telefonnr").val());
    let EpostOK = validerEpost($("#Epost").val());
    if (AlternativerOK && AntallBilletterOK && FornavnOK && EtternavnOK && TelefonnrOK && EpostOK) {
        Addrow();

    }
}

let list1 = [];
let list2 = [];
let list3 = [];
let list4= [];
let list5 = [];
let list6 = [];

let n = 1;
let x = 0;

function Addrow(){
    let Addrow = document.getElementById('Vis-Billett');
    let NyRow = Addrow.insertRow(n);

    list1[x]= document.getElementById("Alternativer").value;
    list2[x]= document.getElementById("Antall").value;
    list3[x]= document.getElementById("Fornavn").value;
    list4[x]= document.getElementById("Etternavn").value;
    list5[x]= document.getElementById("Telefonnr").value;
    list6[x]= document.getElementById("Epost").value;


    let cel1 = NyRow.insertCell(0);
    let cel2=NyRow.insertCell(1);
    let cel3=NyRow.insertCell(2);
    let cel4=NyRow.insertCell(3);
    let cel5=NyRow.insertCell(4);
    let cel6=NyRow.insertCell(5);

    cel1.innerHTML=list1[x];
    cel2.innerHTML=list2[x];
    cel3.innerHTML=list3[x];
    cel4.innerHTML=list4[x];
    cel5.innerHTML=list5[x];
    cel6.innerHTML=list6[x];

    n++;
    x++;
}