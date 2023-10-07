import { DefineComponent, HTMLAttributes } from "vue";

export type CompWithAttr<Component, Attr extends HTMLAttributes> = Component &
  DefineComponent<Attr>;
