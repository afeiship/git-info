var info = require("../lib");

test("get item value", () => {
  expect(info.email()).toBe("1290657123@qq.com");
  expect(info.username()).toBe("afeiship");
  expect(info.url()).toBe("git@github.com:afeiship/git-info.git");
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
