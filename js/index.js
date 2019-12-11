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
    [ "X-200",
    "Stolpersteine App",
    "Stolpersteine sind kleine Gedenktafeln im Straßenpflaster zur Erinnerung an die Opfer des Nationalsozialismus. Mehr als 50.000 davon hat der Künstler Gunter Demnig mittlerweile in ganz Europa verlegt. Mit dieser App haben Sie schnell und einfach Zugriff auf die Daten der rund 6.000 Stolpersteine in Berlin.",
    "https://codefor.de/projekte/2014-04-30-stolpersteine-app.html"
    ], 
    [ "X-200",
    "Mein Moers App",
    "Die aus Offenen Daten basierte mobile App bündelt Informationen zu Geschäftsöffnungszeiten, Parkplätzen, Events und Neuigkeiten aus Moers. Die App kann den Nutzer an Müllabholung erinnern und bietet auch schicke Features wie 360°-Panoramen von Plätzen und Geschäften. Neben der moersfestival-App des selben Entwicklers erfreut sich dieses Werk aus dem OK Lab Niederrhein großer Beliebtheit.",
    "https://itunes.apple.com/de/app/mein-moers/id1305862555?mt=8"
    ], 
    [ "X-200",
    "Weihnachtsmärkte in Berlin, Brandenburg, Moers und Krefeld",
    "Finde alle Weihnachtsmärkte in Berlin und Brandenburg: Die großen, die kleinen, die bunten, die lebhaften, die besinnlichen und die Geheimtipps. Alle in einer App.",
    "http://www.tursics.de/xmasmarkets/de/"
    ], 
    [ "X-200",
    "KastanienApp",
    "Vor ein paar Monaten hat die Stadt Hamburg auf ihrem Transparenzportal das Baumkataster als Open Data veröffentlicht. Passend zur Zeit der Herbstsparziergänge drängte sich uns bei einem Code For Heilbronn Treff die Idee einer Baum App auf, die einem ermöglicht, unterwegs leicht Kastanienbäume zu finden und deren Früchte zu sammeln. Die App ermöglicht aber auch allgemein, für jeden Baum in Heilbronn Informationen wie Art, lateinischer Name und Alter abzufragen. Somit kann unterwegs die Frage, was für ein Baum vor einem steht, dank Standorterkennung mit dem Smartphone ganz leicht beantwortet werden.",
    "https://codefor.de/projekte/2014-11-29-hn-kastanienapp.html"
    ], 
    [ "X-200",
    "OffenerHaushalt",
    "Das Projekt Offener Haushalt visualisiert intuitiv verständlich die Haushalte von Bund, Ländern, Kommunen und anderen Institutionen, soweit sie in maschinenlesbarer Form vorliegen. Checke doch mal, ob dein Wohnort bereits dabei ist!",
    "https://offenerhaushalt.de/"
    ],
    [ "X-200",
    "Großstadt-Baum",
    "Text muss noch nachgereicht werden.",
    "https://tursics.github.io/trees-story/"
    ],
    [ "X-200",
    "Wie kaputt ist Ihre Schule?",
    "Die Anwendung zeigt das Ergebnis des Gebäudescans, also der gemeldete Sanierungsbedarf bei Schulgebäuden (Stand: 30.06.2016). Die Daten stammen von der Senatsverwaltung für Bildung, Jugend und Wissenschaft.",
    "http://schulsanierung.tursics.de/"
    ],
    [ "X-200",
    "Bäume-Karte Berlin",
    "Die Bäume-Karte aus Berlin zeigt alle auf der OpenStreetMap kartierten Bäume der Stadt.",
    "https://trees.codefor.de/"
    ],
    [ "X-200",
    "Datenwaben",
    "Noch ein Projekt aus der Hand von Thomas Tursics von Code For Berlin. In Form von Waben werden aktuelle Infos aus verschienenen offenen Datenquellen dargestellt.",
    "http://datenwaben.de/?city=vienna&page=cards"
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
