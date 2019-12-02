var numSquares = 6;
var colours = [];
var pickedColour;

var squares = document.querySelectorAll('.square');
var colourDisplay = document.getElementById('colourDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init(){
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons(){
    //  mode buttons event Listeners
    for (let i = 0; i < modeButtons.length; i++){
      modeButtons[i].addEventListener('click', function(){
        modeButtons[0].classList.remove('selected');
        modeButtons[1].classList.remove('selected');
        this.classList.add('selected');  
        // turner reoperator
        //if this.textContent = easy let numS = 3 else numS = 6
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        reset();
    });
    }
}

function setupSquares(){
    //  for loop click listeners to each square
    for (let i = 0; i < squares.length; i++) {
      //  add click listeners to squares
      squares[i].addEventListener('click', function(){
        //  grab clour of clicked square
        //  compare colour to picked colour
        var clickedColour = this.style.background;  
        
        if(clickedColour ===pickedColour){
          messageDisplay.textContent= "Correct!!!";
          resetButton.textContent= "Play Again";
          changeColours(clickedColour);
          h1.style.background = clickedColour;
          
        } 
        else{
          this.style.background = "#232323";
          messageDisplay.textContent= "Try Again";
        }
      });
    }
}

function reset(){
    //  generate new colours
    colours = generateRandomColours(numSquares);
    //  pick a new random colour from array
    pickedColour = pickColour();
    //change display colour to match picked colour
    colourDisplay.textContent = pickedColour;
    resetButton.textContent= "New Colours";
    messageDisplay.textContent= "";
  
    //  change colours of squares
    for (let i = 0; i < squares.length; i++) {
      //  
      if(colours[i]){
        squares[i].style.display = "block";
        //  add initial colours
        squares[i].style.background = colours[i];
      } else {
        squares[i].style.display = "none";
      } 
    };
  h1.style.background = '#steelblue';
};

//  New Colours Button
resetButton.addEventListener('click', function(){
  reset();
});


function changeColours(colour){
  //  loop through all squares
  for (let i = 0; i<colours.length; i++){
  //  change colours to match correct colour
  squares[i].style.background = colour;
  };
  
}

function pickColour(){ 
  var random = Math.floor(Math.random() * colours.length);
  return colours[random];
}

function generateRandomColours(num){
  //  make array
  var arra = [];
  //  add num random colours to array

  for( let i=0; i < num; i++ ){
    //  get random colour
    arra.push(randomColour());

  }
  // return array
  return arra;
}

function randomColour(){
  //pick a 'red from o- 255
  var redC = Math.floor(Math.random() * 256)
  //pick a 'green from o- 255
  var greenC = Math.floor(Math.random() * 256)
  //pick a 'blue from o- 255
  var blueC = Math.floor(Math.random() * 256)

  return "rgb(" + redC + ", " + greenC + ", " + blueC + ")";
}