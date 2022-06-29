var button = document.querySelector("#form");
var input = document.querySelector("#demo");

button.addEventListener("click", function savevalue(e) {
  if (input.value == "") {
    alert("Inputu bos buraxmayin");
  } else {
    var local = JSON.parse(localStorage.getItem("todos"));
    if (local === null) {
      todos = [];
    } else {
      todos = local;
    }
    todos.push(input.value);
    localStorage.setItem("todos", JSON.stringify(todos));
    showelement();
    input.value = "";
  }
});

function showelement() {
  var ul = document.querySelector("#ulad");
  var li = "";
  var local = JSON.parse(localStorage.getItem("todos"));
  if (local === null) {
    todos = [];
  } else {
    todos = local;
  }
  todos.forEach((todo, index) => {
    li += `<div class="list_item">
              <span>${todo}</span>
             <div>
             <i class="bi bi-trash3-fill"  onclick="deletefunction(${index})"></i>
             <i class="bi bi-check2-square lefts" onclick="donefunction(this)"></i>
             </div>
            </div>`;
  });
  ul.innerHTML = li;
}
showelement();
function deletefunction(key){
    if (confirm("Elementi silmeye eminsiz")) {
        var local = JSON.parse(localStorage.getItem("todos"));
        todos.splice(key,1);
        localStorage.setItem("todos", JSON.stringify(todos));
        showelement();
    }
}
function donefunction(e){
  var span  = e.parentElement.parentElement.children[0];
if (  span.classList.contains("done")) {
    span.classList.remove("done")
}else{
    span.classList.add("done");
}
  
}
