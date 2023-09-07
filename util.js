const blur = document.getElementById("blur");

document.getElementById("conteudo").addEventListener("click", () => {
    blur.style.display = "flex";
})

document.getElementById("cancelar").addEventListener("click", () => {
    blur.style.display = "none";
});
