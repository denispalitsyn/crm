module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 0,
      features: {
        'nesting-rules': true, // Разрешить вложенные правила
        'custom-properties': true, // Разрешить использование переменных CSS
      },
    },
  },
};
