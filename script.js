// Smooth scrolling para links de navegação
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Formulário de contato
document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Simular envio do formulário
  const button = this.querySelector(".btn-form");
  const originalText = button.textContent;

  button.textContent = "Enviando...";
  button.disabled = true;

  setTimeout(() => {
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    this.reset();
    button.textContent = originalText;
    button.disabled = false;
  }, 2000);
});

// Animação de entrada para elementos quando entram na viewport
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Aplicar animação aos cards
document
  .querySelectorAll(".service-card, .testimonial-card")
  .forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });

// Menu mobile (funcionalidade básica)
document.querySelector(".mobile-menu-btn").addEventListener("click", () => {
  const nav = document.querySelector(".nav");
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
    nav.style.flexDirection = "column";
    nav.style.position = "absolute";
    nav.style.top = "100%";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.background = "rgba(254, 243, 199, 0.95)";
    nav.style.padding = "1rem";
    nav.style.borderTop = "1px solid #f3e8ff";
  }
});

// Fechar menu mobile ao clicar em um link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const nav = document.querySelector(".nav");
    if (window.innerWidth < 768) {
      nav.style.display = "none";
    }
  });
});

// Ajustar menu mobile no resize
window.addEventListener("resize", () => {
  const nav = document.querySelector(".nav");
  if (window.innerWidth >= 768) {
    nav.style.display = "flex";
    nav.style.flexDirection = "row";
    nav.style.position = "static";
    nav.style.background = "transparent";
    nav.style.padding = "0";
    nav.style.border = "none";
  } else {
    nav.style.display = "none";
  }
});
