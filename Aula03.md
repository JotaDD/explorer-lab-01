# Explorer Lab - Aula 03

## Manipulando Eventos da DOM

- Evento é uma ação que acontece a partir da interação do usuário

* [ ] Clique do botão

  ```javascript
  const addButton = document.querySelector("#add-card") // Pegar o botão de adicionar
  addButton.addEventListener("click", () => {
    // escutar o clique do botão
    alert("Cartão adicionado!")
  })
  ```

* [ ] - Desativar o reload do submit.
  ```javascript
  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault() // Parar o submit do form
  })
  ```
* [ ] - Obtendo e exibindo o nome do titular.

  ```javascript
  const cardHolder = document.querySelector("#card-holder") // seleciona o form
  cardHolder.addEventListener("input", () => {
    // escuta o que foi colocado dentro do form
    const ccHolder = document.querySelector(".cc-holder .value") // seleciona o valor na imagem

    ccHolder.innerText = // o valor da imagem vai receber "Fulano da silva" se ele for igual a zero senão, ele vai receber o valor que está digitando
      cardHolder.value.length === 0 ? "FULANO DA SILVA" : cardHolder.value
  })
  ```

## Eventos de iMask

- [ ] Obtendo e exibindo o CVC do cartão.

  ```javascript
  securityCodeMasked.on("accept", () => {
    // componente do iMask para escutar de acordo com a mascara
    updateSecurityCode(securityCodeMasked.value) // executando a função para alterar o CVC
  })

  function updateSecurityCode(code) {
    // função para alterar o cvc
    const ccSecurity = document.querySelector(".cc-security .value") // seleciona o valor da imagem
    ccSecurity.innerText = code.length == 0 ? "123" : code // condição para escrever "123" caso o tamanho seja 0
  }
  ```

- [ ] Obtendo e exibindo o número do cartão.

  ```javascript
  cardNumberMasked.on("accept", () => {
    const cardType = cardNumberMasked.masked.currentMask.cardtype
    setCardType(cardType)

    const ccNumber = document.querySelector(".cc-number")
    ccNumber.innerText =
      cardNumber.value.length === 0 ? "1234 5678 9012 3456" : cardNumber.value
  })
  ```

- [ ] Obtendo e exibindo a data do cartão.

  ```javascript
  expirationDateMasked.on("accept", () => {
    updateExpirationDate(expirationDateMasked.value)
  })

  function updateExpirationDate(date) {
    const ccExpiration = document.querySelector(".cc-expiration .value")
    ccExpiration.innerText = date.length === 0 ? "02/32" : date
  }
  ```

## Publicando o projeto
