import axios from 'axios';

export default {
    // backHitEx(something){
    //     return axios.get(`/api/path/to/path`);
    // }

    allPics(){
        return axios.get('/api/pic');
    }

};