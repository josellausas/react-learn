import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

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