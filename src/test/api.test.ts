import * as chai from 'chai';
import * as supertest from 'supertest';
import api from '../api';
import {Response} from 'superagent';


const expect = chai.expect;


suite('ExampleEndPoint', () => {
  test('returns hello world', async() => {
    await supertest(api).get('/examples/hello').expect((res: Response) => {
      expect(JSON.parse(res.text).message).to.equal('hello world');
    });
  });
});
