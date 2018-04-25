import * as chai from 'chai';
import * as supertest from 'supertest';
import api from '../api';
import {Response} from 'superagent';


const expect = chai.expect;


suite('Customer', () => {
  test('returns a customer with a favorite pizza', async() => {
    await supertest(api).get('/customers/1').expect((res: Response) => {
      expect(JSON.parse(res.text).favoritePizza.name).to.equal('jerrycheese');
    });
  });
});
