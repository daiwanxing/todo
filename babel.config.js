module.exports = api => {
    api.cache(true);
    return {
        plugins: [
            [
                "@babel/plugin-transform-runtime",
                {
                    corejs: 2
                }
            ]
        ],
        presets: [
            '@vue/babel-preset-jsx',
            [
                "@babel/preset-env", // 提供转义es5的语法
                {
                    useBuiltIns: "usage",
                    targets: {
                        esmodules: true, // 设置此属性，那么browsers配置则失效
                        chrome: 60
                    },
                    modules: false,
                    corejs: {
                        version: 3,
                        "proposals": true
                    }
                }
            ]
        ]
    };
};