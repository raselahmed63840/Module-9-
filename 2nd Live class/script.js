const API_URL = ' https://684a4ff5165d05c5d358484b.mockapi.io/task'; // Replace with your API URL


const taskList = document.getElementById('task-list');
 const fetchTasks = () =>{
   const xhr = new XMLHttpRequest();
 
   xhr.open('GET', API_URL, true);
    xhr.onload = function() {
      console.log(xhr);
      if (xhr.status === 200) {
        const tasks = JSON.parse(xhr.responseText);
        console.log(tasks);
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = ''; // Clear existing tasks

        tasks.forEach(task => {
          const li = document.createElement('li');
          li.textContent = `${task.id}: ${task.title}`;
          taskList.appendChild(li);
        });
      }
       
  
  };
  xhr.send();
 };

 const renderTask = (tasks) => {
     taskList.innerHTML = ''; // Clear existing tasks
     tasks.forEach((task) => {
      //  console.log(task);
      let li = document.createElement('li');
      li.innerHTML = `
       <div class="single-task">
          <p>${task.id}.${task.title}</p>

       
         <button>Edit</button>
         <button>Delete</button>
       
       
       </div>
       
         
      `;

      taskList.appendChild(li);

  });
}

 fetchTasks();