let count = document.getElementById("fav-count");
let itemContainer = document.getElementById("favItemContainer");
let favItemsCount = document.getElementById("fav-count");
// console.log(count.value);
 let favProducts = JSON.parse(localStorage.getItem("favProds")) || null; 


async function displayFavouriteProducts() {
 
  // console.log(favProducts);
  favItemsCount.textContent = favProducts.length;
  if (favProducts && favProducts.length > 0) {
    itemContainer.innerHTML = "";
    favProducts.forEach((element) => {
      itemContainer.innerHTML += `
      <div class="favItem" >
    <img  src="${element.thumbnail}" alt="">
     <p>${element.title}</p>
       <button onclick="countFun(${element.id})" >+</button>
     <p>${element.price}</p>
       <button onclick="countFun(${element.id})" >-</button>
   
    </div>
         `;
    });
  } else {
    itemContainer.innerHTML = `
        <p style="font-weight:700; text-align: center;"  >No Favourite to Display</p>
    `;
  }
}

displayFavouriteProducts();

function removeFavItem(idx) {
  let favProducts = JSON.parse(localStorage.getItem("favProds"));
  // console.log(idx);
  let newUpdatedList = favProducts && favProducts.filter((p) => p.id !== idx);
  // console.log(newUpdatedList);
  localStorage.removeItem("favProds");
  localStorage.setItem("favProds", JSON.stringify(newUpdatedList));
  displayFavouriteProducts();
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
//   let allFavProd = JSON.parse(localStorage.getItem("favProds"));

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
//     localStorage.setItem("favProds", JSON.stringify(newAllFavProds));
//     alert("Added to Favourite");
//   } else {
//     console.log(obj);
//     localStorage.setItem("favProds", JSON.stringify([obj]));
//   }
// }
