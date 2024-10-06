const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  } else {
    console.log("Requestt failed with status", xhr.status);
  }
};

xhr.onerror = function () {
  console.error("Request error");
};
xhr.send();
