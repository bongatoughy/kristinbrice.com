const main = () => {
  document.fonts.onloadingdone = () => {
    const logo = document.querySelector(".logo h1");
    const content = document.querySelector(".content");
    const button = document.querySelector(".button");

    logo.style.opacity = "1";
    setTimeout(() => {
      logo.style.transform = "scale(1.5)";
    }, 0);
    setTimeout(() => {
      content.style.opacity = "1";
      button.style.opacity = "1";
    }, 500);
  };
};

main();