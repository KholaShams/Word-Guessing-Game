const guess = document.getElementById("guess");
let words = {"hola" : "How to Greet in Spanish?",
            "coche" : "What do you call a car in spanish?",
            "nombre" : "What is the spanish word for name?",
            "padre" : "What is a father called in Spanish?"
};

/*console.log(words);*/

const entries = Object.entries(words);

// console.log(entries)
const randomIndex = Math.floor(Math.random() * entries.length);  
const [key, value] = entries[randomIndex];

// console.log(key, value);
const hint = document.getElementById("hint");
hint.innerHTML = `<p> Hint: ${value} <\p>`

function check() { 
    const result = document.getElementById("result");
    const word = guess.value.toLowerCase();
    // console.log(word)
    if (word == key){
        // console.log("congrats")
        result.innerHTML = `<p> Congratulations. You chose the right word.<\p>`
    }
    else{
        // console.log("failed")
        result.innerHTML = `<p>Oops. You chose the wrong word. Better luck next time.<\p>`
    }


}

