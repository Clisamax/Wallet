module.exports = function (api) {
  api.cache(true);
  const plugins = [];

  return {
    presets: ['babel-preset-expo'],

    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@config': './src/config',
            'hooks': './src/hooks',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@styles': './src/styles',
            '@services': './src/services',
            'utils': './src/utils',
          },
        },
      ],
    ],
  };
};
