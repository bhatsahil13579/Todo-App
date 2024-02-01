const TaskManager = ({  getItemsLeftCount ,  setFilter ,  changeColor , clearTask ,  darkTheme ,}
  
    ) => {
  
    
   
  
    return (
     
      <div className="outerContainer"
     
      >
      <ul className="TaskManagerContainer"
       style={darkTheme? {background: 'hsl(235, 24%, 19%)' , color: 'hsl(234, 11%, 52%)'} : null}
      
      >
    
    <li className="itemsLeft"><span className="itemCounter">{getItemsLeftCount()}</span>{getItemsLeftCount() === 1 ? "item" : "items" } left</li>
    <ul className="taskState">
    
    <li className="switch" onClick={() => setFilter('all')}
    
    style={changeColor("all")}
    
    >All</li>
    
    <li className="switch" onClick={() => setFilter('active')}
    
    style={changeColor("active")}
    
    >Active</li>
    
    <li className="switch" onClick={() => setFilter('completed')}
    
    style={changeColor("completed")}
    
    >Completed</li>
    
    </ul>
    
    <ul className="clearCompletedContainer">
      <li className="clearCompleted"
       onClick={clearTask}
       tabIndex={0}
      >Clear Completed</li>
    </ul>
    
  
      </ul>
      <ul className="mobileTaskState"
      
      style={darkTheme? {background: 'hsl(235, 24%, 19%)' , color: 'hsl(234, 11%, 52%)'} : null}
      
      >
  <li className="mobileCounter"
  
  onClick={() => setFilter('all')}
    
  style={changeColor("all")}
  
  >All</li>
  <li className="mobileCounter"
  
  onClick={() => setFilter('active')}
    
  style={changeColor("active")}
  
  >Active</li>
  <li className="mobileCounter"
   onClick={() => setFilter('completed')}
    
   style={changeColor("completed")}
  
  >completed</li>
  
      </ul>
      </div>
      
      
      
    )
  }
  
  export default TaskManager