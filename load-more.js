function set_class(element, new_class, initial, more, btn){
	var elemento = $(element).find('.w-dyn-item');
	var total_elements = elemento.length;
	var counter = 0;
	var items = parseInt(initial) + parseInt(more);

	$(element+' .w-dyn-item').removeClass(new_class);
	elemento.each(function(i) {
	   if (i % total_elements == 0) {
	       counter = 1;
	   } else {
	       counter++;
	   }
	   if (counter > items) {
	       $(this).addClass(new_class);
	   }
	});
}

function set_load_more_attr(el, initial, new_value){
	var c = parseInt(initial) + parseInt(new_value);
	el.attr('data-showing', c);
	var nv = parseInt(c)-parseInt(initial);

	set_class('.load_more_wrapper', 'none', initial, nv, el);
}