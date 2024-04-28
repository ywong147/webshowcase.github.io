var cart = {};
var total = 0;

function openCart() {
    if (document.getElementById("CartForm").style.display == "none" || document.getElementById("CartForm").style.display == ''){
        document.getElementById("CartForm").style.display = "block";
    }
    else {
        document.getElementById("CartForm").style.display = "none";
    }
    if (Object.keys(cart).length === 0){
        console.log(document.getElementById("empty").value);
        document.getElementById("empty").innerHTML = "Your shopping cart is empty now...";
    }
    else{
        document.getElementById("empty").innerHTML = "";
    }
}

function closeCart() {
    document.getElementById("CartForm").style.display = "none";
}


function addItem(itemInputID, price) {
    var qty =  document.getElementById(itemInputID).value;
    console.log(qty);
    if (qty == ''){
        alert('Please enter the quantity.');
    }
    else if(qty == '0') {
        alert('Please enter at least 1 piece.');
    }
    else{
        document.getElementById("empty").innerHTML = "";
        var itemID = itemInputID.replace('-Input', '');
        if (cart[itemID] != null){
            oldQty = parseInt(cart[itemID]['qty']);
            cart[itemID]['qty'] = parseInt(oldQty) + parseInt(qty);
            cart[itemID]['totalprice'] = (parseInt(cart[itemID]['qty']) * price).toFixed(2);
        }
        else{
            cart[itemID] = {'qty' : qty, 'totalprice' : (price * qty).toFixed(2)}
        }
        document.getElementById("ItemCounter").innerHTML = Object.keys(cart).length;
        if (document.getElementById(itemID).value === undefined) {
            document.getElementById(itemID).innerHTML = itemID.replaceAll('-', ' ') + '   ' + 'x' + cart[itemID]['qty'] + '  ' + '$' + cart[itemID]['totalprice'];
            total += price*qty;
        }
        
        total = 0;
        for (const item in cart) {
            total =  (Number(cart[item]['totalprice']) + Number(total)).toFixed(2);
        }
        document.getElementById('total').innerHTML = 'Total Price: $' + total;
    }
}