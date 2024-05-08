class Account {
    private _accountNumber : string
    private _balance : number 

    constructor(accountNumber: string, initialBalance : number = 0){
        this._accountNumber = accountNumber
        this._balance = initialBalance 
    }

    get accountNumber (): string {
        return this._accountNumber
    }

    get balance (): number {
        return this._balance
    }

    deposit(amount:number) : void {
        if (amount > 0) {
            this._balance += amount
            console.log(`akun ${this._accountNumber} deposit uang sejumlah ${amount}, jumlah uang sekarang ${this._balance}`)
        }else{
            console.log('Jumlah uang deposit salah')
        }
    }


    withdraw (amount:number) : void {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount
            console.log(`akun ${this._accountNumber} menarik uang sejumlah ${amount}, jumlah uang sekarang ${this._balance}`)
        }else{
            console.log('Uang tidak bisa ditarik')
        }
    }

    transfer(recipient:Account, amount:number) : void {
        if (amount > 0 && amount <= this._balance) {
            this.withdraw(amount)
            recipient.deposit(amount)
            console.log(`akun ${this._accountNumber} transfer ke akun ${recipient._accountNumber} sejumlah ${amount}`)
        }else{
            console.log('tidak bisa transfer')
        }
    }
}

class Transaction {
    static transferWithAnotherAccount(sender: Account, recipient: Account, amount: number): void {
        sender.transfer(recipient, amount);
    }
}


const acc1 = new Account("484848", 2000);
const acc2 = new Account("898989", 20000);


console.log("Jumlah Balance Akun Awal:");
console.log(`Akun ${acc1.accountNumber}: $${acc1.balance}`);
console.log(`Akun ${acc2.accountNumber}: $${acc2.balance}`);

// Deposit dan penarikan pada akun acc1
acc1.deposit(500);
acc1.withdraw(200);

// Transfer dari akun acc1 ke akun acc2
Transaction.transferWithAnotherAccount(acc1, acc2, 700);

console.log("Jumlah Balance Akun Akhir:");
console.log(`Akun ${acc1.accountNumber}: $${acc1.balance}`);
console.log(`Akun ${acc2.accountNumber}: $${acc2.balance}`);