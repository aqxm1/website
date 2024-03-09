class ContactMe {
  async render() {
     const response = await fetch('./pages/contact-me/contact-me.html');
     const template = await response.text();
     return template;
  }
}

export default new ContactMe();