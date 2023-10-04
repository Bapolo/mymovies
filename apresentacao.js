document.addEventListener("DOMContentLoaded", () =>
{
    
    const iframe = document.querySelector("#iframe")
    const titulo = document.querySelector("#titulo")

    iframe.src =  localStorage.getItem("srcDOIframe")
    titulo.innerHTML = localStorage.getItem("titleMovie")
       
  
})