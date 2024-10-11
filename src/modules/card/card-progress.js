export function cardProgress({ loyaltyCard }) {
    const progressRemaining = document.querySelector(".progress-text p")
    const progressBar = document.querySelector("progress")
    const progressBarSpan = document.querySelector(".progress-bar span")

    progressRemaining.innerHTML = ""
    progressBar.innerHTML = ""
    progressBarSpan.innerHTML = ""

    const { totalCuts, cutsNeeded, cutsRemaining } = loyaltyCard

    progressRemaining.innerHTML = `<strong>${cutsRemaining}</strong> ${cutsRemaining <= 1 ? "corte restante" : "cortes restantes"}`

    progressBarSpan.textContent = `${totalCuts} de ${cutsNeeded}`
    progressBar.max = cutsNeeded
    progressBar.value = totalCuts

}