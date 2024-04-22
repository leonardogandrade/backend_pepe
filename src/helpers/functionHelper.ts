export const helper = {
    status: '',

    reset: function () {
        this.status = '';
        return this;
    },
    nameHelper: function (name:string) {
        if(name.length < 30){
            return this;
        } else {
            this.status = 'nome incorreto!';
            return this;
        }
    },
    passwordHelper: function (password:string) {
        if(password !== undefined){
            if(password.length>6){
                return this;
            }
            this.status = 'senha incorreta!';
            return this;
        }
        return this;
    },
    emailHelper: function(email: string) {
        if(email !== undefined){
            const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            const result: boolean = expression.test(email)
            if(result){
                return this;
            } else {
                this.status = 'email incorreto!';
                return this;
            }
        }
        return this;
    },
    birthHelper: function (birthday: string) {
        if(birthday !== undefined){
            const date = ( d => new Date(d.setDate(d.getDate())))(new Date);
            const parts = birthday.split('-')
            if(parts[2].length !== 4) {
                this.status = 'insira uma data no formato dd/mm/aaaa';
                return this;
            }
            const newBirthday = new Date(parseInt(parts[2]), parseInt(parts[1])-1, parseInt(parts[0]))
            
            if (date>newBirthday){
                return this;
            } else {
                this.status = 'insira uma data válida';
                return this;
            }
        }
        return this;
    },

    check: function(){
        return this.status;
    }
}