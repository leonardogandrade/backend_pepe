const passwordHelper = (password: string): boolean =>{
    if(password.length>6){
        return true
    }
    return false
}

export default passwordHelper;