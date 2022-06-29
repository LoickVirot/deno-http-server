import { assertStrictEquals } from "https://deno.land/std@0.120.0/testing/asserts.ts";
import Router from "../../../src/core/router/Router.ts";
import AppRequest from "../../../src/core/http/AppRequest.ts";

const TEST_BASE_URL = "http://localhost";

Deno.test("Router should return 404 response", () => {
    const router = new Router([]);
    const req = new Request(TEST_BASE_URL + "/notexists");

    const response = router.handle(req);

    assertStrictEquals(404, response.status);
    assertStrictEquals(false, response.ok);
});

Deno.test("Router should return 200 response", () => {
    const routes = [
        {
            path: '/get_ok',
            method: 'GET',
            controller: () => new Response('OK', { status: 200 })
        }
    ];
    
    const router = new Router(routes);
    const req = new Request(TEST_BASE_URL + '/get_ok');

    const response = router.handle(req);

    assertStrictEquals(200, response.status);
    assertStrictEquals(true, response.ok);
});

Deno.test("Router should return 200 response with URL param", async () => {
    const routes = [
        {
            path: '/get_ok/:param',
            method: 'GET',
            controller: (req: AppRequest) => new Response(req.params.param, { status: 200 })
        }
    ];
    
    const router = new Router(routes);
    const req = new Request(TEST_BASE_URL + '/get_ok/test');

    const response = router.handle(req);
    
    assertStrictEquals(200, response.status);
    assertStrictEquals(true, response.ok);
    assertStrictEquals('test', await response.text());
});