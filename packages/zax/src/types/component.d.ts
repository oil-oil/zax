// For this project development
import "@vue/runtime-core";

declare module "@vue/runtime-core" {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    ZAvatar: (typeof import("../"))["ZAvatar"];
  }
}

export {};
