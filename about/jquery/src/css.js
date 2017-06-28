define( [
	"./core",
	"./var/pnum",
	"./core/access",
	"./css/var/rmargin",
	"./var/document",
	"./var/rcssNum",
	"./css/var/rnumnonpx",
	"./css/var/cssExpand",
	"./css/var/isHidden",
	"./css/var/getStyles",
	"./css/var/swap",
	"./css/curCSS",
	"./css/adjustCSS",
	"./css/defaultDisplay",
	"./css/addGetHookIf",
	"./css/support",
	"./data/var/dataPriv",

	"./core/init",
	"./core/ready",
	"./selector" // contains
], function( jQuery, pnum, access, rmargin, document, rcssNum, rnumnonpx, cssExpand, isHidden,
	getStyles, swap, curCSS, adjustCSS, defaultDisplay, addGetHookIf, support, dataPriv ) {

var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?

		// If we already have the right measurement, avoid augmentation
		4 :

		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Support: IE11 only
	// In IE 11 fullscreen elements inside of an iframe have
	// 100x too small dimensions (gh-1764).
	if ( document.msFullscreenElement && window.top !== window ) {

		// Support: IE11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = Math.round( elem.getBoundingClientRect()[ name ] * 100 );
		}
	}

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0="" 1="" 2="" 3="" 8="" ||="" val="=" null="" )="" {="" fall="" back="" to="" computed="" then="" uncomputed="" css="" if="" necessary="" elem,="" name,="" styles="" );="" (="" <="" name="" ];="" }="" unit="" is="" not="" pixels.="" stop="" here="" and="" return.="" rnumnonpx.test(="" return="" val;="" check="" for="" style="" in="" case="" a="" browser="" which="" returns="" unreliable="" values="" getcomputedstyle="" silently="" falls="" the="" reliable="" elem.style="" valueisborderbox="isBorderBox" &&="" support.boxsizingreliable()="" elem.style[="" ]="" normalize="" "",="" auto,="" prepare="" extra="" 0;="" use="" active="" box-sizing="" model="" add="" subtract="" irrelevant="" +="" augmentwidthorheight(="" isborderbox="" ?="" "border"="" :="" "content"="" ),="" valueisborderbox,="" "px";="" function="" showhide(="" elements,="" show="" var="" display,="" hidden,="" index="0," length="elements.length;" ;="" length;="" index++="" elem="elements[" !elem.style="" continue;="" values[="" "olddisplay"="" display="elem.style.display;" reset="" inline="" of="" this="" element="" learn="" it="" being="" hidden by="" cascaded="" rules="" or="" !values[="" "none"="" elem.style.display="" set="" elements="" have="" been="" overridden="" with="" display:="" none="" stylesheet="" whatever="" default such="" an="" ""="" ishidden(="" "olddisplay",="" defaultdisplay(="" elem.nodename="" else="" !="=" !hidden="" datapriv.set(="" jquery.css(="" "display"="" most="" second="" loop avoid="" constant="" reflow="" !show="" "none";="" elements;="" jquery.extend(="" property="" hooks="" overriding="" behavior="" getting="" setting="" csshooks:="" opacity:="" get:="" function(="" we="" should="" always="" get="" number="" from="" opacity="" ret="curCSS(" "opacity"="" "1"="" ret;="" },="" don't="" automatically="" "px"="" these="" possibly-unitless="" properties="" cssnumber:="" "animationiterationcount":="" true,="" "columncount":="" "fillopacity":="" "flexgrow":="" "flexshrink":="" "fontweight":="" "lineheight":="" "opacity":="" "order":="" "orphans":="" "widows":="" "zindex":="" "zoom":="" true="" whose="" names="" you="" wish="" fix="" before="" value="" cssprops:="" "float":="" "cssfloat"="" on="" dom="" node="" style:="" value,="" text="" comment="" nodes="" !elem="" elem.nodetype="==" return;="" make="" sure="" that="" we're="" working="" right="" ret,="" type,="" hooks,="" origname="jQuery.camelCase(" jquery.cssprops[="" gets="" hook="" prefixed="" version,="" unprefixed="" version="" jquery.csshooks[="" undefined="" type="typeof" value;="" convert="" "+=" or " -=" to relative numbers (#7345)
			if ( type === " string"="" ret[="" fixes="" bug="" #9237="" nan="" aren't="" (#7116)="" was="" passed="" in,="" (except="" certain="" properties)="" "number"="" jquery.cssnumber[="" support:="" ie9-11+="" background-*="" props="" affect="" original="" clone's="" !support.clearclonestyle="" name.indexof(="" "background"="" style[="" provided,="" otherwise="" just="" specified="" !hooks="" !(="" "set"="" provided="" non-computed="" there="" "get"="" false,="" object="" css:="" extra,="" val,="" num,="" try="" followed="" otherwise,="" way="" exists,="" "normal"="" cssnormaltransform="" numeric="" forced="" qualifier="" looks="" num="parseFloat(" isfinite(="" jquery.each(="" [="" "height",="" "width"="" ],="" i,="" computed,="" can="" dimension="" info="" invisibly="" them="" but="" must="" current="" would="" benefit="" rdisplayswap.test(="" elem.offsetwidth="==" swap(="" cssshow,="" function()="" getwidthorheight(="" set:="" matches,="" getstyles(="" "boxsizing",="" "border-box",="" pixels="" adjustment="" needed="" matches="rcssNum.exec(" matches[="" setpositivenumber(="" };="" jquery.csshooks.marginleft="addGetHookIf(" support.reliablemarginleft,="" parsefloat(="" curcss(="" "marginleft"="" elem.getboundingclientrect().left="" marginleft:="" elem.getboundingclientrect().left;="" android="" 2.3="" jquery.csshooks.marginright="addGetHookIf(" support.reliablemarginright,="" "display":="" "inline-block"="" curcss,="" "marginright"="" are="" used="" animate="" expand="" margin:="" padding:="" border:="" prefix,="" suffix="" prefix="" expand:="" i="0," expanded="{}," assumes="" single="" string="" parts="typeof" "string"="" value.split(="" "="" 4;="" i++="" expanded[="" cssexpand[="" parts[="" expanded;="" !rmargin.test(="" ].set="setPositiveNumber;" jquery.fn.extend(="" access(="" this,="" styles,="" len,="" map="{}," jquery.isarray(="" len="name.length;" len;="" map[="" name[="" map;="" jquery.style(="" arguments.length=""> 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );

return jQuery;
} );
</=>