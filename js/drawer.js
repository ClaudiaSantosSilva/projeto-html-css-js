let buttonOpenDrawer = document.getElementById("button-open-drawer");

let drawer = document.querySelector("#drawer-links");
buttonOpenDrawer.addEventListener("click", () => {
  if (drawer.style.left === "0px") {
    drawer.style.left = "-256px";
  } else {
    drawer.style.left = "0px";
  }
});
