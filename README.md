# Node-CLI-Todo

A simple Command Line Todo application built with Node.js and File System. 
No database needed - all tasks are stored in a `todos.json` file.

## Features
- Add Task - Add new tasks with auto-increment ID
- List Tasks - View all pending and done tasks  
- Mark Done - Mark a task as completed by ID
- Delete Task - Delete a task by ID. File auto-deletes when empty

## Tech Stack
- Node.js
- fs module
- JSON for data storage

## How to Run

1. Clone the repo <br></br>
bash
git clone <https://github.com/Eman-209/Node-CLI-Todo.git><br></br>
cd Node-CLI-Todo

2. Run the app
node index.js


## Usage
node index.js add <task>
node index.js list
node index.js done <id>
node index.js delete <id>

Made by Eman Fatima
