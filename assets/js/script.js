//script

//const pDOM = document.querySelectorAll('p');

//console.log('p\'s connected: ', pDOM);

const numbArray = [];

let counterQuery = 1;

//declaring functions
function pInjecter(){
    let tempNumber = 0;

    //tempNumber creation
    tempNumber = Math.floor((Math.random()*20) + 1);
    console.log('tempNumber: ', tempNumber);

    //injecting tempNumber into DOM p's
    document.getElementById(`p-${counterQuery}`).innerHTML = tempNumber;

    //increasing query counter
    counterQuery++;
};

//working script

//injecting p's
for(let i = 0; i < 5; i++){
    pInjecter();
};

//making p's disappear after 10 seconds
setTimeout(() => {

    for(let i = 5; i > 0; i--){

        //adding display-none to p's classlist
        document.getElementById(`p-${counterQuery}`).classList.add('display-none');

        

    }    

}, 10000)
