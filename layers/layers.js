var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var lyr_UFP_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "UFP",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/UFP_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-10986415.431719, 2132109.101507, -10887109.907727, 2227443.152691]
                            })
                        });
var format_Industrias_2 = new ol.format.GeoJSON();
var features_Industrias_2 = format_Industrias_2.readFeatures(json_Industrias_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industrias_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industrias_2.addFeatures(features_Industrias_2);
var lyr_Industrias_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Industrias_2, 
                style: style_Industrias_2,
                popuplayertitle: "Industrias",
                interactive: true,
    title: 'Industrias<br />\
    <img src="styles/legend/Industrias_2_0.png" /> 100 personas<br />\
    <img src="styles/legend/Industrias_2_1.png" /> 250 personas<br />\
    <img src="styles/legend/Industrias_2_2.png" /> 30 personas<br />\
    <img src="styles/legend/Industrias_2_3.png" /> 50 personas<br />\
    <img src="styles/legend/Industrias_2_4.png" /> <br />'
        });
var format_mun_utm_3 = new ol.format.GeoJSON();
var features_mun_utm_3 = format_mun_utm_3.readFeatures(json_mun_utm_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mun_utm_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mun_utm_3.addFeatures(features_mun_utm_3);
var lyr_mun_utm_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mun_utm_3, 
                style: style_mun_utm_3,
                popuplayertitle: "mun_utm",
                interactive: true,
                title: '<img src="styles/legend/mun_utm_3.png" /> mun_utm'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_UFP_1.setVisible(true);lyr_Industrias_2.setVisible(true);lyr_mun_utm_3.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_UFP_1,lyr_Industrias_2,lyr_mun_utm_3];
lyr_Industrias_2.set('fieldAliases', {'nom_estab': 'nom_estab', 'per_ocu': 'per_ocu', });
lyr_mun_utm_3.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'NOMGEO': 'NOMGEO', });
lyr_Industrias_2.set('fieldImages', {'nom_estab': 'TextEdit', 'per_ocu': 'TextEdit', });
lyr_mun_utm_3.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_Industrias_2.set('fieldLabels', {'nom_estab': 'no label', 'per_ocu': 'inline label - always visible', });
lyr_mun_utm_3.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'NOMGEO': 'inline label - always visible', });
lyr_mun_utm_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});