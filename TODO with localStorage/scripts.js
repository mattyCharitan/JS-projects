window.addEventListener('load', () => {
    if(localStorage.getItem('counter')==null){
        localStorage.setItem("counter", 0);
    }
    
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");
    

    loadTasks();


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;
        if (!task) {
            alert("enter task");
            return;
        }
        else{
            createEl(task);
            const x = parseInt(localStorage.getItem('counter'))+1
            localStorage.setItem(x, task);
            localStorage.setItem("counter", x);
        }


        

    })
    function loadTasks(){
        const y = parseInt(localStorage.getItem('counter'));
        for(let i = 1 ; i<=y ;i++){
            if(localStorage.getItem(i) != null){
                createEl(localStorage.getItem(i));
            }
            

        }
    }

    function createEl(task){
        
        const task_el = document.createElement("div");
        task_el.classList.add('task');

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");


        task_el.appendChild(task_content_el);
        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        const task_actions = document.createElement("div");
        task_actions.classList.add("actions");
        const task_edit = document.createElement("button");
        task_edit.classList.add("edit");
        task_edit.innerHTML = "Edit";
        const task_delete = document.createElement("button");
        task_delete.classList.add("delete");
        task_delete.innerHTML = "Delete";

        task_actions.appendChild(task_edit);
        task_actions.appendChild(task_delete);
        task_content_el.appendChild(task_input_el);
        task_el.appendChild(task_actions);
        list_el.appendChild(task_el);

        input.value = "";

        task_edit.addEventListener('click', () => {
            if (task_edit.innerText.toLowerCase() == "edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit.innerText = "Save";
            }
            else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit.innerText = "Edit";
                for(var i=0, len=localStorage.length; i<len; i++) {
                    var key = localStorage.key(i);
                    var value = localStorage[key];
                    if(value == task){
                        console.log(key + " => " + value);
                        
                       localStorage.setItem(key, task_input_el.value);
                       console.log(localStorage.getItem(key));
                        break
                    }
                    
                }

            }

        })

        task_delete.addEventListener('click', () => {
            list_el.removeChild(task_el);
            for(var i=0, len=localStorage.length; i<len; i++) {
                var key = localStorage.key(i);
                var value = localStorage[key];
                if(value == task){
                    console.log(key + " => " + value);
                   localStorage.removeItem(key);
                    break
                }
                
            }


        })

    }



})