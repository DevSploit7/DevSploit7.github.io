document.addEventListener("DOMContentLoaded", () => {
  // Example: Dark mode toggle with keypress 'd'
  document.addEventListener("keydown", (e) => {
    if (e.key === 'd') {
      document.body.classList.toggle("dark-mode");
    }
  });

  // Example: Copy email to clipboard on double-click
  const terminal = document.querySelector(".terminal-content");
  terminal.addEventListener("dblclick", () => {
    const email = "0xshaura@protonmail.com";
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copied to clipboard: " + email);
    });
  });
});
