function formatResult(row) { return row[0]; }

function formatAddressItem(row){
  return "<span class='address-id'>" + row[0] + "</span><span class='address'>" + row[1] + "</span>";
}

function formatCustomerItem(row){
  return "<span class='customer-id'>" + row[0] + "</span><span class='customer-name'>" + row[1] + "</span>";
}

function formatItem3(row){
  return "<span class='material-id'>" + row[0] + "</span> <span class='material-name'>" + row[1] + "</span><span class='material-spec'>" + row[2] + "</span>";
}

function formatMaterialItem(row){
  return "<span class='material-id'>" + row[0] + "</span> <span class='material-name'>" + row[1] + "</span><span class='material-spec'>" + row[2] + "</span>";
}

function formatItem(row){ return row[0] + " " + row[1]; }

function formatRepositoryItem(row){
  return "<span class='repository-id'>" + row[0] + "</span> <span class='repository-desc'>" + row[1] + "</span>";
}

function formatVendorItem(row){
  return "<span class='vendor-id'>" + row[0] + "</span><span class='vendor-name'>" + row[1] + "</span>";
}

function formatUnitItem(row){
  return "<span class='unit-id'>" + row[0] + "</span><span class='unit-name'>" + row[1] + "</span>";
}

function formatSalesOrderItem(row){
  return "<span class='so-id'>" + row[0] + "</span><span class='customer-name'>" + row[1] + "</span>";
}
