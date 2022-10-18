import Validator from "../Validator";

it('密碼至少 4 個字符', () => {
  expect(Validator.isPassword('abc')).toBe(false);
  expect(Validator.isPassword('abcd')).toBe(true);
});
