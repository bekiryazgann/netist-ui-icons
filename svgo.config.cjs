module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          removeTitle: true,
        },
      },
    },
    'removeDimensions',
    {
      name: 'convertColors',
      params: {
        currentColor: true,
      },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          { fill: 'currentColor' },
          { stroke: 'currentColor' },
        ],
      },
    },
  ],
};
