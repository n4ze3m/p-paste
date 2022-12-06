import IconArrowLeft from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/arrow-left.tsx"

export default function BackButton() {
    return (
        <a href="/" class="flex items-center gap-2 text-gray-500 hover:text-gray-700 font-bold my-3">
           <IconArrowLeft />
            <span>Back</span>
        </a>
    )
}