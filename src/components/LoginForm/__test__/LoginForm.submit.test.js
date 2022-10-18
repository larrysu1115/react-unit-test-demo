import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "../LoginForm";
import { getJoke } from '../../../api/JokeApi'

jest.setTimeout(30000);  // 如果要慢慢看測試過程，再打開 timeout

jest.mock("../../../api/JokeApi");

test("提交成功，獲得笑話一則", async () => {
  const fakeResp = { setup: "五減二等於", punchline: "OK" };

  getJoke.mockResolvedValueOnce(fakeResp); // axios.get(.) 將返回 fakeResp 物件 


  render(<LoginForm />);
  const user = userEvent.setup();

  const inputEmail = screen.getByRole("textbox", {name: "Email address"});
  await user.type(inputEmail, "abc@xxx.com");

  const inputPassword = screen.getByTestId("myPassword");
  await user.type(inputPassword, "12345");

  const submitButton = screen.getByRole("button");
  await user.click(submitButton);

  expect(screen.getByText("提交資料成功")).toBeInTheDocument();
  expect(screen.getByText("獲得笑話: 五減二等於 ? OK !!!")).toBeInTheDocument();
});
