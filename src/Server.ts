import Express from "express";
import BodyParser from "body-parser";
import Model from "./Model";
import DomainApplication from "./DomainApplication";

class Server {
    private app: Express.Application;
    private domainApplication: DomainApplication = new DomainApplication();

    public startAsync(): Promise<number> {
        return new Promise((resolve) => {
            this.app.listen(this.port, () => resolve(this.port));
        });
    }

    public getRoot(req: Express.Request, res: Express.Response) {
        res.json(this.domainApplication.getEntities());
    }

    public postRoot(req: Express.Request, res: Express.Response) {
        const entity: Model = req.body as Model;
        this.domainApplication.addEntity(entity);
        res.end();
    }

    private defineRoutes() {
        this.app.get("/", this.getRoot.bind(this));
        this.app.post("/", this.postRoot.bind(this));
    }

    constructor(private port: number = 8000) {
        this.app = Express();
        this.app.use(BodyParser.json());
        this.defineRoutes();
    }
}

export default Server;