### 参考文档

documentation -> api ->plugins ->compiler hooks

- emit 打包后放入文件夹的之前执行的函数
- compiler.hooks.compile.tap  同步时刻
- compiler.hooks.emit.tapAsync  异步时刻
- a命令"debug":"node node_modules/webpack/bin/webpack.js"等同于b命令"build":"webpack"
- 打断点调试打包过程，监控打包流程,表示打开node调试，并在第一行加断点
"node --inspect --inspect-brk node_modules/webpack/bin/webpack.js"
打开浏览器以及开发控制工具F12，绿色标志为node开启，点开即可开始调试。watch可对某个变量进行监控。（基于node调试工具编写插件）

以上消息来自:www.dell-lee.com
