module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'feedComponent',
      externals: {
        react: 'React',
      },
    },
  },
};
