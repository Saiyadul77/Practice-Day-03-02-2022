function centimeterToMeter(centimer) {
    let meter = centimer / 100;
    return meter;
}
const totalMeter = centimeterToMeter(500);
console.log(totalMeter);