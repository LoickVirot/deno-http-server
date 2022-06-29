import HelloController from "../controller/HelloController.ts";

interface IControllers {
    helloController: HelloController
}

export const controllers: IControllers = {
    helloController: new HelloController()
}