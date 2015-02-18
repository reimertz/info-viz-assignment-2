/* jshint devel:true */

var map = new Datamap({
  element: document.getElementById("world"),
  projection: 'mercator',
  height: 700, //if not null, datamaps will grab the height of 'element'
  width: 1000, //if not null, datamaps will grab the width of 'element',
  geographyConfig: {
    highlightFillColor: 'white',
    highlightBorderColor: 'rgb(255,100,100)',
    popupTemplate: function(geography, data) {
      return '<div class="hoverinfo" style="text-align: left; color:black; background: rgba(255,255,255,0.9);">'
              + '<b>' + geography.properties.name + '</b>'
              + '<br>Inland water percentage: '
              + '<b>' + data.inlandWaterPercentage  + '</b>'
              + '%<br>land area: '
              + '<b>' + data.landSizeString  + '</b>'
              + 'km<sup>2</sup><br>Inland water area: '
              + '<b>' + data.waterSize  + '</b>'
            + ' km<sup>2</sup></div>'
    }
  },
  fills: landWaterFillData,
  data: landData,
  responsive: true
});
