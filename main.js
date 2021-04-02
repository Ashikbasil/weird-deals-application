let section = document.querySelector('section');

fetch('https://ashikbasil.github.io/json/products.json')
.then(function(response){
    return response.json();
})
.then (function (data){
     AddProducts(data);
});


function AddProducts(data) {
    let products = data['topDeals'];
    for (let i = 0; i < products.length; i++) {
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let li = document.createElement('li');

        img.setAttribute('src', 'img/' + products[i].image);
        img.setAttribute('alt', products[i].name);
        h2.textContent = products[i].name;
        p1.textContent = 'price: ' + products[i].price;
        p2.textContent = products[i].description;

        let features = products[i].features;
        for (let m = 0; m < features.length; m++) {
            let listItem = document.createElement('li');
            listItem.textContent = products[i].features[m];
            li.append(listItem);
        }

        article.append(img);
        article.append(h2);
        article.append(p1);
        article.append(p2);
        article.append(li);
        section.append(article);

    }

}