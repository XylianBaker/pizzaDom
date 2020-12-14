		/*Notenbalken - Notenfarbe (nf)
			0-30   nf -> Rot		#ff0000
			31-50  nf -> Orange		#ff8000
			51-70  nf -> Gelb 		#ffff00
			71-100 nf -> Grün		#00ff00
			
			Breite pro Segment 125px
		*/
		
		//Globale Variablen
		let breite = 500;
		
		//Die Farbe soll deshalb global gespeichert werden, da die Function change_nf() diese setzt und die Function createPrintscreen dann auf diese globale Variable zugreifen können soll.
		let farbe = "";
		
		
		
		/************************************************************************/
		/*********** Function change_nf        *********************************/
		/**		in dieser Funktion wird der Farbbalken entsprechend der 	   **/
		/**		Eingaben bzw. des Schiebens des Sliders/Range angepasst 	   **/
		/**		und mit der entsprechenden Farbe gefüllt                	   **/
		/************************************************************************/
		function change_nf(wert)
		{
			//alert("test");
			//Konvertieren des übergebenen Wertes in einen Zahlenwert
			wert = Number(wert);
			
			//Errechnen der Realen Breite des Balkens in Pixel
			let reale_breite = (breite/100)*wert;
			
			//Zuweisen der realen Breite mittels CSS - width und dem Inline style Attribut auf den nb... Notenbalken
			document.getElementById("nb").style.width = reale_breite + "px";
			
			/* Wenn am Slider geschoben wird soll der Wert des Sliders auch in das Textfeld/Numberfeld gesetzt werden*/
			document.getElementById("nf").value = wert;
			
			/* Wenn das Textfeld/Numberfeld geändert wird soll sich auch der Slider entsprechend ändern*/
			document.getElementById("x").value = wert;
						
			//alert(wert);
			if (wert>70)
			{ 	//grün
				document.getElementById("nb").style.backgroundColor="#00ff00";
				//setzen der globalen Variable für weitere Funktionen
				farbe = "#00ff00";
			}
			if (wert>50&&wert<71)
			{	//gelb
				document.getElementById("nb").style.backgroundColor="#ffff00";
				farbe = "#ffff00";
			}	
			if (wert>30&&wert<51)
			{	//orange
				document.getElementById("nb").style.backgroundColor="#ff8000";
				farbe = "#ff8000";
			}	
			if (wert<31)
			{	//rot
				document.getElementById("nb").style.backgroundColor="#ff0000";
				farbe = "#ff0000";
			}	

		}
		
		/************************************************************************/
		/*********** Function createPrintscreen *********************************/
		/**		Hier wird der Druckbildschrim zusammengebaut 				   **/
		/************************************************************************/
		function createPrintscreen()
		{
			/*Um später einfach mit den Werten des Formulares arbeiten zu können holen wir uns per DOM
			die Felder in Variablen... somit müssen wir später nur auf das Attribut (meistens value) zugreifen*/
			let nname = window.document.bform.nname;
			let vname = window.document.bform.vname;
			let klasse = window.document.bform.klasse;
			let geschl = window.document.bform.geschl;
			let ordentlich = window.document.bform.ordentlich;
			let email = window.document.bform.email;
			let notenfarbe = window.document.bform.lp;
			let note = window.document.bform.x;
			
			/* Textbausteinvariablen die wir dann später für die Ausgabe benötigen */
			let txt_geschl = "";
			let txt_ordentlich = "";
			let txt_email = "";
			
			let ausgabe = ""; // In dieser Variablen werden dann weiter unten die Textbausteine verknüpft
			
			//Je nach Geschlecht soll die passende Anrede genutzt werden
			if(geschl.value == "m")
			{		txt_geschl = "Der Sch&uuml;ler";	
			}else{	txt_geschl = "Die Sch&uuml;lerin";}
			
			//Je nachdem ob es ein ordentlicher Schüler war oder nicht - das wird über das Attribut checked (true/false) realsiert
			if(ordentlich.checked === true)
			{		txt_ordentlich = "hat als ordentliche/r Sch&uuml;ler/in";	
			}else{  txt_ordentlich = "hat als au&szlig;erordentliche/r Sch&uuml;ler/in";}
			
			//Je nachdem ob per Email senden aktiviert ist oder nicht
			if(email.checked === true)
			{		//Achtung - die Hochkomma das Buttons müssen wie im Unterricht besprochen maskiert werden
					txt_email = "<input type='button' name='email' value='Email senden' onclick='email_senden();'>";	
			}else{  txt_email = "";}
			
			//Zusammenbau des Ausgabestrings
			ausgabe += txt_geschl; 							//Anrede
			ausgabe += "&nbsp;" + vname.value + "&nbsp;" + nname.value + "<br />"; 			//Vor- und Nachname
			ausgabe += txt_ordentlich + "<br />"; 			//Ordentlicher oder ausßerordentlicher Schüler
			ausgabe += "den Jahrgang "+ klasse.value  + "<br />"; 	//Klasse
			ausgabe += "mit der Note " + note.value  + " absolviert.<br />"; 	//Note
			ausgabe += txt_email; 	//Wenn der Emailversand ausgewählt wurde soll der Button dort erscheinen	
			
			/*Die Farbe des Div wird ensprechend Farbbalken formatiert*/
			document.getElementById("printscreen_div").style.backgroundColor = farbe;
			
			
			
			//Mittels innerHTML wird Html Code zu einem Element hinzugefügt
			document.getElementById("printscreen_div").innerHTML= ausgabe;
		}
		
		
		/************************************************************************/
		/*********** Function email_senden      *********************************/
		/** ist derzeit eine reine Dummyfunktionen die ein alert()  ausgibt	   **/
		/************************************************************************/
		function email_senden()
		{		
			alert("Email wird gesendet");	
		}