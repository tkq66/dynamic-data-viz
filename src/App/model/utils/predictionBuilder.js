export default class PredictionBuilder {
    
    constructor() {
        this.prediction = {};
    }

    add(key, value) {
        this.prediction[key] = value;
        return this;
    }

    build() {
        var prediction = Object.assign({}, this.prediction);
        this.prediction = {};
        return prediction;
    }
}