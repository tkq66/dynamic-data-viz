class RandomGuassianGenerator {
    static generate() {
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
}