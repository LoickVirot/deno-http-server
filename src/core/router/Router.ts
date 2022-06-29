import AppRequest from "../http/AppRequest.ts"

export interface Route {
    path: string
    method: string
    controller: (req: AppRequest) => Response
}

export default class Router {
    
    constructor(
        private readonly routes: Route[]
    ) {
        
    }

    public handle(req: Request): Response {

        for(const route of this.routes) {
            const path = new URLPattern({pathname: route.path})

            if (path.test(req.url)) {
                console.log('Route found: ' + route.path);

                const match = path.exec(req.url);
                
                return route.controller(new AppRequest(
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