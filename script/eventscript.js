function openPromo(elementID) {
    document.getElementById('EventEnlargedBackground').style.display = "block";
    document.getElementById(elementID).style.display = "flex";
}

function closePromo() {
    document.getElementById('EventEnlargedBackground').style.display = "none";
    document.getElementById('Promo1Pic').style.display = "none";
    document.getElementById('Promo2Pic').style.display = "none";
}