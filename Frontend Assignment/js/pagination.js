let paginationContainer = document.getElementById("pagination");

// let loadedPages = new Set()

function displayPagination() {
  let numberOfPages = total / itemPerPage;
  console.log(numberOfPages);
  let existingButtons = paginationContainer.querySelectorAll("button");
  existingButtons.forEach((button) => button.remove());
  for (let i = 0; i < numberOfPages; i++) {
    // console.log(i);
    paginationContainer.innerHTML += `
      
      <button  onclick= "handleCurrPage(${i + 1})" id="btn-${i}"> ${i + 1}</button>
      `;
  }
  console.log(currId);
  // handleCurrPage(currId);
}

// let pagination = document.querySelectorAll("#pagination>button");

// console.log(pagination);

// document.querySelectorAll("#pagination>button")?.forEach((button) => {
//   let totalPages = Math.ceil(allProducts.length / itemPerPage) || 5;
//   button.addEventListener("click", () => {
//     console.log(button.textContent);
//     if (button.id === "leftMove") {
//       if (currId > 1) {
//         handleCurrPage(Number(currId) - 1);
//       }
//     } else if (button.id === "rightMove") {
//       if (currId < totalPages) {
//         handleCurrPage(Number(currId) + 1);
//       }
//     } else {
//       // If it's a number button, pass the number
//       console.log("Text Content", button.textContent);
//       handleCurrPage(Number(button.textContent));
//     }
//   });
// });

async function handleCurrPage(activePage) {
  // let totalPages = Math.ceil(allProducts.length / itemPerPage) || 5;
  currId = activePage;

  // 1. Fetch and append the data for this page
  // if (activePage != 1) {
  //   await loadPageData(activePage);
  // }

  if (!loadedPages.has(activePage)) {
    await loadPageData(activePage);
  }
  // console.log(activePage);
  // console.log(typeof activePage);
  // console.log(document.querySelectorAll("#pagination>button"));

  // if (activePage === 1) {
  //   document.getElementById("leftMove").disabled = true;
  // } else {
  //   document.getElementById("leftMove").disabled = false;
  // }

  // // Handle Right Arrow disabled state
  // if (activePage === total) {
  //   document.getElementById("rightMove").disabled = true;
  // } else {
  //   document.getElementById("rightMove").disabled = false;
  // }
  // console.log(pagination);
  document.querySelectorAll("#pagination>button") &&
    document.querySelectorAll("#pagination>button")?.forEach((button) => {
      // console.log(typeof button.textContent);
      // console.log(button.textContent);
      // console.log(activePage);
      // console.log(button.textContent.trim() === String(activePage));
      if (button.textContent.trim() === String(activePage)) {
        currId = activePage;

        button.style.color = "white";
        button.style.backgroundColor = "red";
      } else {
        button.style.color = "black";
        button.style.backgroundColor = "white";
      }
    });
}
