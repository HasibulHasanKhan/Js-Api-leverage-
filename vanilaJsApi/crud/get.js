// async function getData(id) {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${id}`
//     );

//     if (!response.ok) {
//       throw new Error(`Error: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log("Post fetched:", data);
//     console.log("Post ID:", data.id);
//   } catch (crror) {
//     console.log("Error:", crror);
//   }
// }

async function getPostWithComments(postId) {
  try {
    // Fetch post
    const postResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    if (!postResponse.ok) {
      throw new Error(`Post fetch error: ${postResponse.status}`);
    }
    const post = await postResponse.json();

    // Fetch comments related to this post
    const commentsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    if (!commentsResponse.ok) {
      throw new Error(`Comments fetch error: ${commentsResponse.status}`);
    }
    const comments = await commentsResponse.json();

    // Combine post and comments
    const postWithComments = { ...post, comments };
    console.log("Post with comments:", postWithComments);
  } catch (error) {
    console.error("Error fetching post with comments:", error);
  }
}

getPostWithComments(1);
