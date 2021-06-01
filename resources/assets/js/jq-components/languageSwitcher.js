import $ from "jquery"

$(() => {
    const languageSwitchers = document.querySelectorAll(".language-switcher")
    const switchersArray = Array.from(languageSwitchers)
    
    if (switchersArray.length) {
        switchersArray.forEach((switcher) => {
            if (switcher.dataset.language === "pl") {
                const url = window.location.href
                const newUrl = url.replace(/en\//g, "")
    
                switcher.addEventListener("click", () => {
                    window.location.replace(newUrl)
                })
            } else {
                const url = window.location.href
                const arrayOfUrl = url.split("/")

                const domainIndex = arrayOfUrl.findIndex(
                    (item) => item === window.location.host
                )

                arrayOfUrl.splice(domainIndex + 1, 0, "en")
                const newUrl = arrayOfUrl.join("/")
    
                switcher.addEventListener("click", () => {
                    window.location.replace(newUrl)
                })
            }
        })
    }
})
