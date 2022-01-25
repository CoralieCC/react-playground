// function NameForm(){
//     const [value, setValue] = React.useState('');

//     const handleChange = (e) => {
//         setValue(e.target.value);
//     }

//     const handleSubmit = (event) => {
//         alert('Le nom a été soumis : ' + value);
//         event.preventDefault();
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//           <label>
//             Nom :
//             <input type="text" value={value} onChange={handleChange} />
//           </label>
//           <input type="submit" value="Envoyer" />
//         </form>
//     );
// }
// ReactDOM.render(<NameForm/>, document.querySelector('#app'));

   

// function EssayForm(){
//     const [value, setValue] = React.useState('Écrivez un essai à propos de votre élément du DOM préféré');

//     const handleChange = (event) => {
//         setValue(event.target.value);
//     }
    
//     const handleSubmit = (event) => {
//         alert('Un essai a été envoyé : ' + value);
//         event.preventDefault();
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//           <label>
//             Essay:
//             <textarea value={value} onChange={handleChange} />
//           </label>
//           <input type="submit" value="Envoyer" />
//         </form>
//       );
// }
// ReactDOM.render(<EssayForm/>, document.querySelector('#app'));



// function FlavorForm(){
//     const [value, setValue] = React.useState("coconut");

//     const handleChange = (event) => {
//         setValue(event.target.value);
//     }
    
//     const handleSubmit = (event) => {
//         alert('Votre parfum favori est : ' + value);
//         event.preventDefault();
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//           <label>
//             Choisissez votre parfum favori :
//             <select value={value} onChange={handleChange}>
//               <option value="grapefruit">Pamplemousse</option>
//               <option value="lime">Citron vert</option>
//               <option value="coconut">Noix de coco</option>
//               <option value="mango">Mangue</option>
//             </select>
//           </label>
//           <input type="submit" value="Envoyer" />
//         </form>
//       );
// }

// ReactDOM.render(<FlavorForm/>, document.querySelector('#app'));


function Form(){
    const [value, setValue] = React.useState({
        name : "",
        flavor : "",
        essay : ""
    });
    // const [name, setName] = React.useState('');
    // const [flavor, setflavor] = React.useState('');
    // const [essay, setEssay] = React.useState('');


    const handleChange = (e) => {
        const target = e.target;
        const inputValue = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setValue(state => ({...state, [name] : inputValue}));
        console.log(value);
        // switch(e.target.name){
        //     case 'name' : setName(e.target.value);
        //         break;
        //     case 'flavor' : setflavor(e.target.value);
        //         break;
        //     case 'essay' : setEssay(e.target.value);
        //         break;
        //     default:
        // }
    }

    const handleSubmit = (event) => {
        alert('nom : ' + value.name + "\nparfum : " + value.flavor + "\nessay : "+ value.essay);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
          <label>
            Nom :
            <input type="text" value={value.name} onChange={handleChange} name='name'/>
          </label>
          <label>
            Choisissez votre parfum favori :
            <select value={value.flavor} onChange={handleChange} name="flavor">
              <option value="grapefruit">Pamplemousse</option>
              <option value="lime">Citron vert</option>
              <option value="coconut">Noix de coco</option>
              <option value="mango">Mangue</option>
            </select>
          </label>
          <label>
            Essay:
            <textarea value={value.essay} onChange={handleChange} name='essay'/>
          </label>
          <input type="submit" value="Envoyer" />
        </form>
    );
}
ReactDOM.render(<Form/>, document.querySelector('#app'));