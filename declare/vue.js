declare type CompilerOptions = {
  warn?: Function; // allow customizing warning in different environments; e.g. node
  expectHTML?: boolean; // only false for non-web builds
  modules?: Array<ModuleOptions>; // platform specific modules; e.g. style; class
  staticKeys?: string; // a list of AST properties to be considered static; for optimization
  directives?: { [key: string]: Function }; // platform specific directives
  isUnaryTag?: (tag: string) => ?boolean; // check if a tag is unary for the platform
  isReservedTag?: (tag: string) => ?boolean; // check if a tag is a native for the platform
  mustUseProp?: (tag: string, attr: string) => ?boolean; // check if an attribute should be bound as a property
  isPreTag?: (attr: string) => ?boolean; // check if a tag needs to preserve whitespace
  getTagNamespace?: (tag: string) => ?string; // check the namespace for a tag
  transforms?: Array<Function>; // a list of transforms on parsed AST before codegen
  preserveWhitespace?: boolean;
  isFromDOM?: boolean;
  shouldDecodeTags?: boolean;
  shouldDecodeNewlines?: boolean;

  // runtime user-configurable
  delimiters?: [string, string]; // template delimiters
}

declare type CompiledResult = {
  ast: ?ASTElement;
  render: string;
  staticRenderFns: Array<string>;
  errors?: Array<string>;
}

declare type CompiledFunctionResult = {
  render: Function;
  staticRenderFns: Array<Function>;
}

declare type ModuleOptions = {
  preTransformNode: (el: ASTElement) => void;
  transformNode: (el: ASTElement) => void; // transform an element's AST node
  postTransformNode: (el: ASTElement) => void;
  genData: (el: ASTElement) => string; // generate extra data string for an element
  transformCode?: (el: ASTElement, code: string) => string; // further transform generated code for an element
  staticKeys?: Array<string>; // AST properties to be considered static
}

declare type ASTModifiers = { [key: string]: boolean }
declare type ASTIfConditions = Array<{ exp: ?string; block: ASTElement }>

declare type ASTElementHandler = {
  value: string;
  modifiers: ?ASTModifiers;
}

declare type ASTElementHandlers = {
  [key: string]: ASTElementHandler | Array<ASTElementHandler>;
}

declare type ASTDirective = {
  name: string;
  rawName: string;
  value: string;
  arg: ?string;
  modifiers: ?ASTModifiers;
}

declare type ASTNode = ASTElement | ASTText | ASTExpression

declare type ASTElement = {
  type: 1;
  tag: string;
  attrsList: Array<{ name: string; value: string }>;
  attrsMap: { [key: string]: string | null };
  parent: ASTElement | void;
  children: Array<ASTNode>;

  static?: boolean;
  staticRoot?: boolean;
  staticInFor?: boolean;
  staticProcessed?: boolean;
  hasBindings?: boolean;

  text?: string;
  attrs?: Array<{ name: string; value: string }>;
  props?: Array<{ name: string; value: string }>;
  plain?: boolean;
  pre?: true;
  ns?: string;

  component?: string;
  inlineTemplate?: true;
  transitionMode?: string | null;
  slotName?: ?string;
  slotTarget?: ?string;
  slotScope?: ?string;
  scopedSlots?: { [name: string]: ASTElement };

  ref?: string;
  refInFor?: boolean;

  if?: string;
  ifProcessed?: boolean;
  elseif?: string;
  else?: true;
  ifConditions?: ASTIfConditions;

  for?: string;
  forProcessed?: boolean;
  key?: string;
  alias?: string;
  iterator1?: string;
  iterator2?: string;

  staticClass?: string;
  classBinding?: string;
  staticStyle?: string;
  styleBinding?: string;
  events?: ASTElementHandlers;
  nativeEvents?: ASTElementHandlers;

  transition?: string | true;
  transitionOnAppear?: boolean;

  directives?: Array<ASTDirective>;

  forbidden?: true;
  once?: true;
  onceProcessed?: boolean;
  wrapData?: (code: string) => string;

  // weex specific
  appendAsTree?: boolean;
}

declare type ASTExpression = {
  type: 2;
  expression: string;
  text: string;
  static?: boolean;
}

declare type ASTText = {
  type: 3;
  text: string;
  static?: boolean;
}

// SFC-parser related declarations

// an object format describing a single-file component.
declare type SFCDescriptor = {
  template: ?SFCBlock;
  script: ?SFCBlock;
  styles: Array<SFCBlock>;
  customBlocks: Array<SFCCustomBlock>;
}

declare type SFCCustomBlock = {
  type: string;
  content: string;
  start?: number;
  end?: number;
  src?: string;
  attrs: {[attribute:string]: string};
}

declare type SFCBlock = {
  type: string;
  content: string;
  start?: number;
  end?: number;
  lang?: string;
  src?: string;
  scoped?: boolean;
  module?: string | boolean;
}
import type { Config } from '../node_modules/vue/src/core/config'
import type VNode from '../node_modules/vue/src/core/vdom/vnode'
import type Watcher from '../node_modules/vue/src/core/observer/watcher'
declare interface Component {
  // constructor information
  static cid: number;
  static options: Object;
  // extend
  static extend: (options: Object) => Function;
  static superOptions: Object;
  static extendOptions: Object;
  static super: Class<Component>;
  // assets
  static directive: (id: string, def?: Function | Object) => Function | Object | void;
  static component: (id: string, def?: Class<Component> | Object) => Class<Component>;
  static filter: (id: string, def?: Function) => Function | void;

  // public properties
  $el: any; // so that we can attach __vue__ to it
  $data: Object;
  $options: ComponentOptions;
  $parent: Component | void;
  $root: Component;
  $children: Array<Component>;
  $refs: { [key: string]: Component | Element | Array<Component | Element> | void };
  $slots: { [key: string]: Array<VNode> };
  $scopedSlots: { [key: string]: () => VNodeChildren };
  $vnode: VNode;
  $isServer: boolean;

  // public methods
  $mount: (el?: Element | string, hydrating?: boolean) => Component;
  $forceUpdate: () => void;
  $destroy: () => void;
  $set: (obj: Array<mixed> | Object, key: mixed, val: mixed) => void;
  $delete: (obj: Object, key: string) => void;
  $watch: (expOrFn: string | Function, cb: Function, options?: Object) => Function;
  $on: (event: string, fn: Function) => Component;
  $once: (event: string, fn: Function) => Component;
  $off: (event?: string, fn?: Function) => Component;
  $emit: (event: string, ...args: Array<mixed>) => Component;
  $nextTick: (fn: Function) => void;
  $createElement: (
    tag?: string | Component,
    data?: Object,
    children?: VNodeChildren,
    namespace?: string
  ) => VNode;

  // private properties
  _uid: number;
  _isVue: true;
  _self: Component;
  _renderProxy: Component;
  _renderContext: ?Component;
  _watcher: Watcher;
  _watchers: Array<Watcher>;
  _data: Object;
  _events: Object;
  _inactive: boolean;
  _isMounted: boolean;
  _isDestroyed: boolean;
  _isBeingDestroyed: boolean;
  _vnode: ?VNode;
  _staticTrees: ?Array<VNode>;
  _hasHookEvent: boolean;

  // private methods
  // lifecycle
  _init: Function;
  _mount: (el?: Element | void, hydrating?: boolean) => Component;
  _update: (vnode: VNode, hydrating?: boolean) => void;
  _updateFromParent: (
    propsData: ?Object,
    listeners: ?{ [key: string]: Function | Array<Function> },
    parentVnode: VNode,
    renderChildren: ?Array<VNode>
  ) => void;
  // rendering
  _render: () => VNode;
  __patch__: (a: Element | VNode | void, b: VNode) => any;
  // createElement
  _c: (vnode?: VNode, data?: VNodeData, children?: VNodeChildren) => VNode | void;
  // renderStatic
  _m: (index: number, isInFor?: boolean) => VNode | VNodeChildren;
  // markOnce
  _o: (vnode: VNode | Array<VNode>, index: number, key: string) => VNode | VNodeChildren;
  // toString
  _s: (value: mixed) => string;
  // text to VNode
  _v: (value: string | number) => VNode;
  // toNumber
  _n: (value: string) => number | string;
  // empty vnode
  _e: () => VNode;
  // loose equal
  _q: (a: mixed, b: mixed) => boolean;
  // loose indexOf
  _i: (arr: Array<mixed>, val: mixed) => number;
  // resolveFilter
  _f: (id: string) => Function;
  // renderList
  _l: (val: mixed, render: Function) => ?Array<VNode>;
  // renderSlot
  _t: (name: string, fallback: ?Array<VNode>, props: ?Object) => ?Array<VNode>;
  // apply v-bind object
  _b: (data: any, value: any, asProp?: boolean) => VNodeData;
  // check custom keyCode
  _k: (eventKeyCode: number, key: string, builtInAlias: number | Array<number> | void) => boolean;

  // allow dynamic method registration
  [key: string]: any
}
declare interface GlobalAPI {
  cid: number;
  options: Object;
  config: Config;
  util: Object;

  extend: (options: Object) => Function;
  set: (obj: Object, key: string, value: any) => void;
  delete: (obj: Object, key: string) => void;
  nextTick: (fn: Function, context?: Object) => void;
  use: (plugin: Function | Object) => void;
  mixin: (mixin: Object) => void;
  compile: (template: string) => { render: Function, staticRenderFns: Array<Function> };

  directive: (id: string, def?: Function | Object) => Function | Object | void;
  component: (id: string, def?: Class<Component> | Object) => Class<Component>;
  filter: (id: string, def?: Function) => Function | void;

  // allow dynamic method registration
  [key: string]: any
}
declare module 'he' {
  declare function escape(html: string): string;
  declare function decode(html: string): string;
}

declare module 'source-map' {
  declare class SourceMapGenerator {
    setSourceContent(filename: string, content: string): void;
    addMapping(mapping: Object): void;
    toString(): string;
  }
}

declare module 'lru-cache' {
  declare var exports: {
    (): any
  }
}

declare module 'de-indent' {
  declare var exports: {
    (input: string): string
  }
}
declare type InternalComponentOptions = {
  _isComponent: true;
  parent: Component;
  propsData: ?Object;
  _parentVnode: VNode;
  _parentListeners: ?Object;
  _renderChildren: ?Array<VNode>;
  _componentTag: ?string;
  _parentElm: ?Node;
  _refElm: ?Node;
  render?: Function;
  staticRenderFns?: Array<Function>
}

declare type ComponentOptions = {
  // data
  data: Object | Function | void;
  props?: { [key: string]: PropOptions };
  propsData?: ?Object;
  computed?: {
    [key: string]: Function | {
      get?: Function;
      set?: Function;
      cache?: boolean
    }
  };
  methods?: {
    [key: string]: Function
  };
  watch?: {
    [key: string]: Function | string
  };
  // DOM
  el?: string | Element;
  template?: string;
  render: () => VNode;
  staticRenderFns?: Array<() => VNode>;
  // lifecycle
  beforeCreate?: Function;
  created?: Function;
  beforeMount?: Function;
  mounted?: Function;
  beforeUpdate?: Function;
  updated?: Function;
  // assets
  directives?: { [key: string]: Object };
  components?: { [key: string]: Class<Component> };
  transitions?: { [key: string]: Object };
  filters?: { [key: string]: Function };
  // misc
  parent?: Component;
  mixins?: Array<Object>;
  name?: string;
  extends?: Class<Component> | Object;
  delimiters?: [string, string];

  // private
  _isComponent?: true;
  _propKeys?: Array<string>;
  _parentVnode?: VNode;
  _parentListeners?: ?Object;
  _renderChildren?: ?Array<VNode>;
  _componentTag: ?string;
  _scopeId: ?string;
  _base: Class<Component>;
  _parentElm: ?Node;
  _refElm: ?Node;
}

declare type PropOptions = {
  type: Function | Array<Function> | null;
  default: any;
  required: ?boolean;
  validator: ?Function;
}
declare type ComponentWithCacheContext = {
  type: 'ComponentWithCache';
  bufferIndex: number;
  buffer: Array<string>;
  key: string;
}

declare type ElementContext = {
  type: 'Element';
  children: Array<VNode>;
  rendered: number;
  endTag: string;
  total: number;
}

declare type ComponentContext = {
  type: 'Component';
  prevActive: Component;
}

declare type RenderState = ComponentContext | ComponentWithCacheContext | ElementContext
declare type VNodeChildren = Array<?VNode | string | VNodeChildren> | string

declare type VNodeComponentOptions = {
  Ctor: Class<Component>;
  propsData: ?Object;
  listeners: ?Object;
  children: ?Array<VNode>;
  tag?: string;
}

declare type MountedComponentVNode = {
  componentOptions: VNodeComponentOptions;
  child: Component;
  parent: VNode;
  data: VNodeData;
}

// interface for vnodes in update modules
declare type VNodeWithData = {
  tag: string;
  data: VNodeData;
  children: ?Array<VNode>;
  text: void;
  elm: any;
  ns: string | void;
  context: Component;
  key: string | number | void;
  parent?: VNodeWithData;
  child?: Component;
  isRootInsert: boolean;
}

declare interface VNodeData {
  key?: string | number;
  slot?: string;
  ref?: string;
  pre?: boolean;
  tag?: string;
  staticClass?: string;
  class?: any;
  staticStyle?: { [key: string]: any };
  style?: Array<Object> | Object;
  props?: { [key: string]: any };
  attrs?: { [key: string]: string };
  domProps?: { [key: string]: any };
  hook?: { [key: string]: Function };
  on?: ?{ [key: string]: Function | Array<Function> };
  nativeOn?: { [key: string]: Function | Array<Function> };
  transition?: Object;
  show?: boolean; // marker for v-show
  inlineTemplate?: {
    render: Function;
    staticRenderFns: Array<Function>;
  };
  directives?: Array<VNodeDirective>;
  keepAlive?: boolean;
  scopedSlots?: { [key: string]: Function }
}

declare type VNodeDirective = {
  name: string;
  rawName: string;
  value?: any;
  oldValue?: any;
  arg?: string;
  modifiers?: ASTModifiers;
  def?: Object;
}