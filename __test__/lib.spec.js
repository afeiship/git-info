var info = require("../lib");

test("basic info test", () => {
  expect(info.email()).toBe("1290657123@qq.com");
  expect(info.username()).toBe("afeiship");
});

test("get all infomation", () => {
  res = info.get();
  expect(typeof res).toBe("object");
  expect("branch" in res).toBe(true);
  expect("currentBranch" in res).toBe(true);
  expect("hash" in res).toBe(true);
  expect("email" in res).toBe(true);
  expect("username" in res).toBe(true);
});
