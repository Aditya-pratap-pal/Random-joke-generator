import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const todos = [];

const showMenu = () => {
    console.log("\n1: Add Task:");
    console.log("\n2: Show Menu:");
    console.log("\n3: Exit:");
    rl.question("Choose an option: ",handleInput);
}

const handleInput = (option) => {
    if(option==="1"){
        rl.question("Write your todo:",(task)=>{
            console.log("\nTask added: ",task);
            todos.push(task);
            showMenu();
        })
    }
    else if(option==="2"){
        console.log("\nYour Todo is: ");
        todos.forEach((task,idx)=>{
            console.log(`${idx+1}.${task}`);
        })
        showMenu();
    }
    else if(option==="3"){
        console.log("Exiting...");
        rl.close();
    }
    else{
        console.log("\nInvalid request");
        showMenu();
    }
    // showMenu();
}
showMenu();
