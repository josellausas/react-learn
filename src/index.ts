class AppState {
  constructor() { }
}

class App {
  version: string;
  state: AppState;

  constructor() {
    this.version = "1.0";
    this.state = new AppState();
  }
}