class CopyrightWebpackPlugin {
    constructor() {
        console.log('插件被使用了！');
    }

    apply(compiler) {
        // compiler.hooks hooks是钩子，在某一时刻自动执行的函数
        compiler.hooks.compile.tap('CopyrightWebpackPlugin',(compilation) => {
            console.log('compiler');
        })
        // 打包以后的结果是存放在compilation中
        compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin',(compilation,cb) =>{
            debugger;
            console.log('123');
            compilation.assets['copyright.txt'] = {
                source:function() {
                    return 'copyright by wowowo';
                },
                size:function() {
                    return 22;
                }
            }
            cb();
        })
    }
}

module.exports = CopyrightWebpackPlugin;