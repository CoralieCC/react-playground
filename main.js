let premierElement = React.createElement('h1', {}, "Hello World");
console.log(premierElement);


let app = document.querySelector('#app');
console.log(app);
ReactDOM.render(premierElement, document.querySelector('#app'));