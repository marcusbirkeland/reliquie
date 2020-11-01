module.exports = {
    webpack: function(config) {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      })
      config.module.rules.push({
        test: /\.(png|svg|jpg|gif)$/,
        use:
          'raw-loader',
      })
      return config
    }, 
  }