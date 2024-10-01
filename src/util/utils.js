
const sortByDueDate = (tasks) => {
   
        const sortedTasks = [...tasks].sort((a, b) => {
      return new Date(a.dueDate) - new Date(b.dueDate);
    });
   
   
    return sortedTasks
}

const loadTasks = () => {
    try {
        const tasks = localStorage.getItem("taskList")
        if(!tasks){
            return []
        }

        return JSON.parse(tasks)
    } catch (err) {
        return err.message
    }
}

const saveToLocalStorage = (tasks) => {
    try {
      
        localStorage.setItem("taskList",JSON.stringify(tasks))
        return "save data successfully"
    } catch (error) {
        return error.message
    }
}


export {sortByDueDate,saveToLocalStorage,loadTasks};