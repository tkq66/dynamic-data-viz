import RandomGuassianGenerator from '../utils/randomGuassianGenerator'

export default class TaskClassifier {
  constructor() {
    this.tasks = {
      "lineChart1": [
        1, 0, 0
      ],
      "lineChart2": [
        0, 1, 0
      ],
      "lineChart3": [0, 0, 1]
    }

    this.indexToTask = {
      0: "lineChart1",
      1: "lineChart2",
      2: "lineChart3"
    }
    this.means = [0.0, 1.0, -1.0]
    this.sigmas = [1.0, 1.0, 1.0]
  }

  // This method classifies task using a trimodal guassian distribution.
  classify() {
    var random = RandomGuassianGenerator.generateTrimodal(this.means, this.sigmas)
    return this.findTask(random)
  }

  // private method for finding the task given the prediction values.
  findTask(random) {
    return this.tasks[this.indexToTask[this.getClosest(random)]]
  }

  // private method for finding the closest class given prediction values.
  getClosest(random) {
    var dists = this.means.map(function(value) {
      return Math.abs(value - random)
    })

    return dists.indexOf(Math.min(...dists))
  }
}
