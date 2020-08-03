
const fizzBuzz = require('../index');
describe("fizzBuzz", () => {
  it("should return 1 when input 1 ", () => {
    // given 准备测试的数据
    const num = 1;
    // when 触发要测试
    // 自己想出来的
    // 愿望思维
    const result = fizzBuzz(num);
    // then  -> 验证 
    expect(result).toBe(1)
  });

  it("should return fizz when input 3 ", () => {
    // given 准备测试的数据
    const num = 3;
    // when 触发要测试
    // 自己想出来的
    // 愿望思维
    const result = fizzBuzz(num);
    // then  -> 验证 
    expect(result).toBe("fizz")
  });

  it("should return buzz when input 5 ", () => {
    // given 准备测试的数据
    const num = 5;
    // when 触发要测试
    // 自己想出来的
    // 愿望思维
    const result = fizzBuzz(num);
    // then  -> 验证 
    expect(result).toBe("buzz")
  });

  it("should return fizzBuzz when input 15 ", () => {
    // given 准备测试的数据
    const num = 15;
    // when 触发要测试
    // 自己想出来的
    // 愿望思维
    const result = fizzBuzz(num);
    // then  -> 验证 
    expect(result).toBe("fizzBuzz")
  });
});
