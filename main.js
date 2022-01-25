function UserGreeting(props) {
    return <h1>Bienvenue !</h1>;
}
  
function GuestGreeting(props) {
    return <h1>Veuillez vous inscrire.</h1>;
}

function Greeting(props) {
    let [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const connect = () => {
        setIsLoggedIn(true);
    }
    const disconnect = () => {
        setIsLoggedIn(false);
    }

    return (
    <React.Fragment>
        {isLoggedIn ? 
        <React.Fragment>
            <UserGreeting />
            <button onClick={() => disconnect()}>déconnecter</button>
        </React.Fragment> :
        <React.Fragment>
            <GuestGreeting />
            <button onClick={() =>connect()}>connecter</button>
        </React.Fragment>
        }
    </React.Fragment>);
}

  

  ReactDOM.render(
    <Greeting/>,
    document.getElementById('app')
  );




