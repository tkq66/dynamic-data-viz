import {RandomGuassianGenerator} from '../utils/randomGuassianGenerator';

export default class TaskClassifier {
    constructor() {
        this.tasks = {
            "lineChart1": [1, 0, 0], 
            "lineChart2": [0, 1, 0],
            "lineChart3": [0, 0, 1]
        };

        this.indexToType = {
            0: "lineChart1",
            1: "lineChart2",
            2: "lineChart3"
        };
        this. means = [0.0, 1.0, -1.0];
        this.sigmas = [1.0, 1.0, 1.0];
    }

    classify() {
        var random = RandomGuassianGenerator.generateTrimodal(this.means, this.sigmas);
        return this.findType(random);
    }

    findType(random) {
        return this.types[this.indexToType[this.getClosest(random)]];
    }

    getClosest(random) {
        var dists = this.means.map( function(value) { 
            return Math.abs(value - random); 
        } );

        return dists.indexOf(Math.min(...dists));
    }
}