// input output
// 1       1
// 3       fizz
// 5       buzz
// 15      fizzBuzz

const fizzBuzz = require("../index");
describe("fizzBuzz", () => {
  test("should return 1 then input 1 ", () => {
    // given 给测试数据
    const number = 1;
    // when 触发动作
    const result = fizzBuzz(number);
    // then 验证
    // 1 -> 1
    expect(result).toBe(1);
  });

  test("should return 3 then input fizz ", () => {
    // given 给测试数据
    const number = 3;
    // when 触发动作
    const result = fizzBuzz(number);
    // then 验证
    // 1 -> 1
    expect(result).toBe("fizz");
  });

  test("should return 5 then input buzz ", () => {
    // given 给测试数据
    const number = 5;
    // when 触发动作
    const result = fizzBuzz(number);
    // then 验证
    // 1 -> 1
    expect(result).toBe("buzz");
  });

  test("should return 15 then input fizzBuzz ", () => {
    // given 给测试数据
    const number = 15;
    // when 触发动作
    const result = fizzBuzz(number);
    // then 验证
    // 1 -> 1
    expect(result).toBe("fizzBuzz");
  });
});
