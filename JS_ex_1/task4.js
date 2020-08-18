
function TimeToWalk(steps,footprintLengthMeters,speedKMH) {
    let distanceMeters = steps*footprintLengthMeters;
    let breakTimeMinutes = Math.floor(distanceMeters/500);

    let speedMS= speedKMH/3.6;

    let walkTimeSecs = Math.ceil(distanceMeters/speedMS);
    let totalTimeSecs = walkTimeSecs+breakTimeMinutes*60;
    
    return new Date(totalTimeSecs * 1000).toISOString().substr(11, 8)
}

console.log(TimeToWalk(2564, 0.70, 5.5))