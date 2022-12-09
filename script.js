function about() {
    var hide = document.getElementById("about")
    if (hide.style.display === "block"){
        hide.style.display = "none"
    }else {
        hide.style.display = "block";
    }
}
function cv() {
    var hide = document.getElementById("cv")
    if (hide.style.display === "block"){
        hide.style.display = "none"
    }else {
        hide.style.display = "block";
    }
}

function contact() {
    var hide = document.getElementById("contact")
    if (hide.style.display === "block"){
        hide.style.display = "none"
    }else {
        hide.style.display = "block";
    }
}

function getSaran() {
    var ambil = document.getElementById("saran").value;
    // document.getElementById("saran").innerHTML = ambil;
    alert("Terimakasih Atas Sarannya")
}