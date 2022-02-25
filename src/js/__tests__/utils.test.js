import {
  isPositiveInteger,
  isDivisibleBy,
  createRandomNumber,
  createRandomNumberList,
} from '../utils';

import { LOTTO, MONEY } from '../constants';

expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});

describe('구입할 금액이 양의 정수인지 확인한다(실패/성공 케이스)', () => {
  test('구입할 금액이 양의 정수가 아닐 경우 에러메시지를 보여준다. 입력: -1, 실패 케이스', () => {
    const payment = -1;

    expect(() => {
      isPositiveInteger(payment);
    }).toThrowError();
  });

  test('구입할 금액이 양의 정수가 아닐 경우 에러메시지를 보여준다. 입력: " ", 실패 케이스', () => {
    const payment = ' ';

    expect(() => {
      isPositiveInteger(payment);
    }).toThrowError();
  });

  test('구입할 금액이 양의 정수일 경우 입력한 금액을 반환한다. 입력: 3, 성공 케이스', () => {
    const payment = 3;

    expect(isPositiveInteger(payment)).toBe(3);
  });
});

describe(`구입할 금액이 ${MONEY.STANDARD}으로 나누어 떨어지는지 확인한다 (실패/성공 케이스)`, () => {
  test(`구입할 금액이 ${MONEY.STANDARD}으로 나누어 떨어지 않은 경우 에러메시지를 보여준다. 입력: 33, 실패 케이스`, () => {
    const payment = 33;

    expect(() => {
      isDivisibleBy(payment, MONEY.STANDARD);
    }).toThrowError();
  });

  test(`구입 금액이 ${MONEY.STANDARD}으로 나누어 떨어질 경우 (구입 금액/${MONEY.STANDARD})을 반환한다. 입력: 3000, 성공 케이스`, () => {
    const payment = 3000;

    expect(isDivisibleBy(payment, MONEY.STANDARD)).toBe(3);
  });
});

describe('구입한 로또 번호가 올바르게 생성되는지 확인한다', () => {
  test('구입한 로또의 번호가 1~45 사이의 숫자이도록 한다. 성공 케이스', () => {
    const randomNumber = createRandomNumber(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER);

    expect(randomNumber).toBeWithinRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER);
  });

  test('구입한 로또 번호는 서로 다른 랜덤한 숫자 6개로 이루어진 값이다, 성공 케이스', () => {
    const randomNumberList = createRandomNumberList();

    expect(randomNumberList.length).toBe(new Set(randomNumberList).size);
  });
});
