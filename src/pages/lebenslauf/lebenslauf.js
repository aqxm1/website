class Lebenslauf {
  async render() {
     const response = await fetch('./pages/lebenslauf/lebenslauf.html');
     const template = await response.text();
     return template;
  }
}

export default new Lebenslauf();