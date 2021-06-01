import $ from 'jquery'

$(() => {
    /* Single lokale page - go back to list link update */
    const goBackButton = document.querySelector('.goBack')

    if (goBackButton) {
        const lastUrl = document.referrer
        const body = document.querySelector('body')
        const origin = window.location.origin
        let text
        let href

        if (lastUrl.includes('v3.jeff.resimo.pl')) {
            if (body.classList.contains('translatepress-pl_PL')) {
                href = `${origin}/#wyszukiwarka3d`
                text = 'Wróć do wyszukiwarki 3D'
            } else {
                href = `${origin}/en/#wyszukiwarka3d`
                text = 'Back to 3D app'
            }
        } else if (lastUrl.includes('inwestycja')) {
            href = `${lastUrl}#lista-mieszkan`

            if (body.classList.contains('translatepress-pl_PL')) {
                text = 'Wróć do listy'
            } else {
                text = 'Go back to list'
            }
        } else {
            if (body.classList.contains('translatepress-pl_PL')) {
                href = `${origin}/znajdz-lokal`
                text = 'Wróć do listy'
            } else {
                href = `${origin}/en/znajdz-lokal`
                text = 'Go back to list'
            }
        }

        goBackButton.href = href
        goBackButton.innerText = text
    }
})
