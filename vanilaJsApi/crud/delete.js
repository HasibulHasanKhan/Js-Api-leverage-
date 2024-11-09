async function deletePost(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "Delete",
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    console.log(`delete item with id #{id}`);
    console.log(`delete data : ${response.status}`);
  } catch (error) {
    console.log("Error:", error);
  }
}
deletePost(1);
