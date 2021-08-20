const marsCost = 30000;
const moonCost = 20000;

function handelQuentity(planet,oprator){
// take quentity dynamickely
const quentutyInput =document.getElementById(planet+'-quentity');
const previousquentity = quentutyInput.value;
let quentity = parseInt(previousquentity);
if(oprator == 'plaus'){
    quentity++;
    document.getElementById(planet+'-quentity').value = quentity;
}else if(quentity > 0 ){
  quentity = quentity -1;
   document.getElementById(planet+'-quentity').value = quentity; 

}
calculateJurary(planet);
};

let marshTotalCost = 0;
let moonTotalCost = 0;

function calculateJurary(planet){
   const inputQuentityText = document.getElementById(planet+'-quentity').value;
   const inputQuentity = parseInt(inputQuentityText);
 
   if(planet == 'mars'){
     marshTotalCost = inputQuentity * marsCost;
    updateUI(planet,marshTotalCost);
   }
   else{
         moonTotalCost = inputQuentity * moonCost;
    updateUI(planet,moonTotalCost )
   }
   updateTotalValue(marshTotalCost, moonTotalCost)
};
function updateUI(planet,total ){
    let planetTotal = document.getElementById(planet+'-total');
    planetTotal.innerText = total;
    console.log(planetTotal);
};
function updateTotalValue(balance1 , balance2){
    let total =document.getElementById('total');
    let calclution = balance1 + balance2;
    total.innerText = calclution;
}