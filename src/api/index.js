import axios from 'axios'

const api = {
  home: {
    page: axios.get('http://localhost:3000/api/home/page')
  }
}
export default api
