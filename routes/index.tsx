import { Head } from "$fresh/runtime.ts";
import HomeBody from "../islands/Home.tsx";

import IconInfoCircle from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/info-circle.tsx";
import { Page } from "../helper/Page.tsx";
export default function Home() {
  return (
    <>
      <Head>
        <title>Ppaste - A simple pastebin</title>
      </Head>
      <Page>
        <div
          className="bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3 mb-4"
          role="alert"
        >
          <div class="flex">
            <div>
              <IconInfoCircle class="text-blue-500 mr-3" />
            </div>
            <div>
              <p class="text-sm">
                All pastes will be automatically deleted after 1 month.
              </p>
            </div>
          </div>
        </div>
        <HomeBody />
      </Page>
    </>
  );
}
