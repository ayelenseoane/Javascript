$("#theme").on("click", () => {
  if (localStorage.getItem("theme") == "dark") {
    light();
  } else {
    dark();
  }
});

const dark = () => {
  $("body").css("background-color", "black");
  localStorage.setItem("theme", "dark");
};

const light = () => {
  $("body").css("background-color", "white");
  localStorage.setItem("theme", "light");
};
