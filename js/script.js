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