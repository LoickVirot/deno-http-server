import { serve } from "https://deno.land/std@0.120.0/http/server.ts";
import Router from "../router/Router.ts";

export default class Application {
    


    constructor(
        public port: number = 1997
    ) {
        
    }

    public serve() {
        const router = new Router()

        return serve(router.hander, {
            port: 1997
        });
    }

}