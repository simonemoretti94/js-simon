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
    document.getElementById(`p-${counterQuery}`).innerHTML = tempNumber;

};

//working script


const numbArray = [];

let counterQuery = 0;

//injecting p's
for(let i = 0; i < 5; i++){
    pInjecter();
};

//making p's disappear after 10 seconds
setTimeout(() => {

    for(let i = 5; i > 0; i--){

        console.log('counterQuery: ', counterQuery);

        //adding display-none to p's classlist
        document.getElementById(`p-${counterQuery}`).classList.add('d-none');


        //decreasing counterQuery
        counterQuery--;
    };
    
    //I made them disappear only for fun and make it trickier, instead i would rather use innerHTML = '' in order to clean container

    //making input boxes appear
    const cont2 = document.getElementById('container-2'); 
    //console.log(cont2.isConnected);
    cont2.classList.remove('d-none');


}, 5000);


//getting input nodes
const inputDOM = document.querySelectorAll('div#wrapper input');

//getting btn submit
const btnSubmit = document.getElementById('btn-submit');

btnSubmit.addEventListener('click',function (e){

    inputDOM.forEach((element) => {

        element.innerHTML;

    });

});
