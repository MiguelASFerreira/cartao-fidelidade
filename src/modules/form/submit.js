import { api } from '../../services/api-config.js'
import { toastError, toastSucess } from '../../utils/toast.js'

import { cardShowUser } from '../card/card-info.js'

const form = document.querySelector("form")
const idCard = document.getElementById("id-card")

const mainContent = document.querySelector("main")
const welcomeSection = document.getElementById("welcome")

form.addEventListener("submit", async (event) => {
    event.preventDefault()

    try {
        const id = idCard.value
        
        if (!id) {
            return toastError("Informe o id do cliente!")
        }

        const { data } = await api.get(`/clients/${id}`)

        cardShowUser({ user: data})

        welcomeSection.style.display = 'none'
        mainContent.style.display = 'grid'
        toastSucess("Sucesso ao trazer os dados!")
    } catch (error) {
        console.log(`Error: ${error}`)
        toastError("Erro ao trazer as informações do usuário")
    }
})