// Function Declaration
function myFunction(b=13,c=18){
    let a=b+c;
    return a;
}

// function Expressions
const mySecondFunction =function(b=13,c=18){
    let a=b+c;
    return a;
};
console.log(mySecondFunction(13,18));

// Immediately invoked function Expressions
(function(){
    let b=13;
    let c=18;
    let a=b+c;
    console.log("The sum:",a);
})();

// standard functions
// const redpencilBox = {
//     name: "Red pencil box",
//     color: "red",
//     size: 30,
// };
// const addPencilBox = function(currentPencilBox) {`
//     const newSection = document.createElement("section");
//     newSection.innerHTML= 
//         <h1>Name: ${currentPencilBox.name}</h1>
//         <ul>
//             <li>Color: $(currentPencilBox.color)</li>
//             <li>Size: $(currentPencilBox.size)</li>
//         </ul>
//     `;
//     return newSection;
// };
// document.body.append(addPencilBox(redpencilBox));


// Arrow function
const redpencilBox = {
    name: "Red pencil box",
    color: "red",
    size: 30,
};
const addPencilBox = (currentPencilBox) => {`
    const newSection = document.createElement("section");
    newSection.innerHTML= 
        <h1>Name: ${currentPencilBox.name}</h1>
        <ul>
            <li>Color: $(currentPencilBox.color)</li>
            <li>Size: $(currentPencilBox.size)</li>
        </ul>
    `;
    return newSection;
};
document.body.append(addPencilBox(redpencilBox));

// Arrow function and this keyword
window.size=13;
const yellowpencilBox = {
    name: "Yellow pencil box",
    color: "yellow",
    size: 24,
    newSize: function (size){
        console.log(his.size);
        this.size = size;
        console.log(this.size);
        (function() {
            console.log(this.size);
        })();
        // (() => {
        //     console.log(this.size);
        // })();
    },
};

console.log(yellowpencilBox.newSize(5));

// callback functions
function resultCalculator(result){
    document.querySelector("body").innerHTML = result;
}

function calculation (a,b,callback) {
    let sum = a+b;
    callback(sum);
}

calculation(5,8,resultCalculator);
