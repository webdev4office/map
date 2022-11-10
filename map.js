var map;
var locations = [];
var gmarkers1 = [];
var infoWindowMyLocation
var infowindow;

function initMap() {
  
    // if (jQuery("body").hasClass("rtl")) { 
    locations = [
                ["Economy Boat Store","36.942680","-84.789190","Economy Boat Store","<table><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b36601ca56ae6f71906_phone-icon.svg' alt='phone icon'><\/td> <td><a href='tel:2514330066'>(251) 433-0066<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='pobox icon'><\/td><td>Mobile, AL 36602<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td> <td>‍‍115 Cochran Causeway<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/5y3trpDBCtkKbRAW7'>Get Directions <\/a>","","Marine"],
                ["WOODRIVER (ECONOMY BOAT STORE)","38.85001","-90.10814","WOODRIVER (ECONOMY BOAT STORE)","<table><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b36601ca56ae6f71906_phone-icon.svg' alt='phone icon'><\/td> <td><a href='tel:2514330066'>(251) 433-0066<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='pobox icon'><\/td><td>200 South Amoco Cutoff, P.O. Box 589<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td> <td>Wood River, IL 62095<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/P1h3Yorgb5o8mQNj6'>Get Directions <\/a>","","Marine"],
                ["WICKLIFFE (ECONOMY BOAT STORE)","36.96605","-89.09331","WICKLIFFE (ECONOMY BOAT STORE)","<table><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b36601ca56ae6f71906_phone-icon.svg' alt='phone icon'><\/td> <td><a href='tel:2703353189'>(270) 335-3189<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='pobox icon'><\/td><td>169 River Cir Dr.<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td> <td>Wickliffe, KY 42087<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/yPZrq5FhV98zbhtYA'>Get Directions <\/a>","","Marine"],
                ["Baton Rouge","30.38722","-91.21498","Baton Rouge","<table><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b36601ca56ae6f71906_phone-icon.svg' alt='phone icon'><\/td> <td><a href='tel:2258191743'>(225) 819-1743<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='pobox icon'><\/td><td>6012 South River Rd<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td> <td>Baton Rouge, LA 70820<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/tBTQZHEHYzGq1wLR9'>Get Directions <\/a>","","Marine"],
                ["St Louis","38.58148","-90.22106","St Louis","<table><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b36601ca56ae6f71906_phone-icon.svg' alt='phone icon'><\/td> <td><a href='tel:3147413667'>(314) 741-3667<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='pobox icon'><\/td><td>3854 South First St<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td> <td>St Louis, MO 63118<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/cUNvrj9T1KrBZmSUA'>Get Directions <\/a>","","Marine"],
                ["MEMPHIS","35.12370","-90.07289","MEMPHIS","<table><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b36601ca56ae6f71906_phone-icon.svg' alt='phone icon'><\/td><td><a href='tel:9017753131'>(901) 775-3131<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='pobox icon'><\/td><td>389 West Illinois Ave., P.O. Box 56<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td> <td>Memphis, TN 38101<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/Z9FxZafACn4YWhVx8'>Get Directions <\/a>","","Marine"],
                ["Houston","29.78726","-95.09482","Houston","<table><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b36601ca56ae6f71906_phone-icon.svg' alt='phone icon'><\/td><td><a href='tel:8324353132'>8324353132<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='pobox icon'><\/td><td>Channelview, TX 77530<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td> <td>17002 Market St<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/DxmK3iAxzurvsA6h7'>Get Directions <\/a>","","Marine"],



                ["Damascus","33.513805","36.276527","Damascus","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='pobox icon'><\/td><td>1894 Hwy 124<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td> <td>Damascus, AR 72039<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/E4CtkVsvhc6tz7YS9'>Get Directions <\/a>","","Distribution"],
                ["phoneix","32.172852","-81.324310","phoneix","<table><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b36601ca56ae6f71906_phone-icon.svg' alt='details icon'><\/td> <td><a>623.300.7960<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td> <td>3620 E Roeser Road<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td> <td>Phoenix, AZ 85040<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/MW6G6Ar4r7uRiiCY9'>Get Directions <\/a>","","Distribution"],
                ["BISHOP","37.361408","-118.395271","BISHOP","<table><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td> <td>481 East Line Rd<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td> <td>Bishop, CA 93514<\/td><\/tr></table><a class='get-direction-btn' target='_blank' https://goo.gl/maps/bDjUNWhh89YztzYi6'> Get Directions <\/a>","","Distribution"],
                ["EAST RANCHO DOMINGUEZ","33.896149","-118.194519","EAST RANCHO DOMINGUEZ","<table><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td> <td>19501 S Santa Fe Ave<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td> <td>East Rancho Dominguez, CA 90221<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/xNnwXPQRZhB51g6WA'> Get Directions <\/a>","","Distribution"],
                ["HUNTINGTON BEACH","33.659771","-117.999313","HUNTINGTON BEACH","<table><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td> <td>15922 Pacific Coast Highway<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td> <td>Huntington Beach, CA 92649<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/Vg8zNXQErstEpwLZ7'> Get Directions <\/a>","","Distribution"],
                ["RICHMOND","37.96848","-122.36765","RICHMOND","<table><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td> <td>255 Parr Blvd Suite 220<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td> <td>Richmond, CA 94801<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/Vg8zNXQErstEpwLZ7'> Get Directions <\/a>","","Distribution"],
                ["SAN FRANCISCO","37.96848","-122.36765","SAN FRANCISCO","<table><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td> <td>Pier 50<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td> <td>San Francisco, CA 94158<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/AN2uybwwdJVvufhPA'> Get Directions <\/a>","","Distribution"],
                ["TERMINAL ISLAND","33.73506","-118.26905","TERMINAL ISLAND","<table><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td> <td>1028 SSeaside Ave<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td> <td>Terminal Island, CA 90731<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/7Uvy7giYpSznzsaS9'> Get Directions <\/a>","","Distribution"],
                ["FORT LUPTON","40.03271","-104.81100","FORT LUPTON","<table><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>2211 South Denver Ave.<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td> <td>Fort Lupton, CO 80621<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/VztoP8yVBKYqZ1619'> Get Directions <\/a>","","Distribution"],
                ["BURLEY","42.56131","-113.78805","BURLEY","<table><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b36601ca56ae6f71906_phone-icon.svg' alt='details icon'><\/td> <td><a>208.678.5321<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>445 East 5th St. North #1<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td> <td>Burley, ID 83318<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/kcVaAB6FZMuDP8Yx8'> Get Directions <\/a>","","Distribution"],
                ["BOSSIER CITY","32.54358","-93.68656","BOSSIER CITY","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>3907 Shed Road<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td> <td>Bossier City, LA 71111<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/RkQiPii9qVjeEvBz8'> Get Directions <\/a>","","Distribution"],
                ["BROUSSARD","30.07607","-91.93534","BROUSSARD","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>1306 Petroleum Parkway<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td> <td> Broussard, LA 70518<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/CB1p5Qqchihp7n7WA'> Get Directions <\/a>","","Distribution"],
                ["BALTIMORE","39.26793","-76.62994","BALTIMORE","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>915 Annapolis Road<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td> <td>Baltimore, MD 21230<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/Pfkz3P1u4jmxrv7n6'> Get Directions <\/a>","","Distribution"],
                ["CALIENTE","37.61903","-114.51063","CALIENTE","<table><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b36601ca56ae6f71906_phone-icon.svg' alt='phone icon'><\/td> <td><a>775.726.3774<\/a><\/td><\/tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>25 Spring St<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td> <td>Caliente, NV 89008<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/DwWjXA862uKKXtje9'> Get Directions <\/a>","","Distribution"],
                ["CARLIN","40.71404","-116.10398","CARLIN","<table><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b36601ca56ae6f71906_phone-icon.svg' alt='phone icon'><\/td> <td><a>775.754.6765<\/a><\/td><\/tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>3025 Griffin Street<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td> <td>Carlin, NV 89822<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/DwWjXA862uKKXtje9'> Get Directions <\/a>","","Distribution"],
                ["LAS VEGAS","36.24888","-115.04425","LAS VEGAS","<table><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b36601ca56ae6f71906_phone-icon.svg' alt='phone icon'><\/td> <td><a>702.635.3899<\/a><\/td><\/tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>4825 North Sloan Lane<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td>Las Vegas, NV 89115<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/myRzNDGF3gE8NkHK8'> Get Directions <\/a>","","Distribution"],
                ["RENO / SPARKS","39.52428","-119.74115","RENO / SPARKS","<table><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b36601ca56ae6f71906_phone-icon.svg' alt='phone icon'><\/td> <td><a>775.829.1097<\/a><\/td><\/tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>995 SMcCarran Blvd, Ste 103<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td>Sparks, NV 89431<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/8h96cmcyC8GZPmA69'> Get Directions <\/a>","","Distribution"],                
                ["ARTESIA","32.85759","-104.40384","ARTESIA","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>606 WRichey<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td>Artesia, NM 88210<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/uyEE7zbeQtNLL9XC9'> Get Directions <\/a>","","Distribution"],
                ["BLOOMFIELD","36.73533","-107.97975","BLOOMFIELD","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>1713 N 1st St<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td>Bloomfield, NM 87413<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/kAXStduxhokqFnYL9'> Get Directions <\/a>","","Distribution"],
                ["WILLISTON","48.18792","-103.62865","WILLISTON","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>403 47th Street West<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td>Williston, ND 58801<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/tPjqCHUHdHB1cbRx6'> Get Directions <\/a>","","Distribution"],
                ["LOUISVILLE","40.82652","-81.29432","LOUISVILLE","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>3652 Tulane Ave<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td>Louisville, OH 44641<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/6NScSP1aiT8xjcXD7'> Get Directions <\/a>","","Distribution"],
                ["OKLAHOMA CITY","35.50141","-97.88798","OKLAHOMA CITY","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>5800 SH 66<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td>Baltimore, MD 21230915 Annapolis Road<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/Y6Cv2FCkwJBkZ9ap9'> Get Directions <\/a>","","Distribution"],
                ["SAYRE","36.24888","-115.04425","SAYRE","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>207 S 9th St<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td> Sayre, OK 73662<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/myRzNDGF3gE8NkHK8'> Get Directions <\/a>","","Distribution"],
                ["WOODWARD","36.43043","-99.44128","WOODWARD","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>4521 Industrial Park Rd<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td> Woodward, OK 73801<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/Us1iGgY7k32aVNPG6'> Get Directions <\/a>","","Distribution"],
                ["PORTLAND","45.55609","-122.62282","PORTLAND","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>206.623.3480<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/9xBPxbh2mtFJdMbg8'> Get Directions <\/a>","","Distribution"],
                ["MONTOURSVILLE","41.25139","-76.89220","MONTOURSVILLE","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>120 Choate Cir<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td>Montoursville, PA 17754<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/HjBgLf8tqRnGFW6dA'> Get Directions <\/a>","","Distribution"],
                ["PHILADELPHIA","40.07072","-74.95217","PHILADELPHIA","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>1750 Woodhaven Dr<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td>Montoursville, PA 17754<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/JGzL8JfcuLRZHChUA'> Get Directions <\/a>","","Distribution"],
                ["BEAUMONT","29.94674","-94.03793","BEAUMONT","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>11703 W Port Arthur Rd<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td>Beaumont, TX 77705<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/M5YecLbEqWq3f5z57'> Get Directions <\/a>","","Distribution"],
                ["BRIDGEPORT","33.19665","-97.75473","BRIDGEPORT","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>313 Industrial Street<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td>Bridgeport, TX 76426<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/uLocySyqCFijtmF78'> Get Directions <\/a>","","Distribution"],
                ["KILGORE","33.19665","-97.75473","KILGORE","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>1915 Hwy 135 N<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td>Kilgore, TX 75662<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/XKbEinReFQWmZTCt8'> Get Directions <\/a>","","Distribution"],
                ["LAGRANGE","29.91214","-96.94386","LAGRANGE","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>450 Airport Road<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td>Lagrange, TX 78945<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/dTAWZyEXUtNmxdePA'> Get Directions <\/a>","","Distribution"],
                 ["LAREDO","27.68418","-99.45621","LAREDO","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>13497 Port Drive<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td>Laredo, TX 78041<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/tqCfgfAwqQZAiENu7'> Get Directions <\/a>","","Distribution"],
                 ["ODESSA (ANDREWS HIGHWAY)","31.94799","-102.40694","ODESSA (ANDREWS HIGHWAY)","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>9421 Andrews Hwy<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td>Odessa, TX 79765<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/wg975eYkm1nrM8xf6'> Get Directions <\/a>","","Distribution"],
                ["ODESSA (I-20)","31.90818","-102.22448","ODESSA (I-20)","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>10918 E Interstate 20<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td>Odessa, TX 79765<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/pSKW6SZq6Y8Uiocj6'> Get Directions <\/a>","","Distribution"],
                ["ROBSTOWN","27.83418","-97.62534","ROBSTOWN","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>4632 Daniel Drive<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td>Robstown, TX 78380<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/7g3W34X6udnaxgeT9'> Get Directions <\/a>","","Distribution"],
                ["SAN ANTONIO","29.44312","-98.37123","SAN ANTONIO","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>5930 Bicentennial St<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td>San Antonio, TX 78219<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/ab9L6iQPVeZ6bjtTA'> Get Directions <\/a>","","Distribution"],
                ["SEMINOLE","32.72724","-102.93932","SEMINOLE","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>1891 US Hwy 62/180<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td>Seminole, TX 79360<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/f2oyrhs1yAssqf9WA'> Get Directions <\/a>","","Distribution"],
                ["TYLER","32.38860","-95.26895","TYLER","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>1510 E Northeast Loop 323<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td>Tyler, TX 75708<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/CyBhtYWrr4wZnZR48'> Get Directions <\/a>","","Distribution"],
                ["VICTORIA","28.82275","-96.92140","VICTORIA","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>9701 US Hwy 59 N<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td>Victoria, TX 77905<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/Rs25kwbhQ1vKEe938'> Get Directions <\/a>","","Distribution"],
                ["LOGAN","41.73533","-111.86240","LOGAN","<table><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b36601ca56ae6f71906_phone-icon.svg' alt='phone icon'><\/td><td><a href='tel:8332684488'>833.268.4488<\/a><\/td><\/tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>1070 West 200 North<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td>Victoria, TX 77905<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/hzk8TFVU6upegDT8A'> Get Directions <\/a>","","Distribution"],
                ["NORTH SALT LAKE","40.86272","-111.90378","NORTH SALT LAKE","<table><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b36601ca56ae6f71906_phone-icon.svg' alt='phone icon'><\/td><td><a href='tel:8013978332'>801.397.8332<\/a><\/td><\/tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>1070 West 200 North<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td>North Salt Lake, UT 84054<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/GH29ZCwaxo7r7hB1A'> Get Directions <\/a>","","Distribution"],
                ["PRICE","39.60141","-110.81558","PRICE","<table><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b36601ca56ae6f71906_phone-icon.svg' alt='phone icon'><\/td><td><a href='tel:4356370094'>435.637.0094<\/a><\/td><\/tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>352 West 100 North Main<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td>Price, UT 84501<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/qgWTwRKz4dvbw9nW6'> Get Directions <\/a>","","Distribution"],
                ["ST. GEORGE","37.12173","-113.55541","ST. GEORGE","<table><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b36601ca56ae6f71906_phone-icon.svg' alt='phone icon'><\/td><td><a href='tel:4356278366'>435.627.8366<\/a><\/td><\/tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>845 N Industrial Rd<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td>St George, UT 84770<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/3TeiCPknEJdidNMq7'> Get Directions <\/a>","","Distribution"],
                ["SEATTLE","47.58718","-122.35280","SEATTLE","<table><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b36601ca56ae6f71906_phone-icon.svg' alt='phone icon'><\/td><td><a href='tel:2066233480'>206.623.3480<\/a><\/td><\/tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>1711 13th Ave SW<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td>Seattle, WA 98134<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/xW3auGZJTjWRoaru8'> Get Directions <\/a>","","Distribution"],
                ["NITRO","38.42516","-81.84854","NITRO","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td>200 Viscose Rd<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td>Nitro, WV 25143<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/2c9fdD3cMJnjnMph7'> Get Directions <\/a>","","Distribution"],
                ["MORGANTOWN","39.57582","-79.97138","MORGANTOWN","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td> 494 Four H Camp Rd<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td>Morgantown, WV 26508<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/ggfzYgUThwVVR79T9'> Get Directions <\/a>","","Distribution"],
                ["ROCK SPRINGS","41.61826","-109.23438","ROCK SPRINGS","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='details icon'><\/td><td> 151 Industrial Drive<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td><td>Rock Springs, WY 82901<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/UaXySkR7GhnqEQd8A'> Get Directions <\/a>","","Distribution"],
                
              ["GRAPEVINE DFW","32.91816","-97.08031","GRAPEVINE DFW","<table><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b38e3962c2282f0afd4_box-icon.svg' alt='pobox icon'><\/td><td>GRAPEVINE DFW<\/td><\/tr><tr><td><img src='https:\/\/uploads-ssl.webflow.com\/5e20e3f684fda680fd838ac4\/63624b37fef346b4c7a6e5d9_location-icon.svg' alt='details icon'><\/td> <td>Grapevine, TX 76051<\/td><\/tr></table><a class='get-direction-btn' target='_blank' href='https://goo.gl/maps/Fv6X5hPy8zhpjHhf9'>Get Directions <\/a>","","Corporate Office"],
    
    ]
    jQuery(locations).each(function(i, el){
        jQuery('#results').append('<div class="location-drowpdown-title" data-class="' +el[6]+ '"><div class="location-tag">' +el[0]+ '</div><a href="#" class="location-btn w-button">' +el[6]+ '</a></div><div class="location-dropdown-list"><div class="address-location">' +el[4]+ '</div></div>');

    })
    var CustomMapStyles = [
      {
          "featureType": "all",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              },
              {
                  "color": "#5b6571"
              },
              {
                  "lightness": "35"
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative.country",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "administrative.country",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "administrative.country",
          "elementType": "labels.text",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "administrative.country",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "administrative.province",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "administrative.province",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "administrative.province",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "administrative.province",
          "elementType": "labels.text",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "administrative.province",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "administrative.province",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative.province",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative.locality",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative.locality",
          "elementType": "labels.text",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative.neighborhood",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative.neighborhood",
          "elementType": "labels.text",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "administrative.neighborhood",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "administrative.land_parcel",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#f3f4f4"
              }
          ]
      },
      {
          "featureType": "landscape.man_made",
          "elementType": "geometry",
          "stylers": [
              {
                  "weight": 0.9
              },
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "landscape.natural",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#e2e2e2"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#fee379"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.highway.controlled_access",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              },
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#7fc8ed"
              }
          ]
      }
    ];

    
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: new google.maps.LatLng(25.390641867087513, 46.66710960188105),
        mapTypeId: 'roadmap',
        mapTypeControl: false,
        // zoomControlOptions: {
        //   position: google.maps.ControlPosition.LEFT_CENTER,
        // },
        panControl: true,
        streetViewControl: true,
        styles: CustomMapStyles
    });

    infowindow = new google.maps.InfoWindow();
    var marker, i;
    var bounds = new google.maps.LatLngBounds();

    for (i = 0; i < locations.length; i++) {  

        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            city: locations[i][0],
            map: map,
            animation: google.maps.Animation.DROP,
            icon: "https://uploads-ssl.webflow.com/5e20e3f684fda680fd838ac4/63624b38db6b99fec75645c9_corpurate-icon.svg",
            locationType: locations[i][6],
        });
        bounds.extend(marker.position);

        gmarkers1.push(marker);

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                var html = "<div><strong>"+locations[i][3]+"</strong><span>"+locations[i][4]+"</span>"+locations[i][5]+"</div>";
                infowindow.setContent(html);
                infowindow.open(map, marker, html);
                map.panTo(this.getPosition());
                // map.setZoom(13);
            }
        })(marker, i));
      
        google.maps.event.addListener(marker, 'map_changed', function() {

            infowindow.close()
        });
    } // for loop

    map.fitBounds(bounds);
    
}

function fitToMarkers(markers) {

    var bounds = new google.maps.LatLngBounds();

    // Create bounds from markers
    for( var index in markers ) {
        var latlng = markers[index].getPosition();
        bounds.extend(latlng);
    }

    // Don't zoom in too far on only one marker
    if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
       var extendPoint1 = new google.maps.LatLng(bounds.getNorthEast().lat() + 0.01, bounds.getNorthEast().lng() + 0.01);
       var extendPoint2 = new google.maps.LatLng(bounds.getNorthEast().lat() - 0.01, bounds.getNorthEast().lng() - 0.01);
       bounds.extend(extendPoint1);
       bounds.extend(extendPoint2);
    }
    map.fitBounds(bounds);
}

jQuery(document).ready(function($) {
    setTimeout(function(){
        $(".all-locations").trigger('click');
    }, 1000);
    function loadBranches(){
        //$('.map-corporate-office').addClass('active');
        map.setZoom(6);
  
        var filteredMarkers = [];
        for (i = 0; i < gmarkers1.length; i++) {
            marker = gmarkers1[i];

            if (marker.locationType=="Corporate Office"){

                marker.setVisible(true);
                filteredMarkers.push(marker);
                // bounds.extend(marker.position);
                marker.icon = "https://uploads-ssl.webflow.com/5e20e3f684fda680fd838ac4/63624b38db6b99fec75645c9_corpurate-icon.svg";
            }
            // Categories don't match 
            else {
                marker.setVisible(false);
            }
        }
  
        // map.fitBounds(bounds);
      
        setTimeout(function(){

            if (  filteredMarkers.length == 0 ){
                  
              console.log("Corporate Office Not Found!");

            }else{

              fitToMarkers(filteredMarkers);
            }
        }, 500);

        return false;
    }

    loadBranches()

    $('.map-corporate-office').click(function(e){
        var getID =  $(this).attr('data-id');
        $('.location').slideUp();
        $('#'+getID).slideDown();
        $('#results').attr('class', '');
        $('#results').show().addClass(getID);
        $('.map-btn').removeClass('current');
        $('.map-corporate-office').addClass('current');
        e.preventDefault();
        loadBranches()
    })

  
    $('.map-marine').click(function(e){
        var getID =  $(this).attr('data-id');
        $('.location').slideUp();
        $('#'+getID).slideDown();
        $('#results').attr('class', '');
        $('#results').show().addClass(getID);
        $('.map-btn').removeClass('current');
        $('.map-marine').addClass('current');
        e.preventDefault();
        // if($(this).hasClass('active')){
        //     return;
        // }

        if (infowindow) {
          infowindow.close();
        } 

        map.setZoom(6);
    
        var filteredMarkers = [];
        for (i = 0; i < gmarkers1.length; i++) {
            marker = gmarkers1[i];

            if (marker.locationType=="Marine"){

                  marker.setVisible(true);
                  filteredMarkers.push(marker);
                  // bounds.extend(marker.position);
                  marker.icon = "https://uploads-ssl.webflow.com/5e20e3f684fda680fd838ac4/635b6e248f9351597797975c_icon-services-location2.svg";
            }
            // Categories don't match 
            else {
                  marker.setVisible(false);
            }
        }
    
        // map.fitBounds(bounds);
        
        setTimeout(function(){

            if (  filteredMarkers.length == 0 ){
                  
              console.log("No Center Found!");

            }else{

              fitToMarkers(filteredMarkers);
            }
        }, 500);

        return false;
    })

    $('.map-distribution').click(function(e){
        var getID =  $(this).attr('data-id');
        $('.location').slideUp();
        $('#'+getID).slideDown();
        $('#results').attr('class', '');
        $('#results').show().addClass(getID);
        $('.map-btn').removeClass('current');
        $('.map-distribution').addClass('current');
        e.preventDefault();
        // if($(this).hasClass('active')){
        //     return;
        // }

        if (infowindow) {
          infowindow.close();
        } 

        map.setZoom(6);
    
        var filteredMarkers = [];
        for (i = 0; i < gmarkers1.length; i++) {
            marker = gmarkers1[i];

            if (marker.locationType=="Distribution"){

                  marker.setVisible(true);
                  filteredMarkers.push(marker);
                  // bounds.extend(marker.position);
                  marker.icon = "https://uploads-ssl.webflow.com/5e20e3f684fda680fd838ac4/63624b38b0f77b14e5ce9bed_distributionsvg.svg";
            }
            // Categories don't match 
            else {
                marker.setVisible(false);
            }
        }
    
        // map.fitBounds(bounds);
        
        setTimeout(function(){

            if (  filteredMarkers.length == 0 ){
                  
              console.log("No Distribution Center Found!");

            }else{

              fitToMarkers(filteredMarkers);
            }
        }, 500);

        return false;
    })

    $('.all-locations').click(function(e){
        // var getID =  $(this).attr('data-id');
        // $('.location').slideUp();
        // $('#'+getID).slideDown();
        $('.map-btn').removeClass('current');
        $('#results').hide();
        $('.all-locations').addClass('current');
        e.preventDefault();

        if (infowindow) {
          infowindow.close();
        } 

        map.setZoom(3);
    
        var filteredMarkers = [];
        for (i = 0; i < gmarkers1.length; i++) {
            marker = gmarkers1[i];

            if (marker.locationType=="Distribution"){
                marker.icon = "https://uploads-ssl.webflow.com/5e20e3f684fda680fd838ac4/63624b38b0f77b14e5ce9bed_distributionsvg.svg";
            }else if (marker.locationType=="Corporate Office"){
                marker.icon = "https://uploads-ssl.webflow.com/5e20e3f684fda680fd838ac4/63624b38db6b99fec75645c9_corpurate-icon.svg";
            }else if (marker.locationType=="Marine"){
                marker.icon = "https://uploads-ssl.webflow.com/5e20e3f684fda680fd838ac4/635b6e248f9351597797975c_icon-services-location2.svg";
            }
            marker.setVisible(true);
        }
    
        // map.fitBounds(bounds);
        
        setTimeout(function(){

            if (  filteredMarkers.length == 0 ){
                  
              console.log("Not Found!");

            }else{

              fitToMarkers(filteredMarkers);
            }
        }, 500);

        return false;
    });

    $('.location-drowpdown-title').click(function(){
        $(this).next().slideToggle()
        $('.location-drowpdown-title').not(this).next().slideUp()
    })

    var centerLat = 10;
    var centerLng = -15;

    function getLatLngByaddress(){
        var address = $('#address').val();
        var geocoder = new google.maps.Geocoder();

        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                // console.log(results);
                centerLat = results[0].geometry.location.lat();
                centerLng = results[0].geometry.location.lng();
                // console.log(centerLat + ', ' +centerLng);
            } else {
                alert("Request failed. Try correct address/zipcode.");
                return;
            }
        });
    }

    // Circle Code Start
    function checkMarkerRadius(radiusInMiles){

        getLatLngByaddress(); // update global centerLat & centerLng

        setTimeout(function(){

        // navigator.geolocation.getCurrentPosition(function (p) {
            // var centerLatLng = new google.maps.LatLng(p.coords.latitude,p.coords.longitude);
            var centerLatLng = new google.maps.LatLng(centerLat, centerLng);

            /*console.log(centerLatLng.lat());
            console.log(centerLatLng.lng());*/
            var bounds = new google.maps.LatLngBounds();

            //Added the circle
            for (i = 0; i < gmarkers1.length; i++) {
                marker = gmarkers1[i];

                var targetLat = marker.getPosition().lat();
                var targetLng = marker.getPosition().lng();

                var targetLatLng = new google.maps.LatLng(targetLat, targetLng);
                // var center= new google.maps.LatLng(32.91816, -97.08031);
                // var distanceInMeters = google.maps.geometry.spherical.computeDistanceBetween(targetLatLng, center);
                var distanceInMeters = google.maps.geometry.spherical.computeDistanceBetween(targetLatLng, centerLatLng);
                distanceInMiles = distanceInMeters / ( 1000 * 1.6 );

                if(distanceInMiles <= radiusInMiles){
                    // To add the marker to the map, call setMap();
                    // marker.setMap(map);
                    marker.setVisible(true);
                    bounds.extend(marker.position);
                }else{
                    marker.setVisible(false);
                }
                
            }

            // cityCircle.setMap(null);
            /*cityCircle = new google.maps.Circle({
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.125,
                map: map,
                center: centerLatLng,
                radius: radiusInMiles*1.6*1000
            });

            setTimeout(function(){
                console.log(cityCircle);
            }, 500);
            map.fitBounds(cityCircle.getBounds());*/

            map.fitBounds(bounds);

        // }); // navigator.geolocation.getCurrentPosition(function (p) {

        }, 500);

    }

    $('.searchBtn').click(function(){
        var radiusonMap = $('#radiusonMap').val();
        checkMarkerRadius(radiusonMap);
    })

    // Circle Code End
    $('.map-list-item').click(function(){
        $('.location-dropdown-list').hide();
    }) 

});
