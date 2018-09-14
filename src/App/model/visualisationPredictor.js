import {Component} from 'react'
import {connect} from 'react-redux'
import {EventEmitter} from 'fbemitter'
import {mapStateToProps, mapDispatchToProps} from 'App/store/mappers'
import Simulation from './utils/simulation'
import TaskClassifier from './classifiers/taskClassifier'
import TypeClassifier from './classifiers/typeClassifier'
import PredictionBuilder from './utils/predictionBuilder'
import ModelToVisAdapter from './adapter/modelToVis'

class VisualisationPredictor extends Component {
  constructor(props) {
    super(props)

    this.taskClassifier = new TaskClassifier()
    this.typeClassifier = new TypeClassifier()
    this.predictionBuilder = new PredictionBuilder()
    this.modelToVis = new ModelToVisAdapter()

    this.emitter = new EventEmitter()
    this.observationEvent = "observe"
    this.emitter.addListener(this.observationEvent, this.predict.bind(this))
    this.simulation = new Simulation(this.emitter, this.observationEvent)
    this.simulation.observeEvents()
  }

  // This method predicts the type of visualisation  to be displayed.
  predict() {
    let task = this.taskClassifier.classify()
    let type = this.typeClassifier.classify()
    let prediction = this.predictionBuilder.add("type", type).add("task", task).build()
    let visParams = this.modelToVis.visParam(prediction)
    this.props.action.setColor(visParams.color)
    console.log(prediction.type)
    // TODO: add adapter communication code here.
  }

  render() {
    return null
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisualisationPredictor)
