
const historyList = document.querySelector(".history-list ul")
const historyLength = document.querySelector(".history-header span")

export function cardHistory({historys}) {
    try {
        historyList.innerHTML = ""
        historyLength.innerHTML = ""

        historyLength.innerHTML = `${historys.length}${historys.length > 1 ? " cortes" : " corte"}`
        historys.forEach((history) => {

        const historyItem = document.createElement("li")
        historyItem.classList.add("history-card")

        const historyTime = document.createElement("div")
        historyTime.classList.add("time")

        const historyTimeData = document.createElement("p")
        const historyTimeHour = document.createElement("span")

        const historyCheck = document.createElement("div")
        historyCheck.classList.add("list-check")

        const historyCheckImage = document.createElement("img")
        historyCheckImage.setAttribute("src", "./src/assets/icons/pin-check.svg")
        historyCheckImage.setAttribute("alt", "Check de corte")

            historyTimeData.textContent = history.date
            historyTimeHour.textContent = history.time
            historyTime.append(historyTimeData,historyTimeHour)

            historyCheck.append(historyCheckImage)

            historyItem.append(historyTime,historyCheck)

            historyList.append(historyItem)
        });
    } catch (error) {
        console.log(`Error: ${error}`)
        toastError("Erro ao exibir o histórico do cliente!")
    }
}