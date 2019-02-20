module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  plugins: [
    "react"
  ],
  rules: {
    "no-console": 0,
  },
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
}
