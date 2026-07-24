const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
let draggedElement = null;

const tasks = document.querySelectorAll(".task");

tasks.forEach(task => {
  task.addEventListener("drag",(e) =>{
    // console.log("dragging",e);
    // e.preventDefault();
    draggedElement = task;
  })
})



// progress.addEventListener("dragenter",(e) => {
//   progress.classList.add("hover-over");
// })

// progress.addEventListener("dragleave",(e)=>{
//   progress.classList.remove("hover-over");
// })

function addDragEventsOnColumns(column){
  column.addEventListener("dragenter",(e)=>{
    e.preventDefault();
    column.classList.add("hover-over");
  })
  column.addEvenetListener("dragleave",(e)=>{
    e.preventDefault();
    column.classList.remove("hover-over");
  })

  column.addEventListener("dragover",(e)=>{
    e.preventDefault();
  })

  column.addEventListener("dropped",(e)=>{
    e.preventDefault();
    column.appendChild(draggedElement);
    column.classList.remove("hover-over");
  })
}

addDragEventsOnColumns(todo);
addDragEventsOnColumns(done);
addDragEventsOnColumns(progress);