const elementsFinder= document.getElementsByTagName('*'); //identifying all elements in DOM
const targetWord= "work"
const replacementWord= "build"


function WorkToBuid(node){
    if(node.nodeType===Node.TEXT_NODE){ //check if the node is a text node
        node.textContent=node.textContent.replace(/work/ig,replacementWord); //searching for the word work in the text nodes and replacing it with build. Work is case insensitive here.
    }else{
        for (let child of node.childNodes) {
            WorkToBuid(child);  //recursively calling the function for all child nodes
        }
    }
}

WorkToBuid(document.body); //calling the function with document body to start the process

// The above code will replace all instances of the word "work" with "build" in the text content of the webpage.
//This page + manifest.json was worked on by Zamokuhle Khuzwayo
