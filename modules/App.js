import { Tools} from "./Tools.js";
import { Dessin } from "./Dessin.js";
import { Form } from './Form.js';

export class App {

    constructor() {
        //On charge le canvas
     this.dessin = new Dessin();
     this.form = new Form();
     this.tools = new Tools(this.dessin);


    }
}