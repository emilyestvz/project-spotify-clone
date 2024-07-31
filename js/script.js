document
  .getElementById("alertButton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    Swal.fire({
      title: "Olá! É um prazer ter você conosco",
      text: "Para iniciarmos, escreve seu melhor email para inscrição.",
      icon: "question",
      input: "email",
      inputPlaceholder: "exemplo@exemplo.com",
      confirmButtonText: "OK",
    });
  });
