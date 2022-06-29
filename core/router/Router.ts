import Request from "../http/Request.ts"

export interface Route {
    path: string
    method: string
    controller: (req: Request) => {}
}

export default class Router {
    
    constructor() {
        
    }

    public hander(req: Request) {

        const routes: Route[] = [
            {
                path:       '/hello',
                method:     'GET',
                controller: (req: Request) => {
                    return new Response('Hello world');
                }
            },
            {
                path:       '/hello/:term',
                method:     'GET',
                controller: (req: Request) => {
                    return new Response('Hello ' + req.params.term);
                }
            }
        ]

        for(const route of routes) {
            const path = new URLPattern({pathname: route.path})

            if (path.test(req.url)) {
                console.log('Route found: ' + route.path);

                const match = path.exec(req.url);
                
                return route.controller(new Request(
                    req,
                    match?.pathname.groups
                ));
            }
        }

        return new Response('Not found', {
            status: 404
        });
    }
}