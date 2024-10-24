const postcssNesting = require('postcss-nesting');
const autoprefixer = require('autoprefixer');

module.exports = {
    style: {
        postcss: {
            loaderOptions: (postcssLoaderOptions) => {
              postcssLoaderOptions.postcssOptions = {
                plugins: [
                  postcssNesting,
                  autoprefixer
                ],
              };
              return postcssLoaderOptions;
            },
        }
    }
}