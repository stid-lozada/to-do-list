var listask = document.getElementById("listaIngresos");

function api() {

     listask.replaceChildren();
     $.get("https://immense-plateau-68535.herokuapp.com/list", function (data) {
          console.log(data)
          for (let index = 0; index < data.data.length; index++) {
               var task = document.createElement("div");
               task.classList.add("task")
               task.innerHTML = data.data[index];
               console.log(data.data[index])
               listask.appendChild(task)
          }
     });
}

function addTask() {
     listask.replaceChildren();
     let task = document.getElementById("list-talk").value;

     $.post("https://immense-plateau-68535.herokuapp.com/add", {
               todoitem: task + "- Stid Lozada"
          },
          function (data) {
               console.log(data)
               api();
          });
}