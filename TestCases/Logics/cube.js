class Cube {
    constructor(length) {
        this.length = length;
    }

    getVolume() {
        return Math.pow(this.length, 3);
    }

    sendVolumeToServer(cb) {
        cb(this.getVolume());
    }
}

module.exports = Cube;