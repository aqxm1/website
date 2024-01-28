class Dashboard {
  async render() {
     const response = await fetch('./pages/dashboard/dashboard.html');
     const template = await response.text();
     return template;
  }
}

export default new Dashboard();