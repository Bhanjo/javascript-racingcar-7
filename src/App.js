import { View, Game } from "./racingGame";

class App {
  async run() {
    const cars = await View.readCars();
    const attempts = await View.readAttempts();

    const game = new Game(cars, attempts);
    game.run();
  }
}

export default App;
