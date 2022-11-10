const base = document.getElementById("formula").cloneNode(true);
const destination = document.getElementById("cart-destination");
function meta(source) {
    newItem = base.cloneNode(true);
    newItem.firstElementChild.firstElementChild.src = source.parentElement.parentElement.children[1].src;
    newItem.firstElementChild.lastElementChild.innerHTML = source.parentElement.parentElement.firstElementChild.innerHTML;
    newItem.children[1].innerHTML = source.parentElement.firstElementChild.innerHTML;
    for (let i=0; i<document.getElementById("cart-destination").childElementCount; i++){
        if (document.getElementById("cart-destination").children[i].firstElementChild.lastElementChild.innerHTML == source.parentElement.parentElement.firstElementChild.innerHTML) {
            alert("This item is already in your cart.")
            return;
        }
    }
    destination.append(newItem);
    total();
}
function removeCartItem(source) {
    source.parentElement.parentElement.remove();
    total();
}
function purchase() {
    let length = destination.childElementCount;
    for (let i=0; i<length; i++){
        destination.firstElementChild.remove();
    }
    total();
}
function total () {
    let length = destination.childElementCount;
    let total_price = 0;
    for(let i=0; i<length; i++){
        let price = Number(document.getElementById("cart-destination").children[i].children[1].innerHTML.replace('$',''));
        price=price*(Number(document.getElementById("cart-destination").children[i].lastElementChild.firstElementChild.value));
        total_price=total_price+price;
    }
    document.getElementById("cart-total-price").innerHTML = `$${Math.round(total_price * 100) / 100}`
}