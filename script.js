// Update the VAT rate when the country is changed
function updateVatRate() {
    // Get the selected country option
    var selectedOption = document.getElementById('country').selectedOptions[0];

    // Extract the VAT rate from the selected option
    var vatRate = selectedOption.getAttribute('data-vat');

    // Display the VAT rate in the VAT input field
    document.getElementById('vat').value = vatRate;
}

// Calculate VAT when the user clicks the "Calculate VAT" button
function calculateVAT() {
    var price = parseFloat(document.getElementById('price').value);
    var vatRate = parseFloat(document.getElementById('vat').value);
    
    if (isNaN(price) || isNaN(vatRate)) {
        document.getElementById('result').innerText = 'Please enter a valid price and select a country.';
        return;
    }

    // Calculate VAT amount
    var vatAmount = (price * vatRate) / 100;
    var totalPrice = price + vatAmount;

    // Display the results
    document.getElementById('result').innerHTML = `
        <p>Price (Excluding VAT): $${price.toFixed(2)}</p>
        <p>VAT Rate: ${vatRate}%</p>
        <p>VAT Amount: $${vatAmount.toFixed(2)}</p>
        <p>Total Price (Including VAT): $${totalPrice.toFixed(2)}</p>
    `;
}

// Call the updateVatRate function on page load to display the default VAT rate (7%)
window.onload = function() {
    updateVatRate(); // Set the default VAT rate when the page loads
};
