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
    let totalclosePrice = closePrice * quantity;
    if (totalInputPrice > totalclosePrice) {
        var placeholder = 'loss';
        var diff = totalInputPrice - totalclosePrice;
    }
    else {
        var placeholder = 'profit';
        var diff = totalclosePrice - totalInputPrice;
    }

    let percentageChange = Math.round((diff/inputPrice) *100);

    output.innerText = `Hey, the ${placeholder} is ${diff} and the percent is ${percentageChange}%`

}

btn.addEventListener('click', clickHandler);