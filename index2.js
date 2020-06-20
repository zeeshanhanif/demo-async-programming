console.log("Before Prepare food");

function prepareFood(data){
    let promise = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            if(data !== 2){
                console.log("Prepare Food");
                resolve("Food is Ready");
            }
            else {
                reject("Value not acceptable");
            }
            
        },10);
    });

    return promise;
}
function prepareFrenchToast(){
    let promise = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            console.log("Prepare Frensh Toast");
            resolve("French Toast is Ready");
        },20);
    });
    return promise;
}
function prepareCoffee(){
    let promise = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            console.log("Prepare Coffee");
            resolve("Coffee is Ready");
        },30);
    });
    return promise;
}

let promise = prepareFood(2);
//console.log("Promise = ",promise);
promise.then(function (value){
    console.log("Food is Ready callback = ",value);
    return prepareFrenchToast();
})
.then(function (frenchToastValue){
    console.log("French Toast is Ready callback = ",frenchToastValue);
    return prepareCoffee();
})
.then(function (coffeeValue){
    console.log("Coffee is Ready callback = ",coffeeValue);
})
.catch(function (error){
    console.log("Error = ",error);
});



/*
prepareFood(function(value){
    console.log("Food is Ready callback = ",value);
    prepareFrenchToast(function (value){
        console.log("French Toast is Ready callback = ",value);
        prepareCoffee(function (value){
            console.log("Coffee is Ready callback = ",value);
        });
    });
});
*/
console.log("After Prepare food dinner is ready");