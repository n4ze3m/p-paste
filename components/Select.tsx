import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Select(props: JSX.HTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      className={`w-1/2 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${
        IS_BROWSER ? "focus:ring-2 focus:ring-blue-500" : ""
      }`}
    />
  );
}
