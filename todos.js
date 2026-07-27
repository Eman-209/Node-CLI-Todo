const fs= require("fs");

function addtodos(task){
    if(!fs.existsSync('todos.json')){
        fs.writeFileSync('todos.json','[]')
    }
    const data=fs.readFileSync('todos.json','utf-8')
    let todos=JSON.parse(data);
  const newTodo={
    id:todos.length+1,
    task:task,
    status:"pending"
  };
  todos.push(newTodo);
  fs.writeFileSync('todos.json', JSON.stringify(todos,null,2));
  console.log("Task added:", task)
}

function listtodos(){
    if(!fs.existsSync('todos.json')  ){
console.log("no tasks") 
return;}
   
   const data=fs.readFileSync('todos.json','utf-8').trim()
   if(data=='' || data==='[]'){
    console.log("no task")
    return;
   }
    let todos=JSON.parse(data);
    for(let todo of todos){
        console.log(`${todo.id}. ${todo.task} [${todo.status}]`)
    }
}

function markDone(id){
     if(!fs.existsSync('todos.json')  ){
console.log("no tasks") 
return;}
       const data=fs.readFileSync('todos.json','utf-8').trim()
           let todos=JSON.parse(data);
      
for(let todo of todos){
if(todo.id==id){
 todo.status="Done"
  fs.writeFileSync('todos.json', JSON.stringify(todos,null,2));
console.log("Task marked as done")
return;}  
    }
console.log("Task not exist")
}

function deleteTodos(id){
    if(!fs.existsSync('todos.json')  ){
console.log("no tasks") 
return;}
    const data=fs.readFileSync('todos.json','utf-8').trim()
    let todos=JSON.parse(data);
            let num=-1
    for(let todo of todos){
            num++;
if(todo.id==id){
todos.splice(num,1)
  fs.writeFileSync('todos.json', JSON.stringify(todos,null,2));
console.log("Task deleted successfully")
if(todos.length==0){
    fs.unlinkSync("todos.json",(err)=>{})
    console.log("Last task deleted: File removed")
}
return;}  
    }
console.log("Task not exist")
}
module.exports={addtodos,listtodos,markDone,deleteTodos}