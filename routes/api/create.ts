import { Handlers } from "$fresh/server.ts";
import { v1 } from "https://deno.land/std@0.167.0/uuid/mod.ts"
import { connect } from "https://deno.land/x/redis@v0.27.4/mod.ts";
export const handler: Handlers = {
    async POST(req, _ctx) {
        const body = await req.text();
        const json = JSON.parse(body);

        const redis = await connect({
            hostname: Deno.env.get("REDIS_HOST")!,
            port: parseInt(Deno.env.get("REDIS_PORT")!),
            password:  Deno.env.get("REDIS_PASSWORD")!,
          });
        


        if (!(json.content && json.type)) {
            return new Response("Bad Request", {
                status: 400,
            });
        }

        const response = {
            id: v1.generate(),
            ...json
        }

        await redis.set(`paste:${response.id}`, JSON.stringify(response), {
            ex: 60 * 60 * 24 * 30,
        });


        return new Response(JSON.stringify(response), {
            status: 201,
        });
    },
};