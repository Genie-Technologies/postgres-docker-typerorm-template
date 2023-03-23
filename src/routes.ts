import { UserController } from "./controller/UserController"
import { MessageController } from "./controller/MessageController"

const userRoutes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}];

const messageRoutes = [{
    method: "get",
    route: "/messages",
    controller: MessageController,
    action: "all"
}, {
    method: "get",
    route: "/messages/:id",
    controller: MessageController,
    action: "one"
}, {
    method: "post",
    route: "/messages",
    controller: MessageController,
    action: "save"
}, {
    method: "delete",
    route: "/messages/:id",
    controller: MessageController,
    action: "remove"
}];

export const Routes = [, 
    ...userRoutes,
    ...messageRoutes
]