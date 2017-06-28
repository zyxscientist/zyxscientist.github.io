define( [
	"../core",
	"../selector"
], function( jQuery ) {

jQuery.expr.filters.hidden = function( elem ) {
	return !jQuery.expr.filters.visible( elem );
};
jQuery.expr.filters.visible = function( elem ) {

	// Support: Opera <= 12.12="" opera="" reports="" offsetwidths="" and="" offsetheights="" less="" than="" zero="" on="" some="" elements="" use="" or="" instead="" of="" as="" the="" element="" is="" not="" visible="" if="" either="" true="" see="" tickets="" #10406="" #13132="" return="" elem.offsetwidth=""> 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
};

} );
</=>