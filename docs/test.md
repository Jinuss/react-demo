### 常用语法

- `describe`只是一个分组,方便测试管理功能模块，没有作用域的概念

> `beforeAll`,`afterAll`,`beforeEach`,`afterEach`

- `beforeAll`:在运行 test 之前最先执行，只执行一次
- `afterAll`:在运行完所有的 test 之后执行，只执行一次
- `beforeEach`:执行 test 之前都会执行一次，可以执行多次
- `afterEach`:执行 test 之后都会执行一次，可以执行多次:cat:

:chestnut: [`../test/example.est.js`](../test/example.test.js)
