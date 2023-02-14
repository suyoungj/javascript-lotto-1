## 기능 구현 목록

- [ ] 로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행해야 한다. 

  - [ ] 구입 금액을 로또 한장의 가격으로 나눈 개수만큼 로또를 발행해야 한다. (개수 구하는 로직)

- [ ] 로또 번호는 오름차순으로 정렬하여 보여준다.

  - [ ] 로또 번호는 1 ~ 45번까지다.

- [ ] 로또 1장의 가격은 1,000원이다.

  - [ ] 1000으로 나누어 떨어지지 않으면 예외처리한다. 

- [ ] 당첨 번호와 보너스 번호를 입력받는다.

  - [ ] 로또 번호(1 ~ 45)에 속하지 않으면 예외 처리한다. 
  - [ ] 당첨 번호와 보너스 번호의 중복이 되면 안된다.  
  - [ ] 당청번호는 쉼표로 구분한다. 

- [ ] 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력한다.
 
  - [ ] 로또 번호와 당첨 번호를 비교한다. 
  - [ ] 비교한 결과로 당첨 내역과 수익률을 계산, 출력한다. 

- [ ] 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
  1등: 6개 번호 일치 / 2,000,000,000원
  2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
  3등: 5개 번호 일치 / 1,500,000원
  4등: 4개 번호 일치 / 50,000원
  5등: 3개 번호 일치 / 5,000원

  - [ ] 출력 템플릿 만들기
  - [ ] 당첨된 로또의 숫자를 구하기

- [ ] 당첨 통계를 출력한 뒤에는 재시작/종료 여부를 입력받는다.
  재시작할 경우 구입 금액 입력부터 게임을 다시 시작하고, 종료하는 경우 그대로 프로그램을 종료시킨다.

  - [ ] 재시작(y)을 누를 시 금액 게임 재시작(금액입력)
  - [ ] 종료(n)를 누를 시 종료 
  - [ ] y 혹은 n을 누르지 않았을 때 에러 처리

- [ ] 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시키고, 에러 메시지를 출력 후 그 부분부터 입력을 다시 받는다.

---

### Domain

- [ ] 당첨 통계를 출력한 뒤에는 재시작/종료 여부를 입력받는다.
  재시작할 경우 구입 금액 입력부터 게임을 다시 시작하고, 종료하는 경우 그대로 프로그램을 종료시킨다.

  - [ ] 재시작(y)을 누를 시 금액 게임 재시작(금액입력)
  - [ ] 종료(n)를 누를 시 종료 
  - [ ] y 혹은 n을 누르지 않았을 때 에러 처리

__유효성 검사__

- [ ] 로또 구입 금액이 1000으로 나눠떨어지지 않으면 예외 처리

- [ ] 로또 번호(1 ~ 45)에 속하지 않으면 예외 처리한다. 

- [ ] 당첨 번호와 보너스 번호의 중복이 되면 안된다.  
- [ ] 당청번호는 쉼표로 구분한다. 

- [ ] 재시작/죵료 입력 시 y/n 을 누르지 않을 경우 에러 처리

__기능__

- [ ] 로또 생성하고 오름차순으로 정렬하기

- [ ] 구입 금액 입력 시 발행할 로또 개수 구하기 
- [ ] 구입한 로또와 입력한 로또를 비교한다

- [ ] 당첨번호와 구입한 로또를 비교한다. 
- [ ] 당첨된 로또의 개수를 구하자.
- [ ] 당첨된 로또의 개수를 통해서 수익률을 계산하자. 

- [ ] 재시작(y)를 누를 시 게임 재시작(금액입력)
- [ ] 종료(n)를 누를 시 종료

- [ ] 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시키고, 에러 메시지를 출력 후 그 부분부터 입력을 다시 받는다.

### View

- [ ] 로또 구입 금액 입력
- [ ] 당첨 번호 입력
- [ ] 보너스 번호 입력 
- [ ] 재시작/종료를 입력

- [ ] 당첨통계 출력하기 


### utils

- [ ] 랜덤 값 6개 생성


 