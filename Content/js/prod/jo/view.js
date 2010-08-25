var oDemands;
$(function(){
  oDemands = $('#jocdList').dataTable({"fnFooterCallback": function (nRow, aaData, iStart, iEnd, aiDisplay ){
        	var iTotalMarket = 0;
	        for ( var i=0; i<aaData.length; i++)
	        {
	          iTotalMarket += aaData[i][8]*1;
	        }
	
	        var iPageMarket = 0;
	        for ( var i=iStart; i<iEnd; i++)
	        {
	          iPageMarket += aaData[aiDisplay[i]][8]*1;
	        }
	
	        var nCells = nRow.getElementsByTagName('th');
	        nCells[1].innerHTML = iPageMarket + ' of ' + iTotalMarket;
	    }});
  $('#newDemandForm').validate({
    submitHandler: function(form){ $(form).ajaxSubmit({dataType: 'json', success: fnAddToDT}); }
  });
  $('.pageBody').css('float', 'left');
  $("#enabledProcesses").sortable({
			revert: true
		});
		$("#availableProcesses li").draggable({
			connectToSortable: '#enabledProcesses',
			helper: 'clone',
			revert: 'invalid'
		})
  
});

function fnSelectDemand(item){$('#jocd_ScheduledQuantity').val($(item).find('.quantity').text());$('#jocd_CustomerDemand_Id').val(item.id);$('#newDemand').fadeIn("slow");$('#selectDemand').fadeOut("slow");}

function fnAddToDT(data){
  if(!fnHasError(data))
  {
    oDemands.fnAddData([data['Id'], data['Source'], data['Customer'], data['Material'], data['RequiredQuantity'], data['BaseUnit'], data['RequiredDate'], data['ScheduledQuantity'], data['ScheduledQuantity2']]);
    $('#newDemand').fadeOut("slow");
  }
}

function fnGeneratePR(url, joid){$.post(url, {joid: joid}, function(data){fnHasError(data);}, "json");}