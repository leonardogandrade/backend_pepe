export function birthHelper(birthday: string){
    if(birthday !== undefined){
        const date = ( d => new Date(d.setDate(d.getDate())))(new Date);
        const parts = birthday.split('-')
        if(parts[2].length !== 4) {
            return false;
        }
        const newBirthday = new Date(parseInt(parts[2]), parseInt(parts[1])-1, parseInt(parts[0]))
        
        return date>newBirthday
    }
    return false
}