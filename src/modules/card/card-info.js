import { toastError } from "../../utils/toast.js"

const userName = document.getElementById("user-name")
const userAvatar = document.getElementById("user-avatar")
const userData = document.getElementById("user-data")

export function cardShowUser({ user }) {
    try {
        userAvatar.innerHTML = ""        
        userName.innerHTML = ""
        userData.innerHTML = ""

        userName.textContent = user.name
        userAvatar.setAttribute("src", user.avatar)
        userData.textContent = `Cliente desde ${user.clientSince}`
    } catch (error) {
        console.log(`Error: ${error}`)
        toastError("Erro ao exibir o nome e data do cliente!")
    }
}