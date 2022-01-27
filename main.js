function Todo(){
    const [todos, setTodos] = React.useState([]);
    const [idNumber, setIdNumber] = React.useState(0);

    const [newTodo, setNewTodo] = React.useState({
        id: idNumber,
        title: '',
        isCompleted : false,
        isEditing: false
    })

    React.useEffect(() => {
        document.addEventListener("keydown", escEnter, false);

        return () => {
            document.removeEventListener("keydown", escEnter, false);
        };
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;
        setNewTodo(state => ({...state, title : value}))
        console.log(newTodo);
    }

    
    const escEnter = (e) => {
        
        //console.log(e.key);
        if(e.key === 'Escape') {
            setNewTodo(state => ({...state, title : ''}))
        }
        if(e.key === 'Enter'){
            
            setTodos(state => ({...state, [newTodo.id] : newTodo}));
            
            
            // setNewTodo({
            //     id: idNumber,
            //     title: '',
            //     isCompleted : false,
            //     isEditing: false
            // });            
        }
    };
    
    React.useEffect(()=> {
        //console.log(newTodo);
        setIdNumber(idNumber+1);
        console.log(idNumber)
        console.log(todos)
    }, [todos])

    return(
        <React.Fragment>
            <Title value={newTodo.title} name={'title'} handleChange={handleChange}/>
        </React.Fragment>
    )
}


function Title({value, name, handleChange, keyPress}){

    return(
        <React.Fragment>
            <input type="text" placeholder="titre" value={value} name={name} onChange={handleChange} onKeyPress={keyPress}/>
        </React.Fragment>
    )
}

ReactDOM.render(<Todo />, document.querySelector('#app'));