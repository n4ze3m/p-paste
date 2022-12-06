import { Handler, HandlerContext, PageProps } from "$fresh/server.ts";
import { asset, Head } from "$fresh/runtime.ts";
import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";
import { connect } from "https://deno.land/x/redis@v0.27.4/mod.ts";
import ViewBtns from "../islands/View.tsx";
import { Page } from "../helper/Page.tsx";
import { gfm } from "../utils/markdown.ts";
import BackButton from "../islands/Back.tsx";
const { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } = config();

interface Paste {
  id: string;
  content: string;
  type: string;
}

export const handler: Handler<Paste> = async (
  req: Request,
  ctx: HandlerContext<Paste>,
): Promise<Response> => {
  const redis = await connect({
    hostname: REDIS_HOST,
    port: REDIS_PORT,
    password: REDIS_PASSWORD,
  });

  const project = await redis.get(`paste:${ctx.params.id}`);

  if (!project) {
    return new Response("Project not found", { status: 404 });
  }
  return ctx.render({
    ...JSON.parse(project),
  });
};

export default function Greet(props: PageProps<Paste>) {
  
  const html = gfm.render(`
  \`\`\`${props.data.type}
    ${props.data.content}
  \`\`\`
    `);

  return (
    <>
      <Head>
        <title>Markdown</title>
        <link rel="stylesheet" href={asset("/prism.css")} />
      </Head>
      <Page>
      <BackButton />
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <ViewBtns
          content={props.data.content}
          type={props.data.type}
          id={props.data.id}
        />
      </Page>
    </>
  );
}
