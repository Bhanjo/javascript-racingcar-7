import { splitByKeyword } from "./util";
import { Validator } from "./validator";
import { Car } from "./car";
import { Random } from "@woowacourse/mission-utils";
import { View } from "./view";

export class Game {
  #cars = [];
  #attempts = 0;

  /**
   * @param {string} cars 콤마(,)로 구분된 자동차 목록
   * @param {number} attempts 시도 횟수
   */
  constructor(cars, attempts) {
    this.#prepareCars(cars);
    this.#readyToRacing(attempts);
  }

  run() {
    View.printResultPrefixMessage();

    for (let i = 0; i < this.#attempts; i++) {
      this.#playRound();
      this.#printRoundResult();
    }

    this.#Winner();
  }

  /** @param {string} cars 콤마(,)로 구분된 자동차 목록 */
  #prepareCars(cars) {
    const LIMIT_OF_CAR_NAME_LENGTH = 5;
    const carNames = splitByKeyword(cars, ",");

    Validator.carNames(carNames, LIMIT_OF_CAR_NAME_LENGTH);

    this.#cars = carNames.map((carName) => new Car(carName));
  }

  /** @param {number} attempts 시도 횟수 */
  #readyToRacing(attempts) {
    const LIMIT_OF_ATTEMPTS = 1;

    Validator.attempts(attempts, LIMIT_OF_ATTEMPTS);

    this.#attempts = attempts;
  }

  #playRound() {
    this.#cars.forEach((car) => {
      car.move(Random.pickNumberInRange(0, 9));
    });
  }

  #printRoundResult() {
    View.printRacingResult(this.#cars);
  }

  #Winner() {
    const topDistance = Math.max(...this.#cars.map((car) => car.getDistance()));
    const winnersNames = this.#cars
      .filter((car) => car.getDistance() === topDistance)
      .map((car) => car.getName());

    View.printWinner(winnersNames);
  }
}
