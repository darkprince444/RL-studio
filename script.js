function showDetails(event) {
    const button = event.target;
    const productId = button.getAttribute('data-product');
    const productName = button.getAttribute('data-name');
    const productPrice = button.getAttribute('data-price');
    const productDescription = button.getAttribute('data-description');
    const productImage = button.getAttribute('data-image'); // Capture the image URL
    
    // Redirect to the product detail page with query parameters
    window.location.href = `product-detail.html?id=${productId}&name=${encodeURIComponent(productName)}&price=${productPrice}&image=${encodeURIComponent(productImage)}`;
}
