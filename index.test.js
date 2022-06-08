const sum = require ('./index.js');

test('sum of 1 + 2 returns 3',()=>{
   expect(sum(1,2)).toBe(3);
});
