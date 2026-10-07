// js.js

let dialogueData = {};      // will hold JSON data
let currentNode = "intro";  // start node
let history = [];

// preparation stage
fetch("dialogue.json") //grabs the json file
  .then(res => res.json()) //open and read it in json language
  .then(data => {
    dialogueData = data; //stores the content of json under dialogueData in memory and doesnt read it again, unless you tell it
    setupSwitchesUI();   // NEW: build switches area once at startup
    showNode(currentNode); //it starts with the currentNode/intro
    updateSwitches();    // NEW: set initial Back state
  });

// defines what a note is=value of the dictionary, keys=nodeID, values=node
function showNode(nodeId) {
  const node = dialogueData[nodeId]; //node defined as a value behind the key
  if (!node) return;


  document.querySelector(".response").innerHTML  = buildAvatarHTML(nodeId, node.avatar);
//looks for an element with the "response" class and replaces the content with "link" proof string.
//because i want ceratin words in the avatars response to be linked to different nodes



  const dialogueBox = document.querySelector(".dialogue");
  dialogueBox.innerHTML = ""; //wipes whatever was inside before, resets the dialogue box

  // create buttons for choices
  (node.choices ?? []).forEach(choice => { //for each choices under node we define the following properties
    const btn = document.createElement("button");//we create an element called "button", it exists only in memory for now
    btn.textContent = choice.text; //inserts the choice’s "text" value
    btn.onclick = () => {
      navigateTo(choice.next);
    };
    dialogueBox.appendChild(btn);//add the button inside the html under dialogueBox, which is defined by the class dialogue
  });
}

//links inside dialogue

function escapeHTML(str) {
  return str
    .replaceAll('&', '&amp;') //html doesnt know the difference between elements and buttons disuised as text
    .replaceAll('<', '&lt;') //we replace classical < and > with text, it prevents the browser interpreting any accidental <button> inside JSON as real html
    .replaceAll('>', '&gt;') //in buildAvatarHTML we add only the safe <button>
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}


function buildAvatarHTML(nodeId, rawText) {
  let safe = escapeHTML(rawText); //this function changes the code like mentioned before
  //raw text is the string or avatars original response

  // here we define which word in which node links to which node
  if (nodeId === 'family') {
    safe = safe.replace(/\bwork\b/i, '<button class="inline-link" data-next="history">work</button>');
  }
  return safe;
}
//browser fistly goes through the whole document. finds all defined functions and remembers, thats why the order of defined functions is NOT important. But its CRUCIAL for variables/constants
//
document.querySelector(".response").addEventListener("click", (event) => {
  const link = event.target.closest("[data-next]");
  if (!link) return;
  const next = link.getAttribute("data-next");
  if (next) {
    // FIX: only call navigateTo; do NOT set currentNode/showNode here
    navigateTo(next);
  }
});

// NEW: central navigation helpers
function navigateTo(nextId) {
  // NEW: push current node to history so we can return to it
  if (!nextId) return;
  if (currentNode) history.push(currentNode);
  currentNode = nextId;
  showNode(currentNode);
  updateSwitches(); // NEW: keep Back button state in sync
}

function goBack() {
  // NEW: pop from history to step back through the exact path
  if (history.length === 0) return;
  const prev = history.pop();
  currentNode = prev;
  showNode(currentNode);
  updateSwitches(); // NEW
}
function updateSwitches() {
  // NEW: enable/disable Back button based on history
  const backBtn = document.querySelector(".switches .back-btn");
  if (backBtn) backBtn.disabled = history.length === 0;
}

// NEW: build the "switches" area UI (Back + Main topics)
function setupSwitchesUI() {
  const switchesBox = document.querySelector(".switches");
  if (!switchesBox) return;

  switchesBox.innerHTML = ""; // CHANGED: clear and rebuild once

    // NEW: Back button
  const backBtn = document.createElement("button");
  backBtn.textContent = "⬅ Back";
  backBtn.className = "back-btn";
  backBtn.onclick = goBack;
  switchesBox.appendChild(backBtn);

    // NEW: Main topics (optional jump home)
  const mainBtn = document.createElement("button");
  mainBtn.textContent = "🏠 Main topics";
  mainBtn.className = "home-btn";
  mainBtn.onclick = () => {
    history = [];           // NEW: reset history when jumping home
    currentNode = "main_topics"; // CHANGED: set your home node id here
    showNode(currentNode);
    updateSwitches();
  };
  switchesBox.appendChild(mainBtn);
}
