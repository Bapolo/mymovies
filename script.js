document.addEventListener("DOMContentLoaded", () =>
{
    const linkDoJogo = document.getElementsByClassName("linkDosFilmes") 
    let srcDoIframe
    let titleMovie

  
    Array.from(linkDoJogo).forEach((link) =>
    {
        link.addEventListener("click", () =>
        {
            localStorage.setItem("srcDOIframe", link.dataset.src)
            localStorage.setItem("titleMovie", link.dataset.title)
        })
    })
})