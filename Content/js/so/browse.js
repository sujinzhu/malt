var oSO;
$(function(){
	$('#sos tbody').click(function(event){
		$(oSO.fnSettings().aoData).each(function(){
			$(this.nTr).removeClass('row_selected');
		});
		$(event.target.parentNode).addClass('row_selected');
	});
    oSO = $('#sos').dataTable({
    	"fnFooterCallback": function (nRow, aaData, iStart, iEnd, aiDisplay ){
        	var iTotalMarket = 0;
        	for ( var i=0; i<aaData.length; i++)
        	{
        		iTotalMarket += aaData[i][3] * 1 + 0;
        	}

        	var iPageMarket = 0;
        	for ( var i=iStart; i<iEnd; i++)
        	{
        		iPageMarket += aaData[aiDisplay[i]][3] * 1 + 0;
        	}

        	var nCells = nRow.getElementsByTagName('th');
        	nCells[1].innerHTML = iPageMarket + ' of ' + iTotalMarket;
       	}
    });
    fnAppendOpenButton();
    fnAppendRemoveButton();
    fnAppendAddButton();
	$('#btn_add').click(function(){ $('#new_so').slideToggle("slow"); });
	$('#btn_remove').click(function(){
		var anSelected = fnGetSelected(oSO);
		var iRow = oSO.fnGetPosition(anSelected[0]);
		$.post('/so/remove/'+anSelected[0].cells[0].innerHTML);
		oSO.fnDeleteRow(iRow);
	});
	$('#btn_open').click(function(){
		location.href='/so/view/'+fnGetSelected(oSO)[0].cells[0].innerHTML;
	})
});

