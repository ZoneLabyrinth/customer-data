let baseURL,imgURL;
if(process.env.NODE_ENV === 'development'){
    baseURL = 'http://10.16.201.132:5000/api/v1/'
}else{
    baseURL = 'http://'
}

const envconfig = {
    baseURL
}


export default envconfig 