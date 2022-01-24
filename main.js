
// class Clock extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {date : new Date()}
//     }


//     componentDidMount() {
//         this.timerID = setInterval(() => this.tick(), 1000);
//     }
  
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }

//     tick(){
//         this.setState({date : new Date()})
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Bonjour, monde !</h1>
//                 <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// }
// ReactDOM.render(<Clock />, document.querySelector("#app"))

function Clock(props){

    const [date, setDate] = React.useState(new Date());
    const tick = () => setDate(new Date());
    const intervalRef = React.useRef();

    React.useEffect(() => {
        intervalRef.current = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(intervalRef.current);
          };
    })

    
    return (
        <div>
            <h1>Bonjour, monde !</h1>
            <h2>Il est {date.toLocaleTimeString()}.</h2>
        </div>
    );
}
ReactDOM.render(<Clock />, document.querySelector("#app"))