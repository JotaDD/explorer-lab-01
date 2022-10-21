import "./css/index.css"
import IMask from "imask"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path") // Essa funcionalidade que serve para selecionar um elemento HTML como CSS
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")

const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardType(type) {
  const colors = {
    visa: ["#436D99", "#2D57F2"],
    mastercard: ["#DF6F29", "#C69347"],
    amex: ["#0077A6", "#9E9E9E"],
    default: ["black", "gray"],
  }

  // const logo = {
  //   visa: "/cc-visa.svg",
  //   mastercard: "/cc-mastercard.svg",
  //   default: "/cc-chip.svg",
  // }

  ccBgColor01.setAttribute("fill", colors[type][0])
  ccBgColor02.setAttribute("fill", colors[type][1])
  ccLogo.setAttribute("src", `cc-${type}.svg`)
}
setCardType("default")

globalThis.setCardType = setCardType // colocando no globalThis

// Security Code
const securityCode = document.querySelector("#security-code")
const securityCodePattern = {
  mask: "0000",
}
const securityCodeMasked = IMask(securityCode, securityCodePattern)

// Expiration Date
const expirationDate = document.querySelector("#expiration-date")
const expirationDatePattern = {
  mask: "MM{/}YY",
  blocks: {
    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2),
    },
    MM: { mask: IMask.MaskedRange, from: 1, to: 12 },
  },
}
const expirationDateMasked = IMask(expirationDate, expirationDatePattern)

// Card Number
const cardNumber = document.querySelector("#card-number")
const cardNumberPattern = {
  mask: [
    {
      mask: "0000 0000 0000 0000",
      regex: /^(5[1-5]d{0,2}|22[2-9]d{0,1}|2[3-7]d{0,2})d{0,12}/,
      cardtype: "mastercard",
    },
    {
      mask: "0000 0000 0000 0000",
      regex: /^4\d{0,15}/,
      cardtype: "visa",
    },
    {
      mask: "0000 0000 0000 0000",
      cardtype: "default",
    },
  ],
  dispatch: function (appended, dynamicMasked) {
    const number = (dynamicMasked.value + appended).replace(/\D/g, "")
    const foundMask = dynamicMasked.compiledMasks.find(function (item) {
      // dynamicMasked.compiledMasks.find(({regex}) => number.match(regex))

      return number.match(item.regex)
    })
    // console.clear()
    // console.log(foundMask) // validando o foundMask

    return foundMask
  },
}

const cardNumberMasked = IMask(cardNumber, cardNumberPattern)
const foundCardType = cardNumberPattern.mask.map((item) => item.cardtype)
