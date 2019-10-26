module.exports = {
  root: true,
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: 6,
    commonjs: true,
    ecmaFeatures: {
      modules: true,
    },
  },
  plugins: ["flowtype", "babel", "react"],
  globals: {
    $Keys: true,
    $ReadOnly: true,
    $ReadOnlyArray: true,
    $Exact: true,
    $Values: true,
  },
  rules: {
    indent: ["error", 4],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "object-shorthand": "error",
    "no-console": "error",
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
  },
};
