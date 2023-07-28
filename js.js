let story = 0; //Keeps it from being undefined & putting an error in code
let form = document.getElementById('theAdventure');
let submit = document.getElementById("continueButton");
let reset = document.getElementById("resetButton");
let answer = ' ';

//console.log(form); put any variable in there to check in inspect > console on website for bugs

let story_telling = {
    "start":{
        "question": "Who are you?",
        "answers":{
            "a": "Generalist",
            "b": "Tank",
            "c": "Bard",
            //"d": "Judge",
            //"e": "Coordinator",
        }
    },

//Generalist Path
"1_a": {
    "question": "Your name is now Isaiah. You have a passion for most things and are usually succesful at anything you put your mind to. Weakness: You struggle to complete so you rarely reach full potential. What do you grab first?",
    "answers": {
    "a": "Apple Watch",
    "b": "Running Shoes",
    "c": "Do breathing techniques and stretch for 10 seconds instead"
    }
},

"2_a": {
    "question": "What use do you have for an Apple Watch in a horror movie? Start over, dumbass.",
},
"2_b": {
    "question": "Good choice. Lace em up, Usain Bolt.",
},
"2_c": {
    "question": "Everybody looks at you weird but jokes on them. You are Zen. As. Fuck.",
    "end": "the end"
},

///Tank Path
"1_b": {
    "question": "Your name is Tristan and you are Damn Near Indestructible. Whether it be dabs or punchs, you can take heavy hits. Weakness: Your impatience can lead you astray. What do you grab first?",
    "answers": {
      "d": "Dab rig, dawg.",
      "e": "The Strap.",
      "f": "Nothing. Anything shows up, ima leg kick em."
    }

  },

  "2_d": {
    "question": "The minotaur stares at you in confusion as you run all the way home. The End.",
  },
  "2_e": {
    "question": "You defeat the minotaur and they turn into a cute puppy. The End.",
  },
  "2_f": {
    "question": "The minotaur eagerly agrees, and together you start a funk revival band called The Groovy Hooves. The End."
  },

  //Bard Path
  "1_c": {
    "question": "You decide to take the mountain path and meet a magic goat. What do you do?",
    "answers": {
      "g": "Challenge the goat to a singing competition",
      "h": "Teach the goat how to surf.",
      "i": "Name the goat Gregory and become best friends.",

    }
  },

  "2_g": {
    "question": "You really think this goat gonna sing with you? He headbutts you off the cliff. The End.",
  },
  "2_h": {
    "question": "The goat becomes the best surfer in the universe. The End.",
  },
  "2_i": {
    "question": "You and Gregory travel the world together. The End.",
  }
  
};


// Continue link
submit.addEventListener('mouseup', function(){ //when a button on a pointing device is released while the pointer is located inside it
    answer = form.querySelectorAll('input[type=radio]:checked')[0].value; //a list of the document's elements that match the specified group of selectors.
    if(answer) {
      story++;//increment or add 1 to
      populateForm(story + '_' + answer);//if a radio is checked populate our form with the answer
      console.log("Story time!"); // Console log to make sure things are working
    }
  });

//Reset Button
function resetForm(){
    document.getElementById("theAdventure").reset();
};

//Generate answers from story
function populateForm(story){
    let current_story = story_telling[story]; //take values from the story and put it into storytelling
    let text = ' ';
    for (let prop in current_story['answers']){//takes values from answers and puts into current_story on a loop
        if(current_story['answers'].hasOwnProperty(prop)){ 
            text += '<label><input type="radio" name="answer" value="' + prop + '"/><span>' + current_story['answers'][prop] + '</span></label>';{
                //will be populated with answers, puts it into HTML
            }
        }
    };
form.querySelector('p').innerHTML = current_story.question; //what they will see on the page
form.querySelector('fieldset').innerHTML = text;
};

populateForm('start'); //sets this as the first thing that shows up