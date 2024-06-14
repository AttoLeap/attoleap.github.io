import type { AttributifyAttributes } from "@unocss/preset-attributify";

/* eslint-disable */
declare module "solid-js" {
  namespace JSX {
    interface HTMLAttributes<T> extends AttributifyAttributes {}
  }
}
