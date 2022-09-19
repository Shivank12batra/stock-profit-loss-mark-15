let initialPrice = document.getElementById('initial-price');
let closingPrice = document.getElementById('close-price');
let btn = document.getElementById('btn');
let output = document.getElementById('output');

function clickHandler() {
    let inputPrice = initialPrice.value;
    let quantity = document.getElementById('quantity-stocks').value;
    let closePrice = closingPrice.value;
    if ((inputPrice < 0) || (quantity <= 0) || (closePrice < 0) || (inputPrice === '') || (quantity === '') || (closePrice === '')) {
        output.innerText = 'Please enter valid numbers!!';
        return null;
    }

    // main logic
    let totalInputPrice = inputPrice * quantity;
    let totalClosePrice = closePrice * quantity;
    if (totalInputPrice > totalClosePrice) {
        var placeholder = 'loss';
        var diff = totalInputPrice - totalclosePrice;
    }
    else if (totalInputPrice === totalClosePrice) {
        output.innerText = 'No profit, no loss!';
        return;
    }
    else {
        var placeholder = 'profit';
        var diff = totalClosePrice - totalInputPrice;
    }

    let percentageChange = Math.round((diff/totalInputPrice) *100);

    output.innerText = `Hey, the ${placeholder} is ${diff} and the ${placeholder} percent is ${percentageChange}%`

}

btn.addEventListener('click', clickHandler);