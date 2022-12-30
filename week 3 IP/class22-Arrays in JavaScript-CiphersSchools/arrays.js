// Arrays in JS

// let arrayItem ="book";

const books =["pens","books",4,true];
books[books.length] = "pencil";
book[13] = 3.8;
console.log(books[5]);

console.log(books);
console.log(books.length);
console.log(books[0]);

// Array methods
let pencilBoxContents = ["pen","pencil","eraser"];
console,log(pencilBoxContents.join(" "));
pencilBoxContents.push("sharpener");
pencilBoxContents.shift();
pencilBoxContents.unshift();
pencilBoxContents.pop();

pencilBoxContentsforEach(function(item){
    item = '<li>$(item)</li>';
    console.log(item);
});
let shortItems = pencilBoxContents.find(function (item){
    if(item.length <=5){
        return item;
    }
});
console.log(pencilBoxContents,join(" | "))
