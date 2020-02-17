declare namespace jest {
  interface Matchers<R, T = {}> {
    toHaveStyleRule(key?: string, value?: string, options?: any): void;
  }
}
