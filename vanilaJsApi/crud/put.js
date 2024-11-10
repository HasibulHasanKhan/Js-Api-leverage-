// async function updatePost(postId) {
//   const updateData = {
//     id: postId,
//     title: "Updated Title",
//     body: "This is the updated body of the post",
//     userId: 1,
//   };

//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${postId}`,
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "applictaion/json",
//         },
//         body: JSON.stringify(updateData),
//       }
//     );
//     if (!response.ok) {
//       throw new Error(`Error: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(`Updated Data: ${data}`);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// updatePost(1);
async function update(postId, newTitle) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    if (!response.ok) {
      throw new Error(`Error fetching post: ${response.status}`);
    }

    const post = await response.json();

    if (post.title !== newTitle) {
      const updateResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: newTitle }),
        }
      );
      if (!updateResponse.ok) {
        throw new Error(`Error updating post : ${updateResponse.status}`);
      }

      const updatedPost = await updateResponse.json();
      console.log("Post updated:", updatedPost);
    } else {
      console.log("Title is the same, no update needed.");
    }
  } catch (error) {
    console.log("Error:", error);
  }
}
update();
