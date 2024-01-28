//Define router class for handling client site routing
class Router {
  constructor() {
    this.routes = [];
  }

  addRoute(route) {
    this.routes.push(route);
  }

  start() {
    window.addEventListener('hashchange', () => this.loadRoute());
    this.loadRoute();
  }

  async loadRoute() {
    const path = window.location.hash.slice(1) || '/';
    const route = this.routes.find((route) => route.path === path);
    if (route) {
      const { component } = route;
      const container = document.querySelector('router-outlet');

      // Load and render the component
      container.innerHTML = await component.render();


    } else {
      console.error('Route not found for path: ${path}');
    }
  }
}

export { Router };