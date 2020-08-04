const input = document.querySelector('.app__left__forum__input');

const button = document.querySelector('.app__left__form__button');

const sendSubmit = (e) => {

    const input = document.querySelector('.app__left__forum__input');
    const warning = document.querySelector('.app__left__form__warning--none');
    const message = document.querySelector('.app__left__form__message--none');

    if (input.value.indexOf('@') === -1) {
        e.preventDefault();
        warning.classList.add('--active');
        message.classList.add('--active');
        return false;
    }
    else {
        return true;
    }



}