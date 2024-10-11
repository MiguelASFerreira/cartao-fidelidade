import { toastError } from "../../utils/toast"

export function cardLoyalty({ id, loyaltyCard }) {
    try {
            const cardID = document.querySelector("#card .card-info .card-id p")
            
            const cardPoints = document.querySelector(".card-points ul")

            cardID.innerHTML = ""
            cardPoints.innerHTML = ""
            cardID.classList.add("card-id")
            cardID.innerHTML = `ID: ${id}`


            const { totalCuts, cutsNeeded } = loyaltyCard

            for (let i = 1; i <= cutsNeeded; i++) {
                const pointItem = document.createElement("li")
                pointItem.classList.add("item-check")

                if (i === cutsNeeded && totalCuts === cutsNeeded) {
                    const giftImage = document.createElement("img")
                    giftImage.setAttribute("src", "./src/assets/icons/pin-gift.svg")
                    giftImage.setAttribute("alt", "Pin do presente")
                    pointItem.appendChild(giftImage)
                } else if (i <= totalCuts) {
                    const pointImage = document.createElement("img")
                    pointImage.setAttribute("src", "./src/assets/images/pin-check.png")
                    pointImage.setAttribute("alt", "Ponto acumulado")
                    pointItem.appendChild(pointImage)
                } else if (i === cutsNeeded) {
                    const giftImage = document.createElement("img")
                    giftImage.setAttribute("src", "./src/assets/icons/gift-default.svg")
                    giftImage.setAttribute("alt", "Presente em espera")
                    pointItem.appendChild(giftImage)
                }

                cardPoints.appendChild(pointItem)
            }
    } catch (error) {
        console.log(`Error: ${error}`)
        toastError("Erro ao exibir o cartão de fidelidade!")
    }
}
