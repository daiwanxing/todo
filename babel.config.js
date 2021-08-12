module.exports = api => {
    api.cache(true);
    return {
        plugins: [],
        presets: [
            [
                "@babel/preset-env",
                {
                    useBuiltIns: "usage",
                    targets: {
                        chrome: 60
                    }
                }
            ]
        ]
    }
}