import "../CSS/todoItem.css";
import tick from "../images/tick.png";
import notTick from "../images/not_tick.png";
import cross from "../images/cross.png";

const TodoItem = ({ no, display, text,setTodos }) => {

  const deleteTodo =(no) =>{
    let data = JSON.parse(localStorage.getItem("todos"));
    data =data.filter((todo)=> todo.no!==no)
    setTodos(data)

  }
  
const toggle = (no) =>{
  let data = JSON.parse(localStorage.getItem("todos"))
  for(let i = 0; i<data.length;i++){
    if(data[i].no===no){
      if(data[i].display===""){
        data[i].display="line-through"
      }
      else{
        data[i].display=""
      }
      break; 
    }
  }
  setTodos(data)
}


  return (
    <div className="todoitems">
      <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
        {display === "" ? (
          <img src={notTick} alt="" />
        ) : (
          <img src={tick} alt="" />
        )}
        <div className="todoItems-text">{text}</div>
      </div> 
      <img onClick={()=>{deleteTodo(no)}} className="cross-icon" src={cross} alt="" />
    </div>
  );
};

export default TodoItem;
