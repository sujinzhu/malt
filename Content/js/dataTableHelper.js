function fnAppendAddButton(caption){
	$('.dataTables_length').append("<button id='btn_add'><span class='ui-icon ui-icon-plusthick'></span>"+caption+"</button>");
}

function fnAppendRemoveButton(caption){
	$('.dataTables_filter').prepend("<button id='btn_remove'><span class='ui-icon ui-icon-minusthick'></span>"+caption+"</button>");
}

function fnAppendOpenButton(caption){
	$('.dataTables_filter').prepend("<button id='btn_open'><span class='ui-icon ui-icon-folder-open'></span>"+caption+"</button>");
}

function fnAppendCalendarButton(caption){
  $('.dataTables_filter').prepend("<button id='btn_calendar'><span class='ui-icon ui-icon-calendar'></span>"+caption+"</button>");
}

function fnAppendButton1(caption){
  $('.dataTables_filter').prepend("<button id='btn_button1'>"+caption+"</button>");
}
function fnAppendButton2(caption){
  $('.dataTables_length').append("<button id='btn_button2'>"+caption+"</button>");
}
function fnAppendButton3(caption){
  $('.dataTables_filter').prepend("<button id='btn_button3'>"+caption+"</button>");
}
function fnAppendButton4(caption){
  $('.dataTables_length').append("<button id='btn_button4'>"+caption+"</button>");
}

function fnGetSelected(oTableLocal){
	var aReturn = new Array();
	var aTrs = oTableLocal.fnGetNodes();
	
	for(var i=0; i<aTrs.length; i++){
		if ($(aTrs[i]).hasClass('row_selected')){
			aReturn.push(aTrs[i]);
		}
	}
	return aReturn;
}

/* for ajax remove */
var oDataTable;

function fnGetRemoveLink(sLabel)
{
  return "<span style='cursor: pointer;'>"+sLabel+"</span>";
}

function fnTrigerRemove(sUrl, sTableId, sLabel)
{
  $(sTableId + ' tbody td').click(function(){
    var aPos = oDataTable.fnGetPosition(this);
    var aData = oDataTable.fnGetData(aPos[0]);
    if(aData[aPos[2]] == fnGetRemoveLink(sLabel))
    {
      fnRemove(sUrl, aData[0], aPos[0]);
    }
  });
}

function fnRemove(sUrl, id, iRow)
{
  jQuery.post(sUrl, {id: id}, function(data){
    if(!fnHasError(data)){
      oDataTable.fnDeleteRow(iRow);
    }
  }, 'json');
}

function fnRenderRemoveLink(oObj, sUrl)
{
  var link = "<span class='remove-link' onclick=";
  link = link + '"javascript:fnRemove(';
  link = link + "'" + sUrl + "', ";
  link = link + oObj.aData[0] + ", ";
  link = link + oObj.iDataRow + ');">';
  link = link + oObj.aData[oObj.iDataColumn] + "</span>";
  return link;
}

/*
 * expect function
 * function sFunctionName(id, iRow){...}
 * id : obj, id of domain model
 * iRow: Row index in DataTable
 */
function fnRenderSelectLink(oObj, sFunctionName)
{
  var link = "<span class='select-link' onclick=";
  link = link + '"javascript:' + sFunctionName + "('";
  link = link + oObj.aData[0] + "', ";
  link = link + oObj.iDataRow + ');">';
  link = link + oObj.aData[oObj.iDataColumn] + "</span>";
  return link;
}

/*
 * expect function
 * function sFunctionName(id, iRow, sContent){...}
 * id : obj, id of domain model
 * iRow: Row index in DataTable
 * sContent: content of current Cell
 */
function fnRenderSelectLink3(oObj, sFunctionName)
{
  var link = "<span class='select-link' onclick=";
  link = link + '"javascript:' + sFunctionName + "('";
  link = link + oObj.aData[0] + "', ";
  link = link + oObj.iDataRow;
  link = link + ", '" + oObj.aData[oObj.iDataColumn] + "'" + ');">';
  link = link + oObj.aData[oObj.iDataColumn] + "</span>";
  return link;
}

function fnRemove2(sUrl, id, oTbl, iRow)
{
  jQuery.post(sUrl, {id: id}, function(data){
    if(!fnHasError(data)){
      oTbl.fnDeleteRow(iRow);
    }
  }, 'json');
}

function fnRenderRemoveLink(oObj, sUrl)
{
  var link = "<span class='remove-link' onclick=";
  link = link + '"javascript:fnRemove(';
  link = link + "'" + sUrl + "', ";
  link = link + oObj.aData[0] + ", ";
  link = link + oObj.iDataRow + ');">';
  link = link + oObj.aData[oObj.iDataColumn] + "</span>";
  return link;
}
