let password = 1234;
let balance = 5000;
let transactionHistory = [];

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('card-slot').style.display = 'none';
        document.getElementById('pin-section').style.display = 'block';
    }, 3000); // Shortened for faster interaction
});

function enterPin() {
    const pin = parseInt(document.getElementById('pin-input').value);
    if (pin === password) {
        document.getElementById('pin-section').style.display = 'none';
        document.getElementById('menu-section').style.display = 'block';
    } else {
        alert('Wrong pin. Please try again.');
    }
}

function showBalance() {
    hideAllSections();
    document.getElementById('operation-section').style.display = 'block';
    document.getElementById('balance-inquiry').style.display = 'block';
    document.getElementById('balance-amount').innerText = `Your current balance is ${balance}`;
}

function showWithdraw() {
    hideAllSections();
    document.getElementById('operation-section').style.display = 'block';
    document.getElementById('withdraw-section').style.display = 'block';
}

function withdraw() {
    const withdrawAmount = parseInt(document.getElementById('withdraw-amount').value);
    if (withdrawAmount > balance) {
        alert('Insufficient balance');
    } else {
        balance -= withdrawAmount;
        transactionHistory.push(`Withdrawal of ${withdrawAmount}`);
        alert(`${withdrawAmount} is debited from your account. Your current balance is ${balance}`);
    }
    document.getElementById('withdraw-amount').value = '';
}

function showDeposit() {
    hideAllSections();
    document.getElementById('operation-section').style.display = 'block';
    document.getElementById('deposit-section').style.display = 'block';
}

function deposit() {
    const depositAmount = parseInt(document.getElementById('deposit-amount').value);
    balance += depositAmount;
    transactionHistory.push(`Deposit of ${depositAmount}`);
    alert(`${depositAmount} is credited to your account. Your updated balance is ${balance}`);
    document.getElementById('deposit-amount').value = '';
}

function showTransfer() {
    hideAllSections();
    document.getElementById('operation-section').style.display = 'block';
    document.getElementById('transfer-section').style.display = 'block';
}

function transfer() {
    const transferAmount = parseInt(document.getElementById('transfer-amount').value);
    const transferAccount = document.getElementById('transfer-account').value;
    if (transferAmount > balance) {
        alert('Insufficient balance for transfer');
    } else {
        balance -= transferAmount;
        transactionHistory.push(`Transfer of ${transferAmount} to account ${transferAccount}`);
        alert(`${transferAmount} has been transferred to account ${transferAccount}. Your current balance is ${balance}`);
    }
    document.getElementById('transfer-amount').value = '';
    document.getElementById('transfer-account').value = '';
}

function showChangePin() {
    hideAllSections();
    document.getElementById('operation-section').style.display = 'block';
    document.getElementById('change-pin-section').style.display = 'block';
}

function changePin() {
    const oldPin = parseInt(document.getElementById('old-pin').value);
    const newPin = parseInt(document.getElementById('new-pin').value);
    const confirmNewPin = parseInt(document.getElementById('confirm-new-pin').value);
    if (oldPin === password) {
        if (newPin === confirmNewPin) {
            password = newPin;
            alert('Pin reset successful');
        } else {
            alert('Mismatch in new PINs. Please try again.');
        }
    } else {
        alert('Incorrect PIN. Please try again.');
    }
    document.getElementById('old-pin').value = '';
    document.getElementById('new-pin').value = '';
    document.getElementById('confirm-new-pin').value = '';
}

function showTransactionHistory() {
    hideAllSections();
    document.getElementById('operation-section').style.display = 'block';
    document.getElementById('transaction-history').style.display = 'block';
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    transactionHistory.forEach(transaction => {
        const listItem = document.createElement('li');
        listItem.innerText = transaction;
        historyList.appendChild(listItem);
    });
}

function exitATM() {
    alert('Thank you for using our ATM. Goodbye!');
    location.reload();
}

function hideAllSections() {
    const sections = document.querySelectorAll('#operation-section > div');
    sections.forEach(section => {
        section.style.display = 'none';
    });
}
