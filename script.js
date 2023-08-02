const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        // creating cross(delete) icon at the end of each task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    // empty text box after adding a task
    inputBox.value = "";

    // Whenever we add any task saveData() will be called and it will save the updated content in the browser.
    saveData();
}

listContainer.addEventListener("click", function(e){

    // add checked if clicked on li and unchecked if its already checked.
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    // if clicked on cross it will remove parent element which is li here.
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


// All the content in the list container will be stored in browser.
// This way data won't lost once we close our browser.
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}


// This will show all data stored so far in the browser.
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();