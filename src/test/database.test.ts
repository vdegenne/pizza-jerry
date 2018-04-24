import database from '../database';


// after all
after(done => {database.destroy(done)});


suite('Database', () => {

  test('gives us a decent connection', async() => {
    try {
      return database.raw('select 1+1 as result');
    } catch (err) {
      throw new Error('brooo');
    }
  });
});
