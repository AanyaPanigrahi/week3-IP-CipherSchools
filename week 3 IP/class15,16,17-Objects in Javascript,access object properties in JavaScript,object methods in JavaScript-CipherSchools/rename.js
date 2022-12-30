const pencilbox = {
    name: "A Pencil Box",
    size: 30,
    color: "red",
    zipLength: {
        left: 12,
        right: 12,
        top: 24,
    },
    zipOpen: false,
    toggleZip: function(zipStatus){
        this.zipOpen = zipStatus
    },
};
console.log(pencilbox);

// Dot notation
console.log(pencilbox.color);
console.log(pencilbox.zipLength.left);

//Bracket notation
console.log(pencilbox["size"]);

// var sizeValue = "size";
// console.log(pencilbox[sizeValue]);


// changing value
console.log(pencilbox.toggleZip(true));