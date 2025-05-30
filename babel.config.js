module.exports = {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin', ['inline-import', {
        extensions: ['.sql']
    }]]
}