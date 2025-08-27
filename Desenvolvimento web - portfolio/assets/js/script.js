// Atualiza o ano no rodapé (todas as páginas)
const spanAno = document.getElementById("ano-atual");
if (spanAno) spanAno.textContent = new Date().getFullYear();

// Menu mobile: alterna exibição e anima o botão (hambúrguer -> X)
const botaoMenu = document.getElementById("botao-menu");
const menuLinks = document.getElementById("menu-links");
if (botaoMenu && menuLinks) {
  botaoMenu.addEventListener("click", () => {
    const aberto = menuLinks.classList.toggle("ativo");
    botaoMenu.classList.toggle("aberto", aberto);
    botaoMenu.setAttribute("aria-expanded", aberto ? "true" : "false");
  });
}

// Botão enviar do formulário (visual) — só existe em contato.html
const botaoEnviar = document.getElementById("botao-enviar");
if (botaoEnviar) {
  botaoEnviar.addEventListener("click", () => {
    alert("Este formulário é apenas visual!");
  });
}

// Toggle tema claro/escuro com persistência (todas as páginas)
const botaoTema = document.getElementById("botao-tema");
const corpo = document.body;

// Aplica preferência salva ao carregar
if (localStorage.getItem("tema") === "claro") {
  corpo.classList.add("modo-claro");
  if (botaoTema) botaoTema.textContent = "☀️";
}

if (botaoTema) {
  botaoTema.addEventListener("click", () => {
    corpo.classList.toggle("modo-claro");
    if (corpo.classList.contains("modo-claro")) {
      botaoTema.textContent = "☀️";
      localStorage.setItem("tema", "claro");
    } else {
      botaoTema.textContent = "🌙";
      localStorage.setItem("tema", "escuro");
    }
  });
}
