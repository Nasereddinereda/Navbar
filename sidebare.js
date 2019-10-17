// Sidebar

function openSlideMenu() {
  const menu = document.getElementById("menu");
  const side = document.getElementById("af");
  side.className = "d-block afterside ";
  document.body.style.overflow = "hidden";
  menu.className = "nav d-flex f-col sd-anim-op ";

  if (document.documentElement.scrollTop > 50) {
    const navbar = document.getElementById("navbar");
    navbar.className = "BG-dark TR-dur wh-col index ";
  }
}

function closeSlideMenu() {
  const side = document.getElementById("af");
  side.className = "d-none afterside";
  var menu = document.getElementById("menu");
  menu.className = "nav  sd-anim-cl";
  document.body.style.overflow = "";
  if (document.documentElement.scrollTop > 50) {
    const navbar = document.getElementById("navbar");
    navbar.className = "BG-col TR-dur wh-col ";
  }
  setTimeout(function() {
    menu.className = "d-none";
  }, 1000);
}
