document.addEventListener("DOMContentLoaded", () => {
  // your code here

  console.log("hello world!")

  addEventListeners()
});

//get the form and add event listioner
function addEventListeners() {
  document
  .getElementById("create-task-form")
  .addEventListener("submit", handleFormSubmit)
}

function handleFormSubmit(e){
  e.preventDefault()
  const task =  e.target[0].value
  //console.log(task)
  displayTask(task)
}

function displayTask(newTaskValue){
 const taskUl = document.getElementById("tasks")
const taskLi = document.createElement("li")
taskLi.textContent = newTaskValue
taskUl.appendChild(taskLi)
}


//get the task from the input



//diplay the list