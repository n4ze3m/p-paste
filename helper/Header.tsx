import IconClipboard from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/clipboard.tsx";
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-github.tsx";
export default function Header() {
  return (
    <div class="bg-white p-2 flex items-stretch justify-between border-b border-gray-200">
      <div class="flex items-center flex-1">
        <IconClipboard class="text-2xl" />
        <a class="text-2xl  ml-1 font-bold text-gray-700" href="/">
          Ppaste
        </a>
      </div>
      <div class="justify-end flex items-center">
        <a
          href="https://github.com/n4ze3m/p-paste"
          class="flex items-center gap-2 text-black hover:text-gray-700 font-bold my-3"
        >
          <IconBrandGithub />
        </a>
      </div>
    </div>
  );
}
