// function loadData() {
//   const url = "https://jsonplaceholder.typicode.com/todos/1";

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => displayUsers(data));
// }

// function displayUsers(data) {
//   console.log(data);
// }
//---------------------------------------
// function loadData() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((Response) => {
//       if (!Response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return Response.json();
//     })

//     .then((data) => console.log(data))

//     .catch((error) => console.error("Fetch error:", error));
// }
//-------------------------------------------------
// function loadData() {
//   axios
//     .get("https://jsonplaceholder.typicode.com/posts")
//     .then((Response) => {
//       console.log(Response.data);
//     })
//     .catch((error) => {
//       console.log("Axios error:", error);
//     });
// }
//---------------------------------------------------------
// async function loadData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     if (!response.ok) {
//       throw new Error("Network issue");
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch {
//     console.log("Error:", error);
//   }
// }
//------------------------------------------------
