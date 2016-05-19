module.exports.distance = function(locationX, locationY) {
    var toRadians = function(value) {
        return value * Math.PI / 180;
    };
    var R = 6371000; // metres
    var φ1 = toRadians(locationX.latitude);
    var φ2 = toRadians(locationY.latitude);
    var Δφ = toRadians((locationY.latitude-locationX.latitude));
    var Δλ = toRadians((locationY.longitude-locationX.longitude));

    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    return (R * c) / 1000;
};
