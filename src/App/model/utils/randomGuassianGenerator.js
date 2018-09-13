export default class RandomGuassianGenerator {
    static generateStandard() {
        var z = 1;
        var x = 0;
        var y = 0;
        while (z >= 1 || z == 0) {
            x = Math.random() * 2 - 1;
            y = Math.random() * 2 - 1;
            z = x*x + y*y;
        }

        var p = Math.sqrt(-2 * Math.log(z) / z);
        return [x * p, y * p];
    }

    static generateTrimodal(mean, sigma) {
        var result = 0.0;
        for (var i = 0; i < 3; i++) {
            result += this.generateStandard()[0] * sigma[i] + mean[i];
        }

        return result / 3.0;
    }
}