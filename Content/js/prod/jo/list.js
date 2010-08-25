var oJobOrders;
$(function(){
  oJobOrders = $('#jolist').dataTable();
  $('#jolist tbody').click(function(event){ $(oJobOrders.fnSettings().aoData).each(function(){ $(this.nTr).removeClass('row_selected'); });
    $(event.target.parentNode).addClass('row_selected');
  });
  $('#new_jo_form').validate();
});

function fnRemoveJO(url)
{
  var anSelected = fnGetSelected(oJobOrders);
  var iRow = oJobOrders.fnGetPosition(anSelected[0]);
  $.post(url,{id: anSelected[0].cells[0].innerHTML}, function(data){
    if(!fnHasError(data))
      oJobOrders.fnDeleteRow(iRow);
  }, "json");
}

function fnOpenJO(url) {location.href=url+"?id="+fnGetSelected(oJobOrders)[0].cells[0].innerHTML; }
