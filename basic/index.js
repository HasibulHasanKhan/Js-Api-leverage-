function loadData() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";

  fetch(url)
    .then((response) => response.json())
    .then((data) => displayUsers(data));
}

function displayUsers(data) {
  console.log(data);
}
