// function myFunction(param){
//         console.log(typeof param)
// }

// function myCallback(value){
//     value('123')
// }

// myCallback(myFunction)

// //

var pets = [
    'dog',
    'chicken',
    'cat',
    'fist'
]

Array.prototype.map2 = function(callback){
    var length = this.length
    var output = []
    for (var i = 0; i < this.length; i++){
        var result = callback(this[i], i);
        output.push(result);
    }
    return output;
}

var html = pets.map2(function(pet){
    return `<h2>${pet}</h2>`;
});
console.log(html)


