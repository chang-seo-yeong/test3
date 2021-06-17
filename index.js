let render = (slide_idx) => {
  const img = document.createElement("img");
  img.setAttribute("src", `./img/${slide_idx}page.jpg`);
  img.setAttribute("id", "slide-image");
  document.getElementById("slide-image").replaceWith(img);
};

slide_idx = 1;

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("button.left-button").addEventListener("click", () => {
    if (slide_idx != 1) slide_idx--;
    render(slide_idx);
  });

  document
    .querySelector("button.right-button")
    .addEventListener("click", () => {
      if (slide_idx !=11) slide_idx++;
      render(slide_idx);
    });

  document
    .querySelector("div.slide-image-container")
    .addEventListener("click", () => {
      if (slide_idx !=11) slide_idx++;
      render(slide_idx);
    });
});
