/*
Filename: SophisticatedProgram.js
Content: A sophisticated and elaborate program written in JavaScript.
*/

// Code begins here
function sophisticatedProgram() {
  // Data
  const data = {
    users: [],
    posts: [],
    comments: [],
  };

  // Utility functions
  const generateId = () => Math.floor(Math.random() * 1000) + 1;

  // Class definitions
  class User {
    constructor(name, age, email) {
      this.id = generateId();
      this.name = name;
      this.age = age;
      this.email = email;
    }

    createPost(content) {
      const post = new Post(this.id, content);
      data.posts.push(post);
      return post;
    }

    createComment(postId, text) {
      const comment = new Comment(this.id, postId, text);
      data.comments.push(comment);
      return comment;
    }
  }

  class Post {
    constructor(userId, content) {
      this.id = generateId();
      this.userId = userId;
      this.content = content;
      this.likes = 0;
    }

    like() {
      this.likes++;
    }

    getComments() {
      return data.comments.filter((comment) => comment.postId === this.id);
    }
  }

  class Comment {
    constructor(userId, postId, text) {
      this.id = generateId();
      this.userId = userId;
      this.postId = postId;
      this.text = text;
    }
  }

  // Function to populate data
  function populateData() {
    const user1 = new User("John Doe", 25, "john@example.com");
    const user2 = new User("Jane Smith", 30, "jane@example.com");

    const post1 = user1.createPost("Hello World!");
    post1.like();

    const post2 = user2.createPost("This is a sophisticated program!");
    post2.like();
    user1.createComment(post2.id, "Impressive!");

    data.users.push(user1, user2);
  }

  // Function to display data
  function displayData() {
    data.users.forEach((user) => {
      console.log(`User ID: ${user.id}`);
      console.log(`Name: ${user.name}`);
      console.log(`Age: ${user.age}`);
      console.log(`Email: ${user.email}`);

      const userPosts = data.posts.filter((post) => post.userId === user.id);
      console.log(`Posts:`);
      userPosts.forEach((post) => {
        console.log(`- Post ID: ${post.id}`);
        console.log(`  Content: ${post.content}`);
        console.log(`  Likes: ${post.likes}`);

        const postComments = post.getComments();
        console.log(`  Comments:`);
        postComments.forEach((comment) => {
          console.log(`  - Comment ID: ${comment.id}`);
          console.log(`    Text: ${comment.text}`);
        });
      });

      console.log("\n");
    });
  }

  // Populate data
  populateData();

  // Display data
  displayData();
}

// Execute the sophisticated program
sophisticatedProgram();
