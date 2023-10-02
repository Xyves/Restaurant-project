const container = document.querySelector(".container");
import Logo from "./img/Jenos_logo.png";
export default function generateAside() {
  const aside = document.createElement("aside");
  aside.classList.add("w-1/5", "min-h-full", "text-center");
  container.appendChild(aside);

  function createNav() {
    aside
      .appendChild(document.createElement("div"))
      .classList.add("logo", "border-solid", "border-4", "h-75");
    const Logo = new Image();

    const navBar = document.createElement("nav");
    const ul = document.createElement("ul");
    const home = document.createElement("li");
    const about = document.createElement("li");
    const menu = document.createElement("li");
    const gallery = document.createElement("li");

    navBar.classList.add(
      "flex",
      "flex-col",
      "h-1/3",
      "mt-15",
      "align-center",
      "text-4xl"
    );
    home.classList.add(
      "home",
      "mb-4",
      "border-b-2",
      "border-blue-900",
      "inline-block",
      "p-3",
      "border-stone-50"
    );
    about.classList.add("about", "mb-4");
    menu.classList.add("menu", "mb-4");
    gallery.classList.add("gallery");

    about.textContent = "about";
    menu.textContent = "menu";
    gallery.textContent = "gallery";
    home.textContent = "home";

    aside.appendChild(navBar);
    navBar.appendChild(ul);
    ul.appendChild(home);
    ul.appendChild(about);
    ul.appendChild(menu);
    ul.appendChild(gallery);

    const newsletter = document.createElement("div");
    const icons = document.createElement("div");
    const copyright = document.createElement("div");

    newsletter.classList.add("newsletter");
    icons.classList.add("icons");
    copyright.classList.add("copyright");
    newsletter.textContent = "newsletter";
    icons.textContent = "icons";
    copyright.textContent = "copyright";
    aside.append(newsletter, icons, copyright);
  }

  createNav();
}
