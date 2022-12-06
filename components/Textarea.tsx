import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function TextArea(
	props: JSX.HTMLAttributes<HTMLTextAreaElement>,
) {
	return (
		<textarea
			{...props}
			class={`w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${
				IS_BROWSER ? "focus:ring-2 focus:ring-blue-500" : ""
			}`}
            disabled={!IS_BROWSER || props.disabled}
		/>
	);
}
