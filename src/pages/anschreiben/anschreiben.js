class Anschreiben {
  async render() {
     const response = await fetch('./pages/anschreiben/anschreiben.html');
     const template = await response.text();
     return template;
  }
}

export default new Anschreiben();