/*global $, SyntaxHighlighter*/


var oTable2;

$(document).ready(function () {
    'use strict';

    oTable2 = $('#entrys_table').DataTable({
    	//stateSave: true,
		fixedHeader: true
    });

	yadcf.initMultipleColumns(oTable2, [{
		column_number: [1, 2], 
		filter_container_id: 'multi-column-filter-01', 
		filter_default_label: 'First table columns 1 and 2!',
		filter_match_mode : "contains",
		filter_type: 'multi_select',
        	select_type: 'select2'
	}]);
    SyntaxHighlighter.all();

});
