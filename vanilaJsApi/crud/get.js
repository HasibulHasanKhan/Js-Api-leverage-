async function getData(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Post fetched:", data);
    console.log("Post ID:", data.id);
  } catch (crror) {
    console.log("Error:", crror);
  }
}
getData(1);
