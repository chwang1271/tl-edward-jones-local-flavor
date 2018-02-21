    google.maps.event.addDomListener(window, 'load', init);

//alert(latvalue+' '+lngvalue);
//alert(zoomvalue);
    function init() {
		var markers = new Array();

		var mapstyle=[{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a0d6d1"},{"lightness":17}]},
		{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":20}]},
		{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#dedede"},{"lightness":17}]},
		{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#dedede"},{"lightness":29},{"weight":0.2}]},
		{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":18}]},
		{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},
		{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f1f1f1"},{"lightness":21}]},
		{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},
		{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},
		{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},
		{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},
		{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},
		{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];

var dragoption=false;

if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
    dragoption=true;
	}
        var mapOptions = {
            center: new google.maps.LatLng(latvalue, lngvalue),
            zoom: zoomvalue,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT,
            },
            disableDoubleClickZoom: true,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            scaleControl: false,
            scrollwheel: false,
            panControl: true,
            streetViewControl: false,
            draggable : dragoption,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: mapstyle,
        }//Ending Of Map Options






//Map For NewYork----------------------------------------------------------------------
        var mapElement1 = document.getElementById('map1');

if(mapElement1!=null&&mapElement1!=''){
        var map1 = new google.maps.Map(mapElement1, mapOptions);
        var locations1 = [
['328 Broome Street', 'Bang Bang', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/new-york-nolo#bang-bang-nyc', 40.7194093,-73.9956073, 'common/images/map-icon2.png','Read More', 'common/images/newyork_img1.jpg', 'common/images/newyork_img2.jpg', 'common/images/newyork_img3.jpg','1'],
['174 Elizabeth Street', 'Pietro Nolita', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/new-york-nolo#pietro-nolita', 40.7213842,-73.9991359, 'common/images/map-icon2.png','Watch Now', 'common/images/newyork_img4.jpg', 'common/images/newyork_img5.jpg', 'common/images/newyork_img6.jpg','2'],
['116 Forsyth Street', 'Cafe Henrie', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/new-york-nolo#cafe-henrie', 40.718924,-73.9939217, 'common/images/map-icon2.png','Read More', 'common/images/newyork_img7.jpg', 'common/images/newyork_img8.jpg', 'common/images/newyork_img9.jpg','3'],
['100 Forsyth Street', 'CW Pencil Enterprise', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/new-york-nolo#cw-pencils', 40.7185117,-73.9946295, 'common/images/map-icon2.png','Watch Now', 'common/images/newyork_img10.jpg', 'common/images/newyork_img11.jpg', 'common/images/newyork_img12.jpg','4'],
['373 Broome Street', 'Cha Cha Matcha', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/new-york-nolo#cha-cha-matcha', 40.7202501,-73.9996643, 'common/images/map-icon2.png','Watch Now', 'common/images/newyork_img13.jpg', 'common/images/newyork_img14.jpg', 'common/images/newyork_img15.jpg','5']
        ];
        for (i = 0; i < locations1.length; i++) {
			if (locations1[i][1] =='undefined'){ description ='';} else { description = locations1[i][1];}
			if (locations1[i][2] =='undefined'){ telephone ='';} else { telephone = locations1[i][2];}
			if (locations1[i][3] =='undefined'){ email ='';} else { email = locations1[i][3];}
           if (locations1[i][4] =='undefined'){ web ='';} else { web = locations1[i][4];}
           if (locations1[i][7] =='undefined'){ markericon ='';} else { markericon = locations1[i][7];}
		   if (locations1[i][8] =='undefined'){ button_text ='';} else { button_text = locations1[i][8];}
		   if (locations1[i][9] =='undefined'){ img1 ='';} else { img1 = locations1[i][9];}
		   if (locations1[i][10] =='undefined'){ img2 ='';} else { img2 = locations1[i][10];}
		   if (locations1[i][11] =='undefined'){ img3 ='';} else { img3 = locations1[i][11];}
		   if (locations1[i][12] =='undefined'){ pinid ='';} else { pinid = locations1[i][12];}

            marker1 = new google.maps.Marker({
				pinid:pinid,
				img1:img1,
				img2:img2,
				img3:img3,
				button_text:button_text,
                icon: {
					url:markericon,
					labelOrigin:new google.maps.Point(14,12)

					},
                position: new google.maps.LatLng(locations1[i][5], locations1[i][6]),
                map: map1,
                title: locations1[i][0],
				label: {
                text: pinid,
				color: '#ffffff',
				fontFamily:'"Playfair Display",serif',
				fontSize:'20px',
				fontWeight:'700',
                },
                desc: description,
                tel: telephone,
                email: email,
                web: web,
            });
				link = web;
				if (button_text== "Read More") {
				web = "read_more";
				} else if(button_text== "Watch Now"){
				web = "watch_now";
			}
            bindInfoWindow(marker1, map1, locations1[i][0], description, telephone, email, web, link, button_text, img1, img2, img3,pinid);
			 markers.push(marker1);
     }

}



//Map For Los Angeles----------------------------------------------------------------------
        var mapElement2 = document.getElementById('map2');

if(mapElement2!=null&&mapElement2!=''){
        var map2 = new google.maps.Map(mapElement2, mapOptions);
        var locations2 = [
['907 E. 3rd Street', 'Manuela', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/los-angeles-arts-district#manuela', 34.0456066,-118.2383425, 'common/images/map-icon2.png','Watch Now', 'common/images/la_img1.jpg', 'common/images/la_img2.jpg', 'common/images/la_img3.jpg','1'],
['912 E. 3rd Street', 'Guerilla Atelier', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/los-angeles-arts-district#guerilla-atelier', 34.0448665,-118.2351269, 'common/images/map-icon2.png','Watch Now', 'common/images/la_img4.jpg', 'common/images/la_img5.jpg', 'common/images/la_img6.jpg','2'],
['828 Traction Avenue', 'Arts District Brewing Co.', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/los-angeles-arts-district#arts-district-brewing-co', 34.0438149,-118.2373242, 'common/images/map-icon2.png','Read More', 'common/images/la_img7.jpg', 'common/images/la_img8.jpg', 'common/images/la_img8.jpg','3'],
['300 S. Santa Fe Avenue', 'Hennessey + Ingalls', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/los-angeles-arts-district#hennessey-ingalls', 34.0453686,-118.2326499, 'common/images/map-icon2.png','Watch Now', 'common/images/la_img9.jpg', 'common/images/la_img10.jpg', 'common/images/la_img11.jpg','4'],
['255 S. Santa Fe Avenue', 'Hammer and Spear', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/los-angeles-arts-district#hammer-and-spear', 34.0444987,-118.2327242, 'common/images/map-icon2.png','Read More', 'common/images/la_img12.jpg', 'common/images/la_img13.jpg', 'common/images/la_img14.jpg','5']
        ];
        for (i = 0; i < locations2.length; i++) {
			if (locations2[i][1] =='undefined'){ description ='';} else { description = locations2[i][1];}
			if (locations2[i][2] =='undefined'){ telephone ='';} else { telephone = locations2[i][2];}
			if (locations2[i][3] =='undefined'){ email ='';} else { email = locations2[i][3];}
           if (locations2[i][4] =='undefined'){ web ='';} else { web = locations2[i][4];}
           if (locations2[i][7] =='undefined'){ markericon ='';} else { markericon = locations2[i][7];}
		   if (locations2[i][8] =='undefined'){ button_text ='';} else { button_text = locations2[i][8];}
		   if (locations2[i][9] =='undefined'){ img1 ='';} else { img1 = locations2[i][9];}
		   if (locations2[i][10] =='undefined'){ img2 ='';} else { img2 = locations2[i][10];}
		   if (locations2[i][11] =='undefined'){ img3 ='';} else { img3 = locations2[i][11];}
		   if (locations2[i][12] =='undefined'){ pinid ='';} else { pinid = locations2[i][12];}

            marker2 = new google.maps.Marker({
				pinid:pinid,
				img1:img1,
				img2:img2,
				img3:img3,
				button_text:button_text,
                icon: {
					url:markericon,
					labelOrigin:new google.maps.Point(14,12)

					},
                position: new google.maps.LatLng(locations2[i][5], locations2[i][6]),
                map: map2,
                title: locations2[i][0],
				label: {
                text: pinid,
				color: '#ffffff',
				fontFamily:'"Playfair Display",serif',
				fontSize:'20px',
				fontWeight:'700',
                },
                desc: description,
                tel: telephone,
                email: email,
                web: web,
            });
				link = web;
				if (button_text== "Read More") {
				web = "read_more";
				} else if(button_text== "Watch Now"){
				web = "watch_now";
			}
            bindInfoWindow(marker2, map2, locations2[i][0], description, telephone, email, web, link, button_text, img1, img2, img3,pinid);
			 markers.push(marker2);
     }

}


//Map For Dallas----------------------------------------------------------------------
       var mapElement3 = document.getElementById('map3');

if(mapElement3!=null&&mapElement3!=''){
        var map3 = new google.maps.Map(mapElement3, mapOptions);
        var locations3 = [
['1919 Greenville Avenue', 'The Blind Butcher', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/dallas-lower-greenville#the-blind-butcher', 32.8118224,-96.770932, 'common/images/map-icon2.png','Read More', 'common/images/dallas_img1.jpg', 'common/images/dallas_img2.jpg', 'common/images/dallas_img3.jpg','1'],
['1925 Greenville Avenue', 'Dude, Sweet Chocolate', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/dallas-lower-greenville#dude-sweet-chocolate', 32.8134144,-96.7735057, 'common/images/map-icon2.png','Watch Now', 'common/images/dallas_img4.jpg', 'common/images/dallas_img5.jpg', 'common/images/dallas_img6.jpg','2'],
['5624 Sears Street', 'Truck Yard', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/dallas-lower-greenville#truck-yard', 32.8148846,-96.7748363, 'common/images/map-icon2.png','Watch Now', 'common/images/dallas_img7.jpg', 'common/images/dallas_img8.jpg', 'common/images/dallas_img9.jpg','3'],
['1909 Greenville Avenue', 'Bullzerk', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/dallas-lower-greenville#bullzerk', 32.8137061,-96.7728445, 'common/images/map-icon2.png','Watch Now', 'common/images/dallas_img10.jpg', 'common/images/dallas_img11.jpg', 'common/images/dallas_img12.jpg','4'],
['1808 Lower Greenville Avenue', 'Good Records', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/dallas-lower-greenville#good-records', 32.81071,-96.7701048, 'common/images/map-icon2.png','Read More', 'common/images/dallas_img13.jpg', 'common/images/dallas_img14.jpg', 'common/images/dallas_img15.jpg','5']
        ];
        for (i = 0; i < locations3.length; i++) {
			if (locations3[i][1] =='undefined'){ description ='';} else { description = locations3[i][1];}
			if (locations3[i][2] =='undefined'){ telephone ='';} else { telephone = locations3[i][2];}
			if (locations3[i][3] =='undefined'){ email ='';} else { email = locations3[i][3];}
           if (locations3[i][4] =='undefined'){ web ='';} else { web = locations3[i][4];}
           if (locations3[i][7] =='undefined'){ markericon ='';} else { markericon = locations3[i][7];}
		   if (locations3[i][8] =='undefined'){ button_text ='';} else { button_text = locations3[i][8];}
		   if (locations3[i][9] =='undefined'){ img1 ='';} else { img1 = locations3[i][9];}
		   if (locations3[i][10] =='undefined'){ img2 ='';} else { img2 = locations3[i][10];}
		   if (locations3[i][11] =='undefined'){ img3 ='';} else { img3 = locations3[i][11];}
		   if (locations3[i][12] =='undefined'){ pinid ='';} else { pinid = locations3[i][12];}

            marker3 = new google.maps.Marker({
				pinid:pinid,
				img1:img1,
				img2:img2,
				img3:img3,
				button_text:button_text,
                icon: {
					url:markericon,
					labelOrigin:new google.maps.Point(14,12)

					},
                position: new google.maps.LatLng(locations3[i][5], locations3[i][6]),
                map: map3,
                title: locations3[i][0],
				label: {
                text: pinid,
				color: '#ffffff',
				fontFamily:'"Playfair Display",serif',
				fontSize:'20px',
				fontWeight:'700',
                },
                desc: description,
                tel: telephone,
                email: email,
                web: web,
            });
				link = web;
				if (button_text== "Read More") {
				web = "read_more";
				} else if(button_text== "Watch Now"){
				web = "watch_now";
			}
            bindInfoWindow(marker3, map3, locations3[i][0], description, telephone, email, web, link, button_text, img1, img2, img3,pinid);
			 markers.push(marker3);
     }

}



//Map For Chicago----------------------------------------------------------------------
        var mapElement4 = document.getElementById('map4');

if(mapElement4!=null&&mapElement4!=''){
        var map4 = new google.maps.Map(mapElement4, mapOptions);
        var locations4 = [
['3201 W Armitage Ave', 'Scofflaw', 'undefined', 'undefined', 'http://www.foodandwine.com/local-flavor/chicago-logan-square#scofflaw', 41.917317,-87.706548, 'common/images/map-icon2.png','Watch Now', 'common/images/chicago_img1.jpg', 'common/images/chicago_img2.jpg', 'common/images/chicago_img3.jpg','1'],
['3025 W Diversey Ave', 'Cellar Door Provisions', 'undefined', 'undefined', 'http://www.foodandwine.com/local-flavor/chicago-logan-square#cellar-door-provisions', 41.931997,-87.703128, 'common/images/map-icon2.png','Watch Now', 'common/images/chicago_img4.jpg', 'common/images/chicago_img5.jpg', 'common/images/chicago_img6.jpg','2'],
['2651 N Milwaukee Ave', 'Fleur', 'undefined', 'undefined', 'http://www.foodandwine.com/local-flavor/chicago-logan-square#fleur', 41.930023,-87.708677, 'common/images/map-icon2.png','Read More', 'common/images/chicago_img7.jpg', 'common/images/chicago_img8.jpg', 'common/images/chicago_img9.jpg','3'],
['2950 N Oakley Ave', 'Vosges Haut-Chocolat', 'undefined', 'undefined', 'http://www.foodandwine.com/local-flavor/chicago-logan-square#vosges-haut-chocolat', 41.935457,-87.685670, 'common/images/map-icon2.png','Read More', 'common/images/chicago_img10.jpg', 'common/images/chicago_img11.jpg', 'common/images/chicago_img12.jpg','4'],
['2627 N Kedzie Ave', 'Meyvn', 'undefined', 'undefined', 'http://www.foodandwine.com/local-flavor/chicago-logan-square#meyvn', 41.929256,-87.707162, 'common/images/map-icon2.png','Watch Now', 'common/images/chicago_img13.jpg', 'common/images/chicago_img14.jpg', 'common/images/chicago_img15.jpg','5']
        ];
        for (i = 0; i < locations4.length; i++) {
			if (locations4[i][1] =='undefined'){ description ='';} else { description = locations4[i][1];}
			if (locations4[i][2] =='undefined'){ telephone ='';} else { telephone = locations4[i][2];}
			if (locations4[i][3] =='undefined'){ email ='';} else { email = locations4[i][3];}
           if (locations4[i][4] =='undefined'){ web ='';} else { web = locations4[i][4];}
           if (locations4[i][7] =='undefined'){ markericon ='';} else { markericon = locations4[i][7];}
		   if (locations4[i][8] =='undefined'){ button_text ='';} else { button_text = locations4[i][8];}
		   if (locations4[i][9] =='undefined'){ img1 ='';} else { img1 = locations4[i][9];}
		   if (locations4[i][10] =='undefined'){ img2 ='';} else { img2 = locations4[i][10];}
		   if (locations4[i][11] =='undefined'){ img3 ='';} else { img3 = locations4[i][11];}
		   if (locations4[i][12] =='undefined'){ pinid ='';} else { pinid = locations4[i][12];}

            marker4 = new google.maps.Marker({
				pinid:pinid,
				img1:img1,
				img2:img2,
				img3:img3,
				button_text:button_text,
                icon: {
					url:markericon,
					labelOrigin:new google.maps.Point(14,12)

					},
                position: new google.maps.LatLng(locations4[i][5], locations4[i][6]),
                map: map4,
                title: locations4[i][0],
				label: {
                text: pinid,
				color: '#ffffff',
				fontFamily:'"Playfair Display",serif',
				fontSize:'20px',
				fontWeight:'700',
                },
                desc: description,
                tel: telephone,
                email: email,
                web: web,
            });
				link = web;
				if (button_text== "Read More") {
				web = "read_more";
				} else if(button_text== "Watch Now"){
				web = "watch_now";
			}
            bindInfoWindow(marker4, map4, locations4[i][0], description, telephone, email, web, link, button_text, img1, img2, img3,pinid);
			 markers.push(marker4);
     }

}


//Map For Washington DC----------------------------------------------------------------------
        var mapElement5 = document.getElementById('map5');

if(mapElement5!=null&&mapElement5!=''){
        var map5 = new google.maps.Map(mapElement5, mapOptions);
        var locations5 = [
['805 V Street NW', 'Haikan', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/washington-dc-north-end-shaw#haikan', 38.917901,-77.022882, 'common/images/map-icon2.png','Watch Now', 'common/images/washington_img1.jpg', 'common/images/washington_img2.jpg', 'common/images/washington_img3.jpg','1'],
['808 V Street NW', 'Hazel', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/washington-dc-north-end-shaw#hazel', 38.917623,-77.023120, 'common/images/map-icon2.png','Watch Now', 'common/images/washington_img4.jpg', 'common/images/washington_img5.jpg', 'common/images/washington_img6.jpg','2'],
['1535 7th Street NW', 'Compass Coffee', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/washington-dc-north-end-shaw#compass-coffee', 38.910561,-77.021392, 'common/images/map-icon2.png','Watch Now', 'common/images/washington_img7.jpg', 'common/images/washington_img8.jpg', 'common/images/washington_img9.jpg','3'],
['1921 8th Street NW', 'Read Wall', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/washington-dc-north-end-shaw#read-wall', 38.916235,-77.022354, 'common/images/map-icon2.png','Read More', 'common/images/washington_img10.jpg', 'common/images/washington_img11.jpg', 'common/images/washington_img12.jpg','4'],
['2124 8th Street NW', 'Washington Project for the Arts', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/washington-dc-north-end-shaw#washington-project-arts', 38.918461,-77.022952, 'common/images/map-icon2.png','Read More', 'common/images/washington_img13.jpg', 'common/images/washington_img14.jpg', 'common/images/washington_img15.jpg','5']
        ];
        for (i = 0; i < locations5.length; i++) {
			if (locations5[i][1] =='undefined'){ description ='';} else { description = locations5[i][1];}
			if (locations5[i][2] =='undefined'){ telephone ='';} else { telephone = locations5[i][2];}
			if (locations5[i][3] =='undefined'){ email ='';} else { email = locations5[i][3];}
           if (locations5[i][4] =='undefined'){ web ='';} else { web = locations5[i][4];}
           if (locations5[i][7] =='undefined'){ markericon ='';} else { markericon = locations5[i][7];}
		   if (locations5[i][8] =='undefined'){ button_text ='';} else { button_text = locations5[i][8];}
		   if (locations5[i][9] =='undefined'){ img1 ='';} else { img1 = locations5[i][9];}
		   if (locations5[i][10] =='undefined'){ img2 ='';} else { img2 = locations5[i][10];}
		   if (locations5[i][11] =='undefined'){ img3 ='';} else { img3 = locations5[i][11];}
		   if (locations5[i][12] =='undefined'){ pinid ='';} else { pinid = locations5[i][12];}

            marker5 = new google.maps.Marker({
				pinid:pinid,
				img1:img1,
				img2:img2,
				img3:img3,
				button_text:button_text,
                icon: {
					url:markericon,
					labelOrigin:new google.maps.Point(14,12)

					},
                position: new google.maps.LatLng(locations5[i][5], locations5[i][6]),
                map: map5,
                title: locations5[i][0],
				label: {
                text: pinid,
				color: '#ffffff',
				fontFamily:'"Playfair Display",serif',
				fontSize:'20px',
				fontWeight:'700',
                },
                desc: description,
                tel: telephone,
                email: email,
                web: web,
            });
				link = web;
				if (button_text== "Read More") {
				web = "read_more";
				} else if(button_text== "Watch Now"){
				web = "watch_now";
			}
            bindInfoWindow(marker5, map5, locations5[i][0], description, telephone, email, web, link, button_text, img1, img2, img3,pinid);
			 markers.push(marker5);
     }
}

//Map For Nashville TN----------------------------------------------------------------------
var mapElement6 = document.getElementById('map6');

if(mapElement6!=null&&mapElement6!=''){
  var map6 = new google.maps.Map(mapElement6, mapOptions);
  var locations6 = [
['1200 Villa Place #103', 'Old Glory', 'undefined', 'undefined', 'http://www.foodandwine.com/local-flavor/nashville-edgehill-village#old-glory', 36.142725,-86.790041, 'common/images/map-icon2.png','Read More', 'common/images/nashville_img1.jpg', 'common/images/nashville_img2.jpg', 'common/images/nashville_img3.jpg','1'],
['1200 Villa Place #110', 'Barcelona Wine Bar', 'undefined', 'undefined', 'http://www.foodandwine.com/local-flavor/nashville-edgehill-village#barcelona-bar', 36.142730,-86.791413, 'common/images/map-icon2.png','Watch Now', 'common/images/nashville_img4.jpg', 'common/images/nashville_img5.jpg', 'common/images/nashville_img6.jpg','2'],
['1200 Villa Place #403', 'Castilleja', 'undefined', 'undefined', 'http://www.foodandwine.com/local-flavor/nashville-edgehill-village#castilleja', 36.142688,-86.791355, 'common/images/map-icon2.png','Watch Now', 'common/images/nashville_img7.jpg', 'common/images/nashville_img8.jpg', 'common/images/nashville_img9.jpg','3'],
['1200 Villa Place #113', 'Legato Gelato', 'undefined', 'undefined', 'http://www.foodandwine.com/local-flavor/nashville-edgehill-village#legato-gelato', 36.142892,-86.791423, 'common/images/map-icon2.png','Read More', 'common/images/nashville_img10.jpg', 'common/images/nashville_img11.jpg', 'common/images/nashville_img12.jpg','4'],
['1201 Villa Place #101', 'Edgehill Cafe', 'undefined', 'undefined', 'http://www.foodandwine.com/local-flavor/nashville-edgehill-village#edgehill-cafe', 36.142978,-86.792338, 'common/images/map-icon2.png','Read More', 'common/images/nashville_img13.jpg', 'common/images/nashville_img14.jpg', 'common/images/nashville_img15.jpg','5']
  ];
  for (i = 0; i < locations6.length; i++) {
    if (locations6[i][1] =='undefined'){ description ='';} else { description = locations6[i][1];}
    if (locations6[i][2] =='undefined'){ telephone ='';} else { telephone = locations6[i][2];}
    if (locations6[i][3] =='undefined'){ email ='';} else { email = locations6[i][3];}
    if (locations6[i][4] =='undefined'){ web ='';} else { web = locations6[i][4];}
    if (locations6[i][7] =='undefined'){ markericon ='';} else { markericon = locations6[i][7];}
    if (locations6[i][8] =='undefined'){ button_text ='';} else { button_text = locations6[i][8];}
    if (locations6[i][9] =='undefined'){ img1 ='';} else { img1 = locations6[i][9];}
    if (locations6[i][10] =='undefined'){ img2 ='';} else { img2 = locations6[i][10];}
    if (locations6[i][11] =='undefined'){ img3 ='';} else { img3 = locations6[i][11];}
    if (locations6[i][12] =='undefined'){ pinid ='';} else { pinid = locations6[i][12];}

    marker6 = new google.maps.Marker({
      pinid:pinid,
      img1:img1,
      img2:img2,
      img3:img3,
      button_text:button_text,
      icon: {
  			url:markericon,
  			labelOrigin:new google.maps.Point(14,12)
			},
      position: new google.maps.LatLng(locations6[i][5], locations6[i][6]),
      map: map6,
      title: locations6[i][0],
      label: {
        text: pinid,
				color: '#ffffff',
				fontFamily:'"Playfair Display",serif',
				fontSize:'20px',
				fontWeight:'700',
      },
      desc: description,
      tel: telephone,
      email: email,
      web: web,
    });
	  link = web;
	  if (button_text== "Read More") {
      web = "read_more";
    } else if(button_text== "Watch Now"){
    web = "watch_now";
    }
    bindInfoWindow(marker6, map6, locations6[i][0], description, telephone, email, web, link, button_text, img1, img2, img3,pinid);
    markers.push(marker6);
  }
}

//Map For San Francisco CA----------------------------------------------------------------------
var mapElement7 = document.getElementById('map7');

if(mapElement7!=null&&mapElement7!=''){
  var map7 = new google.maps.Map(mapElement7, mapOptions);
  var locations7 = [
['595 Alabama St', 'Tartine Manufactory', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/san-francisco-mission-district#tartine-manufactory', 37.761854,-122.411636, 'common/images/map-icon2.png','Read More', 'common/images/sanfrancisco_img1.jpg', 'common/images/sanfrancisco_img2.jpg', 'common/images/sanfrancisco_img3.jpg','1'],
['2900 18th St', 'Heath Ceramics', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/san-francisco-mission-district#heath-cermics', 37.761761,-122.412005, 'common/images/map-icon2.png','Watch Now', 'common/images/sanfrancisco_img4.jpg', 'common/images/sanfrancisco_img5.jpg', 'common/images/sanfrancisco_img6.jpg','2'],
['3010 20th St', 'Trick Dog', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/san-francisco-mission-district#trick-dog', 37.759204,-122.411795, 'common/images/map-icon2.png','Watch Now', 'common/images/sanfrancisco_img7.jpg', 'common/images/sanfrancisco_img8.jpg', 'common/images/sanfrancisco_img9.jpg','3'],
['2501 Mariposa St', 'The Morris', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/san-francisco-mission-district#the-morris', 37.763008,-122.408268, 'common/images/map-icon2.png','Watch Now', 'common/images/sanfrancisco_img10.jpg', 'common/images/sanfrancisco_img11.jpg', 'common/images/sanfrancisco_img12.jpg','4'],
['535 Florida St', 'Charles Chocolates', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/san-francisco-mission-district#charles-chocolates', 37.762486,-122.410450, 'common/images/map-icon2.png','Read More', 'common/images/sanfrancisco_img13.jpg', 'common/images/sanfrancisco_img14.jpg', 'common/images/sanfrancisco_img15.jpg','5']
  ];
  for (i = 0; i < locations7.length; i++) {
    if (locations7[i][1] =='undefined'){ description ='';} else { description = locations7[i][1];}
    if (locations7[i][2] =='undefined'){ telephone ='';} else { telephone = locations7[i][2];}
    if (locations7[i][3] =='undefined'){ email ='';} else { email = locations7[i][3];}
    if (locations7[i][4] =='undefined'){ web ='';} else { web = locations7[i][4];}
    if (locations7[i][7] =='undefined'){ markericon ='';} else { markericon = locations7[i][7];}
    if (locations7[i][8] =='undefined'){ button_text ='';} else { button_text = locations7[i][8];}
    if (locations7[i][9] =='undefined'){ img1 ='';} else { img1 = locations7[i][9];}
    if (locations7[i][10] =='undefined'){ img2 ='';} else { img2 = locations7[i][10];}
    if (locations7[i][11] =='undefined'){ img3 ='';} else { img3 = locations7[i][11];}
    if (locations7[i][12] =='undefined'){ pinid ='';} else { pinid = locations7[i][12];}

    marker7 = new google.maps.Marker({
      pinid:pinid,
      img1:img1,
      img2:img2,
      img3:img3,
      button_text:button_text,
      icon: {
  			url:markericon,
  			labelOrigin:new google.maps.Point(14,12)
			},
      position: new google.maps.LatLng(locations7[i][5], locations7[i][6]),
      map: map7,
      title: locations7[i][0],
      label: {
        text: pinid,
				color: '#ffffff',
				fontFamily:'"Playfair Display",serif',
				fontSize:'20px',
				fontWeight:'700',
      },
      desc: description,
      tel: telephone,
      email: email,
      web: web,
    });
	  link = web;
	  if (button_text== "Read More") {
      web = "read_more";
    } else if(button_text== "Watch Now"){
    web = "watch_now";
    }
    bindInfoWindow(marker7, map7, locations7[i][0], description, telephone, email, web, link, button_text, img1, img2, img3,pinid);
    markers.push(marker7);
  }
}

//Map For Seattle WA-----------------------------------------------------------
var mapElement8 = document.getElementById('map8');

if(mapElement8!=null&&mapElement8!=''){
  var map8 = new google.maps.Map(mapElement8, mapOptions);
  var locations8 = [
['323 Occidental Ave. S.', 'Copal', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/boston-fenway#copal', 47.599258,-122.332398, 'common/images/map-icon2.png','Read More', 'common/images/seattle_img1.jpg', 'common/images/seattle_img2.jpg', 'common/images/seattle_img3.jpg','1'],
['119 1st Avenue S.', 'The Sovereign', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/boston-fenway#sovereign', 47.601023,-122.334172, 'common/images/map-icon2.png','Read More', 'common/images/seattle_img4.jpg', 'common/images/seattle_img5.jpg', 'common/images/seattle_img6.jpg','2'],
['208 1st Ave S.', 'E. Smith Mercantile', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/boston-fenway#e-smith-mercantile', 47.600517,-122.333418, 'common/images/map-icon2.png','Watch Now', 'common/images/seattle_img7.jpg', 'common/images/seattle_img8.jpg', 'common/images/seattle_img9.jpg','3'],
['536 1st Avenue S.', 'Division Road', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/boston-fenway#division-road', 47.597244,-122.333191, 'common/images/map-icon2.png','Watch Now', 'common/images/seattle_img10.jpg', 'common/images/seattle_img11.jpg', 'common/images/seattle_img12.jpg','4'],
['240 2nd Ave S #103', 'Elm Coffee Roasters', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/boston-fenway#elm-street-coffee-roasters', 47.600122,-122.331362, 'common/images/map-icon2.png','Watch Now', 'common/images/seattle_img13.jpg', 'common/images/seattle_img14.jpg', 'common/images/seattle_img15.jpg','5']
  ];
  for (i = 0; i < locations8.length; i++) {
    if (locations8[i][1] =='undefined'){ description ='';} else { description = locations8[i][1];}
    if (locations8[i][2] =='undefined'){ telephone ='';} else { telephone = locations8[i][2];}
    if (locations8[i][3] =='undefined'){ email ='';} else { email = locations8[i][3];}
    if (locations8[i][4] =='undefined'){ web ='';} else { web = locations8[i][4];}
    if (locations8[i][7] =='undefined'){ markericon ='';} else { markericon = locations8[i][7];}
    if (locations8[i][8] =='undefined'){ button_text ='';} else { button_text = locations8[i][8];}
    if (locations8[i][9] =='undefined'){ img1 ='';} else { img1 = locations8[i][9];}
    if (locations8[i][10] =='undefined'){ img2 ='';} else { img2 = locations8[i][10];}
    if (locations8[i][11] =='undefined'){ img3 ='';} else { img3 = locations8[i][11];}
    if (locations8[i][12] =='undefined'){ pinid ='';} else { pinid = locations8[i][12];}

    marker8 = new google.maps.Marker({
      pinid:pinid,
      img1:img1,
      img2:img2,
      img3:img3,
      button_text:button_text,
      icon: {
  			url:markericon,
  			labelOrigin:new google.maps.Point(14,12)
			},
      position: new google.maps.LatLng(locations8[i][5], locations8[i][6]),
      map: map8,
      title: locations8[i][0],
      label: {
        text: pinid,
				color: '#ffffff',
				fontFamily:'"Playfair Display",serif',
				fontSize:'20px',
				fontWeight:'700',
      },
      desc: description,
      tel: telephone,
      email: email,
      web: web,
    });
	  link = web;
	  if (button_text== "Read More") {
      web = "read_more";
    } else if(button_text== "Watch Now"){
    web = "watch_now";
    }
    bindInfoWindow(marker8, map8, locations8[i][0], description, telephone, email, web, link, button_text, img1, img2, img3,pinid);
    markers.push(marker8);
  }
}

//Map For Boston MA-----------------------------------------------------------
var mapElement9 = document.getElementById('map9');

if(mapElement9!=null&&mapElement9!=''){
  var map9 = new google.maps.Map(mapElement9, mapOptions);
  var locations9 = [
['92 Van Ness Street', 'Bostonian Barber Shop', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/boston-fenway#bonstonian-barber-shop', 42.341776,-71.104987, 'common/images/map-icon2.png','Read More', 'common/images/boston_img1.jpg', 'common/images/boston_img2.jpg', 'common/images/boston_img3.jpg','1'],
['1363 Boylston Street', 'Tiger Mama', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/boston-fenway#tiger-mama', 42.344069,-71.099996, 'common/images/map-icon2.png','Watch Now', 'common/images/boston_img4.jpg', 'common/images/boston_img5.jpg', 'common/images/boston_img6.jpg','2'],
['1369 Boylston Street', 'Alps & Meters', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/boston-fenway#alsp-and-meyers', 42.344151,-71.100005, 'common/images/map-icon2.png','Watch Now', 'common/images/boston_img7.jpg', 'common/images/boston_img8.jpg', 'common/images/boston_img9.jpg','3'],
['1336 Boylston Street', 'The Handle Bar', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/boston-fenway#handle-bar', 42.344082,-71.097975, 'common/images/map-icon2.png','Read More', 'common/images/boston_img10.jpg', 'common/images/boston_img11.jpg', 'common/images/boston_img12.jpg','4'],
['4 Kilmarnock Street', 'Saloniki Greek', 'undefined', 'undefined', 'http://www.travelandleisure.com/local-flavor/boston-fenway#saloniki-greek', 42.344769,-71.099902, 'common/images/map-icon2.png','Watch Now', 'common/images/boston_img13.jpg', 'common/images/boston_img14.jpg', 'common/images/boston_img15.jpg','5']
  ];
  for (i = 0; i < locations9.length; i++) {
    if (locations9[i][1] =='undefined'){ description ='';} else { description = locations9[i][1];}
    if (locations9[i][2] =='undefined'){ telephone ='';} else { telephone = locations9[i][2];}
    if (locations9[i][3] =='undefined'){ email ='';} else { email = locations9[i][3];}
    if (locations9[i][4] =='undefined'){ web ='';} else { web = locations9[i][4];}
    if (locations9[i][7] =='undefined'){ markericon ='';} else { markericon = locations9[i][7];}
    if (locations9[i][8] =='undefined'){ button_text ='';} else { button_text = locations9[i][8];}
    if (locations9[i][9] =='undefined'){ img1 ='';} else { img1 = locations9[i][9];}
    if (locations9[i][10] =='undefined'){ img2 ='';} else { img2 = locations9[i][10];}
    if (locations9[i][11] =='undefined'){ img3 ='';} else { img3 = locations9[i][11];}
    if (locations9[i][12] =='undefined'){ pinid ='';} else { pinid = locations9[i][12];}

    marker9 = new google.maps.Marker({
      pinid:pinid,
      img1:img1,
      img2:img2,
      img3:img3,
      button_text:button_text,
      icon: {
  			url:markericon,
  			labelOrigin:new google.maps.Point(14,12)
			},
      position: new google.maps.LatLng(locations9[i][5], locations9[i][6]),
      map: map9,
      title: locations9[i][0],
      label: {
        text: pinid,
				color: '#ffffff',
				fontFamily:'"Playfair Display",serif',
				fontSize:'20px',
				fontWeight:'700',
      },
      desc: description,
      tel: telephone,
      email: email,
      web: web,
    });
	  link = web;
	  if (button_text== "Read More") {
      web = "read_more";
    } else if(button_text== "Watch Now"){
    web = "watch_now";
    }
    bindInfoWindow(marker9, map9, locations9[i][0], description, telephone, email, web, link, button_text, img1, img2, img3,pinid);
    markers.push(marker9);
  }
}

//Map For Raleigh NC-----------------------------------------------------------
var mapElement10 = document.getElementById('map10');

if(mapElement10!=null&&mapElement10!=''){
  var map10 = new google.maps.Map(mapElement10, mapOptions);
  var locations10 = [
['616 N. Person Street', 'William & Company', 'undefined', 'undefined', 'https://www.foodandwine.com/local-flavor/raleigh-north-person-street#william-company', 35.788738,-78.633971, 'common/images/map-icon2.png','Read More', 'common/images/boston_img1.jpg', 'common/images/boston_img2.jpg', 'common/images/boston_img3.jpg','1'],
['205 E. Franklin Street', 'Standard Foods', 'undefined', 'undefined', 'https://www.foodandwine.com/local-flavor/raleigh-north-person-street#standard-foods', 35.790237,-78.634910, 'common/images/map-icon2.png','Watch Now', 'common/images/boston_img4.jpg', 'common/images/boston_img5.jpg', 'common/images/boston_img6.jpg','2'],
['215-120 E. Franklin Street', 'Lumina Clothing', 'undefined', 'undefined', 'https://www.foodandwine.com/local-flavor/raleigh-north-person-street#lumina-clothing', 35.790526,-78.634560, 'common/images/map-icon2.png','Watch Now', 'common/images/boston_img7.jpg', 'common/images/boston_img8.jpg', 'common/images/boston_img9.jpg','3'],
['215-110 E. Franklin Street', 'Edge of Urge', 'undefined', 'undefined', 'https://www.foodandwine.com/local-flavor/raleigh-north-person-street#edge-urge', 35.790358,-78.635011, 'common/images/map-icon2.png','Read More', 'common/images/boston_img10.jpg', 'common/images/boston_img11.jpg', 'common/images/boston_img12.jpg','4'],
['702 N. Person Street', 'Person Street Pharmacy and Café', 'undefined', 'undefined', 'https://www.foodandwine.com/local-flavor/raleigh-north-person-street#person-street-pharmacy-and-cafe', 35.789108,-78.633285, 'common/images/map-icon2.png','Watch Now', 'common/images/boston_img13.jpg', 'common/images/boston_img14.jpg', 'common/images/boston_img15.jpg','5']
  ];
  for (i = 0; i < locations10.length; i++) {
    if (locations10[i][1] =='undefined'){ description ='';} else { description = locations10[i][1];}
    if (locations10[i][2] =='undefined'){ telephone ='';} else { telephone = locations10[i][2];}
    if (locations10[i][3] =='undefined'){ email ='';} else { email = locations10[i][3];}
    if (locations10[i][4] =='undefined'){ web ='';} else { web = locations10[i][4];}
    if (locations10[i][7] =='undefined'){ markericon ='';} else { markericon = locations10[i][7];}
    if (locations10[i][8] =='undefined'){ button_text ='';} else { button_text = locations10[i][8];}
    if (locations10[i][9] =='undefined'){ img1 ='';} else { img1 = locations10[i][9];}
    if (locations10[i][10] =='undefined'){ img2 ='';} else { img2 = locations10[i][10];}
    if (locations10[i][11] =='undefined'){ img3 ='';} else { img3 = locations10[i][11];}
    if (locations10[i][12] =='undefined'){ pinid ='';} else { pinid = locations10[i][12];}

    marker10 = new google.maps.Marker({
      pinid:pinid,
      img1:img1,
      img2:img2,
      img3:img3,
      button_text:button_text,
      icon: {
  			url:markericon,
  			labelOrigin:new google.maps.Point(14,12)
			},
      position: new google.maps.LatLng(locations10[i][5], locations10[i][6]),
      map: map10,
      title: locations10[i][0],
      label: {
        text: pinid,
				color: '#ffffff',
				fontFamily:'"Playfair Display",serif',
				fontSize:'20px',
				fontWeight:'700',
      },
      desc: description,
      tel: telephone,
      email: email,
      web: web,
    });
	  link = web;
	  if (button_text== "Read More") {
      web = "read_more";
    } else if(button_text== "Watch Now"){
    web = "watch_now";
    }
    bindInfoWindow(marker10, map10, locations10[i][0], description, telephone, email, web, link, button_text, img1, img2, img3,pinid);
    markers.push(marker10);
  }
}

//bindInfoWindow definition
function bindInfoWindow(marker, map, title, desc, telephone, email, web, link, button_text, img1, img2, img3,pinid) {
      var infoWindowVisible = (function () {
              var currentlyVisible = false;
              return function (visible) {
                  if (visible !== undefined) {
                      currentlyVisible = visible;
                  }
                  return currentlyVisible;
               };
           }());

           iw = new google.maps.InfoWindow();
           google.maps.event.addListener(marker, 'click', function() {
                   iw.close();
                   infoWindowVisible(false);


				   var html;

				   if(img3==null||img3==''){
                    html= '<div class="headings" style="float:left; padding:5px 5px 5px 5px;width:100%; text-align:center;"><span>'+title+'</span><h3>'+desc+'</h3></div><div class="slider_sec" style="float:left; width:100%; text-align:center; position:relative;"><div class="img_slider" style="float:left; width:100%; text-align:center;"><img src="'+img1+'" alt=""><img src="'+img2+'" alt=""></div><div class="paging"></div><div class="next_img"></div></div><div class="map_popup" style="float:left; padding:5px 5px 5px 5px;width:100%; text-align:center;"><a class="'+web+'" target="_blank" href="'+link+'">'+button_text+'</a></div>';
					   }else{
                    html= '<div class="headings" style="float:left; padding:5px 5px 5px 5px;width:100%; text-align:center;"><span>'+title+'</span><h3>'+desc+'</h3></div><div class="slider_sec" style="float:left; width:100%; text-align:center; position:relative;"><div class="img_slider" style="float:left; width:100%; text-align:center;"><img src="'+img1+'" alt=""><img src="'+img2+'" alt=""><img src="'+img3+'" alt=""></div><div class="paging"></div><div class="next_img"></div></div><div class="map_popup" style="float:left; padding:5px 5px 5px 5px;width:100%; text-align:center;"><a class="'+web+'" target="_blank" href="'+link+'">'+button_text+'</a></div>';
						   }

                   iw = new google.maps.InfoWindow({content:html,maxWidth: 300});
                   iw.open(map,marker);
                   infoWindowVisible(true);




   // Reference to the DIV which receives the contents of the infowindow using jQuery
   var iwOuter = $('.gm-style-iw');
   /* The DIV we want to change is above the .gm-style-iw DIV.
    * So, we use jQuery and create a iwBackground variable,
    * and took advantage of the existing reference to .gm-style-iw for the previous DIV with .prev().
    */
   var iwBackground = iwOuter.prev();
   // Remove the background shadow DIV
   iwBackground.children(':nth-child(2)').css({'display' : 'none'});
   // Remove the white background DIV
   iwBackground.children(':nth-child(4)').css({'display' : 'none'});

// To Customize arrow css
   iwBackground.children(':nth-child(3)').find('div:nth-child(1)').children().css({'box-shadow': '-5px 0 10px rgba(0, 0, 0, 0.2)','z-index': '999','height':'15px','width':'15px','left':'0px','transform':'skewX(45deg)'});
   iwBackground.children(':nth-child(3)').find('div:nth-child(2)').children().css({'box-shadow': '0 0 10px rgba(0, 0, 0, 0.2)','z-index': '999','height':'15px','width':'15px','transform':'skewX(-45deg)'});



	//To Intiate Slider Inside Infowindow
   $('.gm-style-iw').find('div.img_slider').cycle({ fx:'fade', slides:'> img', speed:800,timeout:2000, pauseOnHover: true, pager:'.paging', swipe:true,timeout:3000,next:'.next_img' });

	$('.gm-style-iw').find('div.map_popup a').on('click', function() {
		utag.link({ "click_id": this.hash.substr(1) });
    });


   //To Place active state icon on marker
	for (var j = 0; j < markers.length; j++) {
      markers[j].setIcon({url:"common/images/map-icon2.png",size: new google.maps.Size(31, 40),labelOrigin:new google.maps.Point(14,12)});
    }
    marker.setIcon({url:"common/images/map-icon1.png",size: new google.maps.Size(31, 40),labelOrigin:new google.maps.Point(14,12)});

   //Add and remove active class on thumb
    $('.thumb_container .thumb_box').removeClass('active');
    $('#thumb'+pinid).addClass('active');

   //To Scroll the relative thumb into view on left side
   var pane = $('.left_sec');
   var api = pane.data('jsp');
   api.scrollToY(parseInt($('#thumb'+pinid).position().top));
   map.setCenter(marker.getPosition());

        });


   google.maps.event.addListener(iw, 'closeclick', function () {
         infoWindowVisible(false);
      });



//change map center on resize window
var currCenter = map.getCenter();
	$(window).on('resize', function () {
		for (var j = 0; j < markers.length; j++) {
      markers[j].setIcon({url:"common/images/map-icon2.png",size: new google.maps.Size(31, 40),labelOrigin:new google.maps.Point(14,12)});
    }
	$('.thumb_container .thumb_box').removeClass('active');
  iw.close();
  google.maps.event.trigger(map, 'resize');
  map.setCenter(currCenter);
});




 }



    // Trigger a click event on each marker when the corresponding marker link is clicked
    $('.thumb_box a.btn_overlay').on('click', function () {
        google.maps.event.trigger(markers[$(this).data('markerid')], 'click');
    });


}//Ending Of init function
