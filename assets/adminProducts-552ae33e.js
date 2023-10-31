import{_ as k,r as U,o as d,c as i,e as t,F as h,h as v,d as x,g as a,v as r,J as w,k as P,t as u}from"./index-72d37fac.js";const M={props:["pages","getProducts"],template:`
 
  <nav aria-label="Page navigation example">
  <ul class="pagination">

    <li class="page-item" :class="{disabled: !pages.has_pre}">
      <a class="page-link" href="#" aria-label="Previous" @click.prevent='getProducts(pages.current_page -1)'>
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>

    <li class="page-item" :class="{active:page === pages.current_page}" v-for='page in pages.total_pages'  :key="page + 'page'">
      <a class="page-link"  href="#" @click.prevent="getProducts(page)">{{page}}</a>
    </li>
    
    <li class="page-item" :class="{disabled: !pages.has_next}">
      <a class="page-link" href="#" aria-label="Next" @click.prevent='getProducts(pages.current_page +1)'>
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
`},{VITE_URL:m,VITE_PATH:b}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"tomyalan978",BASE_URL:"/vite-deploy-4",MODE:"production",DEV:!1,PROD:!0,SSR:!1};let _={},g={};const V={data(){return{products:[],tempProduct:{imagesUrl:[]},isNew:!1,page:{}}},methods:{getProducts(l=1){const e=`${m}api/${b}/admin/products/?page=${l}`;this.$http.get(e).then(c=>{this.products=c.data.products,this.page=c.data.pagination}).catch(c=>{console.log(c.data.message)})},openModal(l,e){l==="create"?(_.show(),this.isNew=!0,this.tempProduct={imagesUrl:[]}):l==="edit"?(_.show(),this.isNew=!1,this.tempProduct={...e}):l==="delete"&&(g.show(),this.tempProduct={...e})},updateProduct(){let l=`${m}v2/api/${b}/admin/product`,e="post";this.isNew||(l=`${m}v2/api/${b}/admin/product/${this.tempProduct.id}`,e="put"),this.$http[e](l,{data:this.tempProduct}).then(()=>{this.getProducts(),_.hide()})},deleteProduct(){const l=`${m}v2/api/${b}/admin/product/${this.tempProduct.id}`;this.$http.delete(l).then(()=>{this.getProducts(),g.hide()})},deleteAllOrder(){this.$http.delete(`${m}v2/api/${b}/admin/orders/all`).then(l=>{console.log(l)})},createImages(){this.tempProduct.imagesUrl=[],this.tempProduct.imagesUrl.push("")}},components:{pagination:M},mounted(){var e;const l=(e=document.cookie.split("; ").find(c=>c.startsWith("allenToken=")))==null?void 0:e.split("=")[1];this.$http.defaults.headers.common.Authorization=l,this.getProducts(),g=new bootstrap.Modal(document.getElementById("delProductModal"),{keyboard:!1}),_=new bootstrap.Modal(document.getElementById("productModal"),{keyboard:!1})}},C={class:"container"},E={class:"text-end mt-4"},A={class:"table mt-4"},I=t("thead",null,[t("tr",null,[t("th",{width:"120"}," 分類 "),t("th",null,"產品名稱"),t("th",{width:"120"}," 原價 "),t("th",{width:"120"}," 售價 "),t("th",{width:"100",class:""}," 是否啟用 "),t("th",{width:"120"}," 編輯 ")])],-1),N={class:""},T={class:""},L={key:0,class:"text-success"},B={key:1},D={class:"btn-group"},O=["onClick"],R=["onClick"],S={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},q={class:"modal-dialog modal-xl"},F={class:"modal-content border-0"},H={class:"modal-header bg-dark text-white"},z={id:"productModalLabel",class:"modal-title"},J={key:0},W={key:1},j=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),G={class:"modal-body"},K={class:"row"},Q={class:"col-sm-4"},X={class:"mb-3"},Y=t("label",{for:"imageUrl",class:"form-label"},"主要圖片",-1),Z=["src"],$=t("h3",{class:"mb-3"},"多圖新增",-1),tt={key:0},et={class:"mb-3"},ot=t("label",{for:"imageUrl",class:"form-label"},"圖片網址",-1),st=["onUpdate:modelValue"],lt=["src"],dt={key:0},it={key:1},nt={key:1},at={class:"col-sm-8"},rt={class:"mb-3"},ct=t("label",{for:"title",class:"form-label"},"標題",-1),pt={class:"row"},ut={class:"mb-3 col-md-6"},mt=t("label",{for:"category",class:"form-label"},"分類",-1),bt={class:"mb-3 col-md-6"},_t=t("label",{for:"price",class:"form-label"},"單位",-1),ht={class:"row"},gt={class:"mb-3 col-md-6"},vt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),Pt={class:"mb-3 col-md-6"},ft=t("label",{for:"price",class:"form-label"},"售價",-1),yt=t("hr",null,null,-1),kt={class:"mb-3"},Ut=t("label",{for:"description",class:"form-label"},"產品描述",-1),xt={class:"mb-3"},wt=t("label",{for:"content",class:"form-label"},"說明內容",-1),Mt={class:"mb-3"},Vt={class:"form-check"},Ct=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),Et={class:"modal-footer"},At=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),It={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},Nt={class:"modal-dialog"},Tt={class:"modal-content border-0"},Lt=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Bt={class:"modal-body"},Dt={class:"text-danger"},Ot={class:"modal-footer"},Rt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function St(l,e,c,qt,s,n){const f=U("pagination");return d(),i(h,null,[t("div",C,[t("div",E,[t("button",{class:"btn btn-primary me-2",onClick:e[0]||(e[0]=o=>n.openModal("create"))}," 建立新的產品 "),t("button",{class:"btn btn-primary",onClick:e[1]||(e[1]=(...o)=>n.deleteAllOrder&&n.deleteAllOrder(...o))}," 刪除所有訂單 ")]),t("table",A,[I,t("tbody",null,[(d(!0),i(h,null,v(s.products,o=>(d(),i("tr",{key:o.id},[t("td",null,u(o.category),1),t("td",null,u(o.title),1),t("td",N,u(o.origin_price),1),t("td",T,u(o.price),1),t("td",null,[o.is_enabled?(d(),i("span",L,"啟用")):(d(),i("span",B,"未啟用"))]),t("td",null,[t("div",D,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:p=>n.openModal("edit",o)}," 編輯 ",8,O),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:p=>n.openModal("delete",o)}," 刪除 ",8,R)])])]))),128))])]),x(f,{pages:s.page,"get-products":n.getProducts},null,8,["pages","get-products"])]),t("div",S,[t("div",q,[t("div",F,[t("div",H,[t("h5",z,[s.isNew?(d(),i("span",J,"新增產品")):(d(),i("span",W,"編輯產品"))]),j]),t("div",G,[t("div",K,[t("div",Q,[t("div",X,[Y,a(t("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>s.tempProduct.imageUrl=o),type:"text",class:"form-control mb-2",placeholder:"請輸入圖片連結"},null,512),[[r,s.tempProduct.imageUrl]]),t("img",{class:"img-fluid",src:s.tempProduct.imageUrl},null,8,Z)]),$,Array.isArray(s.tempProduct.imagesUrl)?(d(),i("div",tt,[(d(!0),i(h,null,v(s.tempProduct.imagesUrl,(o,p)=>(d(),i("div",{class:"mb-1",key:p},[t("div",et,[ot,a(t("input",{"onUpdate:modelValue":y=>s.tempProduct.imagesUrl[p]=y,type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,8,st),[[r,s.tempProduct.imagesUrl[p]]])]),t("img",{class:"img-fluid",src:o},null,8,lt)]))),128)),!s.tempProduct.imagesUrl.length||s.tempProduct.imagesUrl[s.tempProduct.imagesUrl.length-1]?(d(),i("div",dt,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[3]||(e[3]=o=>s.tempProduct.imagesUrl.push(""))}," 新增圖片 ")])):(d(),i("div",it,[t("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[4]||(e[4]=o=>s.tempProduct.imagesUrl.pop())}," 刪除圖片 ")]))])):(d(),i("div",nt,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[5]||(e[5]=(...o)=>n.createImages&&n.createImages(...o))}," 新增圖片 ")]))]),t("div",at,[t("div",rt,[ct,a(t("input",{id:"title","onUpdate:modelValue":e[6]||(e[6]=o=>s.tempProduct.title=o),type:"text",class:"form-control",placeholder:"請輸入標題"},null,512),[[r,s.tempProduct.title]])]),t("div",pt,[t("div",ut,[mt,a(t("input",{id:"category","onUpdate:modelValue":e[7]||(e[7]=o=>s.tempProduct.category=o),type:"text",class:"form-control",placeholder:"請輸入分類"},null,512),[[r,s.tempProduct.category]])]),t("div",bt,[_t,a(t("input",{id:"unit","onUpdate:modelValue":e[8]||(e[8]=o=>s.tempProduct.unit=o),type:"text",class:"form-control",placeholder:"請輸入單位"},null,512),[[r,s.tempProduct.unit]])])]),t("div",ht,[t("div",gt,[vt,a(t("input",{id:"origin_price","onUpdate:modelValue":e[9]||(e[9]=o=>s.tempProduct.origin_price=o),type:"number",min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[r,s.tempProduct.origin_price,void 0,{number:!0}]])]),t("div",Pt,[ft,a(t("input",{id:"price","onUpdate:modelValue":e[10]||(e[10]=o=>s.tempProduct.price=o),type:"number",min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[r,s.tempProduct.price,void 0,{number:!0}]])])]),yt,t("div",kt,[Ut,a(t("textarea",{id:"description","onUpdate:modelValue":e[11]||(e[11]=o=>s.tempProduct.description=o),type:"text",class:"form-control",placeholder:"請輸入產品描述"},`
                  `,512),[[r,s.tempProduct.description]])]),t("div",xt,[wt,a(t("textarea",{id:"description","onUpdate:modelValue":e[12]||(e[12]=o=>s.tempProduct.content=o),type:"text",class:"form-control",placeholder:"請輸入說明內容"},`
                  `,512),[[r,s.tempProduct.content]])]),t("div",Mt,[t("div",Vt,[a(t("input",{id:"is_enabled","onUpdate:modelValue":e[13]||(e[13]=o=>s.tempProduct.is_enabled=o),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[w,s.tempProduct.is_enabled]]),Ct])])])])]),t("div",Et,[At,t("button",{type:"button",class:"btn btn-primary",onClick:e[14]||(e[14]=(...o)=>n.updateProduct&&n.updateProduct(...o))}," 確認 ")])])])],512),t("div",It,[t("div",Nt,[t("div",Tt,[Lt,t("div",Bt,[P(" 是否刪除 "),t("strong",Dt,u(s.tempProduct.title),1),P(" 商品(刪除後將無法恢復)。 ")]),t("div",Ot,[Rt,t("button",{type:"button",class:"btn btn-danger",onClick:e[15]||(e[15]=(...o)=>n.deleteProduct&&n.deleteProduct(...o))}," 確認刪除 ")])])])],512)],64)}const Ht=k(V,[["render",St]]);export{Ht as default};
