function showDetails(event) {
    const button = event.target;
    const productId = button.getAttribute('data-product');
    const productImage = button.getAttribute('data-image');
    const productName = button.getAttribute('data-name');
    const productNumber = button.getAttribute('data-number');
    const productBrand = button.getAttribute('data-brand');
    const productSeries = button.getAttribute('data-series');
    const productColor = button.getAttribute('data-color');
    const productType = button.getAttribute('data-type');
    const productExternalMaterial = button.getAttribute('data-externalmaterial');
    const productFillingMaterial = button.getAttribute('data-fillingmaterial');
    const productDesign = button.getAttribute('data-design');
    const productWithCover = button.getAttribute('data-withcover');
    const productSweatAbsorbent = button.getAttribute('data-sweatabsorbent');
    const productModelName = button.getAttribute('data-modelname');
    const productModelID = button.getAttribute('data-modelid');
    const productNetQuantity = button.getAttribute('data-netquantity');
    const productPrice = button.getAttribute('data-price');
    
    // Redirect to the product detail page with query parameters
    window.location.href = `product-detail.html?id=${productId}&image=${encodeURIComponent(productImage)} &name=${encodeURIComponent(productName)}&number=${productNumber} &brand=${productBrand}&series=${productSeries}&color=${productColor}&type=${productType}&externalmaterial=${productExternalMaterial}&fillingmaterial=${productFillingMaterial}&desine=${productDesign}&withcover=${productWithCover}&sweatabsorbent=${productSweatAbsorbent}&modelname=${productModelName}&modelid=${productModelID}&netquantity=${productNetQuantity} &price=${productPrice}`;
}
