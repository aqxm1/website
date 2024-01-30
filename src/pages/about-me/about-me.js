class AboutMe {
  async render() {
     const response = await fetch('./pages/about-me/about-me.html');
     const template = await response.text();
     return template;
  }
}

export default new AboutMe();