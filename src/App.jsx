import { useEffect, useState } from "react"
import Header from "./Header"
import FormInput from "./FormInput"
import DisplayTask from "./DisplayTask";
import TaskManager from "./TaskManager";
import moonIcon from"./images/icon-moon.svg"
import sunIcon from "./images/icon-sun.svg"



function App() {

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("todoList")) || []);
  const [icon , setIcon] =useState(moonIcon)
  const [darkTheme , setDarkTheme] = useState(false)
  const [newTask, setNewTask] = useState('')
  const [showIcon, setShowIcon] = useState(false)
  const [bgColor , setBgColor] = useState(false)
  const [filter, setFilter] = useState('all');
 

  
  
  
  useEffect(() => {
    localStorage.setItem("todoList" , JSON.stringify(tasks));
  } ,[tasks]

 )
 

 






  const toggleDarkTheme = () =>{
     setDarkTheme(!darkTheme);
     setIcon(darkTheme? moonIcon :sunIcon)
     if(!darkTheme){
      document.body.style.backgroundColor ="hsl(235, 24%, 19%)"
     }else{
      document.body.style.backgroundColor ="white"
     }

  }

  const addTask = (task) => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = { id, checked: false, task }
    const taskList = [...tasks, newTask]

    setTasks(taskList)
  }



  function handleSubmit(e) {
    e.preventDefault();
    if (!newTask) return;
    addTask(newTask);
    setNewTask('');

  }
  const handleCheck = (id) => {
    const taskList = tasks.map((task) => task.id === id ? { ...task, checked: !task.checked } : task);
    setTasks(taskList);
  }

  const getItemsLeftCount = () =>{
    const itemsLeft = tasks.filter((task) => !task.checked).length;
   return itemsLeft
  
      }

      

     const  clearTask = () =>{
      const updatedTasks = tasks.filter((task) => !task.checked);
      setTasks(updatedTasks)
      return updatedTasks
     }

const handleDelete = (id) =>{
  const updatedTasks = tasks.filter((task) => task.id !== id)
  setTasks(updatedTasks)
}
    
      
     
     const getFilteredTasks = () => {
        switch (filter) {
          case 'active':
            return tasks.filter((task) => !task.checked);
          case 'completed':
            return tasks.filter((task) => task.checked);
          default:
            return tasks;
        }
      };
    
      const changeColor = (state) =>{
       const stateChange = filter === state ? {color: "royalblue" , borderBottom:"3px solid royalblue"} : {}
       return stateChange

      }


     
    
     
    

      
return (

    <main className="App">
      <Header
      
      icon={icon}
      toggleDarkTheme={toggleDarkTheme}
      
      />

      <FormInput
        newTask={newTask}
        setNewTask={setNewTask}
        showIcon={showIcon}
        bgColor={bgColor}
        setBgColor={setBgColor}
        handleSubmit={handleSubmit}
        setShowIcon={setShowIcon}
        darkTheme={darkTheme}
       
       
       


      />
      <DisplayTask
        handleCheck={handleCheck}
        getFilteredTasks={getFilteredTasks}
        clearTasks={clearTask}
        handleDelete={handleDelete}
        darkTheme={darkTheme}
       
        
      />

    <TaskManager
    getItemsLeftCount={getItemsLeftCount}
    filter={filter}
    setFilter={setFilter}
    changeColor={changeColor}
    clearTask={clearTask}
    darkTheme={darkTheme}
    
    
    
    
    />


    </main>
  )

}

export default App


