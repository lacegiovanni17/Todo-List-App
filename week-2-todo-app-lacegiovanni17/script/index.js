let i = 1;
const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");
const searchinput = document.getElementById("");

addTask.addEventListener("click", () => {
  const taskElement = document.createElement("div");
  taskElement.classList.add("task");
  let li = document.createElement("li");
  const date = new Date();
  li.innerHTML = `<span class="flex">
                        <input type='text' class='input' id='id${i}' readonly='readonly' value='${
    inputTask.value
  }'>

                        <span>
                           ${date.toLocaleString("default", {
                             weekday: "long",
                           })}, ${date.getDate()} ${date.toLocaleString(
    "default",
    { month: "long" }
  )} ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}
                        </span>
                   </span>
                   `;
  taskElement.appendChild(li);
  const editBtn = document.createElement("button");
  editBtn.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
  editBtn.classList.add("edit");
  editBtn.setAttribute("id", `edit${i}`);
  editBtn.setAttribute("onclick", `editClick(${i})`);
  taskElement.appendChild(editBtn);

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
  deleteBtn.classList.add("deleteTask");
  taskElement.appendChild(deleteBtn);

  if (inputTask.value === "") {
    alert("Please enter a task");
  } else {
    taskContainer.appendChild(taskElement);
    // clear input value
    inputTask.value = "";
  }

  // edit doc
  //editBtn.innerText.toLowerCase() == "edit"
  //   editBtn.addEventListener("click", () => {
  //     if (document.querySelector(".input").hasAttribute("readonly")) {
  //       document.querySelector(".input").removeAttribute("readonly");
  //       editBtn.focus();
  //       editBtn.innerText = "Save";
  //     } else {
  //       editBtn.innerText = "Edit";
  //       document.querySelector(".input").setAttribute("readonly", "readonly");
  //       //editBtn.setAttribute("readonly", "readonly");
  //     }
  //   });

  // delete task when delete button is clicked
  deleteBtn.addEventListener("click", () => {
    deleteBtn.parentElement.remove();
  });
  i++;
});

document
  .getElementById("topsearch")
  .addEventListener("keyup", function (event) {
    const allTaskWrapper = Array.from(document.querySelectorAll(".task"));
    const allTasks = Array.from(document.querySelectorAll(".input"));
    const searchWord = event.target.value;

    if (allTasks.length > 0) {
      for (let i = 0; i < allTasks.length; i++) {
        const lowerCase = allTasks[i].value.toLowerCase();
        //console.log(lowerCase);
        if (allTasks[i].value.includes(searchWord)) {
          allTaskWrapper[i].style.display = "flex";
        } else {
          allTaskWrapper[i].style.display = "none";
        }
      }
    }
  });
const editClick = (i) => {
  //console.log(document.getElementById(`id${i}`));
  if (document.getElementById(`id${i}`).hasAttribute("readonly")) {
    document.getElementById(`id${i}`).removeAttribute("readonly");
    //editBtn.focus();
    document.getElementById(`edit${i}`).innerHTML = "Save";
    //editBtn.innerText = "Save";
  } else {
    //editBtn.innerText = "Edit";
    document.getElementById(`id${i}`).setAttribute("readonly", "readonly");
    document.getElementById(`edit${i}`).innerHTML = "Edit";
    //editBtn.setAttribute("readonly", "readonly");
  }
};
