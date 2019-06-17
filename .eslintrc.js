// https://eslint.org/docs/user-guide/configuring

/*
 Let's Extend the rules in the easier-to-use .eslintrc
 with the rules in this file and all others
 */
let fs = require ('fs');
// We need lodash so we can copy the own properties from the  Source object we'll be creating
let lodash = require ('lodash');

//Let's make a javascript object out of the JSON String we get from reading the file. [Source (src) rules]
let customRules = JSON.parse(fs.readFileSync('./.eslintrc', 'utf-8')).rules;

//The default custom rules that come with vue [Destination (dest) rules]
let defaultCustomRules = {
  // allow async-await
  'generator-star-spacing': 'off',
  // allow debugger during development
  'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
};

//Let's copy the properties (rules) from the src rules to the dest rules
customRules = lodash.assign(defaultCustomRules, customRules);

// Let's free up the memory we consumed for doing this
defaultCustomRules = fs = lodash = null;

module.exports = {
  root: true,

  parserOptions: {
    parser: 'babel-eslint'
  },
  env:  {
    node: true
  },
  'extends': [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    '@vue/standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: customRules
}
