let destinacija=document.getElementById("lista-destinacija");
console.log(destinacija);

let naslov = document.getElementsByClassName("title");
console.log(naslov);

let element= document.getElementsByTagName("li");
console.log(element);

let wrap = document.querySelector("#wrapper");
console.log(wrap);

let nekeDestinacije=document.querySelectorAll(".naziv");
console.log(nekeDestinacije);

// let listaDestinacija = document.querySelector("#lista-destiancija");
// console.log("Roditelj ovog cvora je:", listaDestinacija.parentNode);

// let listaDestinacija2 = document.querySelector("#lista-destiancija");
// console.log("Roditelj ovog cvora je:", listaDestinacija2.children);
// console.log(listaDestinacija2.childNodes);


// let listaDestinacija3 = document.querySelector("#lista-destiancija");
// console.log("Next sibling is: ", listaDestinacija3.nextElementSibling);
// console.log("Next sibling is: ", listaDestinacija3.previousElementSibling);


let banner=documet.querySelector("#page-banner");
console.log("banner node name is: ", banner.nodeName);
console.log("banner node name is: ", banner.nodeType);


let destinacijaFrancuska = document.querySelector(".naziv");
destinacijaFrancuska.textContent="BEOGRAD";
//destinacijaFrancuska.innerHTML="<h1>BEOGRAD</h1>";

var dugmci = document.querySelectorAll(".obrisi");
console.log(dugmci);

Array.from(dugmici).forEach(function(dugme){

    dugme.addEventListener("click", function(e){
        const li=e.target.parentNode;
        let ul=li.parentNode;
        ul.removeChild(li);
    })
})





