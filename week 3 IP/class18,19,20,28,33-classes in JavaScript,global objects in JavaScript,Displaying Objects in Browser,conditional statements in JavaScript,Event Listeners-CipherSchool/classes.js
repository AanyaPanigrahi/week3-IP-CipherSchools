import pencilBox from "./pencilBox.js";

const newPencilBox = new pencilBox("Pencil Box",30,"red",12,12,24,false,"2022-12-28 00:00:00");

console.log('The pencil box object:',newPencilBox);
console.log('Size:',newPencilBox.size);
console.log('Date Purchased:', newPencilBox.datePurchased);

const content = `
    <main>
        <ul>
            <li>Name: ${newPencilBox.name} </li>
            <li>Size: ${newPencilBox.size} </li>
            <li>Color: ${newPencilBox.color}</li>
            <li>Zip Length Left: ${newPencilBox.zipLength.left}</li>
            <li>Zip Length Right: ${newPencilBox.zipLength.right}</li>
            <li>Zip Length Top: ${newPencilBox.zipLength.top}</li>
            <li>Zip Status: ${newPencilBox.zipOpen ? "The zip is open" : "The zip is closed"
                        } </li>
        </ul>
    </main>
`;
    


document.body.innerHTML = content;

const button = document.querySelector("button");
const status = document.querySelector(".status");


console.log("The Pencil Box Object:", newPencilBox);
console.log("Size:",newPencilBox.size);
button.addEventListener('click',()=>{
    status.innerText === "The zip is open" 
        ? status.innerText="The zip is closed"
        : status.innerText="The zip is open";
    button.innerText==="Open the zip"
        ?button.innerText="close the zip"
        :button.innerText="open the zip";
});
console.log('Date Purchased:', newPencilBox.datePurchased);
console.log('Date Purchased:', newPencilBox.pencilBoxAge());

// if(newPencilBox.zipOpen === true && newPencilBox.size === 30){
//     console.log("YES");
// }else{
//     console.log("NO");
// }

let size = 30;
let boxSize;
switch(true){
    case size >30:
    boxSize ='large';
    break;
    case size <= 30 && size >=20:
        boxSize = "";
    case size <=19 && size >=10:
        box - "small";
}

console.log("box size:",size);
console.log("Status:",boxSize);