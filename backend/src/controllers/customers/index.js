import { add } from '../customers/add/index.js';
import { edit } from '../customers/edit/index.js';
import { get } from '../customers/get/index.js';
import { del } from '../customers/del/index.js';

const customers = {
  get,
  add,
  edit,
  del,
};

export default customers;
