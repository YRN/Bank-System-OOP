var Account = /** @class */ (function () {
    function Account(accountNumber, initialBalance) {
        if (initialBalance === void 0) { initialBalance = 0; }
        this._accountNumber = accountNumber;
        this._balance = initialBalance;
    }
    Object.defineProperty(Account.prototype, "accountNumber", {
        get: function () {
            return this._accountNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        enumerable: false,
        configurable: true
    });
    Account.prototype.deposit = function (amount) {
        if (amount > 0) {
            this._balance += amount;
            console.log("akun ".concat(this._accountNumber, " deposit uang sejumlah ").concat(amount, ", jumlah uang sekarang ").concat(this._balance));
        }
        else {
            console.log('Jumlah uang deposit salah');
        }
    };
    Account.prototype.withdraw = function (amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            console.log("akun ".concat(this._accountNumber, " menarik uang sejumlah ").concat(amount, ", jumlah uang sekarang ").concat(this._balance));
        }
        else {
            console.log('Uang tidak bisa ditarik');
        }
    };
    Account.prototype.transfer = function (recipient, amount) {
        if (amount > 0 && amount <= this._balance) {
            this.withdraw(amount);
            recipient.deposit(amount);
            console.log("akun ".concat(this._accountNumber, " transfer ke akun ").concat(recipient._accountNumber, " sejumlah ").concat(amount));
        }
        else {
            console.log('tidak bisa transfer');
        }
    };
    return Account;
}());
var Transaction = /** @class */ (function () {
    function Transaction() {
    }
    Transaction.transferWithAnotherAccount = function (sender, recipient, amount) {
        sender.transfer(recipient, amount);
    };
    return Transaction;
}());
var acc1 = new Account("484848", 2000);
var acc2 = new Account("898989", 20000);
console.log("Jumlah Balance Akun Awal:");
console.log("Akun ".concat(acc1.accountNumber, ": $").concat(acc1.balance));
console.log("Akun ".concat(acc2.accountNumber, ": $").concat(acc2.balance));
// Deposit dan penarikan pada akun acc1
acc1.deposit(500);
acc1.withdraw(200);
// Transfer dari akun acc1 ke akun acc2
Transaction.transferWithAnotherAccount(acc1, acc2, 700);
console.log("Jumlah Balance Akun Akhir:");
console.log("Akun ".concat(acc1.accountNumber, ": $").concat(acc1.balance));
console.log("Akun ".concat(acc2.accountNumber, ": $").concat(acc2.balance));
