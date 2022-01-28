function App(){
  const [newTodo, setNewTodo] = React.useState({
    id : 0,
    title : "",
    isCompleted : false,
    isEditing : false

  });
  const [todo, setTodo] = React.useState([]);
  
  const handleChange = (e) => {
    const value = e.target.value;
    setNewTodo(state => ({...state, title : value}));
  }

  const handleKeyDown = (e) =>{
    const value = e.target.value;
    if(e.key === 'Enter'){
      setTodo(state => ([...state, newTodo]));
      setNewTodo(state => ({...state, id : todo.length+1, title : ""}));
    }
    else if(e.key === 'Escape'){
      setNewTodo(state => ({...state, title : ''}));
    }
    else{
      setNewTodo(state => ({...state, title : value}));
    }
  }

  return(
    <React.Fragment>
      <input type="text" value={newTodo.title} onKeyDown={handleKeyDown} onChange={handleChange}/>
      { todo !== [] &&
        <TodoList todo={todo} setTodo={setTodo}/>
      }
      
    </React.Fragment>
  )
}

function TodoList({todo, setTodo}){
  const [filter, setFilter] = React.useState('');


  return(
    <React.Fragment>
      <button onClick={() => setFilter('')}>all</button>
      <button onClick={() => setFilter(true)}>completed</button>
      <button onClick={() => setFilter(false)}>to do</button>
      { todo.map(t => 
        <TodoItem key={t.id} task={t} setTodo={setTodo} todo={todo} filter={filter}/>
      )}
    </React.Fragment>
    
  )
}

function TodoItem(props){
  
  const [check, setCheck] = React.useState(props.task.isCompleted);
  const [modifiedTitle, setModifiedTitle] = React.useState(props.task.title);
  

  const checkChange = () => {
    setCheck(!check);
    const tasks = [...props.todo];
    tasks[props.task.id].isCompleted = !check;
    props.setTodo(tasks);
  }

  const deleteTask = () => {
    let tasks = [...props.todo];
    tasks = tasks.filter(el => el.id !== props.task.id);
    props.setTodo(tasks);
  }

  const isEditing = () => {
    const tasks = [...props.todo];
    tasks[props.task.id].isEditing = !props.task.isEditing;
    props.setTodo(tasks);
  }
  const edit = (e) => {
    setModifiedTitle(e.target.value);
  }

  const keyDown = (e) => {
    const value = e.target.value;
    if(e.key === 'Enter'){
      const tasks = [...props.todo];
      tasks[props.task.id].title = value;
      tasks[props.task.id].isEditing = !props.task.isEditing;
      props.setTodo(tasks);
    }
    else if(e.key === 'Escape'){
      const tasks = [...props.todo];
      tasks[props.task.id].isEditing = !props.task.isEditing;
      props.setTodo(tasks);
    }
    else{
    }
  }

  return(
    <React.Fragment>
      
    { props.task.isEditing &&
      <div>
        <input type="text" value={modifiedTitle} onChange={edit} onKeyDown={keyDown}/>
      </div>

    }
    { !props.task.isCompleted && !props.task.isEditing && (!props.filter || props.filter === '') &&
      <div>
        <input type="checkbox" name={props.task.title} checked={check} onChange={checkChange}/>
        <label htmlFor={props.task.title} onDoubleClick={isEditing}>{props.task.title}</label>
      </div>
    }
    { props.task.isCompleted && (props.filter || props.filter === '') &&
      <div>
        <input type="checkbox" name={props.task.title} checked={check} onChange={checkChange}/>
        <label htmlFor={props.task.title} style={{textDecoration: "line-through"}}>{props.task.title}</label>
        <i className="fas fa-trash" onClick={deleteTask}></i>
      </div>
    }
    </React.Fragment>
  )

}

ReactDOM.render(<App />, document.querySelector('#app'))