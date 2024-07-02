document.getElementById("addbtn").addEventListener('click', () =>{

  let task_to_add = document.getElementById("task").value;
  let newlist = document.getElementById("list");

  if(task_to_add!=""){

    let creating_list = document.createElement("li");
    creating_list.innerText = task_to_add;
    let deletebtn = document.createElement("button");
    deletebtn.innerText = "X";

    deletebtn.classList.add("delbtn");
    deletebtn.addEventListener('click',() =>{
      creating_list.remove();
    });

    creating_list.appendChild(deletebtn);
    newlist.appendChild(creating_list);
    task.value = "";
  }
})