window.addEventListener("load", ()=> {

let buttonRandom= document.querySelector("#random");
let buttonSave= document.querySelector("#save");
let save= document.querySelector("#saveperson");
let textbox= document.querySelector(".box");
let listbox= document.querySelector(".mylist");
let select= document.querySelector("#all");

function getCharacter() {

    let randomNumber =Math.floor((Math.random() * 82)+1);
    let apiUrl="https://swapi.dev/api/people/"+randomNumber+"/";
    axios.get(apiUrl).then(function(response) {

       textbox.innerHTML="Name: "+response.data.name+" Height: "+response.data.height;

    }).catch(e => {
        error();
    });
}

function error() {
    textbox.innerText= "Try again !";

}

function saveCharacter() {
    let item= document.createElement("li");
    
    item.innerHTML=textbox.innerHTML;
    let i= document.createElement("span");
    i.addEventListener("click", (event) => {
        item.remove()
      })
    i.innerHTML="X";

    listbox.append(item);
    item.append(i);

}

function saveC() {
    let item= document.createElement("li");
    let i= document.createElement("span");

    i.addEventListener("click", (event) => {
        item.remove()
      })
    item.innerHTML= select.value;
    i.innerHTML="X";

    listbox.append(item);
    item.append(i);

}

async function myfunc() {

   for (i = 1; i < 83; i++) {
    const url = 'https://swapi.dev/api/people/'+i+'/';

     fetch(url).then(response => response.json()).then(json => { 
        let option= document.createElement("option");
        option.innerHTML= "Name: "+json.name+" Height: "+json.height;
        select.append(option);

    })  

}
}

myfunc();

save.addEventListener("click", saveC)
buttonRandom.addEventListener("click", getCharacter);
buttonSave.addEventListener("click", saveCharacter);


})

