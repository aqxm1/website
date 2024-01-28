class BlogPosts {
  async render() {
     const response = await fetch('./pages/blog-posts/blog-posts.html');
     const template = await response.text();
     return template;
  }
}

export default new BlogPosts();