const onLoad = require("../scripts/onLoad");
const unmock = require("unmock-node").unmock;

beforeEach(
  async () =>
    await unmock({
      whitelist: ["accounts.spotify.com"]
    })
);

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

/*
test("Token must be defined", async () => {
  const token = await onLoad();
  console.log(token);
  expect(token).toBeDefined();
});

test("Token cannot be empty", async () => {
  const token = await onLoad();
  expect(token).not.toEqual("");
});
*/
