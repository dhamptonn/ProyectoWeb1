function abrirTab(evt, tabId) {
  const contenidos = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < contenidos.length; i++) {
      contenidos[i].style.display = "none";
  }

  const botones = document.getElementsByClassName("tablink");
  for (let i = 0; i < botones.length; i++) {
      botones[i].classList.remove("active");
  }

  document.getElementById(tabId).style.display = "block";
  evt.currentTarget.classList.add("active");
}