/* Native disclosure menus remain usable without JavaScript. */
(() => {
  const menu = document.querySelector(".site-menu");
  if (!menu) return;
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && menu.open) {
      menu.open = false;
      menu.querySelector("summary").focus();
    }
  });
  document.addEventListener("click", event => {
    if (menu.open && !menu.contains(event.target)) menu.open = false;
  });
  menu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => { menu.open = false; }));
})();
