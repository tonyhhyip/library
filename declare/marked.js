declare module 'marked' {
  declare function exports(content: string, options?: Object): string;
  declare function setOptions(options: Object): void;
  declare class Renderer {
    html(html:string): string
  }
}