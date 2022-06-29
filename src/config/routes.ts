import AppRequest from "../core/http/AppRequest.ts";
import { controllers } from "./services.ts"

export const routes = [
    {
        path:       '/hello',
        method:     'GET',
        controller: controllers.helloController.hello
    },
    {
        path:       '/hello/:term',
        method:     'GET',
        controller: controllers.helloController.customHello
    }
]