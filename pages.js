let btns = document.querySelectorAll(".prod")
let totalItems = [];
let totalItemsBadge = document.querySelector("#totalItems")
let checkoutBtn = document.querySelector("#checkoutBtn")
let prodsCards = document.querySelectorAll(".prodCard")

let prodGroup = [{'name':'prod1','type':'Rubber Duck', 'description':'Update Me','img':'updateMe','price':12,'items':0},
{'name':'prod2','type':'Courgette','description':'Update Me','img':'updateMe', 'price':8,'items':0},
{'name':'prod3','type':'Shark','description':'Update Me','img':'updateMe', 'price':5,'items':0}]


for (let i = 0; i < prodsCards.length; i++) {
    prodsCards[i].childNodes[3].childNodes[1].innerText=prodGroup[i].type
}

btns.forEach(btn => {
   btn.addEventListener('click', event => {
        console.log( event.target.id );
        totalItems.push(event.target.id)
        updateTotalItemsBadge()
        updateIndividualProds(event.target.id)
   });
});

checkoutBtn.addEventListener('click', event => {console.log("Checkout btn clicked")})


function updateTotalItemsBadge(){
    totalItemsBadge.innerText=totalItems.length;
    //or count 
}
function updateIndividualProds(prodName){
       //update list
       prodGroup.forEach(ele => {
        if([ele.name]==prodName){
            ele.items +=1
        }
     });

}


function calculate(){
    let test;
prodGroup.forEach(ele => {
test = ele.price*ele.items
console.log(ele.items +' of ' + ele.name+ ' costs ' + test)
     });
}


//ideas: rubbyducky, aubegines, shark 

