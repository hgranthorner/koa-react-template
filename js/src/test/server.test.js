"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../server/app"));
const testServer = app_1.default.listen(3001);
const app = supertest_1.default(testServer);
describe('Server', () => {
    afterAll(() => {
        testServer.close();
    });
    it('can accepts responses', async () => {
        const response = await app.get('/test');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('hello');
    });
    /*
  it('does not accept invalid responses', () => {
    return app.get('/not/a/real/path')
      .expect(404)
      .catch(e => console.log(e))
  })
     */
});
//# sourceMappingURL=server.test.js.map