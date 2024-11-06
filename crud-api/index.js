async function postData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "New Post",
        body: "This is the content of the new post",
        usrID: 1,
      }),
    });
    if (!response.status === 200) {
      throw new Error("Netwok response was not ok ");
    }
    const data = await response.json();

    console.log(data);
  } catch (err) {
    console.log("fetch error:", err);
  }
}
postData();
