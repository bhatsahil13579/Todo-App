const Header = ({icon , toggleDarkTheme , }) => {
    return (
      <header className="header">
            <h1>todo</h1>
            <img 
            src={icon} 
            alt="" 
            onClick={toggleDarkTheme}
            style={{cursor: "pointer"}}
            
  
            />
            
        </header>
      
  
      
    )
  }
  
  export default Header