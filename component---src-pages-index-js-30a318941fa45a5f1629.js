(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{206:function(e,t,a){"use strict";a.r(t);a(207);var i=a(211),r=a(0),n=a.n(r),s=a(200),l=a(212),o=a.n(l),d=a(213),c=a.n(d),A=a(129),u=a(39),f=a(214),g=a.n(f),p=function(){var e=A.data;return n.a.createElement("header",{className:g.a.header},n.a.createElement("h1",null,n.a.createElement(u.a,{className:g.a.title},e.site.siteMetadata.title)),n.a.createElement("nav",null,n.a.createElement("ul",{className:g.a.navList},n.a.createElement("li",null,n.a.createElement(u.a,{className:g.a.navItem,activeClassName:g.a.activeNavItem,to:"/"},"Home")),n.a.createElement("li",null,n.a.createElement(u.a,{className:g.a.navItem,activeClassName:g.a.activeNavItem,to:"/blog"},"Blog")),n.a.createElement("li",null,n.a.createElement(u.a,{className:g.a.navItem,activeClassName:g.a.activeNavItem,to:"/resume"},"Resume")),n.a.createElement("li",null,n.a.createElement(u.a,{className:g.a.navItem,activeClassName:g.a.activeNavItem,to:"/contact"},"Contact")))))};t.default=function(){var e=i.data;return n.a.createElement(s.a,null,n.a.createElement(p,null),n.a.createElement("div",{className:c.a.container},n.a.createElement(o.a,{className:c.a.picture,fixed:e.image.childImageSharp.fixed,alt:"A picture of Allison."}),n.a.createElement("p",null,"I use computational models to explore volcanic flows.")))}},207:function(e,t,a){"use strict";a(210)("fixed",(function(e){return function(){return e(this,"tt","","")}}))},210:function(e,t,a){var i=a(1),r=a(8),n=a(32),s=/"/g,l=function(e,t,a,i){var r=String(n(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),i(i.P+i.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},211:function(e){e.exports=JSON.parse('{"data":{"image":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFAgP/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABrw9pUwciv//EABoQAAMAAwEAAAAAAAAAAAAAAAECAwAREhP/2gAIAQEAAQUCag4AemTiXHrpNg4j8L//xAAWEQADAAAAAAAAAAAAAAAAAAABEDH/2gAIAQMBAT8BhX//xAAWEQEBAQAAAAAAAAAAAAAAAAABABL/2gAIAQIBAT8Bythv/8QAHBAAAgICAwAAAAAAAAAAAAAAAAECERIhMUFh/9oACAEBAAY/AnjySc5t16NqSqx5FrXRVH//xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhMWFB/9oACAEBAAE/IVKuMnmgOJXyEFs8klYVEoWtFwy1+7P/2gAMAwEAAgADAAAAEBA//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERQf/aAAgBAwEBPxBaFR//xAAWEQEBAQAAAAAAAAAAAAAAAAARARD/2gAIAQIBAT8QAzH/xAAZEAEBAQEBAQAAAAAAAAAAAAABESEAMUH/2gAIAQEAAT8QDHDaLMxnPt7MZCewZ71m8pRQ+9DQsNJN+Lzk1egSYnAUXpXf/9k=","width":400,"height":301,"src":"/static/8742639a2af6f07fa8ab72c013d1ae39/8539d/allie.jpg","srcSet":"/static/8742639a2af6f07fa8ab72c013d1ae39/8539d/allie.jpg 1x,\\n/static/8742639a2af6f07fa8ab72c013d1ae39/775d9/allie.jpg 1.5x,\\n/static/8742639a2af6f07fa8ab72c013d1ae39/bc3a8/allie.jpg 2x"}}}}}')},212:function(e,t,a){"use strict";a(33),a(25),a(15),a(69),a(138),a(207);var i=a(16);t.__esModule=!0,t.default=void 0;var r,n=i(a(70)),s=i(a(71)),l=i(a(139)),o=i(a(140)),d=i(a(0)),c=i(a(52)),A=function(e){var t=(0,o.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},u=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},f=Object.create({}),g=function(e){var t=A(e),a=u(t);return f[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,E=new WeakMap;function b(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},i&&d.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),d.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function y(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function w(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var N=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+d+s+l+a+i+t+n+r+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,r=e.spreadProps,n=d.default.createElement(B,(0,o.default)({src:t},r));return a.length>1?d.default.createElement("picture",null,i(a),n):n},B=d.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,A=e.onClick,u=e.loading,f=e.draggable,g=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:i,src:r},g,{onLoad:s,onError:c,onClick:A,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));B.propTypes={style:c.default.object,onError:c.default.func,onClick:c.default.func,onLoad:c.default.func};var L=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!p&&h&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||m&&(p||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=N(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=A(e),a=u(t),f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=A(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,u=void 0===c?{}:c,f=e.placeholderClassName,g=e.fluid,p=e.fixed,m=e.backgroundColor,h=e.durationFadeIn,E=e.Tag,v=e.itemProp,w=e.loading,N=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,o.default)({opacity:L?1:0,transition:j?"opacity "+h+"ms":"none"},l),x="boolean"==typeof m?"lightgray":m,Q={transitionDelay:h+"ms"},O=(0,o.default)({opacity:this.state.imgLoaded?0:1},j&&Q,{},l,{},u),k={title:t,alt:this.state.isVisible?"":a,style:O,className:f,itemProp:v};if(g){var V=g,z=V[0];return d.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},d.default.createElement(E,{style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),x&&d.default.createElement(E,{title:t,style:(0,o.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&Q)}),z.base64&&d.default.createElement(C,{src:z.base64,spreadProps:k,imageVariants:V,generateSources:y}),z.tracedSVG&&d.default.createElement(C,{src:z.tracedSVG,spreadProps:k,imageVariants:V,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,b(V),d.default.createElement(B,{alt:a,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:v,loading:w,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:w},z,{imageVariants:V}))}}))}if(p){var P=p,M=P[0],T=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete T.display,d.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},x&&d.default.createElement(E,{title:t,style:(0,o.default)({backgroundColor:x,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},j&&Q)}),M.base64&&d.default.createElement(C,{src:M.base64,spreadProps:k,imageVariants:P,generateSources:y}),M.tracedSVG&&d.default.createElement(C,{src:M.tracedSVG,spreadProps:k,imageVariants:P,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,b(P),d.default.createElement(B,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:v,loading:w,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:w},M,{imageVariants:P}))}}))}return null},t}(d.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var j=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),R=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});L.propTypes={resolutions:j,sizes:R,fixed:c.default.oneOfType([j,c.default.arrayOf(j)]),fluid:c.default.oneOfType([R,c.default.arrayOf(R)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onClick:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var x=L;t.default=x}}]);
//# sourceMappingURL=component---src-pages-index-js-30a318941fa45a5f1629.js.map