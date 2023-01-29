function todoList() {
  var item = document.getElementById('todoInput').value;
  document.getElementById('todoInput').value="";
  var text = document.createTextNode(item);
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.name = "name";
  checkbox.value = "value";
  checkbox.classList.add ("chkbox");
  var newItem = document.createElement("div");
  
  newItem.appendChild(text);
  newItem.appendChild(checkbox);
  document.getElementById("todoList").appendChild(newItem)
  checkbox.addEventListener('click', (e) =>{
    newItem.removeChild(text)
  })
  checkbox.addEventListener('click', (e) =>{
    newItem.removeChild(checkbox)
  })
}