import Model from "./Model";

class DomainApplication {
    private entities: Model[] = [];

    public addEntity(entity: Model) {
        this.entities.push(entity);
    }

    public getEntities(): Model[] {
        return this.entities;
    }
}

export default DomainApplication;