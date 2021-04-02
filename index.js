// JavaScript source code
const top_page=document.getElementById("top_page")
const entrance=document.getElementById("entrance")

function check_id(){
    var ss_id = document.getElementById("ss_id").value;
    if (ss_id == ""){
      alert("IDÇì¸óÕÇµÇƒÇ≠ÇæÇ≥Ç¢");
    } else {
      check_in();
    }
  }

  function check_in() {
    var id = document.getElementById("ss_id");
    var spreadsheetId = id.value;
      gapi.client.sheets.spreadsheets.values.get({
          spreadsheetId: spreadsheetId ,
          range: sheet_name // KALAU CUMA NAMA SHEET, DIA AMBIL SEMUA DATA
      }).then((response) => {
          var result = response.result;
          var numRows = result.values ? result.values.length : 0;
          console.log(`${numRows} rows retrieved.`);
          // DATA ARRAY NYA ADA DI result.values MISAL MAU DIBACA
          top_page.style.display = "none";
		  entrance.style.display = "block";
        }

        function reloadPage(){
          location.reload(true);
        }



  function input_time(name, act){
    var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	var n = d.toLocaleTimeString();
	today = mm + '/' + dd + '/' + yyyy;

    var data_array = [today, n, name,act];
    
	var body = {
          values: [
              data_array
          ]
      };
      // INI BUAT NAMBAHIN DATA KE SHEET NYA
    var id = document.getElementById("ss_id");
    var spreadsheetId = id.value;
    gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId: spreadsheetId,
        range: 'rest_time', // INI NAMA SHEET YG BIASA DI BAWAH (DEFAULTNYA Sheet1)
        valueInputOption: 'RAW', // INI IKUTIN AJA
        resource: body
    }).then((response) => {
        var result = response.result;
        console.log(`${result.updates.updatedCells} cells appended.`)
    });
    if (act == "ë±Ç≠") {
      next_envelope();
    }
  }

const checkbox = document.getElementsByType("checkbox").value

function response(name){
	alert(name)
	if(checkbox=="False"){
		input_time(name, "èoÇÈ");
	}
	else if(checkbox == "True"){
		input_time(name, "ì¸ÇÈ");
	}}



	
    // 3 VALUE INI MUSTI DIUBAH SESUAI INSTRUKSI
    // for github
    var CLIENT_ID = "349251581607-o89p3uniernbl5mtb1kb8fge87cq057v.apps.googleusercontent.com";
    var API_KEY = "AIzaSyD-EY8vGMYv3wzyLov4JQ8l28pVwSeZ6Yk";


    var spreadsheetId = ss_id;

    // INI BUAT SHOW/HIDE TOMBOL2, KALO display=none ITU DI HIDE, KALO display=inline-block ITU DI SHOW
    // DI APP HARUSNYA NGGA PERLU GINIAN
    var authorizeButton = document.getElementById('authorize_button');

    function updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
            // authorizeButton.style.display = 'none';
            header.style.display = 'none';
        } else {
            authorizeButton.style.display = 'inline-block';
        }
    }

    // DARI SINI KE BAWAH JANGAN DIUBAH

    // Array of API discovery doc URLs for APIs used by the quickstart
    var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

    // Authorization scopes required by the API; multiple scopes can be
    // included, separated by spaces.
    var SCOPES = "https://www.googleapis.com/auth/spreadsheets";

    function handleClientLoad() {
        gapi.load('client:auth2', initClient);
    }

    function initClient() {
        gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
        }).then(function () {
            // Listen for sign-in state changes.
            gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

            // Handle the initial sign-in state.
            updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        }, function (error) {
            console.log(error)
        });
    }

    function handleAuthClick(event) {
        gapi.auth2.getAuthInstance().signIn();
    }

    function handleSignoutClick(event) {
        gapi.auth2.getAuthInstance().signOut();
    }