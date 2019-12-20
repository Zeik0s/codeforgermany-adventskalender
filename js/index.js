$( document ).ready(function() {

  var contents = [
    [ "story", 
      "Weihnachtstrubel",
      "<img src=img/christkind.png></img>",
      ""
    ], 
    [ "note",
      "Einstimmen auf Weihnachten",
      "Da du gerne singst und soweit ich weiß auch Acapella Musik magst, denke ich, dass dir dieses Lied gut gefallen wird.",
      "https://youtu.be/LRP8d7hhpoQ"
    ], 
    [ "note",
      "Acapella Nr. 2",
      "Gestern war Pentatonix mit dem Singen dran, heute sind es du und deine Familie! Versammle also alle im Haus zum Singen und lasst Weihnachtsstimmung aufkommen.",
      "https://www.songtexte.com/songtext/pentatonix/hallelujah-63395ebf.html"
    ],  
    [ "skiing",
      "Sport",
      "Der nächste Skiurlaub kommt schon bald. Als Vorbereitung wird dir deine Tochter eine Sportübung aufgeben, die du machen musst. <div></div>",
      ""
    ], 
    [ "krampus",
      "Imitation",
      "Der Krampus soll heute Thema sein. Imitiere dazu einen Krampus (zb. raschelnde Kette, Rute, oder anderwärtig) und erschrecke damit eine beliebige Person in deinem Umkreis. <div></div>",
      ""
    ], 
    [ "santa",
    "Nikolausjause",
    "Heute ist Tag des heiligen Nikolaus. Da es quasi Brauch ist, dass Eltern deren Kindern an diesem Tag Säckchen mit Erdnüssen und/oder Mandarinen schenken, sollst du heute zumindest eines von beiden gegessen haben. <div></div>",
    ""
    ],
    [ "story",
    "Maxime",
    "Heute will ich dir eine folgende Maxime mitgeben: Advent heißt <br><br> A – annehmen, auch den, der dir nicht passt <br><br> D – da sein füreinander <br><br> V – vertrauen, dass alles gut wird <br><br> E – entdecken, was wichtig ist<br><br> N – neu beginnen, auch wenn du gestern gescheitert bist <br><br> T – tragen helfen denen, die deine Hilfe brauchen <div></div>",
    ""
    ],
    [ "note",
    "Weihnachtsstimmung",
    "Wenn du das nächste Mal daheim im Radio oder beim Autofahren ein Weihnachtslied hörst, drehst du für die Dauer des Liedes lauter auf. <div></div>",
    ""
    ],
    [ "krampus",
    "Fasten",
    "Da du am Freitag bei der Nikolausjause gut zugelangt hast, wirst du heute auf Süßigkeiten verzichten. <div></div>",
    ""
    ],
    [ "story",
    "Adventszeit",
    "Heute hab ich wieder einen Spruch für dich: <br> Das Herz weihnachtlich aufgemacht,<br>Denn bald schon kommt die stille Nacht.<br> Ein bisschen Einkehr halten <br> Und ab und zu die Hände falten.<br> Adventszeit will uns lehren, <br> Ein bisschen mehr zu geben als zu nehmen.",
    ""
    ], 
    [ "note",
    "Singstar",
    "Jemand darf sich ein Weihnachtslied wünschen, dass du ihm/ihr vorsingen musst.",
    ""
    ], 
    [ "game",
    "Ich packe meinen Koffer",
    "Heute soll es um das gleichnamige Spiel gehen. Versammle deine Familie und schaut, was ihr alles mit weihnachtlichem Bezug einpacken könnt, bis der oder die erste ein Teil vergisst. <div></div>",
    ""
    ], 
    [ "duft",
    "Weihnachtsduft",
    "Mit der Weihnachtszeit verbinden viele Menschen die verschiedensten Düfte. Sorge auch du bitte dafür, dass es in der Wohnung weihnachtlich duftet. Auf welche Art und welchen Duft du verwendest, bleibt dir überlassen. Ich denke dabei zum Beispiel an Keksduft. <div></div>",
    ""
    ], 
    [ "zuckerstange",
    "Unbekannte Territorien",
    "Wien ist groß. Und anders. Und voll mit Weihnachtsmärkten. Die Weihnachtszeit dauert nicht mehr allzu lange, deswegen solltest du mal darüber nachdenken, ob du in den letzten Wochen schon einen Christkindlmarkt besucht hast, den du normalerweise selten besuchst. Zumindest bei einem sollte es der Fall sein. Hier ist eine Liste mit Märkten in den Bezirken: <div></div>",
    "https://www.wien.gv.at/freizeit/einkaufen/maerkte/weihnachtsmaerkte.html#eins"
    ], 
    [ "walking",
    "Spaziergänge",
    "Lass dich von einem Ehemann mit der Wienerwald App zu einem Spaziergang verleiten.",
    ""
    ], 
    [ "note",
    "Adventstunde",
    "Veranstalte mit deiner Familie eine besinnliche Adventstunde um den Adventkranz. <div></div>",
    ""
    ],
    [ "note",
    "Musikalischer Rahmen",
    "Mir wurde gesagt, dass dir dieses Lied auch gefallen wird. <div></div>",
    "https://www.youtube.com/watch?v=rPgS2pL1g8s"
    ],
    [ "zuckerstange",
    "Weihnachtsgebäck",
    "Weihnachten ist nichts ohne Weihnachtsgebäck. Du sollst deswegen in den nächsten Tagen zumindest einmal Lebkuchen oder Weihnachtskekse essen. <div></div>",
    ""
    ],
    [ "story",
    "Adventzeit",
    "Advent das ist die stille Zeit, die Tage schnell verrinnen. Das Fest der Liebe ist nicht weit, fangt an euch zu besinnen! <div></div>",
    ""
    ],
    [ "story",
    "Möge die Adventzeit mit dir sein.",
    "Auch wenn die folgende Aufgabe eher wenig mit Advent zu tun hat, ist es dennoch Teil des Adventkalenders. Aktuell ist gerade der 9. Star Wars Film in die Kinos gekommen. Damit ich weiß, dass du den Adventkalender gewissenhaft verfolgst, hätte ich gerne, dass du den Regisseur im Internet suchst und mir bekannt gibst. <div></div>",
    ""
    ],
    [ "X-200",
    "Wartezeiten in Moers",
    "Die voraussichtlichen Wartezeiten im Bürgerbüro der Stadt Moers sind aus den Erfahrungswerten kalkuliert. So kann man abschätzen, wann es wahrscheinlich am schnellsten vorangeht und entsprechend dann den Rathausgang erledigen.",
    "http://wartezeit.tursics.de/"
    ], 
    [ "X-200",
    "Open Data Atlas",
    "Der Open Data Atlas zeigt, welche Länder, Kommunen und andere Institutionen ein Open Data Portal anbieten. Gut für den Überblick alles Datenenthusiasten!",
    "http://opendata.tursics.de/?page=Data&level=all&dataset=portals&country=DE&lat=52.516&lng=13.4795&zoom=6"
    ],
    [ "X-200",
    "Wo ist Markt",
    "Die Web-App zeigt alle Märkte in deiner Stadt / Region. Auf Basis offener Datensätze der Städte werden die Märkte anschaulich auf einer Karte platziert.",
    "https://wo-ist-markt.de/"
    ],
    [ "X-200",
    "FragDenStaat",
    "Jede Person hat das Recht auf Informationen. FragDenStaat hilft Ihnen, Ihr Recht wahrzunehmen. Fragen Sie über diese gemeinnützige Plattform Behörden in Deutschland nach Informationen und Dokumenten! ",
    "https://fragdenstaat.de/"
    ], 
    [ "X-200",
    "Dein Projekt",
    "Jede Woche treffen sich in ganz Deutschland Teams zu ihren Projekten für Code for Germany. Sie arbeiten gemeinsam an nützlichen Anwendungen und Visualisierungen rund um offene Daten und digitale Werkzeuge für Bürgerinnen. Diese lokalen Gruppen nennen wir Labs. Wenn Du eine Idee für ein Projekt hast dann schau auf codefor.de wo es in deiner Nähe ein Lab gib.",
    "https://codefor.de/"
    ]];
 console.log("test");
  var message = "";
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var scrolled = false;
  var timeDelay = 200;

  // function to reveal message
  var cardReveal = function() {

  }  

  // day=25; // uncomment to skip to 25

  // Only work in December
  if(month === 12) {
    // Loop through each calendar window
    $("li").each( function( index ) {
      var adventwindow = index + 1;
      var item = $(this);

      // Open past windows
      if( day !== adventwindow && adventwindow < day ) {
        window.setTimeout(function(){
          item.children(".door").addClass("open");
        }, timeDelay);
      }

      // timeout offset for past window opening animation
      timeDelay += 100;

      // Add content
      var content = contents[index];
      var iconcode = content[0];
      var headline = content[1];
      var description = content[2];
      var link = content[3];

      if( adventwindow <= day ) {
        $(this).append('<div class="revealed"><img src="img/' + iconcode + '.png" /></div>');
      }

      // Add jiggle animation to current day window
      if(adventwindow === day) {
        $(this).addClass("current");
        $(this).addClass("jiggle");
      }

      // On clicking a window, toggle it open/closed and
      // handle other things such as removing jiggle and 25th
      $(this).on("click", function() {
        if(adventwindow <= day) { 

          if ($(this).children(".door").hasClass('open')) {
            if (link == "") {
	$('#js-overlay-content').html(                                                                                                                                                                                                                 '<h1>'+headline+'</h1><p>' 
           + description 
           + '<img src="img/' + iconcode + '.png" /></a>'                                                                                                                                                                                             ); 
	    }
	    else {
	    $('#js-overlay-content').html(
              '<h1>'+headline+'</h1><p>' 
              + description 
              + '</p><br /><a target="_blank" href="' + link + '">Hier gehts weiter &gt;&gt;<br />'
              + '<img src="img/' + iconcode + '.png" /></a>'
            );
           }

            novicell.overlay.create({
              'selector': '#js-overlay-content',
              'class': 'selector-overlay',
            });
          } else {
            $(this).children(".door").toggleClass("open");
          }
        
 
          $(this).removeClass("jiggle");

          // If 25th, can show the message
          //if(day >= 25 && adventwindow === 25) {
          //  messageReveal();

            // Animate scroll to message if not already done
            if(!scrolled) {
             $('html, body').animate({
               scrollTop: $("#message").offset().top
              }, 2000);
             scrolled = true;
            }
          }
        }
      );

    });

    // If beyond 24, show message
    //if(day >= 26){
    //  messageReveal();
    //}

  }

});
