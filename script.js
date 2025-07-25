document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("terminal-text");
  const terminal = document.querySelector(".terminal-content");

  function typeWriter(text, i, callback) {
    if (i < text.length) {
      textElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(() => typeWriter(text, i, callback), 10);
    } else if (callback) {
      callback();
    }
  }

  function initTyping() {
    const text = textElement.innerText;
    textElement.innerText = "";
    typeWriter(text, 0, null);
  }

  function handleDarkModeToggle(e) {
    if (e.key === 'd') {
      document.body.classList.toggle("dark-mode");
    }
  }

  function handleEmailCopy() {
    const email = "shaurya.rawat36@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copied to clipboard: " + email);
    });
  }

  initTyping();
  document.addEventListener("keydown", handleDarkModeToggle);
  terminal.addEventListener("dblclick", handleEmailCopy);
});
