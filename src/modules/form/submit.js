import { api } from '../../services/api-config.js'
import { toastError, toastSucess } from '../../utils/toast.js'
import { cardHistory } from '../card/card-history.js'

import { cardShowUser } from '../card/card-info.js'
import { cardLoyalty } from '../card/card-loyalty.js'
import { cardProgress } from '../card/card-progress.js'

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
        cardHistory({historys: data.appointmentHistory})
        cardLoyalty({id: data.id, loyaltyCard: data.loyaltyCard })
        cardProgress({ loyaltyCard: data.loyaltyCard })

        if (data.loyaltyCard.totalCuts === 10) {
            toastSucess("Parabéns! Seu próximo corte é gratuito!")
        }

        welcomeSection.style.display = 'none'
        mainContent.style.display = 'grid'
        idCard.value = ""
        toastSucess("Sucesso ao trazer os dados!")
    } catch (error) {
        console.log(`Error: ${error}`)
        if (error.response && error.response.status === 404) {
            toastError("Id Inexistente. Tente Novamente!")
        } else {
            toastError("Erro ao trazer as informações do usuário")
        }
    }
})