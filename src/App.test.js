import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

jest.setTimeout(30000);

test("預設顯示空白元件", () => {
  render(<App />);
  const homeContent = screen.getByText("空白的元件，只有 Login 元件有內容");
  // screen.debug(homeContent); // 顯示 homeContent 的 dom
  expect(homeContent).toBeInTheDocument();
});

jest.mock("./components/LoginForm", () => () => {
  return <mock-form role="form" />;
});

test("點擊 Login 顯示登入表單", async () => {
  render(<App />);

  // App 預設顯示空白元件
  expect(
    screen.getByText("空白的元件，只有 Login 元件有內容")
  ).toBeInTheDocument();

  const user = userEvent.setup();
  const loginMenu = screen.getByText("Login"); // 獲得 Login選單
  await user.click(loginMenu); // 點擊 Login選單
  
  expect(screen.getByRole("form")).toBeInTheDocument();
  expect(
    screen.queryByText("空白的元件，只有 Login 元件有內容")
  ).not.toBeInTheDocument(); // 不會顯示空白元件
});
