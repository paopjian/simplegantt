let projectData = { tasks: [] };
let fileHandle;

document.getElementById('loadProject').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const yamlText = e.target.result;
        projectData = jsyaml.load(yamlText);
        renderGanttChart(projectData);
    };
    reader.readAsText(file);
});

document.getElementById('newProject').addEventListener('click', function() {
    projectData = { tasks: [] };
    renderGanttChart(projectData);
});

document.getElementById('addTaskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const task = {
        name: document.getElementById('taskName').value,
        start: document.getElementById('taskStart').value,
        duration: parseInt(document.getElementById('taskDuration').value),
        dependencies: []
    };
    projectData.tasks.push(task);
    renderGanttChart(projectData);
    onProjectDataChange(projectData);
});

function renderGanttChart(projectData) {
    const ganttChart = document.getElementById('ganttChart');
    ganttChart.innerHTML = '';
    projectData.tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task-bar');
        taskElement.style.width = `${task.duration * 20}px`;
        taskElement.style.left = `${new Date(task.start).getTime() * 0.02}px`;
        taskElement.textContent = task.name;
        ganttChart.appendChild(taskElement);
    });
}

async function saveProjectData(projectData) {
    if ('showSaveFilePicker' in window) {
        if (fileHandle) {
            const writable = await fileHandle.createWritable();
            await writable.write(jsyaml.dump(projectData));
            await writable.close();
        } else {
            fileHandle = await window.showSaveFilePicker({
                suggestedName: 'project.yaml',
                types: [{
                    description: 'YAML Files',
                    accept: {'text/yaml': ['.yaml', '.yml']},
                }],
            });
            await saveProjectData(projectData);
        }
    } else {
        alert('Your browser does not support automatic saving. Please use a modern browser.');
    }
}

function onProjectDataChange(projectData) {
    saveProjectData(projectData);
}

renderGanttChart(projectData);
