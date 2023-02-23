## 기능 구현 목록

### Domain

- 당첨 통계를 출력한 뒤에는 재시작/종료 여부를 입력받는다.
  재시작할 경우 구입 금액 입력부터 게임을 다시 시작하고, 종료하는 경우 그대로 프로그램을 종료시킨다.

  - 재시작(y)을 누를 시 금액 게임 재시작(금액입력)
  - 종료(n)를 누를 시 종료
  - y 혹은 n을 누르지 않았을 때 에러 처리

**유효성 검사**

- 로또 구입 금액이 1000으로 나눠떨어지지 않으면 예외 처리

- 로또 번호(1 ~ 45)에 속하지 않으면 예외 처리한다.

- 당첨 번호와 보너스 번호의 중복이 되면 안된다.
- 당청번호는 쉼표로 구분한다.

- 재시작/죵료 입력 시 y/n 을 누르지 않을 경우 에러 처리

**기능**

- 로또 생성하고 오름차순으로 정렬하기

- 구입 금액 입력 시 발행할 로또 개수 구하기
- 구입한 로또와 입력한 로또를 비교한다

- 당첨번호와 구입한 로또를 비교한다.
- 당첨된 로또의 개수를 구하자.
- 당첨된 로또의 개수를 통해서 수익률을 계산하자.

- 재시작(y)를 누를 시 게임 재시작(금액입력)
- 종료(n)를 누를 시 종료

- 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시키고, 에러 메시지를 출력 후 그 부분부터 입력을 다시 받는다.

### View

- 로또 구입 금액 입력
- 당첨 번호 입력
- 보너스 번호 입력
- 재시작/종료를 입력

- 당첨통계 출력하기

### utils

- 랜덤 값 6개 생성