const hexadecimalNumberSystem = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const button = document.getElementById("button");
const firstColorBox = document.getElementById("color-container-1");
const firstColorCode = document.getElementById("color-code-1");

const secondColorBox = document.getElementById("color-container-2");
const secondColorCode = document.getElementById("color-code-2");

const thirdColorBox = document.getElementById("color-container-3");
const thirdColorCode = document.getElementById("color-code-3");


const fourthColorBox = document.getElementById("color-container-4");
const fourthColorCode = document.getElementById("color-code-4");


const fifthColorBox = document.getElementById("color-container-5");
const fifthColorCode = document.getElementById("color-code-5");


const sixthColorBox = document.getElementById("color-container-6");
const sixthColorCode = document.getElementById("color-code-6");


const seventhColorBox = document.getElementById("color-container-7");
const seventhColorCode = document.getElementById("color-code-7");




//to generate a random number
function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() * hexadecimalNumberSystem.length)
    return randomNumber
}


//to now generate the loop on the random number
button.addEventListener("click", function(){
    //for the first box
    let hexCodeForFirstBox = "#"
    for ( let firstLoop = 0; firstLoop < 6; firstLoop++){
        hexCodeForFirstBox += hexadecimalNumberSystem[generateRandomNumber()]
    };

        //input in css and html
        firstColorBox.style.backgroundColor = hexCodeForFirstBox;
        firstColorCode.textContent = hexCodeForFirstBox;

    //for the second box
    let hexCodeForSecondBox = "#"
    for ( let secondLoop = 0; secondLoop < 6; secondLoop++){
        hexCodeForSecondBox += hexadecimalNumberSystem[generateRandomNumber()]
    };

        //input in css and html
        secondColorBox.style.backgroundColor = hexCodeForSecondBox;
        secondColorCode.textContent = hexCodeForSecondBox;


    //for the third box
    let hexCodeForThirdBox ="#"
    for (let thirdLoop = 0; thirdLoop < 6; thirdLoop++ ){
        hexCodeForThirdBox += hexadecimalNumberSystem[generateRandomNumber()]
    };
        //input in css and html
    thirdColorBox.style.backgroundColor = hexCodeForThirdBox;
    thirdColorCode.textContent = hexCodeForThirdBox;


    //for the fourth box
    let hexCodeForFourthBox = "#"
    for (let fourthLoop = 0; fourthLoop < 6; fourthLoop++){
        hexCodeForFourthBox += hexadecimalNumberSystem[generateRandomNumber()]
    };

        //input in css and html
        fourthColorBox.style.backgroundColor = hexCodeForFourthBox;
        fourthColorCode.textContent = hexCodeForFourthBox;


    //for the fifth box
    let hexCodeForFifthBox = "#";
    for (let fifthLoop = 0; fifthLoop < 6; fifthLoop++){
        hexCodeForFifthBox += hexadecimalNumberSystem[generateRandomNumber()]
    };

            //input in css and html
            fifthColorBox.style.backgroundColor = hexCodeForFifthBox;
            fifthColorCode.textContent = hexCodeForFifthBox;


    //for the sixth box
    let hexCodeForSixthBox = "#"
    for (let sixthLoop = 0; sixthLoop < 6; sixthLoop++){
        hexCodeForSixthBox += hexadecimalNumberSystem[generateRandomNumber()]
    }
            //input in css and html
            sixthColorBox.style.backgroundColor = hexCodeForSixthBox;
            sixthColorCode.textContent = hexCodeForSixthBox;


    //for the seventh box
    let hexCodeForSeventhBox = "#"
    for (let seventhLoop = 0; seventhLoop < 6; seventhLoop++ ){
        hexCodeForSeventhBox += hexadecimalNumberSystem[generateRandomNumber()]
    }

            //input in css and html
            seventhColorBox.style.backgroundColor = hexCodeForSeventhBox;
            seventhColorCode.textContent = hexCodeForSeventhBox;
});



