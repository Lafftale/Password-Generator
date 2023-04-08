const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordGenerated = false
let password1El = document.getElementById("password1-el")
let password2EL = document.getElementById("password2-el")

function generate() {
    if (passwordGenerated === false){
        passwordGenerated = true
        for (let i = 0 ; i < 15 ; i++) {
            let number1 = Math.floor ( Math.random()*characters.length )
            let number2 = Math.floor ( Math.random()*characters.length )
            password1El.textContent += characters[number1]
            password2EL.textContent += characters[number2]
        }
        } else if (passwordGenerated === true) {
            password1El.textContent = ""
            password2EL.textContent = ""
            for (let i = 0 ; i < 15 ; i++) {
                let number1 = Math.floor ( Math.random()*characters.length )
                let number2 = Math.floor ( Math.random()*characters.length )
                password1El.textContent += characters[number1]
                password2EL.textContent += characters[number2]    
            
        }
    }
}
