import { Handler, HandlerContext, PageProps } from "$fresh/server.ts";
import { asset, Head } from "$fresh/runtime.ts";
import { connect } from "https://deno.land/x/redis@v0.27.4/mod.ts";
import ViewBtns from "../islands/View.tsx";
import { Page } from "../helper/Page.tsx";
import { gfm } from "../utils/markdown.ts";
import BackButton from "../islands/Back.tsx";

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
    hostname: Deno.env.get("REDIS_HOST")!,
    port: parseInt(Deno.env.get("REDIS_PORT")!),
    password: Deno.env.get("REDIS_PASSWORD")!,
  });

  const project = await redis.get(`paste:${ctx.params.id}`);

  if (!project) {
    return new Response("Project not found", { status: 404 });
  }
  return ctx.render({
    ...JSON.parse(project),
  });
};

const textFn = (content: string, type: string) => {
  return ["txt", "md"].includes(type) ? content : `
   \`\`\`${type}
${content}
   \`\`\`
     `;
  // return content;
};

export default function Greet(props: PageProps<Paste>) {
  const html = gfm.render(textFn(props.data.content, props.data.type));

  return (
    <>
      <Head>
        <title>Markdown</title>
        <link rel="stylesheet" href={asset("/prism.css")} />
      </Head>
      <Page>
        <div className=" p-4 mx-auto max-w-screen-md w-full h-full mt-10">
          <BackButton />
          <div className="markdown-body p-4 bg-white rounded shadow-lg">
            {/* rome-ignore lint/security/noDangerouslySetInnerHtml: I like that lol */}
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
          <ViewBtns
            content={props.data.content}
            type={props.data.type}
            id={props.data.id}
          />
        </div>
      </Page>
    </>
  );
}
