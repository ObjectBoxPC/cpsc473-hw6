import FormHandler from './formhandler';

const FORM_SELECTOR = '[data-coffee-order="form"]';
let fh = new FormHandler(FORM_SELECTOR);
fh.addSubmitHandler((data) => console.log(data));