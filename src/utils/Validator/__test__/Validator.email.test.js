import Validator from "../Validator";

it('email 地址應該包含 @ 符號', () => {
  expect(Validator.isEmailAddress('joe_xxx.com')).toBe(false);
  expect(Validator.isEmailAddress('joe@xxx.com')).toBe(true);
});
