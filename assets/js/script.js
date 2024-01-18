//script

//declaring functions
function pInjecter(){
    let tempNumber = 0;

    //increasing counterQuery
    counterQuery++;

    //tempNumber creation
    tempNumber = Math.floor((Math.random()*20) + 1);
    console.log('tempNumber: ', tempNumber);

    //adding tempNumber to numbArray
    numbArray.push(tempNumber);

    //injecting tempNumber into DOM p's
    document.getElementById(`p-${counterQuery}`).innerHTML = 'n: ' + tempNumber;

};

function verdict(boolean){

     //connecting h1-end
     const h1End = document.getElementById('h1-end');

    if(esitoBool === true){
        h1End.innerHTML = 'Every value matches!';
        h1End.classList.remove('d-none');
    }
    else{
        h1End.innerHTML = 'Wrong!';
        h1End.classList.remove('d-none');
    };

};

function evaluatingVal(value){

    if(numbArray[arrayCounter] === value){
        console.log('TRUE! array counter: ', arrayCounter, 'numbarray counter: ', numbArray[arrayCounter], 'element value: ', value, 'esitobool: ', esitoBool);
    }
    else if(isNaN(value)){
        esitoBool = false;
        alert(`Il valore identificato alla pos: ${arrayCounter} non è un numero`)
        console.log('Il valore identificato alla pos: ',arrayCounter, ' non è un numero');
    }
    else{
        esitoBool = false;
        console.log('FALSE! array counter: ', arrayCounter, 'numbarray counter: ', numbArray[arrayCounter], 'element value: ', value,  'esitobool: ', esitoBool);

    };
    
    };

//working script


const numbArray = [];

let counterQuery = 0;

let esitoBool = true;

//injecting p's
for(let i = 0; i < 5; i++){
    pInjecter();
};

//making p's disappear after 10 seconds
setTimeout(() => {

    for(let i = 5; i > 0; i--){

        //console.log('counterQuery: ', counterQuery);

        //adding display-none to p's classlist
        document.getElementById(`p-${counterQuery}`).classList.add('d-none');


        //decreasing counterQuery
        counterQuery--;
    };
    
    //I made them disappear only for fun and make it trickier, instead i would rather use innerHTML = '' in order to clean container

    //making input boxes appear
    const cont2 = document.getElementById('container-2'); 
    cont2.classList.remove('d-none');


}, 10000);

//I made it disappear after 10 seconds 'cause i'm out of patience


//getting input nodes
const inputDOM = document.querySelectorAll('div#wrapper input');

//getting btn submit
const btnSubmit = document.getElementById('btn-submit');

btnSubmit.addEventListener('click',function (e){

    //log numbArray
    console.log('numbArray log: ', numbArray);

    //declaring array counter
    arrayCounter = 0;

    inputDOM.forEach((element) => {

        //logging input value
        console.log('input innerHTML: ', element.value);
        let elementVal = Number(element.value);

        evaluatingVal(elementVal);

        arrayCounter++;

    });

    //making second container disappear
    document.getElementById('container-2').classList.add('d-none');

    verdict(esitoBool);
    
});

/* others only for style purposes */

function submitF(e){

    const submitBtn = document.getElementById('btn-submit');

    submitBtn.style.scale = "1.1"; submitBtn.innerHTML = 'click here!';

};