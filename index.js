const modal = document.getElementById("myModal");
const btnClose = document.getElementsByClassName("close")[0];
const btns = document.querySelectorAll(".js-modal");

class Modal {
  constructor(modal, btnClose, btns) {
    this.modal = modal;
    this.btnClose = btnClose;
    this.btns = btns;
  }

  closeBtn() {
    this.btnClose.addEventListener("click", () => {
      this.modal.style.display = "none";
    });
  }

  closeWindow() {
    window.addEventListener("click", (e) => {
      if (e.target == this.modal) {
        this.modal.style.display = "none";
      }
    });
  }

  openModal(modal) {
    this.btns.forEach((element) => {
        element.addEventListener("click", function (e) {
          e.preventDefault();
          if (e.target) {
            modal.style.display = "block";
          }
        });
      });
  }
}
const modalActive = new Modal(modal, btnClose, btns);
modalActive.closeBtn();
modalActive.closeWindow();
modalActive.openModal(modal);