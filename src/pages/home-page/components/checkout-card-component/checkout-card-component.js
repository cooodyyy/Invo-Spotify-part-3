export const CheckoutComponent = () => {
  const buttons = document.querySelectorAll("button");
  const buttonsSection = document.querySelector(".section-btns");
  let isLoading = false;

  const startLoading = function (e) {
    const clicked = e.target.closest("button");
    if (clicked.hasAttribute("disabled")) return;
    if (isLoading) {
      alert("The payment is already processing");
      return;
    }
    clicked.setAttribute("data-loading", "1");
    isLoading = true;
    buttons.forEach((btn) => btn.setAttribute("disabled", "disabled"));
  };

  buttonsSection.addEventListener("click", startLoading);
};
