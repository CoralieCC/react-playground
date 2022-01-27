function App1(){

  const [state, setState] = React.useState({
    decimal : '',
    binary : ''
  })

  React.useEffect(() => {
    convertToBinary();
  }, [state.decimal])

  React.useEffect(() => {
    convertToDecimal();
  }, [state.binary])

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState(state => ({...state, [name] : value}));    
  }

  const convertToBinary = () => {
    if(Number.isNaN(parseInt(state.decimal))){
      return setState(state => ({...state, binary : ''}));
    }
    else {
      return setState(state => ({...state, binary : parseInt(state.decimal).toString(2)}));
    }
  }

  const convertToDecimal = () => {
    let isBinary = false;
    for (let i = 0; i < state.binary.length; i++) {
      if (state.binary[i] == "0" || state.binary[i] == "1") {
        isBinary = true;
      } else {
        isBinary = false;
      }
    }
    if(isBinary){
      return setState({...state, decimal : parseInt(state.binary, 2)})
    }
    else {
      return setState({...state, decimal : ''})
    }

  }

  return(
    <React.Fragment>
      <BaseNumberInput value={state.decimal} handleChange={handleChange} name={'decimal'}/>
      <BaseNumberInput value={state.binary} handleChange={handleChange} name={'binary'}/>
    </React.Fragment>
  )

}
function BaseNumberInput({value, handleChange, name}){

  return(
    <React.Fragment>
      <label htmlFor={name}>{name}</label>
      <input type="text"  value={value} onChange={handleChange} name={name}/>
    </React.Fragment>
  )
}
ReactDOM.render(<App1 />, document.querySelector('#app1'));



function App2(){
  const[state, setState] = React.useState({
    conversion : '',
    decimal : '',
    converted : ''
  })

  React.useEffect(() => {
    convert();
  }, [state.decimal, state.conversion])


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({...state, [name] : value});
  }

  const convert = () => {
    if(Number.isNaN(parseInt(state.decimal))){
      return setState(state => ({...state, converted : ''}));
    }
    else {
      return setState(state => ({...state, converted : parseInt(state.decimal).toString(state.conversion)}));
    }
  }
  return(
    <React.Fragment>
      <select name="conversion" onChange={handleChange}>
        <option value="0" disabled selected>Choisir une option</option>
        <option value="2">binaire</option>
        <option value="3">ternaire</option>
        <option value="7">septénaire</option>
        <option value="16">héxadécimal</option>
      </select>
      {state.conversion !== '' &&
      <React.Fragment>
        <label htmlFor="decimal">Décimal</label>
        <input type="text" value={state.decimal} name={'decimal'} onChange={handleChange}/>
        <label htmlFor="converted">conversion</label>
        <input type="text" value={state.converted} name={'converted'} onChange={handleChange} disabled/>
      </React.Fragment>
      }
    </React.Fragment>
  )
}

ReactDOM.render(<App2 />, document.querySelector('#app2'));