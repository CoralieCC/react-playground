function User(props){
    return(
        <div>
            <ul>
                <li>nom : {props.name}</li>
                <li>email : {props.email}</li>
                <li>société : {props.company}</li>
                <li>numéro de téléphone : {props.phone}</li>
                <li>site internet : {props.website}</li>
            </ul>
        </div>
    )
}

function VisitCards(props){
    const [users, setUsers] = React.useState([]);
   
    React.useEffect(() => {
       getUsers();
   }, []);
   
   const getUsers = async () => {
       let response = await fetch('https://jsonplaceholder.typicode.com/users');
       let data = await response.json();
       setUsers(data);
   }

    return( 
        <React.Fragment>
            {users.map( u =>
                <User key={u.id} name={u.name} email={u.email} company={u.company.name} phone={u.phone} website={u.website}/>
            )}
        </React.Fragment>)
   
}

ReactDOM.render(<VisitCards/>, document.querySelector('#app'));

