let url = "https://script.google.com/macros/s/AKfycbyM1WmYBn4FYgPcPl9kkV1py1JnG529xgm_7el47KaiBKeP-kevbIXRNBJ7c_F9NqJp/exec"
let email = document.getElementById("newsLetter")
let submitButton = document.getElementById("sumbitButton")
let popupText = document.getElementById("popup-text")
let closeButton = document.getElementById("close-button")
let popup = document.getElementById("popup")


async function sendNewsLetter(e) {
    closeButton.style.display="none"
    popup.style.display = "flex"
    popupText.style.color = "6487B2"
    popupText.innerHTML = "Loading..."

    let body = new FormData()
    body.append("email", email.value)

    try {
        let data = await fetch(url, { method: "POST", body })
        if (data && data.status && data.status == 200) {
            popupText.style.color = "6487B2"
            popupText.innerHTML = "Submitted Successfully"
            closeButton.style.display="block"
            closeButton.style.opacity = 1
            closeButton.style.cursor = "pointer"
        } else {
            popupText.style.color = "red"
            popupText.innerHTML = "Unsuccessful"
            closeButton.style.display="block"
            closeButton.style.opacity = 1
            closeButton.style.cursor = "pointer"
        }
    } catch (error) {
        popupText.style.color = "red"
        popupText.innerHTML = "Unsuccessful"
        closeButton.style.display="block"
        closeButton.style.opacity = 1
        closeButton.style.cursor = "pointer"
    }
}
closeButton.addEventListener("click", () => {
    popup.style.display = "none"
})