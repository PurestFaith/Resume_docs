# 安装 node，镜像以及包管理工具

::: warning 使用 nvm 安装 node
nvm 是一个 node 的版本管理工具，可以简单操作 node 版本的切换、安装、查看等等。与 npm 不同的是，npm 是依赖包的管理工具
:::

:::tip 1.github 搜索 nvm
![An image](/assets/img/1.png)
:::

:::tip 2.下载安装包 nvm-setup.exe
![An image](/assets/img/2.png)
:::

:::tip 3.安装 node 镜像，安装完成后下载 node 速度会提升
![An image](/assets/img/3.png)
:::

:::tip 4.执行命令

```js {3}
nvm install (node版本号) ——安装node（稳定版本：v16.18.1）

nvm list ——查看所有node版本

nvm use (node版本号) ——指定使用node版本
```

:::

:::tip 5.安装镜像管理工具 nyprm
贴上原文地址 [安装 nyprm](https://github.com/tlyboy/nyprm)

```js
npm install -g nyprm ——registry=registry.npmmirror.com/
```

:::

:::tip 6.安装好 nyprm 之后，直接通过 nyprm init 它会自动安装 npm,yarn,pnpm 以及镜像。
![An image](/assets/img/4.png)
![An image](/assets/img/5.png)
:::

:::tip 结尾
:tada: :tada: :tada: 恭喜安装完成可以尝试去运行项目啦~

:::
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
