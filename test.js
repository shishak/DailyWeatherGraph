var data = [
    {Date: "2015-06-12", HighTemperature: 17, LowTemperature: 10, Rainfall: 1.4, HighWindGust:52, HighWindGustBearing: 236},
    {Date: "2015-06-13", HighTemperature: 16, LowTemperature: 13, Rainfall: 0, HighWindGust: 41,HighWindGustBearing: 240},
    {Date: "2015-06-14", HighTemperature: 16, LowTemperature: 12, Rainfall: 2.4, HighWindGust: 41,HighWindGustBearing: 233},
    {Date: "2015-06-15", HighTemperature: 16, LowTemperature: 10, Rainfall: 8.4, HighWindGust: 40,HighWindGustBearing: 261},
    {Date: "2015-06-16", HighTemperature: 12, LowTemperature: 4, Rainfall: 1, HighWindGust: 36,HighWindGustBearing: 229},
    {Date: "2015-06-17", HighTemperature: 14, LowTemperature: 4, Rainfall: 0, HighWindGust: 10,HighWindGustBearing: 74},
    {Date: "2015-06-18", HighTemperature: 15, LowTemperature: 11, Rainfall: 0, HighWindGust: 24,HighWindGustBearing: 321},
    {Date: "2015-06-19", HighTemperature: 18, LowTemperature: 12, Rainfall: 0, HighWindGust: 35, HighWindGustBearing: 340},
    {Date: "2015-06-20", HighTemperature: 17, LowTemperature: 15, Rainfall: 9.6, HighWindGust: 36, HighWindGustBearing: 302},
    {Date: "2015-06-21", HighTemperature: 15, LowTemperature: 9, Rainfall: 0.2, HighWindGust: 33, HighWindGustBearing: 238},
    {Date: "2015-06-22", HighTemperature: 14, LowTemperature: 4, Rainfall: 0.4, HighWindGust: 31, HighWindGustBearing: 218},
    {Date: "2015-06-23", HighTemperature: 11, LowTemperature: 1, Rainfall: 0, HighWindGust: 26, HighWindGustBearing: 222},
    {Date: "2015-06-24", HighTemperature: 11, LowTemperature: 0, Rainfall: 0, HighWindGust: 31, HighWindGustBearing: 213},
    {Date: "2015-06-25", HighTemperature: 13, LowTemperature: 4, Rainfall: 0, HighWindGust: 43, HighWindGustBearing: 241},
    {Date: "2015-06-26", HighTemperature: 16, LowTemperature: 9, Rainfall: 0.4, HighWindGust: 40, HighWindGustBearing: 230},
    {Date: "2015-06-27", HighTemperature: 15, LowTemperature: 10, Rainfall: 2.4, HighWindGust: 43, HighWindGustBearing: 250},
    {Date: "2015-06-28", HighTemperature: 16, LowTemperature: 9, Rainfall: 0.6, HighWindGust: 31, HighWindGustBearing: 240},
    {Date: "2015-06-29", HighTemperature: 16, LowTemperature: 10, Rainfall: 1.2, HighWindGust: 45, HighWindGustBearing: 250},
    {Date: "2015-06-30", HighTemperature: 16, LowTemperature: 11, Rainfall: 1.8, HighWindGust: 38, HighWindGustBearing: 228},
    {Date: "2015-07-01", HighTemperature: 16, LowTemperature: 9, Rainfall: 0.8, HighWindGust: 47, HighWindGustBearing: 250},
    {Date: "2015-07-02", HighTemperature: 14, LowTemperature: 7, Rainfall: 0.2, HighWindGust: 12, HighWindGustBearing :47},
    {Date: "2015-07-03", HighTemperature: 16, LowTemperature: 7, Rainfall: 1.2, HighWindGust: 29, HighWindGustBearing: 65},
    {Date: "2015-07-04", HighTemperature: 16, LowTemperature: 12, Rainfall: 5.6, HighWindGust: 22, HighWindGustBearing: 107},
    {Date: "2015-07-05", HighTemperature: 15, LowTemperature: 11, Rainfall: 0.2, HighWindGust: 47, HighWindGustBearing: 248},
    {Date: "2015-07-06", HighTemperature: 16, LowTemperature: 10, Rainfall: 1.8, HighWindGust: 28, HighWindGustBearing: 312},
    {Date: "2015-07-07", HighTemperature: 17, LowTemperature: 11, Rainfall: 41.4, HighWindGust: 33, HighWindGustBearing: 330},
    {Date: "2015-07-08", HighTemperature: 12, LowTemperature: 3, Rainfall: 0.8, HighWindGust: 31, HighWindGustBearing: 214},
    {Date: "2015-07-09", HighTemperature: 10, LowTemperature: 3, Rainfall: 0, HighWindGust: 45, HighWindGustBearing: 225},
    {Date: "2015-07-10", HighTemperature: 10, LowTemperature: 0, Rainfall: 0, HighWindGust: 28, HighWindGustBearing: 215},
    {Date: "2015-07-11", HighTemperature: 12, LowTemperature: 0, Rainfall: 0, HighWindGust: 33, HighWindGustBearing: 150}
];

var graph = new DailyWeatherGraph({

    data: data,
    container: d3.select('#test'),
    width: 900,
    height: 450,
    dateFormat: '%Y-%m-%d',
    missingValue: -100,
    missingValueText: 'n/a',

});
