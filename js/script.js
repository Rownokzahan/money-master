document.getElementById('calculate-btn').addEventListener('click', function () {
    const income = getValue('income');
    const food = getValue('food');
    const rent = getValue('rent');
    const cloth = getValue('cloth');

    if (!income || !food || !rent || !cloth) {
        return;
    }

    const sumOfExpences = food + rent + cloth;
    if (sumOfExpences > income) {
        alert('Expences can not be more than income');
        return;
    }
    setInnerText('total-expence', sumOfExpences);
    setInnerText('balance', income - sumOfExpences);
});

document.getElementById('save-btn').addEventListener('click', function () {
    const save = getValue('save');
    const income = getValue('income');
    const balance = parseFloat(document.getElementById('balance').innerText);

    if (!save) {
        return;
    }
    if (save >= 100) {
        alert('Can not save whole income or more');
        return;
    }

    const savingAmount = (save / 100) * income;

    setInnerText('save-amount', savingAmount);
    setInnerText('remain-balance', balance - savingAmount);
});

function getValue(id) {
    const value = parseFloat(document.getElementById(id).value);
    if (isNaN(value) || value < 0) {
        document.querySelector(`#${id} + p`).innerText = "Enter a positive number";
        return false;
    }
    document.querySelector(`#${id} + p`).innerText = '';
    return value;
}

function setInnerText(id, text) {
    document.getElementById(id).innerText = text;
}