import axios from 'axios'

function sendRequest(): void {
    axios.get('http://127.0.0.1:8888').then((response) => {
        // handle success
        console.log(response.data);
    }).catch((error) => {
        console.log(error.message);
    }).then(() => {
        console.log('finally');
    });
}

sendRequest();
