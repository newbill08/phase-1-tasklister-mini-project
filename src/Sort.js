document.addEventListener("DOMContentLoaded", () => {
  // your code here

  console.log("hello world!")

  addEventListeners()
});


let taskObjArr = []

//get the form and add event listioner
function addEventListeners() {
  document
  .getElementById("create-task-form")
  .addEventListener("submit", handleFormSubmit)

  document.getElementById("sort-tasks").addEventListener("change",sortTasks)
}

//get the task from the input
function handleFormSubmit(e){
  e.preventDefault()
  const task =  e.target[0].value
 // console.log(e)
 
const priorityLevel = parseInt(e.target.priority.value)
//console.log(priorityLevel)
 displayTask(task,priorityLevel)

 //const taskObj = {task: task, priorityLevel: priorityLevel}
 const taskObj = {task, priorityLevel}
 taskObjArr.push(taskObj)
 console.log(taskObjArr)
 sortTasks()
 displayTask()
}
//diplay the list
function displayTask(){
 const taskUl = document.getElementById("tasks")
 taskUl.innerHTML = " "
 
 
 taskObjArr.forEach((task) => { 

const taskLi = document.createElement("li")
const deleteBtn = document.createElement("button")

deleteBtn.textContent = "x"
deleteBtn.addEventListener("click", (e) => deleteTask(e,task))


taskLi.textContent = task.task + " "
taskLi.style.color = getPriorityColor(task.priorityLevel)
taskLi.appendChild(deleteBtn)
taskUl.appendChild(taskLi)
 })


}

function deleteTask(e,task){
//console.log(e)
e.target.parentNode.remove()
taskObjArr = taskObjArr.filter((element) => element.task !== task.task) 
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


function sortTasks(){
  console.log("in sortTasks")
  const sortTasksSelect = document.getElementById("sort-tasks")
  if (sortTasksSelect.value ==="h-l"){
    taskObjArr.sort((a,b) => a.priorityLevel - b.priorityLevel)
  } else{
    taskObjArr.sort((a,b) => b.priorityLevel - a.priorityLevel)
  }
  console.log(taskObjArr)
//displayTask()
}