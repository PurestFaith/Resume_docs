### 随身笔记

:::tip 提示
解决 `el-button` 设置回车键搜索失效问题
:::
::: warning 注意
在 el-form 上面设置@keyup.enter.native="onSubmit",此事件需要和点击事件名相同。
:::

```javascript {3,8}
 <div style="display: flex; justify-content: space-between">
      <div>
        <el-form :inline="true" :model="params" class="demo-form-inline"  @keyup.enter.native="onSubmit">
          <el-form-item>
            <el-input v-model="params.name" clearable placeholder="请输入设施名称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" @keyup.enter.native="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div><el-button type="primary" @click="application">新增</el-button></div>
    </div>

```
### 深拷贝

```js {6}
const obj = {
  name: 'zhangsan',
  age: 24,
  address: '中华人民共和国'
}
const res = JSON.stringify(obj)
console.log(res)
```
