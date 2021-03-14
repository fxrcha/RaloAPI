import {
    Application,
    Context,
    Status,
    isHttpError
} from 'https://deno.land/x/oak/mod.ts';

import router from './routes/meme.ts';

const notFound = (context: Context) => {
    context.response.status = Status.NotFound;
    context.response.body =
        `{ "status": 404, "error": "response not found" }`;
}

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.use(notFound);

app.use(async (context, next) => {
    await next();
    const rt = context.response.headers.get("X-Response-Time");
    console.log(
        `${context.request.method} ${decodeURIComponent(context.request.url.pathname)} - ${String(rt)}`,
    );
});

app.use(async (context, next) => {
    try {
        await next();
    } catch (err) {
        if (isHttpError(err)) {
            context.response.status = err.status;
            const { message, status, stack } = err;
            if (context.request.accepts("json")) {
                context.response.body = { message, status, stack };
                context.response.type = "json";
            } else {
                context.response.body = `${status} ${message}\n\n${stack ?? ""}`;
                context.response.type = "text/plain";
            }
        } else {
            console.log(err);
            throw err;
        }
    }
});

app.addEventListener("listen", ({ hostname, port }) => {
    console.log(`Listening RaloAPI on ${hostname}:${port}`);
})

await app.listen({ hostname: "127.0.0.1", port: 8000 });
console.log("Server Out.");