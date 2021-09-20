const URLGET = "https://jsonplaceholder.typicode.com/posts";

$("#sus").click(() => {
  let emailDato = document.getElementById("Email").value
  const infoPost = { email: `${emailDato}` };
  $.post(URLGET, infoPost, (respuesta, estado) => {
    if (estado === "success") {
      console.log(emailDato)
      $("body").prepend(`<div>
Email Guardado: ${respuesta.email}
</div>`);
    }
  });
});
