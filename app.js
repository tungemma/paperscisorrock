let buttons = document.querySelectorAll('.btn');
let computerDisplay = document.querySelector('#computerResult');
let userDisplay = document.querySelector('#playerResult');
const options = ['Rock', 'Scisor', 'Paper']
let result = document.getElementsByTagName('h3')
buttons.forEach(button => {
    button.addEventListener('click',

        (e) => {
            let userChoice = e.target.innerText;
            userDisplay.innerHTML = userChoice;
           let index= generateComputerChoice()
            let ComputerChoice = options[index];
            computerDisplay.innerHTML = ComputerChoice;
           
            
                if(userChoice==ComputerChoice){
                    
                    result[1].innerText = 'Oooh You both Lost!!!'
                  result[1].style.color='red'
                }


                else if(
                    (userChoice=='Rock' && ComputerChoice=='Scisor') ||
                    (userChoice=='Scisor' && ComputerChoice=='Paper')||
                
                    (userChoice=='Paper' && ComputerChoice=='Rock')
                
                    ){
                        result[1].innerText = 'Congratulations You Won the Game!'  
                        result[1].style.color='green'
                    
                    }
                    else {
                        result[1].innerText = 'Sorry Computer Win the Game over You'  
                        result[1].style.color='yellow'
                      
                        result[1].style.width='400px'
                        result[1].style.backgroundColor='blue'
                    }
            
        }
    

    )

})


function generateComputerChoice(){
   return Math.floor(Math.random()*buttons.length);
   

}

