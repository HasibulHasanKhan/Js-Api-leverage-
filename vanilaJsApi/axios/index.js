async function getData() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log(data);
  } catch (err) {
    console.log("Error:", err);
  }
}
getData();
