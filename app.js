// global variable used in window.onscroll function
var addwrt = false;
var nav = false;

window.onscroll = function() {
  const navbar = document.getElementById("navbar");
  const navbar1 = document.getElementById("navbar1");
  const writing = document.getElementById("writing");
  let child;
  if (
    document.documentElement.scrollTop > 50 &&
    document.documentElement.scrollTop < 100
  ) {
    navbar.className = "BG-col TR-dur wh-col ";
    if (nav === true) {
      nav = false;
      navbar1.className = "nav1-anim-cl";
      setTimeout(function() {
        navbar1.className = "d-none";
      }, 400);
    }

    if (addwrt === false) {
      child = document.createElement("span");
      child.innerHTML = " : NEW YORK";
      child.className = "p-5 ft-5 ";
      writing.appendChild(child);
      addwrt = true;
    }
  } else if (document.documentElement.scrollTop > 200) {
    navbar.className = "BG-col TR-dur wh-col ";
    navbar1.className = "d-flex nav1-anim-op BG-col wh-col ";
    nav = true;
    if (addwrt === false) {
      child = document.createElement("span");
      child.innerHTML = " : NEW YORK";
      child.className = "p-5 ft-5 ";
      writing.appendChild(child);
      addwrt = true;
    }
  } else if (document.documentElement.scrollTop < 50) {
    navbar.className = "BG-ncol TR-dur wh-col ";

    writing.innerHTML = "DATA USA";
    addwrt = false;
    if (document.documentElement.scrollTop < 25) {
      navbar1.className = "d-none";
    }
  }
};
