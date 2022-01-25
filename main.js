/* 
// Étape 1
class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Bonjour, monde !</h1>
          <h2>Il est {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

ReactDOM.render(<Clock date={new Date()}/>, document.querySelector('#app')); 

*/


/* 

// Étape 2

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }
  render() {
    return (
      <div>
        <h1>Bonjour, monde !</h1>
        <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.querySelector('#app')); 


 */



// Étape 3

/* class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
        <div>
            <h1>Bonjour, monde !</h1>
            <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        );
    }
}

ReactDOM.render(<Clock />, document.querySelector('#app'));  */


function Clock(props) {
    React.useEffect(() => {
        tick();        
    }, []);
    
    const [date, setDate] = React.useState(new Date());
    const [textColor, setTextColor] = React.useState('black');
    const intervalRef = React.useRef();
    
    const tick = () => {
        intervalRef.current = setInterval(() => {
            setDate(new Date())
        }, 1000)
    }

    const changeColor = () => {
        setTextColor("#" + Math.floor(Math.random()*16777215).toString(16));
    }
    const stopClock = () => {
        clearInterval(intervalRef.current);
    }
    
    
    return (
        <React.Fragment>
        <div>
            <h1>Hello world</h1>
            <h2 style={{color : textColor}}>Il est {date.toLocaleTimeString()}.</h2>
        </div>
        <div>
            <button onClick={() => changeColor()}>changer couleur</button><button onClick={() => setTextColor('black')}>réinitialiser</button>
            <br/>
            <br />
            <button onClick={stopClock}>stop</button><button onClick={tick}>restart</button>
        </div>
        </React.Fragment>
        );
}

ReactDOM.render(<Clock />, document.querySelector('#app'));





