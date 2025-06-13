const API_URL = "https://684a4ff5165d05c5d358484b.mockapi.io/task";

const taskLists = document.getElementById("tasks");

const fetchTasks = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", API_URL, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const tasks = JSON.parse(xhr.responseText);  // use responseText, not response
            console.log(tasks);
            renderTasks(tasks);  // ✅ Call renderTasks with the data
        } else {
            console.error("Failed to fetch tasks:", xhr.status);
        }
    };
    xhr.onerror = function () {
        console.error("Network error while fetching tasks");
    };
    xhr.send();
};

const renderTasks = (tasks) => {
    taskLists.innerHTML = "";

    tasks.forEach((task) => {
        let li = document.createElement('li');

        li.innerHTML = `
            <div class="single-task"> 
                <p>${task.id}. ${task.title}</p>
                <div>
                    <button>Edit</button>
                    <button>DELETE</button>
                </div>
            </div>
        `;
        taskLists.appendChild(li);
    });
};

fetchTasks();
