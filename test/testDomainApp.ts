import { suite, test } from "mocha-typescript";
import DomainApplication from "../src/DomainApplication";
import Model from "../src/Model";
import should from "should";

@suite
class TestDomainApp {
    @test entitiesAreSaved() {
        // prepare
        const app = new DomainApplication();
        const entity = new Model();
        entity.id = "123";
        entity.name = "name";

        // run
        app.addEntity(entity);
        const entities = app.getEntities();

        // assess

        should(entities).have.length(1, "There should be one entity");
        should(entities[0].id).equal(entity.id, "Id should be equal");
        should(entities[0].name).equal(entity.name, "Name should be equal");
    }
}