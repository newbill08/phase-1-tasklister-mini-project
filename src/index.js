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

//get the task from the input
function handleFormSubmit(e){
  e.preventDefault()
  const task =  e.target[0].value
  //console.log(task)
  displayTask(task)
}
//diplay the list
function displayTask(newTaskValue){
 const taskUl = document.getElementById("tasks")
const taskLi = document.createElement("li")
const deleteBtn = document.createElement("button")

deleteBtn.textContent = "x"
deleteBtn.addEventListener("click", deleteTask)

taskLi.textContent = newTaskValue + " "
taskLi.appendChild(deleteBtn)
taskUl.appendChild(taskLi)
}

function deleteTask(e){
console.log(e)
e.target.parentNode.remove()
}


