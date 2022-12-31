 require([
	  "esri/config",
	 
	  "esri/views/MapView",
	  "esri/WebMap",
	  "esri/layers/FeatureLayer",
	   ], function ($esriConfig, $MapView,$WebMap,$FeatureLayer) {
        $esriConfig.apiKey = "AAPK449340f85b664e6b802d2d0e65eb4849vlSII8YqKpEj5Fn0hCy2qr4QyOAZRZSB6XWDc2-X8pFlNoRYoQoetUvFs1Y_JVKL";	
	
	// 创建地图
       const webmap = new $WebMap({
         portalItem: { // autocasts as new PortalItem()
           id: "dfda8a69a73c46efa5d2ec1c49d019f9"
         }
       });
	// 创建地图视图
        const view = new $MapView({
          map: webmap,
        
          container: "viewDiv" // Div element
        });
		//*******************************************添加和移除图层*********************************************************
			const road_317 = new $FeatureLayer({
			    url: "https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/317/FeatureServer",
			  });
			document.getElementById("Add_line1").addEventListener("click", function() {
				webmap.add(road_317);
			});
			
			const road_318 = new $FeatureLayer({
			    url: "https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/318/FeatureServer",
			  });
			document.getElementById("Add_line2").addEventListener("click", function() {
				webmap.add(road_318);
			});
			
			const railway_ck = new $FeatureLayer({
			    url: "https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/ck/FeatureServer",
			  });
			document.getElementById("Add_line3").addEventListener("click", function() {
				webmap.add(railway_ck);	
				});
				
			const railway_xc = new $FeatureLayer({
			    url: "https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/xicheng/FeatureServer",
			  });
			document.getElementById("Add_line4").addEventListener("click", function() {
				webmap.add(railway_xc);	
		      });
			 
			  
			  
			document.getElementById("Remove_line1").addEventListener("click", function () {
			  webmap.remove(road_317);
			});
			 document.getElementById("Remove_line2").addEventListener("click", function () {
			   webmap.remove(road_318);
			 });
			document.getElementById("Remove_line3").addEventListener("click", function () {
			  webmap.remove(railway_ck);
			});
			document.getElementById("Remove_line4").addEventListener("click", function () {
			  webmap.remove(railway_xc);
			});
		
      });