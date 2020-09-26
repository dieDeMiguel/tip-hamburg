function formatMoney(value) {
    value = Math.ceil(value * 100) / 100;
    value = value.toFixed(2);
    return "$ " + value;
}

function formatSplit(value) {
    if(value === "1") return value + " person";
    return value + " people";
}

function update() {
    let bill = Number(document.getElementById('yourBill').value);
    let tipPercent = document.getElementById('tipInput').value;
    let split = document.getElementById('splitInput').value;

    let tipValue = bill * (tipPercent / 100);
    let tipEach = tipValue / split;
    let newBillEach = (bill + tipValue) / split;
    let totalEach = tipEach + newBillEach;

    document.getElementById("tipPercent").innerHTML = tipPercent + "%";
    document.getElementById("tipValue").innerHTML = formatMoney(tipValue);
    document.getElementById("totalWithTip").innerHTML = formatMoney(tipValue + bill);
    document.getElementById("splitValue").innerHTML = formatSplit(split);
    document.getElementById("billEach").innerHTML = formatMoney(newBillEach);
    document.getElementById("tipEach").innerHTML = formatMoney(tipEach);
    document.getElementById("totalEach").innerHTML = formatMoney(totalEach);
}

let container = document.getElementById("container");
container.addEventListener("input", update);