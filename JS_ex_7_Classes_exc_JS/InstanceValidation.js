class CheckingAccount{

    constructor(clientId, email, firstName, lastName) {
        
        if (clientId.length===6 && Number(clientId).toString()!='NaN') {
            this.clientId = clientId;    
        }
        else throw TypeError("Client ID must be a 6-digit number");
        
        if (true) {//TODO - implement e-mail verification with regex
            this.email=email;
        } else throw TypeError("Invalid e-mail")
            
        this.validateName(this.firstName,firstName,'First');
        this.validateName(this.lastName,lastName,'Last');
        
        
    }

    validateName(name, nameValue, firstLast){
        if (nameValue.length>=3 && nameValue.length<=20 ) {
            if (this.isLatinLetters(nameValue)) {
                name = nameValue;
            }
            else throw TypeError(`${firstLast} name must contain only Latin characters`)
        }
        else throw TypeError(`${firstLast} name must be between 3 and 20 characters long`)
    }

    isLatinLetters(data){
        let works = true;
        Array.from(data).forEach(element => {   // this does not work for the 6 symbols betweeen A-Z and a-z
            if (element<65 || element>122) {
                works=false;
            }
        });
        return works;
    }
}

let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov')
export {validateName, isLatinLetters};