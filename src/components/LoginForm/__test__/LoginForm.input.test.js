import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "../LoginForm";

jest.setTimeout(30000);  // 如果要慢慢看測試過程，再打開 timeout

test("輸入錯誤 email 顯示警告", async () => {
  render(<LoginForm />);
  const user = userEvent.setup();

  const inputEmail = screen.getByRole("textbox", {name: "Email address"});
  await user.type(inputEmail, "abc");

  const submitButton = screen.getByRole("button");
  await user.click(submitButton);

  expect(screen.getByText("email必須包含@符號 !")).toBeInTheDocument();
});

test("輸入錯誤 密碼 顯示警告", async () => {
  // todo : 練習測試不到 4 位密碼
  // expect(screen.getByText("密碼至少4位 !")).toBeInTheDocument();
});
