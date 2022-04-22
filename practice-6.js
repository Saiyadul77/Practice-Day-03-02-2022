const time = 2;
if (time > 5 && time < 10) {
    console.log('Say, good morning');
}
else if (time >= 10 && time <= 12) {
    console.log('Say, Good afternoon');
}
else if (time > 12 && time <= 17) {
    console.log('Say, good noon');
}
else if (time > 17 && time <= 19) {
    console.log('Say, good evening');
}
else if (time > 19 && time <= 24) {
    console.log('Say, good night');
}
else {
    console.log('Good sleeping');
}