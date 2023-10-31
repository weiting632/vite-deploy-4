import{_ as x,m as g,b as V,r as _,o as u,c as p,e as s,d as a,w,t as r,F as y,h as C,E as m,g as E,v as S}from"./index-72d37fac.js";import{S as T}from"./sweetalert2.all-7dc3b911.js";import{c as h}from"./cart-5f3bce58.js";const{VITE_URL:U,VITE_PATH:k}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"tomyalan978",BASE_URL:"/vite-deploy-4",MODE:"production",DEV:!1,PROD:!0,SSR:!1},I={data(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""}}},components:{},computed:{...g(h,["carts","final_total"])},methods:{...V(h,["getCart","addToCart","deleteItem","updateCartItem","deleteCartsItem"]),createOrder(){const n=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:!0,onCancel:this.onCancel}),t=`${U}/v2/api/${k}/order`,f=this.form;this.$http.post(t,{data:f}).then(d=>{const e=d.data.orderId;console.log("id:",e),n.hide(),T.fire({position:"top",title:"訂單已送出",showConfirmButton:!1,timer:1500,customClass:{popup:"small-swal2-popup",title:"small-swal2-title"}}),this.$refs.form.resetForm(),this.$router.push({path:`form/${e}`}),this.getCart()}).catch(d=>{alert(d.response.data.message)})}},mounted(){}},q={class:"container"},B={class:"row"},D={class:"col-md-8"},R=s("h2",{class:"fs-4 my-5"},"填寫訂購資訊",-1),j={class:"mb-3"},A=s("label",{for:"email",class:"form-label"},"Email",-1),L={class:"mb-3"},O=s("label",{for:"name",class:"form-label"},"收件人姓名",-1),P={class:"mb-3"},F=s("label",{for:"tel",class:"form-label"},"收件人電話",-1),N={class:"mb-3"},$=s("label",{for:"address",class:"form-label"},"收件人地址",-1),H={class:"mb-3"},M=s("label",{for:"message",class:"form-label"},"留言",-1),z=s("div",{class:"text-center mb-4"},[s("button",{type:"submit",class:"btn btn-danger btn-lg"},"送出訂單")],-1),G={class:"col-md-4 mb-5 mt-md-17 mt-sm-5 d-none d-md-block"},J={class:"card bg-light"},K=s("div",{class:"card-header text-center text-white bg-success mb-2"}," 訂單摘要 ",-1),Q={class:"d-flex justify-content-between mb-2"},W=s("span",{class:"px-2"},"小計",-1),X={class:"px-2"},Y=s("div",{class:"d-flex justify-content-between mb-2"},[s("span",{class:"px-2"},"運費"),s("span",{class:"px-2"},"$0")],-1),Z={class:"d-flex justify-content-between mb-3"},ss=s("span",{class:"px-2"},"總計",-1),es={class:"px-2"},ts={class:"card mt-6"},os=s("div",{class:"card-header text-center text-white bg-success"}," 購物清單 ",-1),ls={class:"card-body bg-light"},as={class:"d-flex"},ns={class:"pb-2"},rs={class:"cart-img w-100"},ds=["src"],is={class:"pb-2"},cs={class:"px-4 text-nowrap"},ms=s("br",null,null,-1),_s={class:"px-4"},us=s("br",null,null,-1),ps={class:"px-4"};function fs(n,t,f,d,e,b){const i=_("v-field"),c=_("error-message"),v=_("v-form");return u(),p("div",q,[s("div",B,[s("div",D,[R,a(v,{ref:"form",onSubmit:b.createOrder},{default:w(({errors:o})=>[s("div",j,[A,a(i,{id:"email",name:"email",type:"email",class:m(["form-control",{"is-invalid":o.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:e.form.user.email,"onUpdate:modelValue":t[0]||(t[0]=l=>e.form.user.email=l)},null,8,["class","modelValue"]),a(c,{name:"email",class:"invalid-feedback"})]),s("div",L,[O,a(i,{id:"name",name:"姓名",type:"text",class:m(["form-control",{"is-invalid":o.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:e.form.user.name,"onUpdate:modelValue":t[1]||(t[1]=l=>e.form.user.name=l)},null,8,["class","modelValue"]),a(c,{name:"姓名",class:"invalid-feedback"})]),s("div",P,[F,a(i,{id:"tel",name:"電話",type:"text",class:m(["form-control",{"is-invalid":o.電話}]),placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:e.form.user.tel,"onUpdate:modelValue":t[2]||(t[2]=l=>e.form.user.tel=l)},null,8,["class","modelValue"]),a(c,{name:"電話",class:"invalid-feedback"})]),s("div",N,[$,a(i,{id:"address",name:"地址",type:"text",class:m(["form-control",{"is-invalid":o.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:e.form.user.address,"onUpdate:modelValue":t[3]||(t[3]=l=>e.form.user.address=l)},null,8,["class","modelValue"]),a(c,{name:"地址",class:"invalid-feedback"})]),s("div",H,[M,E(s("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[4]||(t[4]=l=>e.form.message=l)},null,512),[[S,e.form.message]])]),z]),_:1},8,["onSubmit"])]),s("div",G,[s("div",J,[K,s("div",Q,[W,s("span",X,r(n.final_total),1)]),Y,s("div",Z,[ss,s("span",es,r(n.final_total),1)])]),s("div",ts,[os,s("div",ls,[s("table",null,[s("tbody",null,[(u(!0),p(y,null,C(n.carts,o=>(u(),p("tr",{class:"border-bottom",key:o.id},[s("div",as,[s("td",ns,[s("div",rs,[s("img",{src:o.product.imageUrl,style:{width:"72px",height:"72px","object-fit":"cover"}},null,8,ds)])]),s("td",is,[s("span",cs,r(o.product.title),1),ms,s("small",_s,r(o.qty)+" 個",1),us,s("span",ps,"NT$"+r(o.total),1)])])]))),128))])])])])])])])}const xs=x(I,[["render",fs]]);export{xs as default};
