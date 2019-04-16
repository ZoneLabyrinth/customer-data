let baseURL,imgURL;
if(process.env.NODE_ENV === 'development'){
    baseURL = 'http://rap2api.taobao.org/app/mock/165474'
}else{
    baseURL = 'http://'
}

const envconfig = {
    baseURL
}


export default envconfig 