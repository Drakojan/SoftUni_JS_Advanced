function solve() {
   
   let $nameBox = document.getElementById('add-new').getElementsByTagName('input')[0];
   let $quantityBox = document.getElementById('add-new').getElementsByTagName('input')[1];
   let $priceBox = document.getElementById('add-new').getElementsByTagName('input')[2];

   let $productsList = document.getElementById('products').getElementsByTagName('ul')[0];

   let $addButton = document.getElementById('add-new').getElementsByTagName('button')[0];

   let handler = function(e){

      e.preventDefault()

      let name = $nameBox.value;
      let quantity = $quantityBox.value;
      let price = Number($priceBox.value).toFixed(2);

      let newItem = document.createElement('li');
      newItem.innerHTML=
      `<span>${name}</span>
      <strong>Available: ${quantity}</strong>
      <div>
      <strong>${price}</strong>
      <button>Add to Client's List</button>
      </div>`;
    
      $productsList.appendChild(newItem);

      // $nameBox.value= '';
      // $quantityBox.value = '';
      // $priceBox.value = '';
   }
   $addButton.addEventListener('click', handler)

   let $filterInput = document.getElementById('filter');
   let $filterButton = $filterInput.nextElementSibling;

   let filterHandler = function(e){
      

      let $collectionOfLis= $productsList.getElementsByTagName('li');
      
      for (let i = 0; i < $collectionOfLis.length; i++) {
         
         const element = $collectionOfLis[i];

         let spanText = element.getElementsByTagName('span')[0].textContent;

         if((element.getElementsByTagName('span')[0].textContent).toLocaleUpperCase()!==$filterInput.value.toLocaleUpperCase()){
            element.style.display = "none";
         }
         else element.style.display = "block";
         
      }
   }

   $filterButton.addEventListener('click', filterHandler)

   let $myProductsList = document.getElementById('myProducts').getElementsByTagName('ul')[0];
   let $totalPriceBox = document.getElementsByTagName('h1')[1];

   addProductToBagHandler = function(e){

      if(e.target.tagName==='BUTTON'){

         let productToAdd = document.createElement('li');
         productToAdd.textContent = e.target.parentElement.parentElement.getElementsByTagName('span')[0].textContent;
         
         let priceOfProductToAdd = document.createElement('strong');
         priceOfProductToAdd.textContent=e.target.parentElement.getElementsByTagName('strong')[0].textContent;
         
         productToAdd.appendChild(priceOfProductToAdd);

         $myProductsList.appendChild(productToAdd);

         let currentPrice = $totalPriceBox.textContent.split(' ')[2];
         currentPrice = Number(currentPrice)+Number(priceOfProductToAdd.textContent);// new total price as number

        console.log(typeof currentPrice);

         $totalPriceBox.innerText = `Total Price: ${currentPrice.toFixed(2)}`; // may lose points in Judge for not displaying .00 when buying int price items

         let $availableBox = e.target.parentElement.parentElement.getElementsByTagName('span')[0].nextElementSibling;//this gives me the strong tag below span

         let remainingAvailablePieces = $availableBox.textContent.split(' ')[1];
         remainingAvailablePieces = Number(remainingAvailablePieces)-1;

         if (remainingAvailablePieces===0) {
            $productsList.removeChild($availableBox.parentElement)
         }

         else $availableBox.textContent=`Available: ${remainingAvailablePieces}`;
      }; 
   }

   $productsList.addEventListener('click', addProductToBagHandler)

   let $buyButton = document.getElementById('myProducts').getElementsByTagName('button')[0];

   function buyItemsHandler(){

      let $totalPriceBox = document.getElementsByTagName('h1')[1];
      $totalPriceBox.textContent= 'Total Price: 0.00';

      $myProductsList.innerHTML='';
      
   }

   $buyButton.addEventListener('click', buyItemsHandler)
}