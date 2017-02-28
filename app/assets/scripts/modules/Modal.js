import $ from 'jquery';


class Modal {
    constructor() {
        this.openModalButton = $('.open-modal');
        this.Modal = $(".modal");
        this.closeModalButton = $(".modal__close");
        this.events();
    }

    events() {
        //click open modal openModalButton
        this.openModalButton.click(this.openModal.bind(this));
        //click X closeModal
        this.closeModalButton.click(this.closeModal.bind(this));
        //pushes any key
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e) {
        if (e.keyCode == 27) {
            this.closeModal();
        }
    }

    openModal() {
        this.Modal.addClass("modal--is-visible");
        return false;
    }

    closeModal() {
        this.Modal.removeClass("modal--is-visible");
        return false;
    }


}

export default Modal;