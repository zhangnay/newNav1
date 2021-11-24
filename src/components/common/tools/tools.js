export function debounce(func, delay){
    let timer = null
    console.log('ssss',func);
    return function(...args){
        if(timer!=null){ clearTimeout(timer) }
        timer = setTimeout(()=>{
            console.log(func);
            // func.apply(this, args)
            func()
            
        },delay)
    }
}