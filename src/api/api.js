import server from './server'
import { apiurl } from './apiconfig';

class Api extends server{
    
    async search(params){
        let result = await this.axios('get',`${apiurl.getName}?part_name=${params}`)
        return result;
    }
    async getCustomerInfo(params){
        let result = await this.axios('get',`${apiurl.getCustomerInfo}/${params}`)
        return result
    }
}


export default new Api()