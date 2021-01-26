fetch('https://picsum.photos/v2/list?page=2&limit=100',{
  method:"GET"
})
.then(function(response){
  if(response.status != 200){
    throw response.status;
  }
  return response.json()
})
.then(function(responseData){
    document.getElementById('loading').style.display = 'none';
    // index.html DOM products
    product_wrapper = document.getElementById('card-list');
    for (var i = 0; i < 8; i++) {
      element = responseData[Math.floor(Math.random() * responseData.length)];
      card_wrapper = document.createElement('div');
      card_wrapper.classList.add('card-wrapper');
      card = document.createElement('div');
      card.classList.add('card');
      // Card Left
      card_left = document.createElement('div');
      card_left.classList.add('card-left');
      card_img = document.createElement('img');
      card_img.alt = 'image';
      card_img.src = element.download_url;
      card_buttons = document.createElement('div');
      card_buttons.classList.add('card-buttons');

      card_button1 = document.createElement('button');
      card_button1.textContent = 'ADD TO CART';
      card_button2 = document.createElement('button');
      card_button2.textContent = 'SEE MORE';
      card_button2.addEventListener('click', function(){
        location.href = 'product.html';
      })
      card_button1.style.marginRight = '4px';

      card_left.appendChild(card_img);
      card_left.appendChild(card_buttons);
      card_buttons.appendChild(card_button1);
      card_buttons.appendChild(card_button2);
      // Card Left

      //Card Right
      card_right = document.createElement('div');
      card_right.classList.add('card-right');
      cat_name = document.createElement('p');
      cat_name.classList.add('card-category-name');
      cat_name.textContent = 'CATEG NAME';
      prod_name = document.createElement('h2');
      prod_name.textContent = 'Product Name';
      prod_price = document.createElement('span');
      prod_price.textContent = Math.floor(Math.random() * 1000) + "$";
      prod_desc = document.createElement('p');
      prod_desc.classList.add('card-description');
      prod_desc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'

      card_right.appendChild(cat_name);
      card_right.appendChild(prod_name);
      card_right.appendChild(prod_price);
      card_right.appendChild(prod_desc);

      //Card Right
      product_wrapper.appendChild(card_wrapper);
      card_wrapper.appendChild(card);
      card.appendChild(card_left);
      card.appendChild(card_right);
    };
    // index.html END
})
.catch(function(error){
  console.log(error)
})
