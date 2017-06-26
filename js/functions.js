$(document).ready(function() { 
var newLine, el, title, link;

//var globalobj = $('#proj1');
//alert ($("#art1-foot1-").offset().top);
var ToC =
  "<nav  id='isotopetoc' >";
  var counter = 0;
$(".in-text-title").each(function() {
counter++;
  el = $(this);
  title = el.text();
  link = "#" + el.attr("id");

  newLine =
      "<a  class='tocscroll' target='" + link + "'><img class='tocimages' src='images/"+el.attr("id").match(/\d+/g)+"/"+el.attr("id").match(/\d+/g)+"-1hover.png'>" +
        title +
        //"<span>"+ counter +"</span>" +
      "</a>";

  ToC += newLine;

});
//ToC += "<br><a  class='tocscroll toctitle'>מאמרים</a>";



ToC +=  "</nav><div id='endoftoc'></div><br><br><br>";
$("#toc-div").prepend(ToC);


$( "#navmodel" ).click(function() {
  $('#secnav').toggleClass('hidden');
});

var $container = $('#container');
// init
$container.isotope({
  // options
   hiddenStyle: {
        opacity: 0
      },
      visibleStyle: {
        opacity: 1
      },
  itemSelector: '.item',
  resizesContainer: false,
  transitionDuration: '0.4s',
  layoutMode: 'masonry',
  isOriginLeft: false
});

$container.imagesLoaded( function() {
  $( "html" ).removeClass( "loading" );
  $container.isotope({ filter: '.coverphoto' });
  $container.isotope('layout');
});



$( ".tocscroll" ).on( "click", function() {
$('#fr').scrollTo($($(this).attr("target")),500);
$( "#toclink" ).append( "<Br><a class='tocscroll super' target='"+$(this).attr('target')+"'>"+$($(this).attr("target")).text()+"</a>" );
});


$( "#toclink" ).on( "click", '.tocscroll', function() {
$('#fr').scrollTo($($(this).attr("target")),500);
});



$( ".intext-footnotes" ).on( "click", function() {
$("#"+$(this).attr("id").substring(0, $(this).attr("id").length - 1)).toggleClass('foot-hover');
 $(this).toggleClass('art-yellowmark');
$('#fr').scrollTo($("#"+$(this).attr("id").substring(0, $(this).attr("id").length - 1)),500);
});

//$( "#toclink" ).append( "<a class='tocscroll super' target='#gototop'>דוד ינאי: אדריכלות וגנטיקה</a>" );



function openitem(clickeditem) {

  if (!($('#proj'+clickeditem).hasClass('opencat')))
  {
$('.rootitem').removeClass('opencat');
//var src = $('#proj'+clickeditem).find('img').attr("src").match(/[^\.]+/) + "hover.png";
//$('#proj'+clickeditem).find('img').attr("src",src);
$('#proj'+clickeditem).addClass('opencat');
  $container.isotope({ filter: '.proj'+clickeditem });
  $container.isotope('layout');
       $('#isocontainer').animate({
        scrollTop: 0
    }, 200);
}

}

$('.item').on( 'click', function() {
    if ($( this ).hasClass( "projimg" )) {
    $(this).find('span').toggleClass('hidden');
    $(this).find('img').toggleClass('largeimage');
    $('#container').isotope('layout');
    $('#isocontainer').scrollTo($(this).find('span'),500);
    $(this).toggleClass('bolditem');
          }

  

});


//$( "nav a" ).hover(
//  function() {
//    var cuurnum=$(this).attr('target').replace(/[^0-9]/g, '');
//    var src = $('#proj'+cuurnum).find('img').attr("src").match(/[^\.]+/) + "hover.png";
//    $('#proj'+cuurnum).find('img').attr("src",src);
//   

    //alert($(this).attr('href').replace(/[^0-9]/g, ''));

//  }, function() {
//    var cuurnum=$(this).attr('target').replace(/[^0-9]/g, '');
//   var src =  $('#proj'+cuurnum).find('img').attr("src").replace("hover.png", ".png");
//$('#proj'+cuurnum).find('img').attr("src",src);

//  }
//);


function togotxt (element) {
$('#fr').scrollTo($("#"+element+"-txt"),500);
}


var waypointcover = new Waypoint({
  element: document.getElementById('coverpage'),
  handler: function() {
  $container.isotope({ filter: '.coverphoto' });
  $container.isotope('layout');
   $('#toclink').addClass('hidden');

  },
  context: document.getElementById('fr')
})
var waypointcover1 = new Waypoint({
  element: document.getElementById('intro1'),
  handler: function() {
  $container.isotope({ filter: '.coverphoto2' });
  $container.isotope('layout');
  },
  context: document.getElementById('fr')
})
var waypointcover2 = new Waypoint({
  element: document.getElementById('intro2'),
  handler: function() {
  $container.isotope({ filter: '.coverphoto3' });
  $container.isotope('layout');
  },
  context: document.getElementById('fr')
})
var waypointcover3 = new Waypoint({
  element: document.getElementById('intro3'),
  handler: function() {
  $container.isotope({ filter: '.coverphoto4' });
  $container.isotope('layout');
  },
  context: document.getElementById('fr')
})

var waypointcover5 = new Waypoint({
  element: document.getElementById('intro5'),
  handler: function() {
  $container.isotope({ filter: '.coverphoto6' });
  $container.isotope('layout');
  },
  context: document.getElementById('fr')
})
var waypointcover6 = new Waypoint({
  element: document.getElementById('intro6'),
  handler: function() {
  $container.isotope({ filter: '.coverphoto7' });
  $container.isotope('layout');
  },
  context: document.getElementById('fr')
})
var waypointcover7 = new Waypoint({
  element: document.getElementById('intro7'),
  handler: function() {
  $container.isotope({ filter: '.coverphoto8' });
  $container.isotope('layout');

  },
  context: document.getElementById('fr')
})

var waypointtoc = new Waypoint({
  element: document.getElementById('toc-div'),
  handler: function() {
  $container.isotope({ filter: '.rootitem' });
  $container.isotope('layout');
  $('#toclink').removeClass('hidden');
  },
  context: document.getElementById('fr')
},{offset:'75%'})

var waypointendoftoc = new Waypoint({
  element: document.getElementById('endoftoc'),
  handler: function() {
  $container.isotope({ filter: '.rootitem' });
  $container.isotope('layout');
  },
  context: document.getElementById('fr')

},{offset:'75%'})


var waypoint1 = new Waypoint({
  element: document.getElementById('proj1-txt'),
  handler: function() {

openitem('1');
  },
  context: document.getElementById('fr')
})

var waypoint2 = new Waypoint({
  element: document.getElementById('proj2-txt'),
  handler: function() {
openitem('2');
  },
  context: document.getElementById('fr')
})

var waypoint3 = new Waypoint({
  element: document.getElementById('proj3-txt'),
  handler: function() {
openitem('3');
  },
  context: document.getElementById('fr')
})

var waypoint4 = new Waypoint({
  element: document.getElementById('proj4-txt'),
  handler: function() {
openitem('4');
  },
  context: document.getElementById('fr')
})

var waypoint5 = new Waypoint({
  element: document.getElementById('proj5-txt'),
  handler: function() {
openitem('5');
  },
  context: document.getElementById('fr')
})

var waypoint6 = new Waypoint({
  element: document.getElementById('proj6-txt'),
  handler: function() {
openitem('6');
  },
  context: document.getElementById('fr')
})

var waypoint7 = new Waypoint({
  element: document.getElementById('proj7-txt'),
  handler: function() {
openitem('7');
  },
  context: document.getElementById('fr')
})

var waypoint8 = new Waypoint({
  element: document.getElementById('proj8-txt'),
  handler: function() {
openitem('8');
  },
  context: document.getElementById('fr')
})

var waypoint9 = new Waypoint({
  element: document.getElementById('proj9-txt'),
  handler: function() {
openitem('9');
  },
  context: document.getElementById('fr')
})

var waypoint10 = new Waypoint({
  element: document.getElementById('proj10-txt'),
  handler: function() {
openitem('10');
  },
  context: document.getElementById('fr')
})

var waypoint11 = new Waypoint({
  element: document.getElementById('proj11-txt'),
  handler: function() {
openitem('11');
  },
  context: document.getElementById('fr')
})

var waypoint12 = new Waypoint({
  element: document.getElementById('proj12-txt'),
  handler: function() {
openitem('12');
  },
  context: document.getElementById('fr')
})

var waypoint13 = new Waypoint({
  element: document.getElementById('proj13-txt'),
  handler: function() {
openitem('13');
  },
  context: document.getElementById('fr')
})

var waypoint14 = new Waypoint({
  element: document.getElementById('proj14-txt'),
  handler: function() {
openitem('14');
  },
  context: document.getElementById('fr')
})

var waypoint15 = new Waypoint({
  element: document.getElementById('proj15-txt'),
  handler: function() {
openitem('15');
  },
  context: document.getElementById('fr')
})

var waypoint16 = new Waypoint({
  element: document.getElementById('proj16-txt'),
  handler: function() {
openitem('16');
  },
  context: document.getElementById('fr')
})

var waypoint17 = new Waypoint({
  element: document.getElementById('proj17-txt'),
  handler: function() {
openitem('17');
  },
  context: document.getElementById('fr')
})

var waypoint18 = new Waypoint({
  element: document.getElementById('proj18-txt'),
  handler: function() {
openitem('18');
  },
  context: document.getElementById('fr')
})

var waypoint19 = new Waypoint({
  element: document.getElementById('proj19-txt'),
  handler: function() {
openitem('19');
  },
  context: document.getElementById('fr')
})

var waypoint20 = new Waypoint({
  element: document.getElementById('proj20-txt'),
  handler: function() {
openitem('20');
  },
  context: document.getElementById('fr')
})
var waypoint21 = new Waypoint({
  element: document.getElementById('proj21-txt'),
  handler: function() {
openitem('21');
  },
  context: document.getElementById('fr')
})

var waypoint22 = new Waypoint({
  element: document.getElementById('proj22-txt'),
  handler: function() {
openitem('22');
  },
  context: document.getElementById('fr')
})

var waypoint23 = new Waypoint({
  element: document.getElementById('proj23-txt'),
  handler: function() {
openitem('23');
  },
  context: document.getElementById('fr')
})

var waypoint24 = new Waypoint({
  element: document.getElementById('proj24-txt'),
  handler: function() {
openitem('24');
  },
  context: document.getElementById('fr')
})

var waypoint25 = new Waypoint({
  element: document.getElementById('proj25-txt'),
  handler: function() {
openitem('25');
  },
  context: document.getElementById('fr')
})

var waypoint26 = new Waypoint({
  element: document.getElementById('proj26-txt'),
  handler: function() {
openitem('26');
  },
  context: document.getElementById('fr')
})

var waypoint27 = new Waypoint({
  element: document.getElementById('proj27-txt'),
  handler: function() {
openitem('27');
  },
  context: document.getElementById('fr')
})

var waypoint28 = new Waypoint({
  element: document.getElementById('proj28-txt'),
  handler: function() {
openitem('28');
  },
  context: document.getElementById('fr')
})

var waypoint29 = new Waypoint({
  element: document.getElementById('proj29-txt'),
  handler: function() {
openitem('29');
  },
  context: document.getElementById('fr')
})

var waypoint30 = new Waypoint({
  element: document.getElementById('proj30-txt'),
  handler: function() {
openitem('30');
  },
  context: document.getElementById('fr')
})
var waypoint31 = new Waypoint({
  element: document.getElementById('proj31-txt'),
  handler: function() {
openitem('31');
  },
  context: document.getElementById('fr')
})

var waypoint32 = new Waypoint({
  element: document.getElementById('proj32-txt'),
  handler: function() {
openitem('32');
  },
  context: document.getElementById('fr')
})

var waypoint33 = new Waypoint({
  element: document.getElementById('proj33-txt'),
  handler: function() {
openitem('33');
  },
  context: document.getElementById('fr')
})

var waypoint34 = new Waypoint({
  element: document.getElementById('proj34-txt'),
  handler: function() {
openitem('34');
  },
  context: document.getElementById('fr')
})

var waypoint35 = new Waypoint({
  element: document.getElementById('proj35-txt'),
  handler: function() {
openitem('35');
  },
  context: document.getElementById('fr')
})

var waypoint36 = new Waypoint({
  element: document.getElementById('proj36-txt'),
  handler: function() {
openitem('36');
  },
  context: document.getElementById('fr')
})

var waypoint37 = new Waypoint({
  element: document.getElementById('proj37-txt'),
  handler: function() {
openitem('37');
  },
  context: document.getElementById('fr')
})

var waypoint38 = new Waypoint({
  element: document.getElementById('proj38-txt'),
  handler: function() {
openitem('38');
  },
  context: document.getElementById('fr')
})

var waypoint39 = new Waypoint({
  element: document.getElementById('proj39-txt'),
  handler: function() {
 openitem('39');
  },
  context: document.getElementById('fr')
})

var waypoint40 = new Waypoint({
  element: document.getElementById('proj40-txt'),
  handler: function() {
openitem('40');
  },
  context: document.getElementById('fr')
})
var waypoint41 = new Waypoint({
  element: document.getElementById('proj41-txt'),
  handler: function() {
openitem('41');
  },
  context: document.getElementById('fr')
})

var waypoint42 = new Waypoint({
  element: document.getElementById('proj42-txt'),
  handler: function() {
openitem('42');
  },
  context: document.getElementById('fr')
})

var waypoint43 = new Waypoint({
  element: document.getElementById('proj43-txt'),
  handler: function() {
openitem('43');
  },
  context: document.getElementById('fr')
})

var waypoint44 = new Waypoint({
  element: document.getElementById('proj44-txt'),
  handler: function() {
openitem('44');
  },
  context: document.getElementById('fr')
})

var waypoint45 = new Waypoint({
  element: document.getElementById('proj45-txt'),
  handler: function() {
openitem('45');
  },
  context: document.getElementById('fr')
})

var waypoint46 = new Waypoint({
  element: document.getElementById('proj46-txt'),
  handler: function() {
openitem('46');
  },
  context: document.getElementById('fr')
})

var waypoint47 = new Waypoint({
  element: document.getElementById('proj47-txt'),
  handler: function() {
openitem('47');
  },
  context: document.getElementById('fr')
})

var waypoint48 = new Waypoint({
  element: document.getElementById('proj48-txt'),
  handler: function() {
openitem('48');
  },
  context: document.getElementById('fr')
})

// aticles wp - 
var waypointar1 = new Waypoint({
  element: document.getElementById('art1'),
  handler: function() {
  $container.isotope({ filter: '.atr1iamges' });
  $container.isotope('layout');
  },
  context: document.getElementById('fr')
})




$( ".intext-footnotes" ).each(function() { 
  $("#"+$(this).attr("id").substring(0, $(this).attr("id").length - 1)).css( "top", $(this).offset().top + $( window ).height());
});


});