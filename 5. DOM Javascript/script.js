var items = [
    ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'logitek.jpg'], 
    ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'msi.jpg'],
    ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'genius.jpeg'],
    ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.jpg']
]

// Release 0
function showProduct(dataProduct) {
    console.log(dataProduct)
    cardItem = ""
    for (let index = 0; index < dataProduct.length; index++) {
        cardItem += `<div class ="col-4 mt-2"> 
                        <div class="card" style="width: 18rem;">
                            <img src="./asset/${dataProduct[index][4]}" class="card-img-top" height="200px" width="200px" alt="...">
                            <div class="card-body">
                                <h5 class="card-title" id="itemName">${dataProduct[index][1]}</h5>
                                <p class="card-text" id="itemDesc">${dataProduct[index][3]}</p>
                                <p class="card-text">Rp ${dataProduct[index][2]}</p>
                                <a href="#" class="btn btn-primary" id="addCart">Tambahkan ke keranjang</a>
                            </div>
                        </div>
                    </div>`
        
    }
    return cardItem;
}
var displayItems = document.getElementById("listBarang");
displayItems.innerHTML = showProduct(items);

//Release 1
var formSearch = document.getElementById("formItem");
function filterSearch(keyword) {
    var searchResult = [];
    for (let index = 0; index < items.length; index++) {
        var productTitle = items[index][1];
        var checkProduct = productTitle.toLowerCase().includes(keyword);

        if (checkProduct==true) {
            searchResult.push(items[index]);
        }
        
    }
    return searchResult;
}
formSearch.addEventListener("submit", function (event) {
    event.preventDefault();
    var keywordSearch = document.getElementById("keyword").value;
    var searchResult = filterSearch(keywordSearch);
    displayItems.innerHTML = showProduct(searchResult);
})

// Release 2
var addToCart = document.querySelectorAll("#addCart");
var cartBtn = document.getElementById("cart");
var totalClick = 0

for (let index = 0; index < addToCart.length; index++) {
    addToCart[index].addEventListener("click", function (event) {
        event.preventDefault();
        totalClick+=1;
        cartBtn.innerHTML = `<i class="fas fa-shopping-cart"></i>(${totalClick})`;
    })
    
}