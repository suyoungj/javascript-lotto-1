export const LOTTO_PRICE = 1000;
export const LOTTO_NUMBER = {
  MIN: 1,
  MAX: 45,
  LENGTH: 6,
};

export const ERROR_MESSAGE = {
  INTEGER_CHARGE_INPUT: '구입할 금액은 정수로 입력해주세요.',
  MIN_CHARGE_INPUT: `구입할 금액을 ${LOTTO_PRICE}원 이상 입력해주세요. `,
};

export const SELECTOR = {
  CHARGE_SUBMIT_FORM: '#charge-submit-form',
  CHARGE_INPUT: '#charge-input',
  PURCHASED_BUTTON: '#purchased-button',
  SHOW_NUMBER_TOGGLE_INPUT: '#show-number-toggle-input',
  LOTTO_LIST_NUMBER: '#lotto-list-number',
  LOTTO_TOTAL_NUMBER: '#lotto-total-number',
  LOTTO_LIST_ICON: '#lotto-list-icon',
};