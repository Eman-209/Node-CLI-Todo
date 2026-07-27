const todos=require("./todos")
const command=process.argv[2];
const task=process.argv[3];
if (command=="add"){
    todos.addtodos(task)

}
else if (command=="list"){
    todos.listtodos();

}
else if (command=="done"){
    todos.markDone(task)

}
else if (command=="delete"){
        todos.deleteTodos(task)


}
else{
    console.log("invalid command")
}
