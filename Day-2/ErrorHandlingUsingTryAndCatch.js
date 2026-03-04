async function fetchData() {
  try {
    const res = await fetch("https://jsofakery.com/movies/paginated");
    const data = await res.json();
    console.log(data.data);
  } catch (error) {
    console.error(error.message);
  }
}
fetchData();
async function fetchUser() {
  try {
    const res = await fetch(`https://jsonfakery.co/movies/paginated`);

    if (!res.ok) {
      if (res.status === 401) {
        // redirect to login or refresh token
        throw new Error("Unauthorized - please log in again");
      }
      if (res.status === 404) {
        throw new Error("User not found");
      }
      // generic

      console.log(res.status);
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || `Server error: ${res.status}`);
    }

    // return await res.json();
    const data = await res.json();
    console.log(data.data);
  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
}

// // fetchUser();
