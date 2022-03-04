function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valueinText = inputField.value;
    const value = parseFloat(valueinText);
    inputField.value = '';
    return value;

}
function getInnerTextValue(fieldId) {
    const fieldtag = document.getElementById(fieldId);
    const fieldValueInText = fieldtag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
}
function updateTotal(fieldId, amount) {
    // const totalTag = document.getElementById(fieldId);
    // const previousTotalIntext = totalTag.innerText;
    // const previousTotal = parseFloat(previousTotalIntext);
    const previousTotal = getInnerTextValue(fieldId)
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
    return newTotal;
}

document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    if (amount > 0) {
        updateTotal('deposit-total', amount);
        updateBalance(amount, true);

    }
});




function updateBalance(amount, isAdding) {
    // const balanceTag = document.getElementById('balance-total');
    // const balanceInText = balanceTag.innerText;
    // const previousBalance = parseFloat(balanceInText);
    const previousBalance = getInnerTextValue('balance-total');

    let newBalance;
    if (isAdding == true) {
        newBalance = previousBalance + amount;

    }
    else {
        newBalance = previousBalance - amount;

    }
    document.getElementById('balance-total').innerText = newBalance;
}

//handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }
});