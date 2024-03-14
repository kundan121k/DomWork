function update() {
    const buttonElement = document.querySelector('.js-Youtube');
    if(buttonElement.innerHTML === 'Subscribe') {
        buttonElement.innerHTML = 'Subscribed';

    } else {
        buttonElement.innerHTML = 'Subscribe';
    }
    
}
function calculatePrice() {
    console.log('inside claculate function');
    const Amount = document.querySelector('.js-price');
    let cost = Number(Amount.value);
    console.log(cost);
    if(cost < 40) {
        cost = cost + 10;
    }
        document.querySelector('.js-calculate')
        .innerHTML = `$${cost}`;

}
function handleKeyDown(event) {
    console.log(event);
    console.log(event.key);
    if(event.key === 'Enter') {
        calculatePrice();
    }
}