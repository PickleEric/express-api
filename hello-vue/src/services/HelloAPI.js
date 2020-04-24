
import axios from 'axios'// installed component to handle packages

let base = 'api'

export default {
    getHelloMessage(){
        return axios.get(base).then(response => {
            return response.data
        })
    }
}