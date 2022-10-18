import { getJoke } from "./JokeApi";

it("呼叫 GET 獲得隨機笑話", () => {
  // 這是一個不好的單元測試，因為實際去呼叫外部 API 的資料

  return getJoke().then((data) => {
    // console.log(data);
    expect("setup" in data).toBe(true);
    expect("punchline" in data).toBe(true);
  });
});
