function changeLanguage(lang) {
    if (lang === 'pt') {
      document.getElementById("title").innerText = "Olá, Mundo!";
      document.getElementById("description").innerText = "Esta é uma página simples.";
    } else if (lang === 'en') {
      document.getElementById("title").innerText = "Hello, World!";
      document.getElementById("description").innerText = "This is a simple page.";
    }
  }
  