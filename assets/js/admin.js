;(function($){

	// 行を追加
	jQuery('.row-control .add-row').click(function(){
		var $master_html = '';
		jQuery(this).closest('tr').clone(true).insertAfter(jQuery(this).closest('tr'));
		row_count_reset();
	});

	// 行を削除
	jQuery('.row-control .del-row').click(function(){
		jQuery(this).closest('tr').remove();
		row_count_reset();
	});

	function row_count_reset(){
		jQuery('.row-control tbody tr').each(function(i){

			jQuery(this).find( 'input.bill-item-field' ).each(function(){

				// 置換対象の文字列
				var input_name = jQuery(this).attr("name");

				var result = input_name.replace(/(.*\[)(\d+)(\].*)/, "$1" + i + "$3" );
				jQuery(this).attr({"name":result}).attr({"id":result});

			});

			// 行番号をふり直す
			jQuery(this).find( '.cell-number' ).text(i + 1);
		});
	}

	jQuery('#sortable').sortable();
	jQuery('#sortable').disableSelection();
	    
	jQuery('#sortable').bind('sortstop', function (e, ui) {
	    // ソートが完了したら実行される。

	    row_count_reset();
	    jQuery('#sortable').sortable();

	})


})(jQuery);
