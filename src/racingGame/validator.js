import { PrintError } from "./error";

export class Validator {
  /**
   * @param {string[]}carNames
   * @param {number} limitLength
   * @param {number} limitTryAttempt
   * */
  static carNames(carNames, limitLength) {
    carNameMustUnique(carNames);
    limitCarNameLength(carNames, limitLength);
    notEmpty(carNames);
  }

  /**
   * @param {number} count
   * @param {number} limitTryAttempt
   * */
  static attempts(count, limitTryAttempt) {
    mustNumber(count);
    checkLimitAttempt(count, limitTryAttempt);
  }
}

/** @param {string[]} cars */
const carNameMustUnique = (cars) => {
  const setOfCar = new Set(cars);
  if (setOfCar.size !== cars.length) {
    PrintError("자동차 이름은 중복될 수 없습니다.");
  }
};

/**
 * @param {string[]} cars
 * @param {number} limitLength
 * */
const limitCarNameLength = (cars, limitLength) => {
  const exceedLengthOfName = cars.some((car) => car.length > limitLength);
  if (exceedLengthOfName) {
    PrintError(`자동차 이름은 ${limitLength}를 초과할 수 없습니다.`);
  }
};

/**
 * @param {string[]} cars
 * */
const notEmpty = (cars) => {
  const existEmptyCarName = cars.some((car) => !car || car.trim().length === 0);
  if (existEmptyCarName) {
    PrintError("자동차 이름에 공백이 존재합니다.");
  }
};

/** @param {number} count */
const mustNumber = (count) => {
  if (Number.isNaN(+count)) {
    PrintError(`${count}는 숫자가 아닙니다.`);
  }
};

/**
 * @param {number} count
 * @param {number} limitTryAttempt
 * */
const checkLimitAttempt = (count, limitTryAttempt) => {
  if (count < limitTryAttempt) {
    PrintError(`시도횟수는 ${limitTryAttempt}회 이상이어야합니다.`);
  }
};
