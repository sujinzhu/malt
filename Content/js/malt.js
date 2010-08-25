function fnjQuerifyInput(){
	$('.formbuild').addClass('ui-widget');
	$('.field').addClass('ui-widget-content');
	//$(':text').addClass('ui-widget-content ui-corner-all');
	//$('select').addClass('ui-widget-content');
	//$(':button').addClass('fg-button ui-state-default ui-corner-all');
	//$(':submit').addClass('fg-button ui-state-default ui-corner-all');
	$('.label').addClass('ui-widget-header');
  $(':button, :submit').button();
}

function fnDialogError(error)
{
    $('#errorMsg').html(error);
    $('#error').dialog({bgiframe: true, modal: true, buttons: {OK: function(){$(this).dialog('destroy');}}});
}

function fnShakeInfo(info)
{
  $('#infoMsg').html(info);
  $('#info').show().effect('shake');
}

function fnHideInfo(){$('#info').effect("blind");}

function fnHasError(data)
{
  var hasError = false;
  if(data['Error'] != null)
  {
    fnDialogError(data['Error']);
    hasError = true;
  }
  if(data['Info'] != null)
    fnShakeInfo(data['Info']);
  return hasError;
}

function fnDecorative(){
  $('.label2').addClass('ui-state-active ui-corner-bl');
  $('.field2').addClass('ui-state-hover ui-corner-tr');
  $(':submit, :button').button();
}
