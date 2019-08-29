module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            //
        } else {
            //
        }

        // const svgRule = config.module.rule('svg');
        // svgRule.uses.clear();
        // svgRule
        //     .use('vue-svg-loader')
        //     .loader('vue-svg-loader');
    }
};