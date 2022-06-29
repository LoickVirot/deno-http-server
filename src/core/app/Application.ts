import { serve } from "https://deno.land/std@0.120.0/http/server.ts";
import Router from "../router/Router.ts";
import { routes } from "../../config/routes.ts";

export default class Application {

    constructor(
        public port: number = 1997
    ) {
        
    }

    public handler(req: Request): Response {
        const router = new Router(routes);

        return router.handle(req);
    }

    public serve() {

        return serve(this.handler, {
            port: 1997
        });
    }

}