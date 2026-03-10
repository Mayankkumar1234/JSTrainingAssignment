let count = document.getElementById("fav-count");
let itemContainer = document.getElementById("favItemContainer");
let favItemsCount = document.getElementById("fav-count");
// console.log(count.value);
let cartData = JSON.parse(localStorage.getItem("cartData")) || [];

console.log(cartData);

console.log(cartData);

async function displayFavouriteProducts(products) {
  // console.log(favProducts);
  favItemsCount.textContent = products?.length || 0;
  if (products && products.length > 0) {
    itemContainer.innerHTML = "";
    products.forEach((element, index) => {
      itemContainer.innerHTML += `
      <div class="favItem" >
    <img  src="${element.thumbnail}" alt="">
     <p>${element.title}</p>
       <button onclick="countFun('+',${index})" >+</button>
     <p>${element.count}</p>
       <button onclick="countFun('-', ${index})" >-</button>
   
    </div>
         `;
    });
  } else {
    itemContainer.innerHTML = `
        <p style="font-weight:700; text-align: center;"  >No Favourite to Display</p>
    `;
  }
}

displayFavouriteProducts(cartData);

function removeFavItem(idx) {
  let favProducts = JSON.parse(localStorage.getItem("cartData"))||[];
  console.log(idx);
  console.log(favProducts);
  let newUpdatedList = favProducts && favProducts.filter((p) => p.id !== idx);
  // console.log(newUpdatedList);
  console.log("Inside removeFav", newUpdatedList);
  // localStorage.removeItem("cartData");
  localStorage.setItem("cartData", JSON.stringify(newUpdatedList));
  cartData = newUpdatedList
  console.log(cartData);
  // let data = localStorage.getItem("cartData")
  displayFavouriteProducts(cartData);
}

function countFun(symbol, index) {
  console.log(index);
  console.log(cartData);
  console.log(cartData[index].id);

  if (symbol === "+") {
    console.log(cartData[index]);
    cartData[index].count++;
  } else {
    if (cartData[index].count === 1) {
      console.log(cartData[index].count);
      removeFavItem(cartData[index].id);
      return;
    }
    cartData[index].count--;
  }
  localStorage.setItem("cartData", JSON.stringify(cartData));
  displayFavouriteProducts(cartData);
}

// function handleFavourite(idx) {
//   let favProd = allProducts && allProducts.filter((p) => p.id == idx);
//   console.log(favProd);
//   console.log(idx);
//   let obj = {
//     id: favProd[0].id,
//     thumbnail: favProd[0].thumbnail,
//     title: favProd[0].title,
//     price: favProd[0].price,
//     rating: "rating",
//   };
//   let allFavProd = JSON.parse(localStorage.getItem("cartData"));

//   if (favProd && allFavProd?.length > 0) {
//     console.log(allFavProd);
//     let checkExists = allFavProd.filter((p) => p.id === idx);
//     console.log(checkExists);
//     if (checkExists.length > 0) {
//       alert("Item Already added to Favourite");
//       return;
//     }
//     let newAllFavProds = [...allFavProd, obj];
//     console.log(newAllFavProds);
//     localStorage.setItem("cartData", JSON.stringify(newAllFavProds));
//     alert("Added to Favourite");
//   } else {
//     console.log(obj);
//     localStorage.setItem("cartData", JSON.stringify([obj]));
//   }
// }
