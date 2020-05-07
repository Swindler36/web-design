const addTodoForm = document.querySelector('#todo');
const addTodoBtn = document.querySelector('#addtodo');
const filterTodo = document.querySelector('#filter');
const todoList1 = document.querySelector('#todolist');
const clearTodos = document.querySelector("#clear");
let isAlert = "False";
let todoList = todoList1.firstElementChild.firstElementChild; 
let Todovalue = "";
const haveTodos = localStorage.getItem("Todos");

addTodoForm.addEventListener("keyup",add);
addTodoBtn.addEventListener("click",addTodo);
todoList.addEventListener("click",removeTodo);
clearTodos.addEventListener("click",clear);
window.addEventListener("load",show);
filterTodo.addEventListener("keyup",search);
filterTodo.addEventListener("blur",searchout);

function add(e){
    Todovalue = e.target.value;
}

let Todos = [];
function addTodo(e){
    if(isAlert == "True"){
        const z = document.querySelector("#alert");
        z.remove();
        isAlert = "False";
    }
    let el = document.createElement("li");
    el.className = "list-group-item";
    el.textContent = Todovalue;
    let el1 = document.createElement("a");
    el1.href = "";
    el1.className = "delete-item float-right";
    el.appendChild(el1);
    let el2 = document.createElement("i");
    el2.className = "fa fa-remove";
    el1.appendChild(el2);
    todoList.appendChild(el);
    Todos.push(Todovalue);
    if(!(JSON.parse(localStorage.getItem("Todos")) === null)){
    Todos = Todos.concat(JSON.parse(localStorage.getItem("Todos")));
    }
    localStorage.setItem("Todos",JSON.stringify(Todos));
    Todos = [];
    e.preventDefault();
}

function removeTodo(e){
    if(e.target.className == "fa fa-remove"){
    const a = e.path[2];
    a.remove();
    let h = JSON.parse(localStorage.getItem("Todos"));

    for (let i = 0; i < h.length; i++) {
        const element = h[i];
        if(element === a.textContent){
            h[i] = "";
        }
    }
    localStorage.removeItem("Todos");
    h = update(h);
    localStorage.setItem("Todos",JSON.stringify(h));
    control();
}
    e.preventDefault();
}

function clear(e){
    localStorage.clear();
    Todos = [];
    show();
    e.preventDefault();
}

let xy = document.createElement("div");
xy.className = "alert alert-danger";
xy.textContent = "The todo cannot be founded!"
xy.id = "alert";

function show(){
    let AllTodos = localStorage.getItem("Todos");
    AllTodos = JSON.parse(AllTodos);
    if(AllTodos === null){
        while(!(todoList.firstElementChild===null)){
        todoList.firstElementChild.remove();
    }   
    }else{

        for (let i = 0; i < AllTodos.length; i++) {
        const todo = AllTodos[i];
        let el = document.createElement("li");
        el.className = "list-group-item";
        el.textContent = todo;
        let el1 = document.createElement("a");
        el1.href = "";
        el1.className = "delete-item float-right";
        el.appendChild(el1);
        let el2 = document.createElement("i");
        el2.className = "fa fa-remove";
        el1.appendChild(el2);
        todoList.appendChild(el);
    }
}
control();
}

function search(e){

    for (let i = 0; i < todoList.children.length; i++) {
        if(e.target.value === todoList.children[i].textContent.slice(0,e.target.value.length)){
            
                todoList.children[i].style.backgroundColor = "aquamarine";
            }else{
                todoList.children[i].style.backgroundColor = "white";
            }
    }
}

function searchout(){
    for (let i = 0; i < todoList.children.length; i++) {
        todoList.children[i].style.backgroundColor = "white";
    }
}

function control(){
if(localStorage.getItem("Todos") == "[]"){
    todoList1.appendChild(xy);
    isAlert = "True";
}
}

function update(h){
    let j = [];
    for (let i = 0; i < h.length; i++) {
         if(h[i]==""){
             continue;
         }else{
             j.push(h[i]);
         }
    }
    return j;
    
}