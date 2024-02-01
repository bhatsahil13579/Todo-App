import { useRef } from "react"
import svg from "./images/icon-check.svg"




function FormInput({ newTask, setNewTask, showIcon, handleSubmit, setShowIcon, bgColor, setBgColor , darkTheme }) {

    const inputRef = useRef();


    return (


        <form className="addForm" onSubmit={handleSubmit}>

            <label htmlFor="AddTasks"></label>
            <input
                id="TodoInput"
                type="text"
                ref={inputRef}
                placeholder="Create a Todo"
                required
                value={newTask}
               
                onChange={(e) => {

                    setShowIcon(false);
                    setBgColor(false);
                    setNewTask(e.target.value)

                }}
            
                style={darkTheme? {background:'hsl(235, 24%, 19%)'  , color:'hsl(234, 11%, 52%)'} :  {}}



            />
            <div className="buttonContainer"

   style={bgColor ? { background: 'linear-gradient(to bottom, purple, skyblue)' } : (darkTheme ? { background: "hsl(233, 14%, 35%)"  }   :{})}

            >
                <button
                    className="inputButton"
                    type="submit"
                    aria-label="Create a Todo"
                    onClick={() => {

                        setShowIcon(true);
                        setBgColor(true);
                        setShowIcon(newTask.trim() !== "")
                        setBgColor(newTask.trim() !== "");
                        inputRef.current.focus();



                    }}

                    style={bgColor ? { background: 'linear-gradient(to bottom, purple, skyblue)' } : (darkTheme ? { background: "hsl(235, 24%, 19%)"  }   :{})}


                >{showIcon && <img src={svg} alt="" />}</button>
            </div>
        </form>
    )
}

export default FormInput