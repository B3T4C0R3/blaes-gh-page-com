(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{348:function(t,e,d){"use strict";d.d(e,"a",(function(){return z}));var n=d(368),o=d.n(n),r=d(113),c={props:{invert:{type:Boolean,default:!1}},data:function(){return{logo:o.a,brand:r.a,lang:"en",footer:{address:["street","postalcode","region","country"],description:["Algemene Voorwaarden","Disclaimer","Privacyverklaring","Cookieverklaring"],link:["/voorwaarden","/disclaimer","/privacy","/cookies"]}}},computed:{langList:function(){var t=this,e=[];return this.$i18n.locales.map((function(d){e.push({text:t.$t("common."+d.code),value:d.code})})),e}},mounted:function(){this.lang=this.$i18n.locale},methods:{switchLang:function(t){this.$i18n.setLocale(t)}}},l=(d(369),d(35)),f=d(45),x=d.n(f),m=d(333),v=d(341),h=d(346),w=d(135),y=d(342),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("footer",{staticClass:"footer",class:{invert:t.invert}},[d("v-container",{class:t.isDesktop?"fixed-width":""},[d("v-row",{attrs:{align:"center","justify-sm":"space-between",justify:"center"}},[d("v-col",{attrs:{md:"auto",cols:"12"}},[d("div",{staticClass:"logo"},[d("img",{attrs:{src:t.logo,height:"150",alt:"logo"}})])]),t._v(" "),d("v-col",{attrs:{md:"6",cols:"12"}},[d("v-row",[d("v-col",{attrs:{cols:"6"}},[d("h6",{staticClass:"title-nav mb-2"},[t._v("\n              "+t._s(t.$t("blaes.footer_link"))+"\n            ")]),t._v(" "),t._l(t.footer.description,(function(e,n){return[d("p",{key:n,staticClass:"body-1"},[d("nuxt-link",{staticClass:"white--text",staticStyle:{"text-decoration":"none"},attrs:{to:t.footer.link[n]}},[t._v("\n                  "+t._s(e)+"\n                ")])],1)]}))],2),t._v(" "),d("v-col",{attrs:{cols:"6"}},[d("h6",{staticClass:"title-nav mb-2"},[t._v("\n              "+t._s(t.$t("blaes.footer_address"))+"\n            ")]),t._v(" "),t._l(t.footer.address,(function(e,n){return[d("p",{key:n,staticClass:"body-1 white--text"},[t._v("\n                "+t._s(t.$t("blaes.footer_"+e))+"\n              ")])]}))],2)],1)],1),t._v(" "),d("v-col",{attrs:{md:"auto",cols:"12"}},[d("div",{staticClass:"socmed text-center"},[d("v-btn",{staticClass:"button",attrs:{fab:"",small:"",icon:"",href:"https://www.instagram.com/blaes_beer",target:"_blank"}},[d("v-icon",{staticClass:"icon"},[t._v("mdi-instagram")])],1)],1),t._v(" "),d("p",{staticClass:"body-2 copyright"},[t._v("\n          © \n          "+t._s(t.brand.blaes.footerText)+"\n        ")])])],1)],1)],1)}),[],!1,null,"1609db3c",null),z=component.exports;x()(component,{VBtn:m.a,VCol:v.a,VContainer:h.a,VIcon:w.a,VRow:y.a})},352:function(t,e,d){var content=d(370);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(9).default)("c0faafd4",content,!0,{sourceMap:!1})},368:function(t,e,d){t.exports=d.p+"img/logo.a82eef0.png"},369:function(t,e,d){"use strict";d(352)},370:function(t,e,d){(e=d(8)(!1)).push([t.i,'@font-face{font-family:"Echanted Land";src:url(/fonts/Enchanted-Land.woff)}.use-text-title[data-v-1609db3c]{font-weight:var(--font-medium);line-height:1.1;font-family:"Echanted Land";text-shadow:1px 1px 1px var(--v-tertiary-base);font-size:88px;margin-bottom:16px}@media(max-width:1279px){.use-text-title[data-v-1609db3c]{font-size:68px}}@media(max-width:599px){.use-text-title[data-v-1609db3c]{font-size:48px}}.use-text-title2[data-v-1609db3c]{font-size:56px;line-height:1.1;font-weight:var(--font-medium);font-family:"Grenze";margin-bottom:16px}@media(max-width:1279px){.use-text-title2[data-v-1609db3c]{font-size:32px}}@media(max-width:599px){.use-text-title2[data-v-1609db3c]{font-size:24px}}.use-text-subtitle[data-v-1609db3c]{font-weight:var(--font-medium);line-height:1.1;font-family:"Echanted Land";font-size:56px}@media(max-width:1279px){.use-text-subtitle[data-v-1609db3c]{font-size:48px}}@media(max-width:599px){.use-text-subtitle[data-v-1609db3c]{font-size:36px}}.use-text-subtitle2[data-v-1609db3c]{font-weight:var(--font-regular);line-height:1.1;font-family:"Grenze";font-size:22px}@media(max-width:1279px){.use-text-subtitle2[data-v-1609db3c]{font-size:18px}}@media(max-width:599px){.use-text-subtitle2[data-v-1609db3c]{font-size:16px}}.use-text-paragraph[data-v-1609db3c]{font-weight:var(--font-regular)}.use-text-caption[data-v-1609db3c],.use-text-paragraph[data-v-1609db3c]{line-height:1.1;font-family:"Grenze";font-size:18px}.use-text-caption[data-v-1609db3c]{font-weight:var(--font-bold);text-transform:uppercase;letter-spacing:2px}@media(max-width:599px){.use-text-caption[data-v-1609db3c]{font-size:16px}}.use-text-caption2[data-v-1609db3c]{font-weight:var(--font-bold);text-transform:uppercase;line-height:1.1;font-family:"Grenze";font-size:18px}@media(max-width:599px){.use-text-caption2[data-v-1609db3c]{font-size:16px}}.remove-container-spacing[data-v-1609db3c]{position:relative}.remove-container-spacing-right[data-v-1609db3c]{position:relative;right:-16px}@media(min-width:600px){.remove-container-spacing-right[data-v-1609db3c]{right:-24px}}@media(min-width:960px){.remove-container-spacing-right[data-v-1609db3c]{right:-32px}}@media(min-width:1280px){.remove-container-spacing-right[data-v-1609db3c]{right:calc(-50vw + 608px)}}.remove-container-spacing-left[data-v-1609db3c]{position:relative;left:-16px}@media(min-width:600px){.remove-container-spacing-left[data-v-1609db3c]{left:-24px}}@media(min-width:960px){.remove-container-spacing-left[data-v-1609db3c]{left:-32px}}@media(min-width:1280px){.remove-container-spacing-left[data-v-1609db3c]{left:calc(-50vw + 608px)}}@media(max-width:1919px){.use-hidden-lg-down[data-v-1609db3c]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-1609db3c]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-1609db3c]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-1609db3c]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-1609db3c]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-1609db3c]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-1609db3c]{display:none}}.link[data-v-1609db3c]{margin:8px 12px}.footer[data-v-1609db3c]{background:var(--v-primary-base);position:relative;padding:16px 0}@media(max-width:959px){.footer p[data-v-1609db3c]{text-align:center}}.footer ul[data-v-1609db3c]{margin:0;padding:0}.footer ul li[data-v-1609db3c]{list-style:none;margin-bottom:8px;display:inline-block;width:30%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#fff}[dir=ltr] .footer ul li[data-v-1609db3c]{margin-right:3%}[dir=rtl] .footer ul li[data-v-1609db3c]{margin-left:3%}@media(max-width:599px){.footer ul li[data-v-1609db3c]{width:47%}}.footer ul li a[data-v-1609db3c]{text-transform:capitalize;text-decoration:none!important;font-size:14px;color:#fff}.footer ul li a[data-v-1609db3c]:hover{color:var(--v-primarylight-base)}.footer p[data-v-1609db3c]{color:#fff}.footer-desc[data-v-1609db3c]{display:block;font-size:14px;margin-bottom:16px}@media(max-width:959px){.footer-desc[data-v-1609db3c]{text-align:center}}.theme--light .footer.invert p[data-v-1609db3c]{color:rgba(0,0,0,.87)}.theme--dark .footer.invert p[data-v-1609db3c]{color:#fff}.theme--light .footer.invert li a[data-v-1609db3c]{color:rgba(0,0,0,.87)}.theme--dark .footer.invert li a[data-v-1609db3c]{color:#fff}.footer.invert .blog-item .category[data-v-1609db3c],.footer.invert .title-nav[data-v-1609db3c]{color:var(--v-secondary-base)}.theme--light .footer.invert .blog-item .content[data-v-1609db3c]{color:rgba(0,0,0,.54)}.theme--dark .footer.invert .blog-item .content[data-v-1609db3c]{color:hsla(0,0%,100%,.7)}.theme--light .footer.invert .select-lang[data-v-1609db3c]{color:rgba(0,0,0,.87)}.theme--dark .footer.invert .select-lang[data-v-1609db3c]{color:#fff}.theme--light .footer.invert .select-lang svg[data-v-1609db3c]{color:rgba(0,0,0,.87)}.theme--dark .footer.invert .select-lang svg[data-v-1609db3c]{color:#fff}.footer-counter[data-v-1609db3c]{position:relative;background-color:var(--v-primary-base);padding-top:80px}.deco-top[data-v-1609db3c]{position:absolute;top:-20px;width:1280px;height:400px}[dir=ltr] .deco-top[data-v-1609db3c]{left:0}[dir=rtl] .deco-top[data-v-1609db3c]{right:0}@media(min-width:1280px){.deco-top[data-v-1609db3c]{transform:scale(1.2)}}@media only screen and (min-width:1400px){.deco-top[data-v-1609db3c]{transform:scaleX(2)}}@media(min-width:1920px){.deco-top[data-v-1609db3c]{display:none}}@media(max-width:1279px){.deco-top[data-v-1609db3c]{transform:scaleX(1.4)}[dir=ltr] .deco-top[data-v-1609db3c]{left:-300px}[dir=rtl] .deco-top[data-v-1609db3c]{right:-300px}}@media(max-width:959px){.deco-top[data-v-1609db3c]{display:none}}.deco-top svg[data-v-1609db3c]{width:100%;height:100%}@media(max-width:599px){.deco-top svg[data-v-1609db3c]{display:none}}@media(max-width:959px){.quick-links[data-v-1609db3c]{text-align:center}}.copyright[data-v-1609db3c]{text-align:right}@media(max-width:959px){.copyright[data-v-1609db3c]{text-align:center}}.blog-item[data-v-1609db3c]{display:block;align-items:center;margin:16px 0;padding:0!important;height:auto!important;white-space:normal;justify-content:flex-start}[dir=ltr] .blog-item[data-v-1609db3c]{text-align:left}[dir=rtl] .blog-item[data-v-1609db3c]{text-align:right}.blog-item .category[data-v-1609db3c]{margin-bottom:8px;margin-top:8px;display:block;font-weight:var(--font-bold);text-transform:uppercase;color:var(--v-secondarylight-base)}.blog-item .list-text[data-v-1609db3c]{flex:1;display:block;color:var(--v-primarylight-base)}.blog-item .figure[data-v-1609db3c]{border-radius:4px;overflow:hidden;margin-top:8px;width:80px;height:56px}[dir=ltr] .blog-item .figure[data-v-1609db3c]{margin-right:16px}[dir=rtl] .blog-item .figure[data-v-1609db3c]{margin-left:16px}.blog-item .figure img[data-v-1609db3c]{display:block;-o-object-fit:cover;object-fit:cover;min-height:100%;width:100%}.blog-item .content[data-v-1609db3c]{font-size:13px;text-transform:none;margin-bottom:0;font-weight:var(--font-regular);color:#fff}[dir=ltr] .blog-item .content[data-v-1609db3c]{text-align:left}[dir=rtl] .blog-item .content[data-v-1609db3c]{text-align:right}.title-nav[data-v-1609db3c]{color:var(--v-secondarylight-base);font-size:14px;text-transform:uppercase;margin-bottom:8px;font-weight:var(--font-bold)}@media(max-width:959px){.title-nav[data-v-1609db3c]{text-align:center}}.logo[data-v-1609db3c]{color:transparent;font-size:0;display:flex;align-items:center;text-decoration:none;justify-content:center}.logo h6[data-v-1609db3c]{width:208px;color:#fff;font-weight:var(--font-bold);line-height:1;font-size:28px;text-transform:uppercase}@media(max-width:959px){.logo h6[data-v-1609db3c]{font-size:14px;width:123px}}.socmed[data-v-1609db3c]{display:flex;justify-content:center;margin-bottom:8px}.socmed button[data-v-1609db3c]{border-radius:50%;margin:8px}.socmed button .icon[data-v-1609db3c]{color:#fff}.socmed .icon[data-v-1609db3c]{font-size:24px}.icon+div[data-v-1609db3c]{background:none!important;padding:12px 12px 12px 32px;width:calc(100% - 32px)}.select-lang.v-text-field.v-text-field--enclosed[data-v-1609db3c]{width:100%;display:inherit;margin-top:16px;position:relative;z-index:10}.select-lang.v-text-field.v-text-field--enclosed[data-v-1609db3c]  .v-input__slot{min-height:43px}.select-lang.v-text-field.v-text-field--enclosed[data-v-1609db3c]  .v-input__append-inner,.select-lang.v-text-field.v-text-field--enclosed[data-v-1609db3c]  .v-input__prepend-inner{margin-top:10px}.select-lang.v-text-field.v-text-field--enclosed[data-v-1609db3c]  .v-icon,.select-lang.v-text-field.v-text-field--enclosed[data-v-1609db3c]  .v-select__selections{padding:0;color:var(--v-primarylight-base)}.select-lang.v-text-field.v-text-field--enclosed[data-v-1609db3c]  fieldset{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06);border-color:var(--v-primarylight-darken3)!important}.select-lang.v-text-field.v-text-field--enclosed[data-v-1609db3c]  fieldset legend{top:5px;position:relative}.select-lang.v-text-field.v-text-field--enclosed[data-v-1609db3c]  .v-select__selection{color:#fff}.theme--light .invert .select-lang.v-text-field.v-text-field--enclosed[data-v-1609db3c]  .v-select__selection{color:rgba(0,0,0,.87)}.theme--dark .invert .select-lang.v-text-field.v-text-field--enclosed[data-v-1609db3c]  .v-select__selection{color:#fff}@media(max-width:1279px){.site-map-item[data-v-1609db3c]{padding-bottom:0!important;padding-top:0!important}}.accordion-root[data-v-1609db3c]{background:none;box-shadow:none;max-width:480px}#main-wrap .accordion-content.v-expansion-panel[data-v-1609db3c]{background-color:transparent}#main-wrap .accordion-content.v-expansion-panel[data-v-1609db3c]:after,#main-wrap .accordion-content.v-expansion-panel[data-v-1609db3c]:before{display:none}.accordion-icon[data-v-1609db3c]{padding:0}',""]),t.exports=e},406:function(t,e,d){var content=d(516);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(9).default)("29254ae7",content,!0,{sourceMap:!1})},407:function(t,e,d){var content=d(518);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(9).default)("6113cfef",content,!0,{sourceMap:!1})},408:function(t,e,d){var content=d(520);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(9).default)("1a4dcdfe",content,!0,{sourceMap:!1})},515:function(t,e,d){"use strict";d(406)},516:function(t,e,d){(e=d(8)(!1)).push([t.i,'@font-face{font-family:"Echanted Land";src:url(/fonts/Enchanted-Land.woff)}.use-text-title[data-v-00d05bca]{font-weight:var(--font-medium);line-height:1.1;font-family:"Echanted Land";text-shadow:1px 1px 1px var(--v-tertiary-base);font-size:88px;margin-bottom:16px}@media(max-width:1279px){.use-text-title[data-v-00d05bca]{font-size:68px}}@media(max-width:599px){.use-text-title[data-v-00d05bca]{font-size:48px}}.use-text-title2[data-v-00d05bca]{font-size:56px;line-height:1.1;font-weight:var(--font-medium);font-family:"Grenze";margin-bottom:16px}@media(max-width:1279px){.use-text-title2[data-v-00d05bca]{font-size:32px}}@media(max-width:599px){.use-text-title2[data-v-00d05bca]{font-size:24px}}.use-text-subtitle[data-v-00d05bca]{font-weight:var(--font-medium);line-height:1.1;font-family:"Echanted Land";font-size:56px}@media(max-width:1279px){.use-text-subtitle[data-v-00d05bca]{font-size:48px}}@media(max-width:599px){.use-text-subtitle[data-v-00d05bca]{font-size:36px}}.use-text-subtitle2[data-v-00d05bca]{font-weight:var(--font-regular);line-height:1.1;font-family:"Grenze";font-size:22px}@media(max-width:1279px){.use-text-subtitle2[data-v-00d05bca]{font-size:18px}}@media(max-width:599px){.use-text-subtitle2[data-v-00d05bca]{font-size:16px}}.use-text-paragraph[data-v-00d05bca]{font-weight:var(--font-regular)}.use-text-caption[data-v-00d05bca],.use-text-paragraph[data-v-00d05bca]{line-height:1.1;font-family:"Grenze";font-size:18px}.use-text-caption[data-v-00d05bca]{font-weight:var(--font-bold);text-transform:uppercase;letter-spacing:2px}@media(max-width:599px){.use-text-caption[data-v-00d05bca]{font-size:16px}}.use-text-caption2[data-v-00d05bca]{font-weight:var(--font-bold);text-transform:uppercase;line-height:1.1;font-family:"Grenze";font-size:18px}@media(max-width:599px){.use-text-caption2[data-v-00d05bca]{font-size:16px}}.remove-container-spacing[data-v-00d05bca]{position:relative}.remove-container-spacing-right[data-v-00d05bca]{position:relative;right:-16px}@media(min-width:600px){.remove-container-spacing-right[data-v-00d05bca]{right:-24px}}@media(min-width:960px){.remove-container-spacing-right[data-v-00d05bca]{right:-32px}}@media(min-width:1280px){.remove-container-spacing-right[data-v-00d05bca]{right:calc(-50vw + 608px)}}.remove-container-spacing-left[data-v-00d05bca]{position:relative;left:-16px}@media(min-width:600px){.remove-container-spacing-left[data-v-00d05bca]{left:-24px}}@media(min-width:960px){.remove-container-spacing-left[data-v-00d05bca]{left:-32px}}@media(min-width:1280px){.remove-container-spacing-left[data-v-00d05bca]{left:calc(-50vw + 608px)}}@media(max-width:1919px){.use-hidden-lg-down[data-v-00d05bca]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-00d05bca]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-00d05bca]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-00d05bca]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-00d05bca]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-00d05bca]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-00d05bca]{display:none}}.root[data-v-00d05bca]{padding-top:48px;padding-bottom:48px}.root[data-v-00d05bca],.wrapper[data-v-00d05bca]{position:relative}',""]),t.exports=e},517:function(t,e,d){"use strict";d(407)},518:function(t,e,d){(e=d(8)(!1)).push([t.i,'@font-face{font-family:"Echanted Land";src:url(/fonts/Enchanted-Land.woff)}.use-text-title[data-v-10eaf1cc]{font-weight:var(--font-medium);line-height:1.1;font-family:"Echanted Land";text-shadow:1px 1px 1px var(--v-tertiary-base);font-size:88px;margin-bottom:16px}@media(max-width:1279px){.use-text-title[data-v-10eaf1cc]{font-size:68px}}@media(max-width:599px){.use-text-title[data-v-10eaf1cc]{font-size:48px}}.use-text-title2[data-v-10eaf1cc]{font-size:56px;line-height:1.1;font-weight:var(--font-medium);font-family:"Grenze";margin-bottom:16px}@media(max-width:1279px){.use-text-title2[data-v-10eaf1cc]{font-size:32px}}@media(max-width:599px){.use-text-title2[data-v-10eaf1cc]{font-size:24px}}.use-text-subtitle[data-v-10eaf1cc]{font-weight:var(--font-medium);line-height:1.1;font-family:"Echanted Land";font-size:56px}@media(max-width:1279px){.use-text-subtitle[data-v-10eaf1cc]{font-size:48px}}@media(max-width:599px){.use-text-subtitle[data-v-10eaf1cc]{font-size:36px}}.use-text-subtitle2[data-v-10eaf1cc]{font-weight:var(--font-regular);line-height:1.1;font-family:"Grenze";font-size:22px}@media(max-width:1279px){.use-text-subtitle2[data-v-10eaf1cc]{font-size:18px}}@media(max-width:599px){.use-text-subtitle2[data-v-10eaf1cc]{font-size:16px}}.use-text-paragraph[data-v-10eaf1cc]{font-weight:var(--font-regular)}.use-text-caption[data-v-10eaf1cc],.use-text-paragraph[data-v-10eaf1cc]{line-height:1.1;font-family:"Grenze";font-size:18px}.use-text-caption[data-v-10eaf1cc]{font-weight:var(--font-bold);text-transform:uppercase;letter-spacing:2px}@media(max-width:599px){.use-text-caption[data-v-10eaf1cc]{font-size:16px}}.use-text-caption2[data-v-10eaf1cc]{font-weight:var(--font-bold);text-transform:uppercase;line-height:1.1;font-family:"Grenze";font-size:18px}@media(max-width:599px){.use-text-caption2[data-v-10eaf1cc]{font-size:16px}}.remove-container-spacing[data-v-10eaf1cc]{position:relative}.remove-container-spacing-right[data-v-10eaf1cc]{position:relative;right:-16px}@media(min-width:600px){.remove-container-spacing-right[data-v-10eaf1cc]{right:-24px}}@media(min-width:960px){.remove-container-spacing-right[data-v-10eaf1cc]{right:-32px}}@media(min-width:1280px){.remove-container-spacing-right[data-v-10eaf1cc]{right:calc(-50vw + 608px)}}.remove-container-spacing-left[data-v-10eaf1cc]{position:relative;left:-16px}@media(min-width:600px){.remove-container-spacing-left[data-v-10eaf1cc]{left:-24px}}@media(min-width:960px){.remove-container-spacing-left[data-v-10eaf1cc]{left:-32px}}@media(min-width:1280px){.remove-container-spacing-left[data-v-10eaf1cc]{left:calc(-50vw + 608px)}}@media(max-width:1919px){.use-hidden-lg-down[data-v-10eaf1cc]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-10eaf1cc]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-10eaf1cc]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-10eaf1cc]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-10eaf1cc]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-10eaf1cc]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-10eaf1cc]{display:none}}.root[data-v-10eaf1cc]{padding-top:0!important;padding-bottom:96px!important}@media(max-width:1279px){.root[data-v-10eaf1cc]{padding-bottom:32px!important}}.root .container[data-v-10eaf1cc]{padding:0}.theme--light .root[data-v-10eaf1cc]{background:linear-gradient(0,var(--v-secondary-base),var(--v-primary-base) 70%)}.theme--dark .root[data-v-10eaf1cc]{background:linear-gradient(0,var(--v-secondarylight-base),var(--v-secondarydark-base) 70%)}',""]),t.exports=e},519:function(t,e,d){"use strict";d(408)},520:function(t,e,d){(e=d(8)(!1)).push([t.i,'@font-face{font-family:"Echanted Land";src:url(/fonts/Enchanted-Land.woff)}.use-text-title[data-v-a3f574da]{font-weight:var(--font-medium);line-height:1.1;font-family:"Echanted Land";text-shadow:1px 1px 1px var(--v-tertiary-base);font-size:88px;margin-bottom:16px}@media(max-width:1279px){.use-text-title[data-v-a3f574da]{font-size:68px}}@media(max-width:599px){.use-text-title[data-v-a3f574da]{font-size:48px}}.use-text-title2[data-v-a3f574da]{font-size:56px;line-height:1.1;font-weight:var(--font-medium);font-family:"Grenze";margin-bottom:16px}@media(max-width:1279px){.use-text-title2[data-v-a3f574da]{font-size:32px}}@media(max-width:599px){.use-text-title2[data-v-a3f574da]{font-size:24px}}.use-text-subtitle[data-v-a3f574da]{font-weight:var(--font-medium);line-height:1.1;font-family:"Echanted Land";font-size:56px}@media(max-width:1279px){.use-text-subtitle[data-v-a3f574da]{font-size:48px}}@media(max-width:599px){.use-text-subtitle[data-v-a3f574da]{font-size:36px}}.use-text-subtitle2[data-v-a3f574da]{font-weight:var(--font-regular);line-height:1.1;font-family:"Grenze";font-size:22px}@media(max-width:1279px){.use-text-subtitle2[data-v-a3f574da]{font-size:18px}}@media(max-width:599px){.use-text-subtitle2[data-v-a3f574da]{font-size:16px}}.use-text-paragraph[data-v-a3f574da]{font-weight:var(--font-regular)}.use-text-caption[data-v-a3f574da],.use-text-paragraph[data-v-a3f574da]{line-height:1.1;font-family:"Grenze";font-size:18px}.use-text-caption[data-v-a3f574da]{font-weight:var(--font-bold);text-transform:uppercase;letter-spacing:2px}@media(max-width:599px){.use-text-caption[data-v-a3f574da]{font-size:16px}}.use-text-caption2[data-v-a3f574da]{font-weight:var(--font-bold);text-transform:uppercase;line-height:1.1;font-family:"Grenze";font-size:18px}@media(max-width:599px){.use-text-caption2[data-v-a3f574da]{font-size:16px}}.remove-container-spacing[data-v-a3f574da]{position:relative}.remove-container-spacing-right[data-v-a3f574da]{position:relative;right:-16px}@media(min-width:600px){.remove-container-spacing-right[data-v-a3f574da]{right:-24px}}@media(min-width:960px){.remove-container-spacing-right[data-v-a3f574da]{right:-32px}}@media(min-width:1280px){.remove-container-spacing-right[data-v-a3f574da]{right:calc(-50vw + 608px)}}.remove-container-spacing-left[data-v-a3f574da]{position:relative;left:-16px}@media(min-width:600px){.remove-container-spacing-left[data-v-a3f574da]{left:-24px}}@media(min-width:960px){.remove-container-spacing-left[data-v-a3f574da]{left:-32px}}@media(min-width:1280px){.remove-container-spacing-left[data-v-a3f574da]{left:calc(-50vw + 608px)}}@media(max-width:1919px){.use-hidden-lg-down[data-v-a3f574da]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-a3f574da]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-a3f574da]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-a3f574da]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-a3f574da]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-a3f574da]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-a3f574da]{display:none}}#main-wrap[data-v-a3f574da],.main-wrap[data-v-a3f574da]{position:relative;height:100%;width:100%;overflow:hidden}.theme--light #main-wrap[data-v-a3f574da],.theme--light .main-wrap[data-v-a3f574da]{color:rgba(0,0,0,.87)}.theme--dark #main-wrap[data-v-a3f574da],.theme--dark .main-wrap[data-v-a3f574da]{color:#fff;background-color:var(--v-primary-base)}.theme--light #main-wrap[data-v-a3f574da],.theme--light .main-wrap[data-v-a3f574da]{background-color:#fff}.space-bottom[data-v-a3f574da]{margin-bottom:160px}@media(max-width:1279px){.space-bottom[data-v-a3f574da]{margin-bottom:120px}}.space-top[data-v-a3f574da]{margin-top:160px}@media(max-width:1279px){.space-top[data-v-a3f574da]{margin-top:120px}}.space-bottom-short[data-v-a3f574da]{margin-bottom:80px}@media(min-width:960px)and (max-width:1279px){.space-top-short-md-down[data-v-a3f574da]{margin-top:80px}}.space-top-short[data-v-a3f574da]{margin-top:80px}',""]),t.exports=e},594:function(t,e,d){"use strict";d.r(e);var n={},o=(d(515),d(35)),r=d(45),c=d.n(r),l=d(346),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return this.$slots.default?e("div",[e("v-container",{class:{"fixed-width":this.isDesktop}},[e("div",{staticClass:"wrapper"},[this._t("default")],2)])],1):this._e()}),[],!1,null,"00d05bca",null),f=component.exports;c()(component,{VContainer:l.a});var x={components:{Wrapper:f},data:function(){return{}}},m=(d(517),d(333)),v=d(341),h=d(336),w=d(342),y=Object(o.a)(x,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-img",{attrs:{height:"100vh",position:"center",cover:"",src:"/images/background.jpg"}},[e("wrapper",[e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[e("v-img",{attrs:{src:"/images/logo-inverted.png"}})],1)],1)],1),this._v(" "),e("h1",{staticClass:"use-text-title text-center primary--text pa-2",staticStyle:{"background-color":"white",width:"100%"}},[this._v("Under Construction")]),this._v(" "),e("div",{staticClass:"text-center"},[e("v-btn",{attrs:{large:"",color:"primary",href:"mailto:info@blaesbeer.com"}},[this._v("Contact")])],1)],1)}),[],!1,null,"10eaf1cc",null),z=y.exports;c()(y,{VBtn:m.a,VCol:v.a,VImg:h.a,VRow:w.a});var _=d(348),k=d(113),C={components:{"main-footer":_.a,Banner:z},data:function(){return{}},mounted:function(){},head:function(){return{title:k.a.blaes.desc}}},E=(d(519),Object(o.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"main-wrap"},[e("div",{staticClass:"container-wrap"},[e("section",{attrs:{id:"home"}},[e("banner")],1)])])])}),[],!1,null,"a3f574da",null));e.default=E.exports}}]);