const API_URL = "https://684a4ff5165d05c5d358484b.mockapi.io/task";

const taskLists = document.getElementById("tasks")

const fetchTasks = ()=>{
    const xhr = new XMLHttpRequest();
    xhr.open("GET",API_URL,true);
    xhr.onload = function (){
        // console .log(xhr)
        if(xhr.status===200){
            const tasks =  JSON.parse(xhr.response)
            console .log(tasks)
        }
    };
    xhr.send()
};
const renderTasks = (task) => {
    taskLists.innerHTML = "";

    task.forEach((task)=> {
        console.log(task);

        let li = document.createElement('li')

        li.innerHTML = `
        <div> 
            <p>${task.id}. ${task.title} </p>
        </div>
        
        `;
       taskLists. appendChild(li);
    });
};

fetchTasks();
