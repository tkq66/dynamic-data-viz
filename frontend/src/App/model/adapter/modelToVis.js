export default class ModelToVisAdapter {
  visParam(model) {
    return {
      color: (model.type[0])
        ? "red"
        : (model.type[1])
          ? "green"
          : (model.type[2])
            ? "blue"
            : "black"
    }
  }
}
