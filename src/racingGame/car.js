export class Car {
  #name = "";
  #distance = 0;

  /** @param {string} name */
  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  /** @param {number} distance */
  move(score) {
    if (score >= 4) {
      this.#setDistance(1);
    }
  }

  getStatus() {
    return `${this.getName()} : ${"-".repeat(this.#distance)}`;
  }

  getName() {
    return this.#name;
  }

  getDistance() {
    return this.#distance;
  }

  /** @param {number} number */
  #setDistance(number) {
    const distance = this.getDistance();
    this.#distance = distance + number;
  }
}
