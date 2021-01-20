import axios from 'axios'
import App from "./app";

const url = 'https://api-marvel-growdev-rafael.herokuapp.com/characters';

axios.get(url)
    .then(response => console.log(response.data))
    .catch(error => console.log(error));

const app = new App();
app.getCharacters();