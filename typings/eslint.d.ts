declare module 'eslint-define-config' {
  export interface CustomRuleOptions { }
  export interface CustomParserOptions {
    parser: string | Record<string, string>
  }
}
