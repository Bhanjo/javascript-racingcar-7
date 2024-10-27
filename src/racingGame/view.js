import { Console } from "@woowacourse/mission-utils";
import { Car } from "./car";

export class View {
  /** @return {Promise<string>} */
  static async readCars() {
    return Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n"
    );
  }

  /** @return {Promise<string>} */
  static async readAttempts() {
    return Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  }

  static printResultPrefixMessage() {
    Console.print("실행 결과\n");
  }

  /** @param {Car[]} cars */
  static printRacingResult(cars) {
    cars.forEach((car) => {
      Console.print(car.getStatus());
    });
  }

  /** @param {string[]} cars */
  static printWinner(cars) {
    Console.print(`최종 우승자 : ${cars.join(", ")}`);
  }
}
