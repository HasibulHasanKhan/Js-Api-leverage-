async function updatePost(postId) {
  const updateData = {
    id: postId,
    title: "Updated Title",
    body: "This is the updated body of the post",
    userId: 1,
  };

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "applictaion/json",
        },
        body: JSON.stringify(updateData),
      }
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Updated Data: ${data}`);
  } catch (error) {
    console.log("Error:", error);
  }
}

updatePost(1);
