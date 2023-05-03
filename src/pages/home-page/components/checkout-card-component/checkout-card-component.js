export const CheckoutComponent = () => {
  //   console.log("Hello from the checkout component");
  const checkoutCardComponent = document.querySelector(
    ".checkout-card-component"
  );
  const confirmButton = document.querySelector(".btn-primary");
  const cancelButton = document.querySelector(".btn-secondary");

  confirmButton.addEventListener("click", () => {
    confirmButton.setAttribute("data-loading", "1");
    confirmButton.setAttribute("disabled", "disabled");
    cancelButton.setAttribute("disabled", "disabled");
  });

  cancelButton.addEventListener("click", () => {
    cancelButton.setAttribute("data-loading", "1");
    cancelButton.setAttribute("disabled", "disabled");
    confirmButton.setAttribute("disabled", "disabled");
  });
};
