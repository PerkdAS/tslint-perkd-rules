'use strict';

module.exports = {
  "rulesDirectory": path.join(path.dirname(require.resolve("codelyzer"))),
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
    "number-literal-format": true,
    "curly": true,
    "eofline": true,
    "forin": true,
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
    "no-non-null-assertion": true,
    "no-shadowed-variable": true,
    "no-string-literal": false,
    "no-string-throw": true,
    "no-sparse-arrays": true,
    "no-invalid-template-strings": true,
    "no-switch-case-fall-through": true,
    "no-trailing-whitespace": true,
    "no-unnecessary-initializer": true,
    "no-unused-expression": true,
    "no-unused-variable": true,
    "no-use-before-declare": true,
    "no-var-keyword": true,
    "object-literal-sort-keys": false,
    "one-line": [
      true,
      "check-open-brace",
      "check-catch",
      "check-else",
      "check-whitespace"
    ],
    "prefer-const": true,
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
      true,
      "attribute",
      "pkd",
      "camelCase"
    ],
    "component-selector": [
      true,
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
    "no-access-missing-member": true,
    "templates-use-public": true,
    "invoke-injectable": true,
    "prefer-const ": true,
    "trailing-comma": [
      true,
      {
        "multiline": "never",
        "singleline": "never"
      }
    ],
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
    "no-duplicate-key": true,
    "no-document-write": true,
    "no-http-string": true,
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
    "no-unnecessary-callback-wrapper": true
  }
}
