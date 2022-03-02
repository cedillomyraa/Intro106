function loadData(){
    console.log("Laoding from server!!");
}

function sayHelloToPerson(name){
    console.log("Hi there,"+ name);
}

function sum(num1, num2){
    let result = num1 + num2;
    console.log("The result is: " + result);
    return result;

    console.log("below a return",);
}

function testValidation() {
    let num = 1;

    if(num < 10) {
        console.log("Error, num to low");
        return;
    }

    console.log("Saved!");
}

//skip the seven
function printSomeNumber(){

    for(let i = 0; i <= 21; i++){
        if( i != 7 && i != 13){
            console.log(i);           
        }
    }
    
}

function sumSomeNumbers(){
    let list = [12,32,12,456,12,87,345,56,3,7,5678,2,4587,243,-3,4567,-90,0];
    let total =0;
    let pivot=list[0];
    let smallest=list[0];
    for(let i =0; i< list.length; i++){
        let num= list[i];
        //total=total + num;
        total += num;
        //find greater
        if(num>pivot){
            pivot=num;
        }
        //smallest
        if(num<smallest){
            smallest=num;
        }
    }
    console.log("sum:", total);
    // moved and cut this part of the code after it was created. 

    // //find the biggest number
    // //pivot=to the first element on the list

    // let pivot=list[0];
    // for(let i=0; i< list.length; i++){
    //     let num=list[i];
    //     if(num>pivot){             //if num is greater than my pivot then pivot should be equal to my num
    //         pivot=num;
    //     }
    //pivot is the answer
    console.log("biggest:", pivot);
    //now we will print the lowest number
    console.log("smallest:",smallest);
    }



function init(){
    ;console.log("DOM ready");
    //get the input,catch event,hook event, load data

    loadData();
    //name function
    sayHelloToPerson("Jose");
    sayHelloToPerson("Bob");
    //sum function
    let res= sum(21, 21); 
    console.log(res);//you need to return the value

    //for loops
    printSomeNumber();// i want it to print 0 to 20
    sumSomeNumbers();
};

// when the browser finishes rendering all the HTML, do this
window.onload = init;

//functions

