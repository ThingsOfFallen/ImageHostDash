import fastify from "fastify";
import fastifyStatic from '@fastify/static';
import fastifyCookie from '@fastify/cookie';
import fastifyCors from "@fastify/cors";
import { join } from "path";
import router from "@router";
import dbConnect from "@/utilities/dbConnect";
import { readFileSync } from "fs";

const app = fastify({ logger: true });

const frontend = process.argv.includes('--dev') ? join(__dirname, 'frontend/public') : join(__dirname, '../frontend/public');
app.register(router, { prefix: '/api' });
app.register(fastifyStatic, { root: `${frontend}/assets`, prefix: '/assets' });
app.register(fastifyCookie, { secret: '123' });
app.register(fastifyCors, { origin: true });

dbConnect();

app.get('/*', async (req, res) => {
    return res.sendFile('index.html', frontend);
});

app.listen({ port: parseInt(process.env.APP_PORT!), host: '0.0.0.0' });