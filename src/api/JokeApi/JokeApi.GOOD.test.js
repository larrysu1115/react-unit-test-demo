import axios from "axios";
import { getJoke } from ".";

// 指明 axios 模組要用假的 mock
jest.mock("axios");

it("Joke API 成功 200 狀態應該有完整 data", async () => {
  const fakeResp = {
    status: 200,
    data: { setup: "joke_setup", punchline: "joke_punchline" },
  };
  axios.get.mockResolvedValueOnce(fakeResp); // axios.get(.) 將返回 fakeResp 物件 

  const data = await getJoke();
  expect(data.setup).toBe("joke_setup");
  expect(data.punchline).toBe("joke_punchline");
});

it("Joke API 失敗 500 狀態會有錯誤訊息", async () => {
  const fakeResp = {
    status: 500,
    data: { setup: "joke_setup", punchline: "joke_punchline" },
  };
  axios.get.mockResolvedValueOnce(fakeResp); // axios.get(.) 將返回 fakeResp 物件 

  const data = await getJoke();
  expect(data.error).toContain("status:500 is not 200 (Http OK)");
});
