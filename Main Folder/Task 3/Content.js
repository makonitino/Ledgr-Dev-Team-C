const elementsFinder= document.getElementsByTagName('*'); //identifying all elements in DOM
const targetWord= "work"
const replacementWord= "build"

// get page original content/ before changing anything
let pageContent = document.body.innerHTML;

function WorkToBuild(node){
    if(node.nodeType===Node.TEXT_NODE){ //check if the node is a text node
        node.textContent=node.textContent.replace(/work/ig,replacementWord); //searching for the word work in the text nodes and replacing it with build. Work is case insensitive here.
    }else{
        for (let child of node.childNodes) {
            WorkToBuild(child);  //recursively calling the function for all child nodes
        }
    }
}

function enable() {
    WorkToBuild(document.body); //calling the function with document body to start the process
}

function disable() {
    document.body.innerHTML = pageContent;
}

// Apply the last saved state immediately
chrome.storage.local.get("enabled", (data) => {
    const isEnabled = data.enabled ?? true;
    if (isEnabled) enable();
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "enable") {
        enable();
    } else if (message.action === "disable") {
        disable();
    }
});

// The above code will replace all instances of the word "work" with "build" in the text content of the webpage.
