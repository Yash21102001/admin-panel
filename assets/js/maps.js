// Map
$(document).ready(function () {

    // Create root and chart
    var root = am5.Root.new("chartdiv");
  
    // Set themes
    root.setThemes([
        am5themes_Animated.new(root)
    ]);
  
  
    // ====================================
    // Create map
    // ====================================
  
    var map = root.container.children.push(
        am5map.MapChart.new(root, {
            panX: "none",
        })
    );
  
    // Create polygon series
    var polygonSeries = map.series.push(
        am5map.MapPolygonSeries.new(root, {
            geoJSON: am5geodata_continentsLow,
            exclude: ["antarctica"],
            fill: am5.color(0xdddddd)
        })
    );
  
    var pointSeries = map.series.push(
        am5map.MapPointSeries.new(root, {})
    );
  
    var colorSet = am5.ColorSet.new(root, { step: 2 });
  
    pointSeries.bullets.push(function (root, series, dataItem) {
        var value = dataItem.dataContext.value;
  
        var container = am5.Container.new(root, {});
        var color = colorSet.next();
        var radius = 0 + value / 20 * 20;
        var circle = container.children.push(am5.Circle.new(root, {
            radius: radius,
            fill: color,
            dy: -radius * 2
        }))
  
        var label = container.children.push(am5.Label.new(root, {
            fill: am5.color(0xffffff),
            fontWeight: "400",
            centerX: am5.p50,
            centerY: am5.p50,
            dy: -radius * 2
        }))
  
        var titleLabel = container.children.push(am5.Label.new(root, {
            text: dataItem.dataContext.title,
            fill: am5.color(0x111111),
            fontWeight: "400",
            fontSize: "15px",
            centerY: am5.p50,
            dy: -radius * 2,
            dx: radius
        }))
  
        return am5.Bullet.new(root, {
            sprite: container
        });
        
    });
  
  
    // ====================================
    // Create pins
    // ====================================
  
    var data = [{
        "title": "Canada",
        "latitude": 39.563353,
        "longitude": -99.316406,
    }, {
        "title": "GreenLand",
        "latitude": 80.896104,
        "longitude": -50.160156,
    }, {
        "title": "Rusia",
        "latitude": 47.212106,
        "longitude": 103.183594,
    }, {
        "title": "Palestine",
        "latitude": 11.081385,
        "longitude": 21.621094,
    }];
  
    for (var i = 0; i < data.length; i++) {
        var d = data[i];
        pointSeries.data.push({
            geometry: { type: "Point", coordinates: [d.longitude, d.latitude] },
            title: d.title,
            value: d.value
        });
    }
   
  }); // end am5.ready()