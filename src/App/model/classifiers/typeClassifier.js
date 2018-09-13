class TypeClassifier {
    constructor() {
        this.types = {
            "search": [1, 0, 0], 
            "explore": [0, 1, 0],
            "analyse": [0, 0, 1]
        };

        this.indexToType = {
            0: "search",
            1: "explore",
            2: "analyse"
        };
        this. means = [0.0, 1.0, -1.0];
        this.sigmas = [1.0, 1.0, 1.0];
    }

    randomizeType() {
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