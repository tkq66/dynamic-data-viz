export default class PredictionBuilder {
    
    constructor() {
        this.prediction = {};
    }

    // This method adds attributes for the prediction to be build.
    add(attribute, attributeValue) {
        this.prediction[attribute] = attributeValue;
        return this;
    }

    // This method builds the prediction to be displayed.
    build() {
        var prediction = Object.assign({}, this.prediction);
        this.prediction = {};
        return prediction;
    }
}