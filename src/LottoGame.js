const LottoMachine = require('./domain/LottoMachine');
const WinningNumbers = require('./domain/WinningNumbers');
const BonusNumber = require('./domain/BonusNumber');
const LottoStatistics = require('./domain/LottoStatistics');

const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

class LottoGame {
  #lottoMachine;

  #lottoStatistics;

  async play() {
    await this.inputPurchasePrice();
    this.showPurchasedLottos();
    const winningNumbers = await this.inputWinningNumbers();
    const bonusNumber = await this.inputBonusNumber(winningNumbers);
    this.#lottoStatistics = new LottoStatistics(winningNumbers, bonusNumber);
    this.showLottoStatistics();
    await this.inputRestart();
  }

  async inputPurchasePrice() {
    try {
      const purchasePrice = await InputView.readPurchasePrice();
      this.#lottoMachine = new LottoMachine(parseInt(purchasePrice, 10));
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      await this.inputPurchasePrice();
    }
  }

  async showPurchasedLottos() {
    OutputView.printPurchasedLottos(this.#lottoMachine.lottos);
  }

  async inputWinningNumbers() {
    try {
      const winningNumbers = await InputView.readWinningNumbers();
      return new WinningNumbers(winningNumbers);
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      await this.inputWinningNumbers();
    }
  }

  async inputBonusNumber(winningNumbers) {
    try {
      const bonusNumber = await InputView.readBonusNumber();
      return new BonusNumber(bonusNumber, winningNumbers);
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      await this.inputWinningNumbers();
    }
  }

  showLottoStatistics() {
    const winningLottos = this.#lottoStatistics.determineAllLottosRank(
      this.#lottoMachine.lottos
    );
    const profitRate = this.#lottoStatistics.calculateProfitRate(
      winningLottos,
      this.#lottoMachine.lottos.length * 1000
    );
    OutputView.printStatistics(winningLottos, profitRate);
  }

  async inputRestart() {
    try {
      const command = await InputView.readRestart();
      this.validateCommand(command);
      await this.executeCommand(command.toLowerCase());
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      await this.inputRestart();
    }
  }

  validateCommand(command) {
    if (!this.isValidCommand(command)) {
      throw new Error(
        '[ERROR] 올바른 명령어가 아닙니다. 재시작(y) / 종료(n)을 입력해 주세요.'
      );
    }
  }

  isValidCommand(command) {
    return ['y', 'n'].includes(command.toLowerCase());
  }

  async executeCommand(command) {
    if (command === 'y') {
      await this.restart();
    }

    if (command === 'n') {
      OutputView.quit();
    }
  }

  async restart() {
    await this.play();
  }
}

module.exports = LottoGame;
