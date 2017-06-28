define( function() {

	// Match a standalone tag
	return ( /^<([\w-]+)\s*\ ?="">(?:<\ \1="">|)$/ );
} );
</\></([\w-]+)\s*\>