export const CheckoutComponent = () => {
  //   console.log("Hello from the checkout component");
  const checkoutCardComponent = document.querySelector(
    ".checkout-card-component"
  );
  const confirmButton = document.querySelector(".btn-primary");
  const cancelButton = document.querySelector(".btn-secondary");

  let isLoading = false;

  confirmButton.addEventListener("click", () => {
    if (isLoading) {
      alert("The payment is already processing");
      return;
    }
    confirmButton.setAttribute("data-loading", "1");
    isLoading = true;
    confirmButton.setAttribute("disabled", "disabled");
    cancelButton.setAttribute("disabled", "disabled");
  });

  cancelButton.addEventListener("click", () => {
    if (isLoading) {
      alert("The payment is already processing");
      return;
    }
    cancelButton.setAttribute("data-loading", "1");
    isLoading = true;
    cancelButton.setAttribute("disabled", "disabled");
    confirmButton.setAttribute("disabled", "disabled");
  });
};
