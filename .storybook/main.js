module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-i18next/register"
  ],
  webpackFinal: config => {
    return {
      ...config,
      node: {
        ...config.node,
        fs: "empty" // fix
      }
    };
  }
};
