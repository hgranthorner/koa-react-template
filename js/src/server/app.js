"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const koa_static_1 = __importDefault(require("koa-static"));
const app = new koa_1.default();
const router = new koa_router_1.default();
// Middleware
app.use(koa_static_1.default('./dist'));
router.get('/', async (ctx, next) => {
    ctx.body = 'hello message';
    next();
});
router.get('/test', async (ctx, next) => {
    ctx.status = 200;
    ctx.body = { message: 'hello' };
});
app.use(router.routes())
    .use(router.allowedMethods());
exports.default = app;
//# sourceMappingURL=app.js.map