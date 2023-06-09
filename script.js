const content = document.querySelector('#content');

function Task(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

function Project(title) {
    this.title = this.title;
    this.tasks = [];
    
    this.addTask = function(task) {
        this.tasks.push(task);
    }

    this.showTasks = function() {
        this.tasks.forEach((task, index) => {
            console.log(task);
        });
    }
}

let tasks = [];
let projects = [];

function displayTasks() {
    const mainDiv = document.querySelector('#main');
    mainDiv.innerHTML = ''; // Clear existing tasks
    
    tasks.forEach((task) => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const titleElement = document.createElement('h3');
        titleElement.textContent = 'Title: ' + task.title;
        taskDiv.appendChild(titleElement);

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = 'Description: ' + task.description;
        taskDiv.appendChild(descriptionElement);

        const dueDateElement = document.createElement('p');
        dueDateElement.textContent = 'Due Date: ' + task.dueDate;
        taskDiv.appendChild(dueDateElement);

        const priorityElement = document.createElement('p');
        priorityElement.textContent = 'Priority: ' + task.priority;
        taskDiv.appendChild(priorityElement);

        mainDiv.appendChild(taskDiv);
    });
}



const addTask_btn = document.querySelector('#addTaskBtn');

const closeForm_btn = document.querySelector('#closeBtn');

const taskForm = document.querySelector('#taskForm');

addTask_btn.addEventListener('click', () => {
    let popupContainer = document.getElementById("popupContainer");
    popupContainer.style.display = "block";
});

closeForm_btn.addEventListener('click', () => {
    let popupContainer = document.getElementById("popupContainer");
    popupContainer.style.display = "none";
});

taskForm.addEventListener('submit', (event) => {
    let popupContainer = document.getElementById("popupContainer");
    event.preventDefault();

    const form = event.target;

    const title = form.elements.title.value;
    const description = form.elements.description.value;
    const dueDate = form.elements.due.value;
    const priority = form.elements.priority.value;

    tasks.push(new Task(title, description, dueDate, priority));
    popupContainer.style.display = "none";

    console.log(tasks);

    displayTasks();
});


