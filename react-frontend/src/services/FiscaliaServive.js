import axios from "axios";

const FISCALIA_REST_URL = 'http://localhost:8080/api/fiscalia';

class FiscaliaService{

    getAll(){
        return axios.get(FISCALIA_REST_URL+'/all');
    }

    save(fiscalia){
        return axios.post(FISCALIA_REST_URL+ "/save/", fiscalia);
    }

    find(id){
        return axios.get(FISCALIA_REST_URL+ "/find/" + id);
    }

    delete(id){
        return axios.get(FISCALIA_REST_URL+ "/delete/" + id);
    }

    update(fiscalia){
        return axios.put(FISCALIA_REST_URL+ "/update/", fiscalia);
    }
}

export default new FiscaliaService();