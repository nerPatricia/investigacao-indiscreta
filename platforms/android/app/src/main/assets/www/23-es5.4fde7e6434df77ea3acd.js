function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,o){for(var n=0;n<o.length;n++){var t=o[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,o,n){return o&&_defineProperties(e.prototype,o),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{fhSy:function(e,o,n){"use strict";n.r(o),n.d(o,"RegisterPageModule",(function(){return M}));var t,i,r=n("ofXK"),a=n("3Pt+"),b=n("tyNb"),c=n("TEn/"),l=n("PSD3"),s=n.n(l),p=n("fXoL"),m=n("6uu6"),u=n("RSLB"),d=n("PMmS"),f=((t=function(){function e(o,n,t,i){_classCallCheck(this,e),this.router=o,this.formBuilder=n,this.authService=t,this.loading=i}return _createClass(e,[{key:"ngOnInit",value:function(){this.form=this.formBuilder.group({name:new a.b("",[a.k.required]),email:new a.b("",[a.k.required]),password:new a.b("",[a.k.required]),cpf:new a.b(""),birthday:new a.b(""),address:new a.b("",[a.k.required]),number:new a.b(""),complement:new a.b(""),city:new a.b("",[a.k.required]),zip:new a.b(""),school:new a.b("",[a.k.required]),course:new a.b("",[a.k.required]),schoolCode:new a.b("",[a.k.required]),semester:new a.b("",[a.k.required]),teacher:new a.b(!1),events:new a.b([]),hours:new a.b(0)})}},{key:"back",value:function(){this.router.navigateByUrl("/")}},{key:"register",value:function(){var e=this;this.authService.register(this.form.value).subscribe((function(o){s.a.fire({title:"Sucesso",text:"Usu\xe1rio cadastrado com sucesso. Fa\xe7a login para continuar",icon:"success",confirmButtonText:"OK"}).then((function(){e.router.navigateByUrl("/")}))}),(function(e){console.log(e)}))}}]),e}()).\u0275fac=function(e){return new(e||t)(p.Kb(b.g),p.Kb(a.a),p.Kb(m.a),p.Kb(u.a))},t.\u0275cmp=p.Eb({type:t,selectors:[["app-register"]],decls:60,vars:4,consts:[["title","Cadastro Eventex",3,"showButtonBack"],[1,"ion-padding"],[1,"form"],[3,"formGroup"],[2,"margin-top","10px"],["type","text","placeholder","Nome*","formControlName","name"],["type","text","placeholder","Data de nascimento","formControlName","birthday"],["type","tel","placeholder","CPF","formControlName","cpf"],["type","text","placeholder","E-mail*","formControlName","email"],[2,"margin-bottom","10px"],["type","password","placeholder","Senha*","formControlName","password"],["type","text","placeholder","Rua*","formControlName","address"],["size","6"],["type","tel","placeholder","N\xfamero","formControlName","number"],["type","text","placeholder","Complemento","formControlName","complement"],["type","text","placeholder","Cidade*","formControlName","city"],["type","tel","placeholder","CEP","formControlName","zip"],["type","text","placeholder","Institui\xe7\xe3o*","formControlName","school"],["type","text","placeholder","Curso*","formControlName","course"],["type","text","placeholder","Matricula*","formControlName","schoolCode"],["type","tel","placeholder","Semestre*","formControlName","semester"],[2,"font-size","12px !important","padding-bottom","13px !important","padding-left","20px !important"],["formControlName","teacher",2,"margin-top","6px","margin-right","20px"],[1,"error-message","ion-text-center",3,"hidden"],[1,"bottom-buttons"],["size","5"],["id","cancel","primary","","ion-button","","expand","block",1,"btn",3,"click"],["id","finish","primary","","ion-button","","expand","block",1,"btn",3,"disabled","click"]],template:function(e,o){1&e&&(p.Lb(0,"app-header",0),p.Nb(1,"ion-content",1),p.Nb(2,"ion-grid"),p.Nb(3,"ion-list",2),p.Nb(4,"form",3),p.Nb(5,"ion-label"),p.gc(6,"Informa\xe7\xf5es Pessoais"),p.Mb(),p.Nb(7,"ion-item",4),p.Lb(8,"ion-input",5),p.Mb(),p.Nb(9,"ion-item"),p.Lb(10,"ion-input",6),p.Mb(),p.Nb(11,"ion-item"),p.Lb(12,"ion-input",7),p.Mb(),p.Nb(13,"ion-item"),p.Lb(14,"ion-input",8),p.Mb(),p.Nb(15,"ion-item",9),p.Lb(16,"ion-input",10),p.Mb(),p.Nb(17,"ion-label"),p.gc(18,"Endere\xe7o"),p.Mb(),p.Nb(19,"ion-item",4),p.Lb(20,"ion-input",11),p.Mb(),p.Nb(21,"ion-row",9),p.Nb(22,"ion-col",12),p.Nb(23,"ion-item"),p.Lb(24,"ion-input",13),p.Mb(),p.Mb(),p.Nb(25,"ion-col",12),p.Nb(26,"ion-item"),p.Lb(27,"ion-input",14),p.Mb(),p.Mb(),p.Nb(28,"ion-col",12),p.Nb(29,"ion-item"),p.Lb(30,"ion-input",15),p.Mb(),p.Mb(),p.Nb(31,"ion-col",12),p.Nb(32,"ion-item"),p.Lb(33,"ion-input",16),p.Mb(),p.Mb(),p.Mb(),p.Nb(34,"ion-label"),p.gc(35,"Escolaridade"),p.Mb(),p.Nb(36,"ion-item",4),p.Lb(37,"ion-input",17),p.Mb(),p.Nb(38,"ion-item"),p.Lb(39,"ion-input",18),p.Mb(),p.Nb(40,"ion-row"),p.Nb(41,"ion-col",12),p.Nb(42,"ion-item"),p.Lb(43,"ion-input",19),p.Mb(),p.Mb(),p.Nb(44,"ion-col",12),p.Nb(45,"ion-item"),p.Lb(46,"ion-input",20),p.Mb(),p.Mb(),p.Mb(),p.Nb(47,"ion-item"),p.Nb(48,"ion-label",21),p.gc(49,"Sou organizador"),p.Mb(),p.Lb(50,"ion-checkbox",22),p.Mb(),p.Mb(),p.Mb(),p.Nb(51,"p",23),p.gc(52," Preencha os campos obrigat\xf3rios para prosseguir "),p.Mb(),p.Nb(53,"ion-row",24),p.Nb(54,"ion-col",25),p.Nb(55,"button",26),p.Vb("click",(function(){return o.back()})),p.gc(56," Cancelar "),p.Mb(),p.Mb(),p.Nb(57,"ion-col",25),p.Nb(58,"button",27),p.Vb("click",(function(){return o.register()})),p.gc(59," Concluir "),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Mb()),2&e&&(p.ac("showButtonBack","/"),p.zb(4),p.ac("formGroup",o.form),p.zb(47),p.ac("hidden",o.form.valid),p.zb(7),p.ac("disabled",!o.form.valid))},directives:[d.a,c.j,c.k,c.q,a.l,a.h,a.d,c.p,c.o,c.n,c.B,a.g,a.c,c.s,c.i,c.h,c.b],styles:[".form[_ngcontent-%COMP%], ion-grid[_ngcontent-%COMP%]{padding:0}.form[_ngcontent-%COMP%]{text-align:center}.form[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-weight:700;color:var(--ion-color-secondary-contrast);font-size:16px!important}.form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{border-radius:50px;--background:var(--ion-color-secondary);height:40px;margin-bottom:5px}.form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{--padding-bottom:20px;text-align:center;--placeholder-font-weight:bolder}.form[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{padding:0!important}.bottom-buttons[_ngcontent-%COMP%]{margin-top:20px;justify-content:space-between}.bottom-buttons[_ngcontent-%COMP%]   #cancel[_ngcontent-%COMP%]{background-color:var(--ion-color-primary-tint)}.bottom-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-weight:700;border-radius:15px}.error-message[_ngcontent-%COMP%]{font-weight:700;color:#b94a48;font-size:10px}"]}),t),g=n("oLyS"),h=[{path:"",component:f}],M=((i=function e(){_classCallCheck(this,e)}).\u0275mod=p.Ib({type:i}),i.\u0275inj=p.Hb({factory:function(e){return new(e||i)},providers:[u.a],imports:[[r.b,a.e,a.j,c.w,g.a,b.i.forChild(h)]]}),i)}}]);