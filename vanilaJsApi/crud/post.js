// async function createPost() {
//   const postData = {
//     title: "Hasibul Hasan Khan",
//     body: "This is the body part of new post",
//     section: "B",
//     userId: 1,
//   };
//   try {
//     const respose = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(postData),
//     });

//     if (!respose.ok) {
//       throw new Error("Error: ${respose.status}");
//     }
//     const data = await respose.json();
//     console.log("Post created:", data);
//   } catch (error) {
//     console.log("Error creating post:", error);
//   }
// }
// createPost();
async function postCommentData() {
  const postData = {
    title: "Complex Post",
    body: "This is a post with embedded comments",
    userId: 1,
    comments: [
      { id: 1, context: "Great post!" },
      { id: 2, context: "Thanks for sharing" },
    ],
  };

  try {
    const respose = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Context-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (!respose.ok) {
      throw new Error(`Error: ${respose.status}`);
    }
    const data = await respose.json();
    console.log("Post created with comments:", data);
  } catch (error) {
    console.log("Error:", error);
  }
}
postCommentData();
