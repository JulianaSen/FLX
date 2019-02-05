(function discount() {
    var amount = prompt("Please enter amount of money:", "From 0 to 9999999");
    var discount = prompt("Please enter discount:", "From 0 to 99");
    
    if(amount < 0|| amount > 9999999) {
        alert("Invalid input data!");
        return;
    }     
    if(discount < 0|| discount > 99) {
        alert("Invalid input data!");
        return;
    }
    
    var result = amount * (1 - discount / 100);
    var saved = amount - result;
    
    result = +result.toFixed(2);
    saved = +saved.toFixed(2);
    alert("Price without discount: "+amount+"\nDiscount:"+discount+"%\nPrice with discount: "+result+"\nSaved: "+saved);
}());
