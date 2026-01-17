module.exports = {
  env: {
    node: true,
    es2022: true,
    jest: true
  },
  plugins: ["jest"],
  extends: ["eslint:recommended", "plugin:jest/recommended"],
  rules: {
    "no-unused-vars": "error",
    "no-undef": "error"
  }
};

