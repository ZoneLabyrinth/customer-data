
export const getQueryString = name => {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    const r = window.location.search.substr(1).match(reg)
    if (r != null) return decodeURI(r[2]);
    return null
}


export function debounce(fn,delay) {
    var timer;

    return function(){
        var context = this ,args = arguments
        timer && clearTimeout(timer)
        timer = setTimeout(()=>{
            console.log(fn)
            fn.apply(context,args)
        },delay)
    }
}


