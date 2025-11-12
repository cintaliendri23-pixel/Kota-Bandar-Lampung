var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LAMPUNGNIBOS_1 = new ol.format.GeoJSON();
var features_LAMPUNGNIBOS_1 = format_LAMPUNGNIBOS_1.readFeatures(json_LAMPUNGNIBOS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAMPUNGNIBOS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAMPUNGNIBOS_1.addFeatures(features_LAMPUNGNIBOS_1);
var lyr_LAMPUNGNIBOS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LAMPUNGNIBOS_1, 
                style: style_LAMPUNGNIBOS_1,
                popuplayertitle: 'LAMPUNGNIBOS',
                interactive: true,
    title: 'LAMPUNGNIBOS<br />\
    <img src="styles/legend/LAMPUNGNIBOS_1_0.png" /> Rendah (164k - 216k)<br />\
    <img src="styles/legend/LAMPUNGNIBOS_1_1.png" /> Sedang (216k - 241k)<br />\
    <img src="styles/legend/LAMPUNGNIBOS_1_2.png" /> Tinggi (241k - 544k)<br />' });
var format_Tambak_2 = new ol.format.GeoJSON();
var features_Tambak_2 = format_Tambak_2.readFeatures(json_Tambak_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tambak_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tambak_2.addFeatures(features_Tambak_2);
var lyr_Tambak_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tambak_2, 
                style: style_Tambak_2,
                popuplayertitle: 'Tambak',
                interactive: true,
                title: '<img src="styles/legend/Tambak_2.png" /> Tambak'
            });
var format_Pesisir_3 = new ol.format.GeoJSON();
var features_Pesisir_3 = format_Pesisir_3.readFeatures(json_Pesisir_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pesisir_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pesisir_3.addFeatures(features_Pesisir_3);
var lyr_Pesisir_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pesisir_3, 
                style: style_Pesisir_3,
                popuplayertitle: 'Pesisir',
                interactive: true,
                title: '<img src="styles/legend/Pesisir_3.png" /> Pesisir'
            });
var format_Pelabuhan_4 = new ol.format.GeoJSON();
var features_Pelabuhan_4 = format_Pelabuhan_4.readFeatures(json_Pelabuhan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pelabuhan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pelabuhan_4.addFeatures(features_Pelabuhan_4);
var lyr_Pelabuhan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pelabuhan_4, 
                style: style_Pelabuhan_4,
                popuplayertitle: 'Pelabuhan',
                interactive: true,
                title: '<img src="styles/legend/Pelabuhan_4.png" /> Pelabuhan'
            });
var format_Mangrove_5 = new ol.format.GeoJSON();
var features_Mangrove_5 = format_Mangrove_5.readFeatures(json_Mangrove_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mangrove_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mangrove_5.addFeatures(features_Mangrove_5);
var lyr_Mangrove_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mangrove_5, 
                style: style_Mangrove_5,
                popuplayertitle: 'Mangrove',
                interactive: true,
                title: '<img src="styles/legend/Mangrove_5.png" /> Mangrove'
            });
var format_Dermaga_6 = new ol.format.GeoJSON();
var features_Dermaga_6 = format_Dermaga_6.readFeatures(json_Dermaga_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dermaga_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dermaga_6.addFeatures(features_Dermaga_6);
var lyr_Dermaga_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dermaga_6, 
                style: style_Dermaga_6,
                popuplayertitle: 'Dermaga',
                interactive: true,
                title: '<img src="styles/legend/Dermaga_6.png" /> Dermaga'
            });
var format_Garis_Pantai_7 = new ol.format.GeoJSON();
var features_Garis_Pantai_7 = format_Garis_Pantai_7.readFeatures(json_Garis_Pantai_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Garis_Pantai_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Garis_Pantai_7.addFeatures(features_Garis_Pantai_7);
var lyr_Garis_Pantai_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Garis_Pantai_7, 
                style: style_Garis_Pantai_7,
                popuplayertitle: 'Garis_Pantai',
                interactive: true,
                title: '<img src="styles/legend/Garis_Pantai_7.png" /> Garis_Pantai'
            });

lyr_OSMStandard_0.setVisible(true);lyr_LAMPUNGNIBOS_1.setVisible(true);lyr_Tambak_2.setVisible(true);lyr_Pesisir_3.setVisible(true);lyr_Pelabuhan_4.setVisible(true);lyr_Mangrove_5.setVisible(true);lyr_Dermaga_6.setVisible(true);lyr_Garis_Pantai_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_LAMPUNGNIBOS_1,lyr_Tambak_2,lyr_Pesisir_3,lyr_Pelabuhan_4,lyr_Mangrove_5,lyr_Dermaga_6,lyr_Garis_Pantai_7];
lyr_LAMPUNGNIBOS_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', '-Kecamatan': '-Kecamatan', '-Jumlah Pe': '-Jumlah Pe', });
lyr_Tambak_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDTTMB': 'KDTTMB', 'PNGTMB': 'PNGTMB', 'LAYER': 'LAYER', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Pesisir_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPPSS': 'TIPPSS', 'STAPSS': 'STAPSS', 'LAYER': 'LAYER', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Pelabuhan_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ADMPEL': 'ADMPEL', 'ALJPEL': 'ALJPEL', 'FGSPEL': 'FGSPEL', 'JNSPEL': 'JNSPEL', 'KLSPEL': 'KLSPEL', 'KMNPEL': 'KMNPEL', 'KMXPEL': 'KMXPEL', 'KODBPL': 'KODBPL', 'KODPEL': 'KODPEL', 'KONKON': 'KONKON', 'LAMPEL': 'LAMPEL', 'NAMPEL': 'NAMPEL', 'PJAPEL': 'PJAPEL', 'SRPPEL': 'SRPPEL', 'STPPEL': 'STPPEL', 'DEEPAR': 'DEEPAR', 'LAYER': 'LAYER', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Mangrove_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TKTHLR': 'TKTHLR', 'LAYER': 'LAYER', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Dermaga_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'FGSRDM': 'FGSRDM', 'KSTDRM': 'KSTDRM', 'OPERTR': 'OPERTR', 'PMLDRM': 'PMLDRM', 'STRDRM': 'STRDRM', 'LAYER': 'LAYER', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Garis_Pantai_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'DTMVER': 'DTMVER', 'KARGPN': 'KARGPN', 'TIPGPN': 'TIPGPN', 'KODGPN': 'KODGPN', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_LAMPUNGNIBOS_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', '-Kecamatan': 'TextEdit', '-Jumlah Pe': 'TextEdit', });
lyr_Tambak_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDTTMB': 'TextEdit', 'PNGTMB': 'TextEdit', 'LAYER': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Pesisir_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPPSS': 'TextEdit', 'STAPSS': 'TextEdit', 'LAYER': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Pelabuhan_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ADMPEL': 'TextEdit', 'ALJPEL': 'TextEdit', 'FGSPEL': 'TextEdit', 'JNSPEL': 'TextEdit', 'KLSPEL': 'TextEdit', 'KMNPEL': 'TextEdit', 'KMXPEL': 'TextEdit', 'KODBPL': 'TextEdit', 'KODPEL': 'TextEdit', 'KONKON': 'TextEdit', 'LAMPEL': 'TextEdit', 'NAMPEL': 'TextEdit', 'PJAPEL': 'TextEdit', 'SRPPEL': 'TextEdit', 'STPPEL': 'TextEdit', 'DEEPAR': 'TextEdit', 'LAYER': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Mangrove_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TKTHLR': 'TextEdit', 'LAYER': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Dermaga_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'FGSRDM': 'TextEdit', 'KSTDRM': 'TextEdit', 'OPERTR': 'TextEdit', 'PMLDRM': 'TextEdit', 'STRDRM': 'TextEdit', 'LAYER': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Garis_Pantai_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'DTMVER': 'TextEdit', 'KARGPN': 'TextEdit', 'TIPGPN': 'TextEdit', 'KODGPN': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_LAMPUNGNIBOS_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'hidden field', 'WADMKD': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', '-Kecamatan': 'inline label - visible with data', '-Jumlah Pe': 'inline label - visible with data', });
lyr_Tambak_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDTTMB': 'hidden field', 'PNGTMB': 'hidden field', 'LAYER': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_Pesisir_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'TIPPSS': 'hidden field', 'STAPSS': 'hidden field', 'LAYER': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_Pelabuhan_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'ADMPEL': 'hidden field', 'ALJPEL': 'hidden field', 'FGSPEL': 'hidden field', 'JNSPEL': 'hidden field', 'KLSPEL': 'hidden field', 'KMNPEL': 'hidden field', 'KMXPEL': 'hidden field', 'KODBPL': 'hidden field', 'KODPEL': 'hidden field', 'KONKON': 'hidden field', 'LAMPEL': 'hidden field', 'NAMPEL': 'hidden field', 'PJAPEL': 'hidden field', 'SRPPEL': 'hidden field', 'STPPEL': 'hidden field', 'DEEPAR': 'hidden field', 'LAYER': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_Mangrove_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'TKTHLR': 'hidden field', 'LAYER': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_Dermaga_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'FGSRDM': 'hidden field', 'KSTDRM': 'hidden field', 'OPERTR': 'hidden field', 'PMLDRM': 'hidden field', 'STRDRM': 'hidden field', 'LAYER': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_Garis_Pantai_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'DTMVER': 'hidden field', 'KARGPN': 'hidden field', 'TIPGPN': 'hidden field', 'KODGPN': 'hidden field', 'SHAPE_Leng': 'hidden field', });
lyr_Garis_Pantai_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});