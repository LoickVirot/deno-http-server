import AppRequest from "../core/http/AppRequest.ts";

export default class HelloController {

    constructor() {

    }

    public hello(): Response {
        return new Response('Hello world');
    }

    public customHello(req: AppRequest): Response {
        return new Response('Hello ' + req.params.term);
    }

}