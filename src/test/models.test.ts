import * as chai from 'chai';
import Pizza from '../models/Pizza';

const expect = chai.expect;

suite('Pizza Model', () => {
  test('it contains one initial element', async() => {
    expect(await Pizza.count()).to.equal(1);
  });
});
