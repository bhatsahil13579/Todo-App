import checkIcon from "./images/icon-check.svg"
import deletIcon from "./images/icon-cross.svg"

const DisplayTask = ({  handleCheck  ,  getFilteredTasks  , handleDelete , darkTheme}) => {
  

return (
    
   <ul className="taskContainer">
   
  

    {getFilteredTasks().map((task) => ( 
        <li className="taskList"
        key={task.id}
        style={darkTheme?  {background: 'hsl(235, 24%, 19%)' , color: 'hsl(234, 11%, 52%)' , border:'1px solid hsl(233, 14%, 35%)'} : {}} 
        
       
       
        >
          <div className="buttonContainer"
         
         style={task.checked? {background: 'linear-gradient(to bottom, purple, skyblue)' } : (darkTheme ? { background: "hsl(233, 14%, 35%)" } : {}) }

        
         
          >
            <button 
                className="inputButton"
                type="submit"
                onClick={() => handleCheck(task.id)}
                checked ={task.checked}
                
                style={task.checked ? {background: 'linear-gradient(to bottom, purple, skyblue)' } : (darkTheme ? { background: 'hsl(235, 24%, 19%)' }   :{})}
                
                >
                 {task.checked && <img src={checkIcon} alt="" />}
            </button>
          </div>
         
            <label 
           
            style={(task.checked) ? {textDecoration : "line-through" , color: 'hsl(236, 9%, 61%)'}  : null}
            
            >{task.task}</label>

            <img 
            className="deleteIcon" 
            src={deletIcon} 
            alt="" 
            onClick={() => handleDelete(task.id)}
           
            />
          
        </li>

   ))}
   
    
    </ul>
    
    
    )
}

export default DisplayTask