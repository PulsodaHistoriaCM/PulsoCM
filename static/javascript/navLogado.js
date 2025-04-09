/*
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");

  const estaLogado = localStorage.getItem("usuarioLogado") === "true";

  if (estaLogado) {
    header.innerHTML = `
      <nav>
        <ul>
          <li><a href="src/pages/home.html">Home</a></li>
          <li><a href="src/pages/perfil.html">Perfil</a></li>
          <li><a href="#" onclick="logout()">Sair</a></li>
        </ul>
      </nav>
    `;
  } else {
    header.innerHTML = `
      <nav>
        <ul>
          <li><a href="src/pages/home.html">Home</a></li>
          <li><a href="src/pages/login.html">Entrar</a></li>
          <li><a href="src/pages/create-account.html">Cadastrar</a></li>
        </ul>
      </nav>
    `;
  }
});

function logout() {
  localStorage.setItem("usuarioLogado", "false");
  window.location.href = "src/pages/login.html";
}

*/