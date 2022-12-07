import { ComponentChildren } from "preact";
import Header from "./Header.tsx";

export function Page({ children }: { children: ComponentChildren }) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="h-10">
      <Header />
      </div>
      <main class="p-4 mx-auto max-w-screen-md w-full">
        {children}
      </main>
      <footer className="h-10 my-3">
        <a
          href="https://fresh.deno.dev"
          className="bottom-0 right-0 p-4 fixed"
        >
          <img
            width="197"
            height="37"
            src="https://fresh.deno.dev/fresh-badge.svg"
            alt="Made with Fresh"
          />
        </a>
      </footer>
    </div>
  );
}
