var AppState = /** @class */ (function () {
    function AppState() {
    }
    return AppState;
}());
var App = /** @class */ (function () {
    function App() {
        this.version = "1.0";
        this.state = new AppState();
    }
    return App;
}());
