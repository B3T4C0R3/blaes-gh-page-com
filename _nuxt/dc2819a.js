(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{348:function(t,e,n){"use strict";n.d(e,"a",(function(){return z}));var d=n(368),o=n.n(d),r=n(113),c={props:{invert:{type:Boolean,default:!1}},data:function(){return{logo:o.a,brand:r.a,lang:"en",footer:{address:["street","postalcode","region","country"],description:["Algemene Voorwaarden","Disclaimer","Privacyverklaring","Cookieverklaring"],link:["/voorwaarden","/disclaimer","/privacy","/cookies"]}}},computed:{langList:function(){var t=this,e=[];return this.$i18n.locales.map((function(n){e.push({text:t.$t("common."+n.code),value:n.code})})),e}},mounted:function(){this.lang=this.$i18n.locale},methods:{switchLang:function(t){this.$i18n.setLocale(t)}}},l=(n(369),n(35)),f=n(45),x=n.n(f),m=n(333),v=n(341),h=n(346),w=n(135),y=n(342),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer",class:{invert:t.invert}},[n("v-container",{class:t.isDesktop?"fixed-width":""},[n("v-row",{attrs:{align:"center","justify-sm":"space-between",justify:"center"}},[n("v-col",{attrs:{md:"auto",cols:"12"}},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:t.logo,height:"150",alt:"logo"}})])]),t._v(" "),n("v-col",{attrs:{md:"6",cols:"12"}},[n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("h6",{staticClass:"title-nav mb-2"},[t._v("\n              "+t._s(t.$t("blaes.footer_link"))+"\n            ")]),t._v(" "),t._l(t.footer.description,(function(e,d){return[n("p",{key:d,staticClass:"body-1"},[n("nuxt-link",{staticClass:"white--text",staticStyle:{"text-decoration":"none"},attrs:{to:t.localePath(t.footer.link[d])}},[t._v("\n                  "+t._s(e)+"\n                ")])],1)]}))],2),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("h6",{staticClass:"title-nav mb-2"},[t._v("\n              "+t._s(t.$t("blaes.footer_address"))+"\n            ")]),t._v(" "),t._l(t.footer.address,(function(e,d){return[n("p",{key:d,staticClass:"body-1 white--text"},[t._v("\n                "+t._s(t.$t("blaes.footer_"+e))+"\n              ")])]}))],2)],1)],1),t._v(" "),n("v-col",{attrs:{md:"auto",cols:"12"}},[n("div",{staticClass:"socmed text-center"},[n("v-btn",{staticClass:"button",attrs:{fab:"",small:"",icon:"",href:"https://www.instagram.com/blaes_beer",target:"_blank"}},[n("v-icon",{staticClass:"icon"},[t._v("mdi-instagram")])],1)],1),t._v(" "),n("p",{staticClass:"body-2 copyright text-center"},[t._v("\n          © \n          "+t._s(t.brand.blaes.footerText)+"\n        ")]),t._v(" "),n("p",{staticClass:"body-2 tertiary--text"},[t._v("\n          "+t._s(t.$t("common.created_by"))+" "),n("a",{staticClass:"tertiary--text",attrs:{href:"https://www.betacore.nl/",target:"_blank"}},[t._v("BetaCore")])])])],1)],1)],1)}),[],!1,null,"6e172c26",null),z=component.exports;x()(component,{VBtn:m.a,VCol:v.a,VContainer:h.a,VIcon:w.a,VRow:y.a})},352:function(t,e,n){var content=n(370);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("60245e64",content,!0,{sourceMap:!1})},368:function(t,e,n){t.exports=n.p+"img/logo.a82eef0.png"},369:function(t,e,n){"use strict";n(352)},370:function(t,e,n){(e=n(8)(!1)).push([t.i,'@font-face{font-family:"Echanted Land";src:url(/fonts/Enchanted-Land.woff)}.use-text-title[data-v-6e172c26]{font-weight:var(--font-medium);line-height:1.1;font-family:"Echanted Land";text-shadow:1px 1px 1px var(--v-tertiary-base);font-size:88px;margin-bottom:16px}@media(max-width:1279px){.use-text-title[data-v-6e172c26]{font-size:68px}}@media(max-width:599px){.use-text-title[data-v-6e172c26]{font-size:48px}}.use-text-title2[data-v-6e172c26]{font-size:56px;line-height:1.1;font-weight:var(--font-medium);font-family:"Grenze";margin-bottom:16px}@media(max-width:1279px){.use-text-title2[data-v-6e172c26]{font-size:32px}}@media(max-width:599px){.use-text-title2[data-v-6e172c26]{font-size:24px}}.use-text-subtitle[data-v-6e172c26]{font-weight:var(--font-medium);line-height:1.1;font-family:"Echanted Land";font-size:56px}@media(max-width:1279px){.use-text-subtitle[data-v-6e172c26]{font-size:48px}}@media(max-width:599px){.use-text-subtitle[data-v-6e172c26]{font-size:36px}}.use-text-subtitle2[data-v-6e172c26]{font-weight:var(--font-regular);line-height:1.1;font-family:"Grenze";font-size:22px}@media(max-width:1279px){.use-text-subtitle2[data-v-6e172c26]{font-size:18px}}@media(max-width:599px){.use-text-subtitle2[data-v-6e172c26]{font-size:16px}}.use-text-paragraph[data-v-6e172c26]{font-weight:var(--font-regular)}.use-text-caption[data-v-6e172c26],.use-text-paragraph[data-v-6e172c26]{line-height:1.1;font-family:"Grenze";font-size:18px}.use-text-caption[data-v-6e172c26]{font-weight:var(--font-bold);text-transform:uppercase;letter-spacing:2px}@media(max-width:599px){.use-text-caption[data-v-6e172c26]{font-size:16px}}.use-text-caption2[data-v-6e172c26]{font-weight:var(--font-bold);text-transform:uppercase;line-height:1.1;font-family:"Grenze";font-size:18px}@media(max-width:599px){.use-text-caption2[data-v-6e172c26]{font-size:16px}}.remove-container-spacing[data-v-6e172c26]{position:relative}.remove-container-spacing-right[data-v-6e172c26]{position:relative;right:-16px}@media(min-width:600px){.remove-container-spacing-right[data-v-6e172c26]{right:-24px}}@media(min-width:960px){.remove-container-spacing-right[data-v-6e172c26]{right:-32px}}@media(min-width:1280px){.remove-container-spacing-right[data-v-6e172c26]{right:calc(-50vw + 608px)}}.remove-container-spacing-left[data-v-6e172c26]{position:relative;left:-16px}@media(min-width:600px){.remove-container-spacing-left[data-v-6e172c26]{left:-24px}}@media(min-width:960px){.remove-container-spacing-left[data-v-6e172c26]{left:-32px}}@media(min-width:1280px){.remove-container-spacing-left[data-v-6e172c26]{left:calc(-50vw + 608px)}}@media(max-width:1919px){.use-hidden-lg-down[data-v-6e172c26]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-6e172c26]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-6e172c26]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-6e172c26]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-6e172c26]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-6e172c26]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-6e172c26]{display:none}}.link[data-v-6e172c26]{margin:8px 12px}.footer[data-v-6e172c26]{background:var(--v-primary-base);position:relative;padding:16px 0}@media(max-width:959px){.footer p[data-v-6e172c26]{text-align:center}}.footer ul[data-v-6e172c26]{margin:0;padding:0}.footer ul li[data-v-6e172c26]{list-style:none;margin-bottom:8px;display:inline-block;width:30%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#fff}[dir=ltr] .footer ul li[data-v-6e172c26]{margin-right:3%}[dir=rtl] .footer ul li[data-v-6e172c26]{margin-left:3%}@media(max-width:599px){.footer ul li[data-v-6e172c26]{width:47%}}.footer ul li a[data-v-6e172c26]{text-transform:capitalize;text-decoration:none!important;font-size:14px;color:#fff}.footer ul li a[data-v-6e172c26]:hover{color:var(--v-primarylight-base)}.footer p[data-v-6e172c26]{color:#fff}.footer-desc[data-v-6e172c26]{display:block;font-size:14px;margin-bottom:16px}@media(max-width:959px){.footer-desc[data-v-6e172c26]{text-align:center}}.theme--light .footer.invert p[data-v-6e172c26]{color:rgba(0,0,0,.87)}.theme--dark .footer.invert p[data-v-6e172c26]{color:#fff}.theme--light .footer.invert li a[data-v-6e172c26]{color:rgba(0,0,0,.87)}.theme--dark .footer.invert li a[data-v-6e172c26]{color:#fff}.footer.invert .blog-item .category[data-v-6e172c26],.footer.invert .title-nav[data-v-6e172c26]{color:var(--v-secondary-base)}.theme--light .footer.invert .blog-item .content[data-v-6e172c26]{color:rgba(0,0,0,.54)}.theme--dark .footer.invert .blog-item .content[data-v-6e172c26]{color:hsla(0,0%,100%,.7)}.theme--light .footer.invert .select-lang[data-v-6e172c26]{color:rgba(0,0,0,.87)}.theme--dark .footer.invert .select-lang[data-v-6e172c26]{color:#fff}.theme--light .footer.invert .select-lang svg[data-v-6e172c26]{color:rgba(0,0,0,.87)}.theme--dark .footer.invert .select-lang svg[data-v-6e172c26]{color:#fff}.footer-counter[data-v-6e172c26]{position:relative;background-color:var(--v-primary-base);padding-top:80px}.deco-top[data-v-6e172c26]{position:absolute;top:-20px;width:1280px;height:400px}[dir=ltr] .deco-top[data-v-6e172c26]{left:0}[dir=rtl] .deco-top[data-v-6e172c26]{right:0}@media(min-width:1280px){.deco-top[data-v-6e172c26]{transform:scale(1.2)}}@media only screen and (min-width:1400px){.deco-top[data-v-6e172c26]{transform:scaleX(2)}}@media(min-width:1920px){.deco-top[data-v-6e172c26]{display:none}}@media(max-width:1279px){.deco-top[data-v-6e172c26]{transform:scaleX(1.4)}[dir=ltr] .deco-top[data-v-6e172c26]{left:-300px}[dir=rtl] .deco-top[data-v-6e172c26]{right:-300px}}@media(max-width:959px){.deco-top[data-v-6e172c26]{display:none}}.deco-top svg[data-v-6e172c26]{width:100%;height:100%}@media(max-width:599px){.deco-top svg[data-v-6e172c26]{display:none}}@media(max-width:959px){.quick-links[data-v-6e172c26]{text-align:center}}.copyright[data-v-6e172c26]{text-align:right}@media(max-width:959px){.copyright[data-v-6e172c26]{text-align:center}}.blog-item[data-v-6e172c26]{display:block;align-items:center;margin:16px 0;padding:0!important;height:auto!important;white-space:normal;justify-content:flex-start}[dir=ltr] .blog-item[data-v-6e172c26]{text-align:left}[dir=rtl] .blog-item[data-v-6e172c26]{text-align:right}.blog-item .category[data-v-6e172c26]{margin-bottom:8px;margin-top:8px;display:block;font-weight:var(--font-bold);text-transform:uppercase;color:var(--v-secondarylight-base)}.blog-item .list-text[data-v-6e172c26]{flex:1;display:block;color:var(--v-primarylight-base)}.blog-item .figure[data-v-6e172c26]{border-radius:4px;overflow:hidden;margin-top:8px;width:80px;height:56px}[dir=ltr] .blog-item .figure[data-v-6e172c26]{margin-right:16px}[dir=rtl] .blog-item .figure[data-v-6e172c26]{margin-left:16px}.blog-item .figure img[data-v-6e172c26]{display:block;-o-object-fit:cover;object-fit:cover;min-height:100%;width:100%}.blog-item .content[data-v-6e172c26]{font-size:13px;text-transform:none;margin-bottom:0;font-weight:var(--font-regular);color:#fff}[dir=ltr] .blog-item .content[data-v-6e172c26]{text-align:left}[dir=rtl] .blog-item .content[data-v-6e172c26]{text-align:right}.title-nav[data-v-6e172c26]{color:var(--v-secondarylight-base);font-size:14px;text-transform:uppercase;margin-bottom:8px;font-weight:var(--font-bold)}@media(max-width:959px){.title-nav[data-v-6e172c26]{text-align:center}}.logo[data-v-6e172c26]{color:transparent;font-size:0;display:flex;align-items:center;text-decoration:none;justify-content:center}.logo h6[data-v-6e172c26]{width:208px;color:#fff;font-weight:var(--font-bold);line-height:1;font-size:28px;text-transform:uppercase}@media(max-width:959px){.logo h6[data-v-6e172c26]{font-size:14px;width:123px}}.socmed[data-v-6e172c26]{display:flex;justify-content:center;margin-bottom:8px}.socmed button[data-v-6e172c26]{border-radius:50%;margin:8px}.socmed button .icon[data-v-6e172c26]{color:#fff}.socmed .icon[data-v-6e172c26]{font-size:24px}.icon+div[data-v-6e172c26]{background:none!important;padding:12px 12px 12px 32px;width:calc(100% - 32px)}.select-lang.v-text-field.v-text-field--enclosed[data-v-6e172c26]{width:100%;display:inherit;margin-top:16px;position:relative;z-index:10}.select-lang.v-text-field.v-text-field--enclosed[data-v-6e172c26]  .v-input__slot{min-height:43px}.select-lang.v-text-field.v-text-field--enclosed[data-v-6e172c26]  .v-input__append-inner,.select-lang.v-text-field.v-text-field--enclosed[data-v-6e172c26]  .v-input__prepend-inner{margin-top:10px}.select-lang.v-text-field.v-text-field--enclosed[data-v-6e172c26]  .v-icon,.select-lang.v-text-field.v-text-field--enclosed[data-v-6e172c26]  .v-select__selections{padding:0;color:var(--v-primarylight-base)}.select-lang.v-text-field.v-text-field--enclosed[data-v-6e172c26]  fieldset{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06);border-color:var(--v-primarylight-darken3)!important}.select-lang.v-text-field.v-text-field--enclosed[data-v-6e172c26]  fieldset legend{top:5px;position:relative}.select-lang.v-text-field.v-text-field--enclosed[data-v-6e172c26]  .v-select__selection{color:#fff}.theme--light .invert .select-lang.v-text-field.v-text-field--enclosed[data-v-6e172c26]  .v-select__selection{color:rgba(0,0,0,.87)}.theme--dark .invert .select-lang.v-text-field.v-text-field--enclosed[data-v-6e172c26]  .v-select__selection{color:#fff}@media(max-width:1279px){.site-map-item[data-v-6e172c26]{padding-bottom:0!important;padding-top:0!important}}.accordion-root[data-v-6e172c26]{background:none;box-shadow:none;max-width:480px}#main-wrap .accordion-content.v-expansion-panel[data-v-6e172c26]{background-color:transparent}#main-wrap .accordion-content.v-expansion-panel[data-v-6e172c26]:after,#main-wrap .accordion-content.v-expansion-panel[data-v-6e172c26]:before{display:none}.accordion-icon[data-v-6e172c26]{padding:0}',""]),t.exports=e},404:function(t,e,n){var content=n(515);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("29254ae7",content,!0,{sourceMap:!1})},405:function(t,e,n){var content=n(517);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("6113cfef",content,!0,{sourceMap:!1})},406:function(t,e,n){var content=n(519);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("1a4dcdfe",content,!0,{sourceMap:!1})},514:function(t,e,n){"use strict";n(404)},515:function(t,e,n){(e=n(8)(!1)).push([t.i,'@font-face{font-family:"Echanted Land";src:url(/fonts/Enchanted-Land.woff)}.use-text-title[data-v-00d05bca]{font-weight:var(--font-medium);line-height:1.1;font-family:"Echanted Land";text-shadow:1px 1px 1px var(--v-tertiary-base);font-size:88px;margin-bottom:16px}@media(max-width:1279px){.use-text-title[data-v-00d05bca]{font-size:68px}}@media(max-width:599px){.use-text-title[data-v-00d05bca]{font-size:48px}}.use-text-title2[data-v-00d05bca]{font-size:56px;line-height:1.1;font-weight:var(--font-medium);font-family:"Grenze";margin-bottom:16px}@media(max-width:1279px){.use-text-title2[data-v-00d05bca]{font-size:32px}}@media(max-width:599px){.use-text-title2[data-v-00d05bca]{font-size:24px}}.use-text-subtitle[data-v-00d05bca]{font-weight:var(--font-medium);line-height:1.1;font-family:"Echanted Land";font-size:56px}@media(max-width:1279px){.use-text-subtitle[data-v-00d05bca]{font-size:48px}}@media(max-width:599px){.use-text-subtitle[data-v-00d05bca]{font-size:36px}}.use-text-subtitle2[data-v-00d05bca]{font-weight:var(--font-regular);line-height:1.1;font-family:"Grenze";font-size:22px}@media(max-width:1279px){.use-text-subtitle2[data-v-00d05bca]{font-size:18px}}@media(max-width:599px){.use-text-subtitle2[data-v-00d05bca]{font-size:16px}}.use-text-paragraph[data-v-00d05bca]{font-weight:var(--font-regular)}.use-text-caption[data-v-00d05bca],.use-text-paragraph[data-v-00d05bca]{line-height:1.1;font-family:"Grenze";font-size:18px}.use-text-caption[data-v-00d05bca]{font-weight:var(--font-bold);text-transform:uppercase;letter-spacing:2px}@media(max-width:599px){.use-text-caption[data-v-00d05bca]{font-size:16px}}.use-text-caption2[data-v-00d05bca]{font-weight:var(--font-bold);text-transform:uppercase;line-height:1.1;font-family:"Grenze";font-size:18px}@media(max-width:599px){.use-text-caption2[data-v-00d05bca]{font-size:16px}}.remove-container-spacing[data-v-00d05bca]{position:relative}.remove-container-spacing-right[data-v-00d05bca]{position:relative;right:-16px}@media(min-width:600px){.remove-container-spacing-right[data-v-00d05bca]{right:-24px}}@media(min-width:960px){.remove-container-spacing-right[data-v-00d05bca]{right:-32px}}@media(min-width:1280px){.remove-container-spacing-right[data-v-00d05bca]{right:calc(-50vw + 608px)}}.remove-container-spacing-left[data-v-00d05bca]{position:relative;left:-16px}@media(min-width:600px){.remove-container-spacing-left[data-v-00d05bca]{left:-24px}}@media(min-width:960px){.remove-container-spacing-left[data-v-00d05bca]{left:-32px}}@media(min-width:1280px){.remove-container-spacing-left[data-v-00d05bca]{left:calc(-50vw + 608px)}}@media(max-width:1919px){.use-hidden-lg-down[data-v-00d05bca]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-00d05bca]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-00d05bca]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-00d05bca]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-00d05bca]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-00d05bca]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-00d05bca]{display:none}}.root[data-v-00d05bca]{padding-top:48px;padding-bottom:48px}.root[data-v-00d05bca],.wrapper[data-v-00d05bca]{position:relative}',""]),t.exports=e},516:function(t,e,n){"use strict";n(405)},517:function(t,e,n){(e=n(8)(!1)).push([t.i,'@font-face{font-family:"Echanted Land";src:url(/fonts/Enchanted-Land.woff)}.use-text-title[data-v-10eaf1cc]{font-weight:var(--font-medium);line-height:1.1;font-family:"Echanted Land";text-shadow:1px 1px 1px var(--v-tertiary-base);font-size:88px;margin-bottom:16px}@media(max-width:1279px){.use-text-title[data-v-10eaf1cc]{font-size:68px}}@media(max-width:599px){.use-text-title[data-v-10eaf1cc]{font-size:48px}}.use-text-title2[data-v-10eaf1cc]{font-size:56px;line-height:1.1;font-weight:var(--font-medium);font-family:"Grenze";margin-bottom:16px}@media(max-width:1279px){.use-text-title2[data-v-10eaf1cc]{font-size:32px}}@media(max-width:599px){.use-text-title2[data-v-10eaf1cc]{font-size:24px}}.use-text-subtitle[data-v-10eaf1cc]{font-weight:var(--font-medium);line-height:1.1;font-family:"Echanted Land";font-size:56px}@media(max-width:1279px){.use-text-subtitle[data-v-10eaf1cc]{font-size:48px}}@media(max-width:599px){.use-text-subtitle[data-v-10eaf1cc]{font-size:36px}}.use-text-subtitle2[data-v-10eaf1cc]{font-weight:var(--font-regular);line-height:1.1;font-family:"Grenze";font-size:22px}@media(max-width:1279px){.use-text-subtitle2[data-v-10eaf1cc]{font-size:18px}}@media(max-width:599px){.use-text-subtitle2[data-v-10eaf1cc]{font-size:16px}}.use-text-paragraph[data-v-10eaf1cc]{font-weight:var(--font-regular)}.use-text-caption[data-v-10eaf1cc],.use-text-paragraph[data-v-10eaf1cc]{line-height:1.1;font-family:"Grenze";font-size:18px}.use-text-caption[data-v-10eaf1cc]{font-weight:var(--font-bold);text-transform:uppercase;letter-spacing:2px}@media(max-width:599px){.use-text-caption[data-v-10eaf1cc]{font-size:16px}}.use-text-caption2[data-v-10eaf1cc]{font-weight:var(--font-bold);text-transform:uppercase;line-height:1.1;font-family:"Grenze";font-size:18px}@media(max-width:599px){.use-text-caption2[data-v-10eaf1cc]{font-size:16px}}.remove-container-spacing[data-v-10eaf1cc]{position:relative}.remove-container-spacing-right[data-v-10eaf1cc]{position:relative;right:-16px}@media(min-width:600px){.remove-container-spacing-right[data-v-10eaf1cc]{right:-24px}}@media(min-width:960px){.remove-container-spacing-right[data-v-10eaf1cc]{right:-32px}}@media(min-width:1280px){.remove-container-spacing-right[data-v-10eaf1cc]{right:calc(-50vw + 608px)}}.remove-container-spacing-left[data-v-10eaf1cc]{position:relative;left:-16px}@media(min-width:600px){.remove-container-spacing-left[data-v-10eaf1cc]{left:-24px}}@media(min-width:960px){.remove-container-spacing-left[data-v-10eaf1cc]{left:-32px}}@media(min-width:1280px){.remove-container-spacing-left[data-v-10eaf1cc]{left:calc(-50vw + 608px)}}@media(max-width:1919px){.use-hidden-lg-down[data-v-10eaf1cc]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-10eaf1cc]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-10eaf1cc]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-10eaf1cc]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-10eaf1cc]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-10eaf1cc]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-10eaf1cc]{display:none}}.root[data-v-10eaf1cc]{padding-top:0!important;padding-bottom:96px!important}@media(max-width:1279px){.root[data-v-10eaf1cc]{padding-bottom:32px!important}}.root .container[data-v-10eaf1cc]{padding:0}.theme--light .root[data-v-10eaf1cc]{background:linear-gradient(0,var(--v-secondary-base),var(--v-primary-base) 70%)}.theme--dark .root[data-v-10eaf1cc]{background:linear-gradient(0,var(--v-secondarylight-base),var(--v-secondarydark-base) 70%)}',""]),t.exports=e},518:function(t,e,n){"use strict";n(406)},519:function(t,e,n){(e=n(8)(!1)).push([t.i,'@font-face{font-family:"Echanted Land";src:url(/fonts/Enchanted-Land.woff)}.use-text-title[data-v-a3f574da]{font-weight:var(--font-medium);line-height:1.1;font-family:"Echanted Land";text-shadow:1px 1px 1px var(--v-tertiary-base);font-size:88px;margin-bottom:16px}@media(max-width:1279px){.use-text-title[data-v-a3f574da]{font-size:68px}}@media(max-width:599px){.use-text-title[data-v-a3f574da]{font-size:48px}}.use-text-title2[data-v-a3f574da]{font-size:56px;line-height:1.1;font-weight:var(--font-medium);font-family:"Grenze";margin-bottom:16px}@media(max-width:1279px){.use-text-title2[data-v-a3f574da]{font-size:32px}}@media(max-width:599px){.use-text-title2[data-v-a3f574da]{font-size:24px}}.use-text-subtitle[data-v-a3f574da]{font-weight:var(--font-medium);line-height:1.1;font-family:"Echanted Land";font-size:56px}@media(max-width:1279px){.use-text-subtitle[data-v-a3f574da]{font-size:48px}}@media(max-width:599px){.use-text-subtitle[data-v-a3f574da]{font-size:36px}}.use-text-subtitle2[data-v-a3f574da]{font-weight:var(--font-regular);line-height:1.1;font-family:"Grenze";font-size:22px}@media(max-width:1279px){.use-text-subtitle2[data-v-a3f574da]{font-size:18px}}@media(max-width:599px){.use-text-subtitle2[data-v-a3f574da]{font-size:16px}}.use-text-paragraph[data-v-a3f574da]{font-weight:var(--font-regular)}.use-text-caption[data-v-a3f574da],.use-text-paragraph[data-v-a3f574da]{line-height:1.1;font-family:"Grenze";font-size:18px}.use-text-caption[data-v-a3f574da]{font-weight:var(--font-bold);text-transform:uppercase;letter-spacing:2px}@media(max-width:599px){.use-text-caption[data-v-a3f574da]{font-size:16px}}.use-text-caption2[data-v-a3f574da]{font-weight:var(--font-bold);text-transform:uppercase;line-height:1.1;font-family:"Grenze";font-size:18px}@media(max-width:599px){.use-text-caption2[data-v-a3f574da]{font-size:16px}}.remove-container-spacing[data-v-a3f574da]{position:relative}.remove-container-spacing-right[data-v-a3f574da]{position:relative;right:-16px}@media(min-width:600px){.remove-container-spacing-right[data-v-a3f574da]{right:-24px}}@media(min-width:960px){.remove-container-spacing-right[data-v-a3f574da]{right:-32px}}@media(min-width:1280px){.remove-container-spacing-right[data-v-a3f574da]{right:calc(-50vw + 608px)}}.remove-container-spacing-left[data-v-a3f574da]{position:relative;left:-16px}@media(min-width:600px){.remove-container-spacing-left[data-v-a3f574da]{left:-24px}}@media(min-width:960px){.remove-container-spacing-left[data-v-a3f574da]{left:-32px}}@media(min-width:1280px){.remove-container-spacing-left[data-v-a3f574da]{left:calc(-50vw + 608px)}}@media(max-width:1919px){.use-hidden-lg-down[data-v-a3f574da]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-a3f574da]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-a3f574da]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-a3f574da]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-a3f574da]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-a3f574da]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-a3f574da]{display:none}}#main-wrap[data-v-a3f574da],.main-wrap[data-v-a3f574da]{position:relative;height:100%;width:100%;overflow:hidden}.theme--light #main-wrap[data-v-a3f574da],.theme--light .main-wrap[data-v-a3f574da]{color:rgba(0,0,0,.87)}.theme--dark #main-wrap[data-v-a3f574da],.theme--dark .main-wrap[data-v-a3f574da]{color:#fff;background-color:var(--v-primary-base)}.theme--light #main-wrap[data-v-a3f574da],.theme--light .main-wrap[data-v-a3f574da]{background-color:#fff}.space-bottom[data-v-a3f574da]{margin-bottom:160px}@media(max-width:1279px){.space-bottom[data-v-a3f574da]{margin-bottom:120px}}.space-top[data-v-a3f574da]{margin-top:160px}@media(max-width:1279px){.space-top[data-v-a3f574da]{margin-top:120px}}.space-bottom-short[data-v-a3f574da]{margin-bottom:80px}@media(min-width:960px)and (max-width:1279px){.space-top-short-md-down[data-v-a3f574da]{margin-top:80px}}.space-top-short[data-v-a3f574da]{margin-top:80px}',""]),t.exports=e},594:function(t,e,n){"use strict";n.r(e);var d={},o=(n(514),n(35)),r=n(45),c=n.n(r),l=n(346),component=Object(o.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return this.$slots.default?e("div",[e("v-container",{class:{"fixed-width":this.isDesktop}},[e("div",{staticClass:"wrapper"},[this._t("default")],2)])],1):this._e()}),[],!1,null,"00d05bca",null),f=component.exports;c()(component,{VContainer:l.a});var x={components:{Wrapper:f},data:function(){return{}}},m=(n(516),n(333)),v=n(341),h=n(336),w=n(342),y=Object(o.a)(x,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-img",{attrs:{height:"100vh",position:"center",cover:"",src:"/images/background.jpg"}},[e("wrapper",[e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[e("v-img",{attrs:{src:"/images/logo-inverted.png"}})],1)],1)],1),this._v(" "),e("h1",{staticClass:"use-text-title text-center primary--text pa-2",staticStyle:{"background-color":"white",width:"100%"}},[this._v("Under Construction")]),this._v(" "),e("div",{staticClass:"text-center"},[e("v-btn",{attrs:{large:"",color:"primary",href:"mailto:info@blaesbeer.com"}},[this._v("Contact")])],1)],1)}),[],!1,null,"10eaf1cc",null),z=y.exports;c()(y,{VBtn:m.a,VCol:v.a,VImg:h.a,VRow:w.a});var _=n(348),k=n(113),C={components:{"main-footer":_.a,Banner:z},data:function(){return{}},mounted:function(){},head:function(){return{title:k.a.blaes.desc}}},E=(n(518),Object(o.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"main-wrap"},[e("div",{staticClass:"container-wrap"},[e("section",{attrs:{id:"home"}},[e("banner")],1)])])])}),[],!1,null,"a3f574da",null));e.default=E.exports}}]);