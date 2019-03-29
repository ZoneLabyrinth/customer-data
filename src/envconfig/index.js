let baseURL,imgURL;
if(process.env.NODE_ENV === 'development'){
    baseURL = 'http://10.16.201.132:5000/customer/139500'
}else{
    baseURL = 'http://'
}

const envconfig = {
    baseURL
}


export default envconfig 