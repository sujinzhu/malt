var soEntries;

$(function(){
	var url = '/so/change_total_amount/'+$('#so_id').val();
	$('#total_amount').editable(url);
	$('#so_entries tbody').click(function(event){
		$(soEntries.fnSettings().aoData).each(function(){
			$(this.nTr).removeClass('row_selected');
		});
		$(event.target.parentNode).addClass('row_selected');
	});
	soEntries=$('#so_entries').dataTable({
		"aoColumns": [{"sType": "string"}, null, null, null, null],
        "fnFooterCallback": function (nRow, aaData, iStart, iEnd, aiDisplay ){
        	var iTotalMarket = 0;
	        for ( var i=0; i<aaData.length; i++)
	        {
	          iTotalMarket += aaData[i][2]*aaData[i][3];
	        }
	
	        var iPageMarket = 0;
	        for ( var i=iStart; i<iEnd; i++)
	        {
	          iPageMarket += aaData[aiDisplay[i]][2]*aaData[aiDisplay[i]][3];
	        }
	
	        var nCells = nRow.getElementsByTagName('th');
	        nCells[1].innerHTML = iPageMarket + ' of ' + iTotalMarket;
	    }
	});
    fnAppendAddButton();
    $('#btn_add').click(function(){$('#new_entry').slideToggle('slow');});
	$('#prod_descs').tabs();
});

function selectDesc(description){
	$('#prod_descs_container').slideUp("slow");
	$('#products_container').empty().load('/prod/list_by_desc2', {description: description}).slideDown("slow");
}

function selectProdReturn(){
	$('#products_container').slideUp("slow");
	$('#prod_descs_container').slideDown("slow");
}

function selectProd(productId){
	$('#products_container').slideUp("slow");
	$.getJSON('/prod/with_stock2/'+productId, function(data){
		$('#product_id').val(data[0]['id']);
		$('#prod_id').val(data[0]['product_id']);
		$('#catena').val(data[0]['catena']);
		$('#description').val(data[0]['description']);
		$('#price1').val(data[0]['price']);
		$('#price2').val(data[0]['price2']);
		$('#price').val(data[0]['price2']);
		$('#stk_quantity').val(data[0]['quantity']);
	});
	$('#quantity_container').slideDown("slow");
}

function enterQuantityReturn(){
	$('#quantity_container').slideUp("slow");
	$('#products_container').slideDown("slow");
}

function enterQuantity(soId){
	$.post('/so/create_entry2/'+soId,{product_id: $('#product_id').val(), price: $('#price').val(), quantity: $('#quantity').val()},function(){soEntries.fnAddData([$('#prod_id').val(), $('#description').val(), $('#price').val(), $('#quantity').val(), $('#catena').val()])});
	$('#quantity_container').slideUp("slow");
	$('#prod_descs_container').slideDown("slow");
}
