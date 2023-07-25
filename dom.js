// Access element by ID
const demoId = document.getElementById("demo");
demoId.style.border = "2px solid green";

// Access element by class name
let demoClass = document.getElementsByClassName("demo");
for (let element = 0; element<demoClass.length; element++){
  demoClass[element].style.border = "2px solid blue"
 
}
//  style individual elements
demoClass[1].style.border = "2px dotted red";

let articleTag = document.getElementsByTagName("article");
for (let item = 0; item < articleTag.length; item++){
  articleTag[item].style.border = "2px solid yellow"
}

// Access element by query selector
let demoQuery = document.querySelector("#demo-query");

demoQuery.style.border = "2px solid maroon";

// Access element by query selector all
let demoAll = document.querySelectorAll(".demo-query-all");


demoAll.forEach(item => {
  item.style.border = "2px solid plum"
})

function changeMe(){
  let paragraph = document.querySelector("p");
  // paragraph.textContent = "I changed because of an event handler.";
  paragraph.innerHTML = "This is a different mode"
  paragraph.style.border = "2px solid purple"
} 

function changeMe2(){
  let opp = document.getElementById("opp");
  opp.textContent = "The way we can do about it";
  opp.style.border = "3px dotted blue";
}
  const butt = document.querySelector("#pop");
  butt.onclick = changeMe2

