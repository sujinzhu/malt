var oCustomers;
$(function(){
	$('#customers tbody').click(function(event){
		$(oCustomers.fnSettings().aoData).each(function(){ $(this.nTr).removeClass('row_selected'); });
		$(event.target.parentNode).addClass('row_selected');
	});
	oCustomers = $('#customers').dataTable();
  fnAppendAddButton();
  fnAppendRemoveButton();
  fnAppendCalendarButton();
	$('#btn_add').click(function(){ $('#new_customer').slideToggle(); $('#full_name').focus(); });
	$('#btn_create').click(function(){ CreateCustomer(); });
  $('#btn_calendar').click(function(){
		var anSelected = fnGetSelected(oCustomers);
		var iRow = oCustomers.fnGetPosition(anSelected[0]);
    location.href = '/trade/calendar/'+anSelected[0].cells[0].innerHTML;
  });
});

function CreateCustomer(){
	var form_data = {full_name: $('#full_name').val(), phone_number1: $('#phone_number1').val(), phone_number2: $('#phone_number2').val(), qq: $('#qq').val(), msn: $('#msn').val(), skype: $('#skype').val(), email: $('#email').val()};
	$.post('/trade/create', form_data, function(data){
		oCustomers.fnAddData([data[0]['id'], form_data['full_name'], form_data['phone_number1'], form_data['phone_number2'], form_data['qq'], form_data['msn'], form_data['skype'], form_data['email']]);
	}, 'json');
	$('#new_customer_form :text').val('');
	$('#full_name').focus();
}
