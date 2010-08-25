var oCPOs;
$(function(){
  oCPOs=$('#cpolist').dataTable();$('#cpo_OrderedDate').datepicker();
  $('#cpolist tbody').click(function(event){ $(oCPOs.fnSettings().aoData).each(function(){ $(this.nTr).removeClass('row_selected'); });
    $(event.target.parentNode).addClass('row_selected');
  });
  $('#new_cpo_form').validate();
});

function fnRemoveCPO(url)
{
  var anSelected = fnGetSelected(oCPOs);
  var iRow = oCPOs.fnGetPosition(anSelected[0]);
  $.post(url,{id: anSelected[0].cells[0].innerHTML}, function(data){
    if(!fnHasError(data))
      oCPOs.fnDeleteRow(iRow);
  }, "json");
}

function fnOpenCPO(url) {location.href=url+"?id="+fnGetSelected(oCPOs)[0].cells[0].innerHTML; }

function fnExtractDemand(url){
  $.post(url, {id: fnGetSelected(oCPOs)[0].cells[0].innerHTML}, function(data){fnHasError(data);}, "json");
}
