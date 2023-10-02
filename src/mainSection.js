const container = document.querySelector(".container");
import aboutUs from "./img/About-us.jpg";
import drink from "./img/liquor.jpg";
import events from "./img/Events.jpg";
import background from "./img/background.jpg";
export default function createSection() {
  const mainSection = document.createElement("section");
  const image1 = document.createElement("div");
  const image2 = document.createElement("div");
  const image3 = document.createElement("div");
  const image4 = document.createElement("div");

  mainSection.classList.add("main", "grid");
  image1.classList.add("image1");
  image2.classList.add("image2");
  image3.classList.add("image3");
  image4.classList.add("image4");

  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const img3 = document.createElement("img");
  const img4 = document.createElement("img");

  img1.src = aboutUs;
  img2.src = drink;
  img3.src = events;
  img4.src = background;

  container.appendChild(mainSection);
  // mainSection.appendChild(image1);
  // mainSection.appendChild(image2);
  // mainSection.appendChild(image3);
  // mainSection.appendChild(image4);

  image1.appendChild(img1);
  image2.appendChild(img2);
  image3.appendChild(img3);
  image4.appendChild(img4);
}
