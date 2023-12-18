const jarifapi = require('jarif-api');

async function test() {
  try {
    const pgen = await jarifapi.promptgen('cat');
   console.log(pgen);
  } catch (error) {
    console.error(error);
  }
}
test()