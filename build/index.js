!function(){"use strict";var e,t={759:function(){var e=window.wp.blocks,t=window.wp.element,a=window.lodash,o=window.wp.i18n,l=window.wp.blockEditor,n=window.wp.components,i=window.wp.hooks;const r="innocode-block-testimonial",c=(0,i.applyFilters)("innocode.block-testimonial.author_image.allowed_types",["image"]),m=(0,i.applyFilters)("innocode.block-testimonial.author_image.size","thumbnail"),s=(0,i.applyFilters)("innocode.block-testimonial.author_image.default",{src:"",width:"auto",height:"auto",alt:""}),u=(0,i.applyFilters)("innocode.block-testimonial.has_author_info.default",!0),h="text_top",d="text_bottom",g="text_right",p=(0,i.applyFilters)("innocode.block-testimonial.layout.default",h),_=e=>{let{value:a,onChange:n}=e;return(0,t.createElement)(l.RichText,{tagName:"blockquote",multiline:"p",value:a,placeholder:(0,o.__)("Text","innocode-block-testimonial"),onChange:n,className:`${r}__text`})},C=e=>{let{value:a}=e;return(0,t.createElement)(l.RichText.Content,{tagName:"blockquote",multiline:"p",value:a,className:`${r}__text`})};var f={text:{type:"string",source:"html",selector:`.${r}__text`},authorName:{type:"string",source:"html",selector:`.${r}-author__name`},attachmentId:{type:"integer",default:0},authorImageSrc:{type:"string",default:s.src,source:"attribute",selector:`.${r}-author__image img`,attribute:"src"},authorImageWidth:{type:"string",default:s.width,source:"attribute",selector:`.${r}-author__image img`,attribute:"width"},authorImageHeight:{type:"string",default:s.height,source:"attribute",selector:`.${r}-author__image img`,attribute:"height"},authorImageAlt:{type:"string",default:s.alt,source:"attribute",selector:`.${r}-author__image img`,attribute:"alt"},hasAuthorInfo:{type:"boolean",default:u},authorInfo:{type:"string",source:"html",selector:`.${r}-author__info`},layout:{type:"string",default:p,enum:[h,d,g]}},v=window.wp.primitives;(0,e.registerBlockType)("innocode/block-testimonial",{apiVersion:2,supports:{align:["wide","full"],className:!1},attributes:f,edit:function(e){const{attributes:i,setAttributes:C}=e,{text:f,authorName:v,attachmentId:w,authorImageSrc:b=s.src,authorImageWidth:E=s.width,authorImageHeight:k=s.height,authorImageAlt:I=s.alt,hasAuthorInfo:y=u,authorInfo:N,layout:x=p}=i,$=(e,t)=>{C({[e]:t})},A=e=>$("text",e),R=e=>{const t={attachmentId:e.id,authorImageAlt:e.alt||e.filename};(0,a.has)(e,["sizes",m])?(t.authorImageSrc=e.sizes[m].url,t.authorImageWidth=e.sizes[m].width,t.authorImageHeight=e.sizes[m].height):(t.authorImageSrc=e.url,t.authorImageWidth=e.width,t.authorImageHeight=e.height),C(t)},T=()=>{C({attachmentId:0,authorImageSrc:s.src,authorImageWidth:s.width,authorImageHeight:s.height,authorImageAlt:s.alt})};return(0,t.createElement)("figure",(0,l.useBlockProps)({className:r}),(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(n.PanelBody,{title:(0,o.__)("Author Image","innocode-block-testimonial"),initialOpen:!0},(0,t.createElement)("div",{className:"editor-post-featured-image"},(0,t.createElement)(l.MediaUploadCheck,null,(0,t.createElement)(l.MediaUpload,{allowedTypes:c,value:w,onSelect:R,modalClass:"editor-post-featured-image__media-modal",render:e=>{let{open:a}=e;return(0,t.createElement)("div",{className:"editor-post-featured-image__container"},(0,t.createElement)(n.Button,{onClick:a,className:w?"editor-post-featured-image__preview":"editor-post-featured-image__toggle"},!!w&&!!b&&(0,t.createElement)(n.ResponsiveWrapper,{naturalWidth:parseFloat(E),naturalHeight:parseFloat(k),isInline:!0},(0,t.createElement)("img",{src:b,width:E,height:k,alt:I})),!!w&&!b&&(0,t.createElement)(n.Spinner,null),!w&&(0,o.__)("Choose an image","innocode-block-testimonial")))}})),!!w&&!!b&&(0,t.createElement)(l.MediaUploadCheck,null,(0,t.createElement)(l.MediaUpload,{allowedTypes:c,onSelect:R,modalClass:"editor-post-featured-image__media-modal",render:e=>{let{open:a}=e;return(0,t.createElement)(n.Button,{onClick:a,isSecondary:!0},(0,o.__)("Replace Author Image","innocode-block-testimonial"))}})),!!w&&(0,t.createElement)(l.MediaUploadCheck,null,(0,t.createElement)(n.Button,{onClick:T,isLink:!0,isDestructive:!0},(0,o.__)("Remove Author Image","innocode-block-testimonial"))))),(0,t.createElement)(n.PanelBody,{title:(0,o.__)("Block settings","innocode-block-testimonial"),initialOpen:!1},(0,t.createElement)(n.PanelRow,null,(0,t.createElement)(n.ToggleControl,{label:(0,o.__)("Show additional info","innocode-block-testimonial"),checked:y,onChange:()=>$("hasAuthorInfo",!y)})),(0,t.createElement)(n.PanelRow,null,(0,t.createElement)(n.RadioControl,{label:(0,o.__)("Text layout","innocode-block-testimonial"),selected:x,options:[{label:(0,o.__)("Top","innocode-block-testimonial"),value:h},{label:(0,o.__)("Bottom","innocode-block-testimonial"),value:d},{label:(0,o.__)("Right","innocode-block-testimonial"),value:g}],onChange:e=>$("layout",e)})))),x===h&&(0,t.createElement)(_,{value:f,onChange:A}),(0,t.createElement)("figcaption",{className:`${r}-author`},!!w&&(0,t.createElement)("div",{className:`${r}-author__image`},(0,t.createElement)(l.MediaUploadCheck,null,(0,t.createElement)(l.MediaUpload,{allowedTypes:c,value:w,onSelect:R,modalClass:"editor-post-featured-image__media-modal",render:e=>{let{open:a}=e;return(0,t.createElement)(n.Button,{onClick:a,className:"editor-post-featured-image__preview"},!!b&&(0,t.createElement)("img",{src:b,width:E,height:k,alt:I}))}})),(0,t.createElement)(l.MediaUploadCheck,null,(0,t.createElement)(n.Button,{onClick:T,icon:"dismiss",title:(0,o.__)("Remove Author Image","innocode-block-testimonial"),"aria-label":(0,o.__)("Remove Author Image","innocode-block-testimonial"),className:`${r}-author__remove-image`}))),!w&&!!b&&(0,t.createElement)("div",{className:`${r}-author__image`},(0,t.createElement)("img",{src:b,width:E,height:k,alt:I})),(0,t.createElement)("div",{className:`${r}-author__main`},x===g&&(0,t.createElement)(_,{value:f,onChange:A}),(0,t.createElement)(l.RichText,{tagName:"span",allowedFormats:["core/link"],value:v,placeholder:(0,o.__)("Author name","innocode-block-testimonial"),onChange:e=>$("authorName",e),className:`${r}-author__name`}),y&&(0,t.createElement)(l.RichText,{tagName:"div",multiline:"p",allowedFormats:["core/link"],value:N,placeholder:(0,o.__)("Author additional info","innocode-block-testimonial"),onChange:e=>$("authorInfo",e),className:`${r}-author__info`}))),x===d&&(0,t.createElement)(_,{value:f,onChange:A}))},save:function(e){let{attributes:a}=e;const{text:o,authorName:n,authorImageSrc:i=s.src,authorImageWidth:c=s.width,authorImageHeight:m=s.height,authorImageAlt:_=s.alt,hasAuthorInfo:f=u,authorInfo:v,layout:w=p}=a;return(0,t.createElement)("figure",l.useBlockProps.save({className:r}),w===h&&(0,t.createElement)(C,{value:o}),(0,t.createElement)("figcaption",{className:`${r}-author`},!!i&&(0,t.createElement)("div",{className:`${r}-author__image`},(0,t.createElement)("img",{src:i,width:c,height:m,alt:_})),(0,t.createElement)("div",{className:`${r}-author__main`},w===g&&(0,t.createElement)(C,{value:o}),(0,t.createElement)(l.RichText.Content,{tagName:"span",value:n,className:`${r}-author__name`}),f&&(0,t.createElement)(l.RichText.Content,{tagName:"div",multiline:"p",value:v,className:`${r}-author__info`}))),w===d&&(0,t.createElement)(C,{value:o}))},icon:()=>(0,t.createElement)(v.SVG,{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(v.Path,{d:"M31.4 0H4.6C2 0 0 2 0 4.6V31.4C0 34 2 36 4.6 36H31.4C34 36 36 34 36 31.4V4.6C36 2 34 0 31.4 0ZM33 31.4C33 32.2 32.2 33 31.4 33H4.6C3.8 33 3 32.2 3 31.4V4.6C3 3.8 3.8 3 4.6 3H31.4C32.2 3 33 3.8 33 4.6V31.4Z"}),(0,t.createElement)(v.Path,{d:"M26.2884 11V12.0269C24.8372 12.5579 23.7 13.3962 22.8767 14.5419C22.0535 15.6737 21.6419 16.8543 21.6419 18.0838C21.6419 18.3493 21.6837 18.5449 21.7674 18.6707C21.8233 18.7545 21.886 18.7964 21.9558 18.7964C22.0256 18.7964 22.1302 18.7475 22.2698 18.6497C22.7163 18.3283 23.2814 18.1677 23.9651 18.1677C24.7605 18.1677 25.4651 18.496 26.0791 19.1527C26.693 19.7954 27 20.5639 27 21.4581C27 22.3942 26.6442 23.2186 25.9326 23.9311C25.2349 24.6437 24.3837 25 23.3791 25C22.207 25 21.1953 24.518 20.3442 23.5539C19.493 22.5898 19.0674 21.2974 19.0674 19.6766C19.0674 17.7904 19.6465 16.0998 20.8047 14.6048C21.9628 13.1098 23.7907 11.9082 26.2884 11ZM16.2209 11V12.0269C14.7698 12.5579 13.6326 13.3962 12.8093 14.5419C11.986 15.6737 11.5744 16.8543 11.5744 18.0838C11.5744 18.3493 11.6163 18.5449 11.7 18.6707C11.7558 18.7545 11.8186 18.7964 11.8884 18.7964C11.9581 18.7964 12.0628 18.7475 12.2023 18.6497C12.6488 18.3283 13.214 18.1677 13.8977 18.1677C14.693 18.1677 15.3977 18.496 16.0116 19.1527C16.6256 19.7954 16.9326 20.5639 16.9326 21.4581C16.9326 22.3942 16.5767 23.2186 15.8651 23.9311C15.1674 24.6437 14.3163 25 13.3116 25C12.1395 25 11.1279 24.518 10.2767 23.5539C9.42558 22.5898 9 21.2974 9 19.6766C9 17.7904 9.57907 16.0998 10.7372 14.6048C11.8953 13.1098 13.7233 11.9082 16.2209 11Z"}))})}},a={};function o(e){var l=a[e];if(void 0!==l)return l.exports;var n=a[e]={exports:{}};return t[e](n,n.exports,o),n.exports}o.m=t,e=[],o.O=function(t,a,l,n){if(!a){var i=1/0;for(s=0;s<e.length;s++){a=e[s][0],l=e[s][1],n=e[s][2];for(var r=!0,c=0;c<a.length;c++)(!1&n||i>=n)&&Object.keys(o.O).every((function(e){return o.O[e](a[c])}))?a.splice(c--,1):(r=!1,n<i&&(i=n));if(r){e.splice(s--,1);var m=l();void 0!==m&&(t=m)}}return t}n=n||0;for(var s=e.length;s>0&&e[s-1][2]>n;s--)e[s]=e[s-1];e[s]=[a,l,n]},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,46:0};o.O.j=function(t){return 0===e[t]};var t=function(t,a){var l,n,i=a[0],r=a[1],c=a[2],m=0;if(i.some((function(t){return 0!==e[t]}))){for(l in r)o.o(r,l)&&(o.m[l]=r[l]);if(c)var s=c(o)}for(t&&t(a);m<i.length;m++)n=i[m],o.o(e,n)&&e[n]&&e[n][0](),e[i[m]]=0;return o.O(s)},a=self.webpackChunkwp_block_testimonial=self.webpackChunkwp_block_testimonial||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var l=o.O(void 0,[46],(function(){return o(759)}));l=o.O(l)}();