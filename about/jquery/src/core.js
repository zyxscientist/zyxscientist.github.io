define( [
	"./var/arr",
	"./var/document",
	"./var/slice",
	"./var/concat",
	"./var/push",
	"./var/indexOf",
	"./var/class2type",
	"./var/toString",
	"./var/hasOwn",
	"./var/support"
], function( arr, document, slice, concat, push, indexOf, class2type, toString, hasOwn, support ) {

var
	version = "@VERSION",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1 0="" make="" sure="" we="" trim="" bom="" and="" nbsp="" rtrim="/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g," matches="" dashed="" string="" for="" camelizing="" rmsprefix="/^-ms-/," rdashalpha="/-([\da-z])/gi," used="" by="" jquery.camelcase="" as="" callback="" to="" replace()="" fcamelcase="function(" all,="" letter="" )="" {="" return="" letter.touppercase();="" };="" jquery.fn="jQuery.prototype" =="" the="" current="" version="" of="" jquery="" being="" jquery:="" version,="" constructor:="" jquery,="" start="" with="" an="" empty="" selector="" selector:="" "",="" default length="" a="" object="" is="" length:="" 0,="" toarray:="" function()="" slice.call(="" this="" );="" },="" get="" nth="" element="" in="" matched="" set="" or="" whole="" clean="" array="" get:="" function(="" num="" !="null" ?="" just="" one="" from="" (="" <="" this[="" +="" this.length="" ]="" :="" all="" elements="" take="" push="" it="" onto="" stack="" (returning="" new="" set)="" pushstack:="" elems="" build="" var="" ret="jQuery.merge(" this.constructor(),="" add="" old="" (as="" reference)="" ret.prevobject="this;" ret.context="this.context;" newly-formed="" ret;="" execute="" every="" set.="" each:="" jquery.each(="" this,="" map:="" this.pushstack(="" jquery.map(="" elem,="" i="" callback.call(="" i,="" elem="" }="" slice:="" slice.apply(="" arguments="" first:="" this.eq(="" last:="" -1="" eq:="" len="this.length," j="+i">= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		var realStringObj = obj && obj.toString();
		return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
	},

	isPlainObject: function( obj ) {

		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.constructor &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
			return false;
		}

		// If the function hasn't returned already, we're confident that
		// |obj| is a plain object, created by {} or constructed with new Object
		return true;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android<4.0, 0="" 1="" 2="" ios<6="" (functionish="" regexp)="" return="" typeof="" obj="==" "object"="" ||="" "function"="" ?="" class2type[="" tostring.call(="" )="" ]="" :="" obj;="" },="" evaluates="" a="" script="" in="" global="" context="" globaleval:="" function(="" code="" {="" var="" script,="" indirect="eval;" );="" if="" (="" the="" includes="" valid,="" prologue="" position="" strict="" mode="" pragma,="" execute="" by="" injecting="" tag="" into="" document.="" code.indexof(="" "use="" strict"="" "script"="" script.text="code;" document.head.appendchild(="" ).parentnode.removechild(="" }="" else="" otherwise,="" avoid="" dom="" node="" creation,="" insertion="" and="" removal="" using="" an="" eval="" indirect(="" convert="" dashed="" to="" camelcase;="" used="" css="" data="" modules="" support:="" ie9-11+="" microsoft="" forgot="" hump="" their="" vendor="" prefix="" (#9572)="" camelcase:="" string="" string.replace(="" rmsprefix,="" "ms-"="" ).replace(="" rdashalpha,="" fcamelcase="" nodename:="" elem,="" name="" elem.nodename="" &&="" elem.nodename.tolowercase()="==" name.tolowercase();="" each:="" obj,="" callback="" length,="" i="0;" isarraylike(="" length="obj.length;" for="" ;="" <="" length;="" i++="" callback.call(="" obj[="" ],="" i,="" false="" break;="" android<4.1="" trim:="" text="" null="" ""="" +="" rtrim,="" results="" is="" internal="" usage="" only="" makearray:="" arr,="" ret="results" [];="" arr="" !="null" object(="" jquery.merge(="" ret,="" "string"="" [="" push.call(="" ret;="" inarray:="" -1="" indexof.call(="" merge:="" first,="" second="" len="+second.length," j="0," len;="" j++="" first[="" ];="" first.length="i;" first;="" grep:="" elems,="" callback,="" invert="" callbackinverse,="" matches="[]," callbackexpect="!invert;" go="" through="" array,="" saving="" items="" that="" pass="" validator="" function="" callbackinverse="!callback(" elems[="" matches.push(="" matches;="" arg="" map:="" value,="" translating="" each="" of="" new="" values="" elems="" value="callback(" ret.push(="" every="" key="" on="" object,="" flatten="" any="" nested="" arrays="" concat.apply(="" [],="" guid="" counter="" objects="" guid:="" 1,="" bind="" context,="" optionally="" partially="" applying="" arguments.="" proxy:="" fn,="" tmp,="" args,="" proxy;="" tmp="fn[" fn="tmp;" quick="" check="" determine="" target="" callable,="" spec="" this="" throws="" typeerror,="" but="" we="" will="" just="" undefined.="" !jquery.isfunction(="" undefined;="" simulated="" args="slice.call(" arguments,="" proxy="function()" fn.apply(="" this,="" args.concat(="" slice.call(="" arguments="" };="" set="" unique="" handler="" same="" original="" handler,="" so="" it="" can="" be="" removed="" proxy.guid="fn.guid" =="" fn.guid="" jquery.guid++;="" now:="" date.now,="" jquery.support="" not="" core="" other="" projects="" attach="" properties="" needs="" exist.="" support="" jshint="" would="" error="" due="" symbol="" being="" defined="" es5.="" defining="" .jshintrc="" create="" danger="" unguarded="" another="" place,="" seems="" safer="" disable="" these="" three="" lines.="" *="" ignore:="" start="" jquery.fn[="" symbol.iterator="" end="" populate="" class2type="" map="" jquery.each(="" "boolean="" number="" array="" date="" regexp="" object="" symbol".split(="" "="" ),="" "[object="" "]"="" ios="" 8.2="" (not="" reproducible="" simulator)="" `in`="" prevent="" jit="" (gh-2145)="" hasown="" isn't="" here="" negatives="" regarding="" nodelist="" ie="" "length"="" obj.length,="" type="jQuery.type(" jquery.iswindow(="" false;="" "array"="" "number"=""> 0 && ( length - 1 ) in obj;
}

return jQuery;
} );
</4.0,></4.1>