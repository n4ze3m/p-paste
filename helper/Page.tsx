import { ComponentChildren } from "preact";
import Header from "./Header.tsx";

export function Page({ children }: { children: ComponentChildren }) {
  return (
    <div className="flex flex-col justify-between bg-gray-100 min-h-screen">
      <div className="h-10">
        <Header />
      </div>
      <main class="flex-1">{children}</main>
      <footer className="border-t border-gray-200">
        <div className="flex justify-end p-4">
          <a href="https://fresh.deno.dev" className="bottom-0 right-0">
            <img
              width="197"
              height="37"
              src="https://fresh.deno.dev/fresh-badge.svg"
              alt="Made with Fresh"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
