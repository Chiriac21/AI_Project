function takeForm() {
    let nume = document.getElementById("nume").value;
    let prenume = document.getElementById("prenume").value;
    let email = document.getElementById("email").value;
    let cnp = document.getElementById("cnp").value;
    let telefon = document.getElementById("telefon").value;
    let zi = document.getElementById("zi").value;
    let luna = document.getElementById("luna").value;
    let an = document.getElementById("an").value;
    let dataNasterii = `${an}-${luna}-${zi}`;
    let sex;
    if(document.getElementById("masculin").checked) {
        sex = document.getElementById("masculin").value;
    }else if(document.getElementById("feminin").checked) {
        sex = document.getElementById("feminin").value;
    }
    console.log(nume);
    console.log(prenume);
    console.log(email);
    console.log(cnp);
    console.log(telefon);
    console.log(dataNasterii);
    console.log(sex);
    
};


