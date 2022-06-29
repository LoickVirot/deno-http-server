import AppRequest from "../core/http/AppRequest.ts";

export const routes = [
    {
        path:       '/hello',
        method:     'GET',
        controller: (req: AppRequest) => {
            return new Response('Hello world');
        }
    },
    {
        path:       '/hello/:term',
        method:     'GET',
        controller: (req: AppRequest) => {
            return new Response('Hello ' + req.params.term);
        }
    }
]