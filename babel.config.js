module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel',
          "expo-av",
            {
              "microphonePermission": "Allow $(PRODUCT_NAME) to access your microphone."
            }
        ],
      },
    },
  };
};
