import {Cream} from './objection-cream';


class Pizza extends Cream {
  id !: number;
  name !: string;
  toppings !: string;

  static tableName = 'pizzas';
}



export default Pizza;
