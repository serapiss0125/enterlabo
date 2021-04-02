// JavaScript source code







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