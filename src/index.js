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
  console.log(e)
 
const priorityLevel = parseInt(e.target.priority.value)
//console.log(priorityLevel)
 displayTask(task,priorityLevel)
}
//diplay the list
function displayTask(newTaskValue,priorityLevel){
 const taskUl = document.getElementById("tasks")
const taskLi = document.createElement("li")
const deleteBtn = document.createElement("button")

deleteBtn.textContent = "x"
deleteBtn.addEventListener("click", deleteTask)

taskLi.textContent = newTaskValue + " "
taskLi.style.color = getPriorityColor(priorityLevel)
taskLi.appendChild(deleteBtn)
taskUl.appendChild(taskLi)
}

function deleteTask(e){
//console.log(e)
e.target.parentNode.remove()
}

function getPriorityColor(priorityLevel){
  console.log(priorityLevel)
  if (priorityLevel===1) {
    return "red"
    
  } else if(priorityLevel ===2) {
    return "purple"
  }else{
    return "green"
  }
  

}
