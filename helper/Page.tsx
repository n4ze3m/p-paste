import { ComponentChildren } from "preact";
import Header from "./Header.tsx";

export function Page({ children }: { children: ComponentChildren }) {
  return (
    <>
      <Header />
      <div class="p-4 mx-auto max-w-screen-md">
        {children}
      </div>
      <a href="https://fresh.deno.dev"
      className="fixed bottom-0 right-0 p-4"
      >
          <img
            width="197"
            height="37"
            src="https://fresh.deno.dev/fresh-badge.svg"
            alt="Made with Fresh"
          />
        </a>
    </>
  );
}
