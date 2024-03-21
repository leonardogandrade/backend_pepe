export const passwordHelper = (password: string): boolean =>{
    if(password !== undefined){
        if(password.length>6){
            return true
        }
        return false
    }
    return true
}

export const emailHelper = (email: string): boolean =>{
    
    if(email !== undefined){
        const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const result: boolean = expression.test(email)
        return result;
    }
    return true;
}