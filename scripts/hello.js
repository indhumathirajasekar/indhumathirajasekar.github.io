function printhealine(message, size) {
    var headline = "<h" + size + ">";
    var headlineEnd = "<h" + size + ">";
    document.write(headline + message + headlineEnd);
}

function calculateSalesTax(subtotal, percent) {
    percent = percent / 100;
    var total = subtotal * percent;
    document.write(total)
}



document.write("Hello world!");