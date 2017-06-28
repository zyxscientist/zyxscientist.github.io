define( [
	"./core",
	"./var/support",
	"./var/document",
	"./core/init", // Needed for hasOwn support test
	// This is listed as a dependency for build order, but it's still optional in builds
	"./core/ready"
], function( jQuery, support, document ) {

// Support: IE