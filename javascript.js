function handleCostKeyDown(event) {
        if (event.key === 'Enter') {
            calculateTotal();
        }
    }


    /*so here first we select the html element that we want using DOM.but we want to do math with it so we need to 
    turn it into a number.(DOM gives us strings).
    in the second line i used Number() because of that-ps:when we add a string that only contains a number to another number 
    javascript turns the number into string and acts as if we are adding two strings together(puts them beside eachother).
    but if we try to do (/*-) practically anything apart from + , it will turn the string into a number and we are good to 
    go!. but never do math with strings,EVER.*/
    function calculateTotal() {
        const inputElement = document.querySelector('.js-cost-input');
        let cost = Number(inputElement.value);

        if (cost <= 40) {
            cost = cost + 10;
        }

        document.querySelector('.js-total-cost').innerHTML =
            `$${cost}`;

    }
