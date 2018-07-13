/**
 * Created by Student on 13.07.2018.
 */
Options = {};
Options.addRowIndex = 0;
Options.table = null;

Options.add = function() {
    var addBtn = document.getElementById("addBtn");
    addBtn.onclick = Options.addRow;
}

Options.addRow = function() {
    if(!Options.table) {
        Options.table = document.createElement("TABLE");
        Options.table.stylesheet = "Style.css";
        document.body.appendChild(Options.table);
    }

    var row = Options.table.insertRow(Options.addRowIndex);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    var input = document.createElement("INPUT");
    input.type = "text";
    input.size = "30";
    input.value = "";
    cell1.appendChild(input);
    
    var btnSaveEdit = document.createElement("INPUT");
    btnSaveEdit.value = "Save";
    btnSaveEdit.type = "Button";
    cell2.appendChild(btnSaveEdit);

    var textLastValue = input.value;
    Options.table.onkeydown = function(e) {
        if(e.keyCode == "27") {
        	cell1.firstChild.value = textLastValue;
        	btnSaveEdit.onclick();
        }

        if(e.keyCode == "13") {
            btnSaveEdit.onclick();
        }
    }

    btnSaveEdit.onclick = function() {
        if(btnSaveEdit.value == "Save") {
        	if(cell1.firstChild.value != "") {
        		cell1.innerText = cell1.firstChild.value;
        		textLastValue = cell1.innerText;
        	} else {
        		cell1.innerText = " ";
        	}
            btnSaveEdit.value = "Edit";
        } else {
            input = document.createElement("INPUT");
            input.type = "text";
            input.size = "30";
            input.value = cell1.innerText;
            cell1.removeChild(cell1.firstChild);
            cell1.appendChild(input);
            btnSaveEdit.value = "Save";
        }
    }

    var btnDelete = document.createElement("INPUT");
    btnDelete.value = "Delete";
    btnDelete.type = "Button";
    cell3.appendChild(btnDelete);

    btnDelete.onclick = function() {
        Options.table.deleteRow(cell3.rowIndex);
    }

}



