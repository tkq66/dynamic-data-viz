import {Simulation} from './utils/simulation';
import {TaskClassifier} from './classifiers/taskClassifier';
import {TypeClassifier} from './classifiers/typeClassifier';
import {PredictionBuilder} from './utils/predictionBuilder';


export default class VisualisationPredictor {
    constructor() {
        this.simulation = new Simulation();
        this.taskClassifier = new TaskClassifier();
        this.typeClassifier = new TypeClassifier();
        this.predictionBuilder = new PredictionBuilder();
    }

    // This method predicts the type of visualisation to be displayed.
    predict() {
        while(true) {
            if (this.simulation.isObserved()) {
                var task = this.taskClassifier.classify();
                var type = this.typeClassifier.classify();
                var prediction = this.predictionBuilder.add("type", type)
                                                       .add("task", task)
                                                       .build();
                // TODO: add adapter communication code here.
            }
        }
    }
}
