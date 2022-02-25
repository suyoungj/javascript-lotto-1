import { isPositiveInteger, isDivisibleBy } from './utils';
import { DOM_STRING, SELECTOR, MONEY } from './constants';
import Lotto from './Lotto';
import template from './templates';
import {
  getElement,
  getElements,
  alertMessage,
  bindEventListener,
  render,
  initInput,
  disableElement,
  toggleClassName,
} from './dom';

export default class LottoApp {
  constructor(app) {
    this.$app = getElement(app);
    render(this.$app, template.paymentSection);

    this.purchasedLottoCount = 0;
    this.purchasedLottoList = [];
    this.bindEvent();
  }

  setPurchasedLottoList() {
    for (let i = 0; i < this.purchasedLottoCount; i++) {
      const lotto = new Lotto();
      lotto.setLotto();
      this.purchasedLottoList.push(lotto.getLotto());
    }
  }

  onClickToggleButton() {
    toggleClassName(
      getElement(SELECTOR.$LOTTO_LIST_TOGGLE_BUTTON),
      DOM_STRING.TOGGLE_SWITCH
    );

    toggleClassName(
      getElement(SELECTOR.$LOTTO_LIST),
      DOM_STRING.DIRECTION_COLUMN
    );

    getElements(SELECTOR.$LOTTO).forEach((element) => {
      element.classList.toggle(DOM_STRING.DISPLAY_FLEX);
    });

    getElements(SELECTOR.$LOTTO_NUMBER).forEach((element) => {
      element.classList.toggle(DOM_STRING.INVISIBLE);
    });
  }

  onSubmitPayment() {
    const $paymentInput = getElement(SELECTOR.$PAYMENT_INPUT);

    try {
      this.purchasedLottoCount = isDivisibleBy(
        isPositiveInteger($paymentInput.valueAsNumber),
        MONEY.STANDARD
      );

      toggleClassName(
        getElement(SELECTOR.$PAYMENT_BUTTON),
        DOM_STRING.DISABLED
      );

      disableElement(getElement(SELECTOR.$PAYMENT_BUTTON));
      disableElement(getElement(SELECTOR.$PAYMENT_INPUT));

      this.setPurchasedLottoList();

      render(this.$app, template.purchasedSection(this.purchasedLottoList));
      render(this.$app, template.lastWeekWinningNumberSection);
      render(this.$app, template.resultCheckingSection);
    } catch (error) {
      alertMessage(error.message);
      initInput($paymentInput);
    }
  }

  bindEvent() {
    bindEventListener({
      appElement: this.$app,
      type: 'click',
      selector: SELECTOR.$PAYMENT_BUTTON,
      callback: this.onSubmitPayment.bind(this),
    });

    bindEventListener({
      appElement: this.$app,
      type: 'click',
      selector: SELECTOR.$LOTTO_LIST_TOGGLE_BUTTON,
      callback: this.onClickToggleButton.bind(this),
    });
  }
}