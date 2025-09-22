//an array of possible startup ideas, an array is a data structure that stores a collection of elemenents
//each identified by an index or key so in this instance the array has stored startup ideas

const startupIdeas=[ //const creates a constant reference to the array
    "SUBSCRIPTION BOX SERVICE",
    "AI POWERED CHATBOT PLATFORM",
    "CYBERSECURITY SOLUTION FOR SME'S",
    "VIRTUAL REALITY EXPERIENCE PLATFORM",
    "PERSONALISED NUTRITION PLANNING",
    "MENTAL HEALTH SUPPORT PLATFORM",
    "ONLINE FITNESS CLASSES",
    "AI-POWERED TUTORING PLATFORM",
    "LANGUAGE LEARNING APPLICATION",
    "ONLINE MENTORSHIP PROGRAM",
];

//function takes an array of ideas as input,it then generates a random index/idea within the array and the function
//returns the startup idea at the randomly generated index
function generateIdea(){
    const randomIndex=Math.floor(Math.random()*startupIdeas.length);
    const name=startupIdeas[randomIndex];
    document.getElementById('nameOutput').value=name;

}

//added event listener to the button which will be prompted when the button is clicked so this allows for interactivity
document.getElementById('generateButton').addEventListener('click',generateIdea);

//Done by Noluthando Dlamini
