document.querySelector(".dogimage").addEventListener("click", function(event) {
    const files = document.querySelector(".ownerpic").files
    const formData = new FormData()
    formData.append("dogpictures", files[0])
    fetch("http://localhost:8080/api/assets/upload", {
        method: "POST",
        body: formData
    })
})