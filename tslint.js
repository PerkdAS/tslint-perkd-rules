'use strict';

const path = require('path');

module.exports = {
  "rulesDirectory": [path.join(path.dirname(require.resolve("codelyzer"))), './rules'],
  "rules": {
    "arrow-return-shorthand": true,
    "callable-types": true,
    "class-name": true,
    "comment-format": [
      true,
      "check-space"
    ],
    "no-irregular-whitespace": true,
    "no-unnecessary-type-assertion": true,
    "no-unbound-method": [true, "ignore-static"],
    "number-literal-format": true,
    "curly": true,
    "eofline": true,
    "encoding": true,
    "forin": true,
    "prefer-object-spread": true,
    "prefer-conditional-expression": true,
    "import-blacklist": [
      true,
      "rxjs",
      "rxjs/Rx",
      "lodash"
    ],
    "import-spacing": true,
    "indent": [
      true,
      "spaces"
    ],
    "interface-over-type-literal": true,
    "label-position": true,
    "max-line-length": [
      true,
      140
    ],
    "member-access": false,
    "member-ordering": [
      true,
      {
        "order": [
          "public-static-field",
          "private-static-field",
          "public-instance-field",
          "private-instance-field",
          "constructor",
          "public-instance-method",
          "public-static-method",
          "private-static-method",
          "private-instance-method"
        ]
      }
    ],
    "no-arg": true,
    "no-bitwise": true,
    "no-console": [
      true,
      "debug",
      "info",
      "time",
      "timeEnd",
      "trace"
    ],
    "no-construct": true,
    "no-debugger": true,
    "no-duplicate-super": true,
    "no-empty": true,
    "no-empty-interface": true,
    "no-eval": true,
    "no-inferrable-types": [
      true,
      "ignore-params"
    ],
    "no-misused-new": true,
    "use-default-type-parameter": true,
    "no-non-null-assertion": true,
    "no-shadowed-variable": true,
    "no-string-literal": false,
    "no-string-throw": true,
    "no-sparse-arrays": true,
    "no-invalid-template-strings": true,
    "no-suspicious-comment": false,
    "no-switch-case-fall-through": true,
    "no-trailing-whitespace": true,
    "no-unnecessary-initializer": true,
    "no-unnecessary-qualifier": true,
    "no-unused-expression": true,
    "no-unused-variable": [true, "check-parameters", { "ignore-pattern": "^_" }],
    "no-use-before-declare": true,
    "no-var-keyword": true,
    "no-var-requires": true,
    "no-var-self": true,
    "object-literal-sort-keys": false,
    "one-line": [
      true,
      "check-open-brace",
      "check-catch",
      "check-else",
      "check-whitespace"
    ],
    "prefer-array-literal": true,
    "return-undefined": false,
    "prefer-const": [
      true,
      {
        "destructuring": "all"
      }
    ],
    "quotemark": [
      true,
      "single"
    ],
    "radix": true,
    "semicolon": [
      true,
      "always"
    ],
    "triple-equals": [
      true,
      "allow-null-check"
    ],
    "typedef-whitespace": [
      true,
      {
        "call-signature": "nospace",
        "index-signature": "nospace",
        "parameter": "nospace",
        "property-declaration": "nospace",
        "variable-declaration": "nospace"
      }
    ],
    "typeof-compare": true,
    "unified-signatures": true,
    "variable-name": false,
    "whitespace": [
      true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-separator",
      "check-type"
    ],
    "directive-selector": [
      false,
      "attribute",
      "pkd",
      "camelCase"
    ],
    "component-selector": [
      false,
      "element",
      "pkd",
      "kebab-case"
    ],
    "use-input-property-decorator": true,
    "use-output-property-decorator": true,
    "use-host-property-decorator": true,
    "no-input-rename": true,
    "no-output-rename": true,
    "use-life-cycle-interface": true,
    "use-pipe-transform-interface": true,
    "component-class-suffix": true,
    "directive-class-suffix": true,
    "invoke-injectable": true,
    "no-access-missing-member": true,
    "template-to-ng-template":true,
    "trailing-comma": [
      true,
      {
        "multiline": "never",
        "singleline": "never"
      }
    ],
    "angular-whitespace": true,
    "banana-in-box": true,
    "templates-no-negated-async": true,
    "templates-use-public": true,
    "no-banned-terms": true,
    "no-delete-expression": true,
    "no-document-domain": true,
    "no-disable-auto-sanitization": true,
    "no-duplicate-parameter-names": true,
    "no-exec-script": true,
    "no-function-constructor-with-string-args": true,
    "no-octal-literal": true,
    "no-reserved-keywords": true,
    "no-string-based-set-immediate": true,
    "no-string-based-set-interval": true,
    "no-string-based-set-timeout": true,
    "no-document-write": true,
    "no-inner-html": true,
    "cyclomatic-complexity": [
      true,
      10
    ],
    "no-unsafe-finally": true,
    "only-arrow-functions": [
      true,
      "allow-declarations"
    ],
    "no-magic-numbers": true,
    "no-consecutive-blank-lines": [
      true,
      1
    ],
    "object-literal-shorthand": true,
    "arrow-parens": true,
    "no-unnecessary-callback-wrapper": true,
    "await-promise": true,
    "jquery-deferred-must-complete": true,
    "match-default-export-name": true,
    "mocha-avoid-only": true,
    "mocha-no-side-effect-code": true,
    "no-any": true,
    "no-conditional-assignment": true,
    "no-constant-condition": true,
    "no-control-regex": true,
    "no-duplicate-case": true,
    "no-duplicate-variable": [true, "check-parameters"],
    "no-floating-promises": false,
    "no-for-in-array": true,
    "no-import-side-effect": [true, { "ignore-pattern": "rxjs.*/" }],
    "no-increment-decrement": false,
    "no-invalid-regexp": true,
    "no-invalid-this": true,
    "no-jquery-raw-elements": true,
    "no-reference-import": true,
    "no-regex-spaces": true,
    "no-stateless-class": false,
    "no-unnecessary-bind": true,
    "no-unnecessary-override": true,
    "no-unsafe-any": false,
    "no-with-statement": true,
    "promise-function-async": false,
    "promise-must-complete": true,
    "react-this-binding-issue": true,
    "react-unused-props-and-state": true,
    "restrict-plus-operands": false, // the plus operand should really only be used for strings and numbers
    "strict-boolean-expressions": false,
    "switch-default": true,
    "use-isnan": true,
    "use-named-parameter": true,
    "valid-typeof": true,
    "insecure-random": true,
    "no-cookies": true,
    "no-http-string": [
      true,
      "http://www.example.com/?.*",
      "http://www.examples.com/?.*"
    ],
    "non-literal-require": true,
    "possible-timing-attack": true,
    "react-anchor-blank-noopener": true,
    "react-iframe-missing-sandbox": true,
    "react-no-dangerous-html": true
  }
}
