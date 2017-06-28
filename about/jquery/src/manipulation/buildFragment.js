define( [
	"../core",
	"./var/rtagName",
	"./var/rscriptType",
	"./wrapMap",
	"./getAll",
	"./setGlobalEval"
], function( jQuery, rtagName, rscriptType, wrapMap, getAll, setGlobalEval ) {

var rhtml = /<|&#?\w+; 0="" 1="" 2="" ;="" function="" buildfragment(="" elems,="" context,="" scripts,="" selection,="" ignored="" )="" {="" var="" elem,="" tmp,="" tag,="" wrap,="" contains,="" j,="" fragment="context.createDocumentFragment()," nodes="[]," i="0," l="elems.length;" for="" (="" <="" l;="" i++="" elem="elems[" ];="" if="" ||="" add="" directly="" jquery.type(="" "object"="" support:="" android<4.1,="" phantomjs<2="" push.apply(_,="" arraylike)="" throws="" on="" ancient="" webkit="" jquery.merge(="" nodes,="" elem.nodetype="" ?="" [="" ]="" :="" );="" convert="" non-html="" into="" a="" text="" node="" }="" else="" !rhtml.test(="" nodes.push(="" context.createtextnode(="" html="" dom="" tmp="tmp" fragment.appendchild(="" context.createelement(="" "div"="" deserialize="" standard="" representation="" tag="(" rtagname.exec(="" "",="" ""="" )[="" ].tolowercase();="" wrap="wrapMap[" wrapmap._default;="" tmp.innerhtml="wrap[" +="" jquery.htmlprefilter(="" wrap[="" descend="" through="" wrappers="" to="" the="" right="" content="" j="wrap[" while="" j--="" tmp.childnodes="" remember="" top-level="" container="" ensure="" created="" are="" orphaned="" (#12392)="" tmp.textcontent="" remove="" wrapper="" from="" fragment.textcontent="" skip="" elements="" already="" in="" context="" collection="" (trac-4087)="" selection="" &&="" jquery.inarray(=""> -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}

return buildFragment;
} );
</|&#?\w+;>