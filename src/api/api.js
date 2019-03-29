import server from './server'
import { apiurl } from './apiconfig';

class Api extends server{
    getData(){
        const params = {
            tableName:"vw_his_org_average",
            org_name:"集团"
        }
        console.log(apiurl)
        this.axios('get',apiurl.getName,{params})
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }
    getDatas(){
        this.axios('post')
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })
    }
}

export default new Api()