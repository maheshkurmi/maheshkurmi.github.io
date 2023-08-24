class ShapesBuilder {
    constructor(app) {
        this.shapes = {};
        this.app = app;
    }

    addShape(shape) {
        const shapeClass = geom[shape.Class];

        if (shapeClass) {
            // Split the shape.params into a float array
            const params = shape.Params ? shape.Params.split(';') : [];

            // Parent Ids
            const parents = shape.Parents ? shape.Parents.split(',').map(id => {
                if (id == 'X-AXIS') {
                    return this.app.shapesManager.X_AXIS;
                } else if (id == 'Y-AXIS') {
                    return this.app.shapesManager.Y_AXIS;
                } else {
                    return this.shapes[id];
                }
            }) : [];

            this.shapes[shape.Id] = new shapeClass(...parents, ...params);

            // Add the shape to the shapes manager
            this.app.shapesManager.addShape(this.shapes[shape.Id]);
        } else {
            console.error(`Shape class ${shape.Class} not found.`);
        }
    }

    drawShapes() {
        this.shapes.forEach(shape => {
            shape.draw();
        });
    }
}