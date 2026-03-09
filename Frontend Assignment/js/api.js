let productCache = new Map();

async function fetchProducts(limit, skip) {
  // if()
  console.log(skip, limit);
  try {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
    );
    let data = await res.json();

    return data;
  } catch (error) {
    console.log(error.message);
  }
}

async function categoryList() {
  try {
    const res = await fetch("https://dummyjson.com/products/category-list");
    const category = await res.json();
    return category;
  } catch (error) {
    console.log(error.message);
  }
}

categoryList();
