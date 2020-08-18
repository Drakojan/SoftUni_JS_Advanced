class Bank{

    #bankName;
    constructor(bankName) {
        this.#bankName=bankName

        this.allCustomers = []; 
    }

    newCustomer(customer){

        if (this.allCustomers.find(x=>x.personalId===customer.personalId)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`); 
        }
        let customerCopy = {...customer}
        customer.totalMoney = 0;
        customer.transactions = [];
        this.allCustomers.push(customer);
        
        return customerCopy
    }

    depositMoney(personalId, amount){
        
        let depositingCustomer = this.allCustomers.find(x=>x.personalId===personalId)

        if (!depositingCustomer) {
            throw new Error(`We have no customer with this ID!`); 
        }

        depositingCustomer.totalMoney+=amount;
        depositingCustomer.transactions.push(`${depositingCustomer.firstName} ${depositingCustomer.lastName} made deposit of ${amount}$!`)

        return `${depositingCustomer.totalMoney}$`

    }

    withdrawMoney(personalId, amount){
        
        let withdrawingCustomer = this.allCustomers.find(x=>x.personalId===personalId)

        if (!withdrawingCustomer) {
            throw new Error(`We have no customer with this ID!`); 
        }

        if (withdrawingCustomer.totalMoney<amount) {
            
            throw new Error(`${withdrawingCustomer.firstName} ${withdrawingCustomer.lastName} does not have enough money to withdraw that amount!`)
        }

        withdrawingCustomer.totalMoney-=amount;
        withdrawingCustomer.transactions.push(`${withdrawingCustomer.firstName} ${withdrawingCustomer.lastName} withdrew ${amount}$!`)

        return `${withdrawingCustomer.totalMoney}$`
    }

    customerInfo (personalId){
        
        let customer = this.allCustomers.find(x=>x.personalId===personalId)

        if (!customer) {
            throw new Error(`We have no customer with this ID!`); 
        }

        let result = `Bank name: ${this.#bankName}
Customer name: ${customer.firstName} ${customer.lastName}
Customer ID: ${personalId}
Total Money: ${customer.totalMoney}$
Transactions:
`

        customer.transactions.reverse()
        
        let transactions = customer.transactions.reduce((acc, currentTransaction, currentIndex,array)=>{

            acc+= `${array.length-currentIndex}. ${currentTransaction}\n`;

            return acc;
        },'')           

        customer.transactions.reverse()

        return result+transactions.trimEnd();
    }  
}

let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
