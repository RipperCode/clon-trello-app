var S=Object.defineProperty;var m=a=>{throw TypeError(a)};var q=(a,t,e)=>t in a?S(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var s=(a,t,e)=>q(a,typeof t!="symbol"?t+"":t,e),g=(a,t,e)=>t.has(a)||m("Cannot "+e);var h=(a,t,e)=>(g(a,t,"read from private field"),e?e.call(a):t.get(a)),p=(a,t,e)=>t.has(a)?m("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(a):t.set(a,e),u=(a,t,e,n)=>(g(a,t,"write to private field"),n?n.call(a,e):t.set(a,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}})();const v=document.createElement("template");class M extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return[]}attributeChangedCallback(t,e,n){}connectedCallback(){if(this.shadowRoot.children.length<2){v.innerHTML=`
	  			<style>
	  				button{
						border-radius: 5px;
						height: 80%;
						margin: auto 0;
						padding: 5px;
						text-align: center;
						background: linear-gradient(84deg, #57a0bf 0%, #357f9f 100%);
						color: var(--text-300);
						box-shadow: none;
						border: none;
						&:hover{
							outline:1px solid var(--text-300);
						}
						&:active{
							outline: 1px solid black;
						}
					}
	  			</style>
	  			<button><slot></slot></button>
	  		`;const t=v.content.cloneNode(!0);this.shadowRoot.append(t)}}}customElements.define("button-solid",M);const k=document.createElement("template");k.innerHTML=`
	<style>
			*,
		::before,
		::after{
			margin: 0;
			padding: 0;
		}
		.icon{
			&::before,&::after{
				content: '';
			  	display: block;
			  	position: absolute;
			  	width: 100%;
			  	height: 100%;
			  	color: var(--text-300);
			  	background-image: url('/titleIcon.gif');
			  	background-size: contain;
			  	background-repeat: no-repeat;
			  	background-position: center;
			}

		&::after{
			background-image: url('/titleIconAnimated.gif');
			opacity: 0;
			
		}
		&:hover::before{
			opacity: 0;
		}
		&:hover::after{
			opacity: 1;
		}
		position: relative;
		width: 55px;
		padding-left: 5px;
		margin-left: 5px;
		}
		.container{
			display: flex;
			height:6vh;
			justify-content: space-between;
			background-color: var(--background-100);
			gap: 2px;
			
		nav ul{
			display: flex;
			gap: 20px;
			height: 100%;
			list-style: none;
			img{
				width: 20px;
			}
			li{
				flex-wrap: nowrap;
				display: flex;
				position: relative;
				justify-content: center;
				align-items: center;
				text-align: center;
				cursor: pointer;
				padding:5px;
				color: var(--text-300);
				&:hover{
					background-color: var(--background-300);

				}
				.dropdown{
					position: absolute;
					display: none;
					background-color: var(--background-100);
					width: 200px;
					height: fit-content;
					top: 6vh;
					left: 0;
					border-radius: 0 0 5px 5px ;

					z-index: 100;
					a{	
						box-sizing: border-box;
						display: block;
						list-style: none;
						width: 100%;
						height: 40px;
						color: var(--text-100);
						text-decoration: none;
						padding-left: 5px;
						overflow-x: none;
						text-align: left;
						border-radius: 0 5px 5px 0;
						&:hover{
							background-color: var(--primary-100-hover);
						}
					}
				}
				&:hover .dropdown{
					display: block;
					
					border: 1px solid rgba(31,16,40,0.25);
				}
			}
				
		}
		input{
			height: 70%;
			border-radius: 5px;
			margin: auto 0;
			border: 1px solid var(--text-300);
			background-color: var(--background-100);
			margin-right: 20px;
			color: var(--text-300);
			
			&:active{
				border: 1px solid gray;
			}

		}
		button-solid{
			margin: auto 0;
		}
				
	}
	</style>
	<div class="container">
		<div class="icon">
		</div>
		<nav>
			<ul>
				<li>
					Recientes
					<img src="/src/icons/small-down.svg" alt="dropdown Icon">
					<div class="dropdown">
						<a href="">reciente 1</a>
						<a href="">reciente 2</a>
					</div>
				</li>
				<li>
					Marcado
					<img src="/src/icons/small-down.svg" alt="dropdown Icon">
					<div class="dropdown">
						<a href="">marca 1</a>
						<a href="">marca 2</a>
					</div>
				</li>
			</ul>			
		</nav>
		<button-solid>crear</button-solid>
		<input type="text" placeholder="buscar">
	</div>
`;var l;class H extends HTMLElement{constructor(){super();p(this,l);this.attachShadow({mode:"open"})}handleEvent(e){}static get observedAttributes(){return[]}attributeChangedCallback(e,n,o){}connectedCallback(){u(this,l,k.content.cloneNode(!0)),this.shadowRoot.append(h(this,l))}}l=new WeakMap;customElements.define("header-component",H);const L=document.createElement("template");L.innerHTML=`
			<style>
  			*,
			::before,
			::after{
				margin:0;
				padding: 0;
				box-sizing: border-box;
			}

			aside{
				position: relative;
				background-color: var(--background-100);
				color: var(--text-300);
				height:94vh;
				.add{
					display: flex;
					justify-content: space-between;
					align-items: center;
					flex-wrap: nowrap;
					text-indent: 10px;
					border-bottom: 1px solid var(--text-300-hover);
					border-top: 1px solid var(--text-300-hover);
					width: 100%;
					height:40px;

					div{
						
						position: relative;
						width: 20px;
						height: 20px;
						margin-right:10px ;
						border-radius: 3px;
						&:hover{
							background-color: var(--text-300-hover);
						}
						img{
							position: absolute;
							width: 70%;
							height: 70%;
							margin: 15%;
							top: 0;
							left: 0;
						}
					}

				}

				main{
					display: block;
					
					.tableItems{
						display: flex;
						justify-content: center;
						align-items: center;
						height: 40px;
						background-color: var(--background-300);
						transition: background-color 0.2s ease-in-out;
						p{	
							overflow-wrap:break-word;
							width: 100%;
							height: 80%;
							margin: 5%;
						}
						&:hover{
							background-color: var(--text-300-hover);
						}
						.hidden{
						display: none;
						}
						
					}
				}
			}
  			</style>
  			<aside>
  				<div class="add">
					 mis tableros
					<div class="addButon">
						<img src="/src/icons/plus.svg" alt="boton de add">
					</div>					
  				</div>
  				<main>

  				</main>
				<slot>default content</slot>
  			</aside>
			`;var c;class A extends HTMLElement{constructor(){super();p(this,c);s(this,"createTableEvent",new CustomEvent("create:table",{detail:{},bubbles:!0,composed:!0}));this.attachShadow({mode:"open"})}static get observedAttributes(){return[]}attributeChangedCallback(e,n,o){}connectedCallback(){u(this,c,L.content.cloneNode(!0)),this.shadowRoot.append(h(this,c)),this.shadowRoot.querySelector(".addButon").addEventListener("click",()=>{this.children[0].setAttribute("isVisible","")}),this.addEventListener("send:tableInfo",n=>{const o=n.detail.name;this.addTable(o),this.createTable(n.detail.name,n.detail.color)})}addTable(e){document.createElement("template");const n=this.shadowRoot.querySelector("main"),o=document.createElement("div"),i=document.createElement("p");i.textContent=e,o.classList.add("tableItems"),o.append(i),n.append(o),o.addEventListener("click",r=>{const d=new CustomEvent("navigateTo:table",{detail:{name:r.target.textContent},bubbles:!0,composed:!0});o.dispatchEvent(d)})}createTable(e,n){this.createTableEvent.detail.name=e,this.createTableEvent.detail.color=n,this.dispatchEvent(this.createTableEvent)}navigate(e){}}c=new WeakMap;customElements.define("aside-component",A);const f=document.createElement("template");class N extends HTMLElement{constructor(){super();s(this,"name");s(this,"color");this.attachShadow({mode:"open"})}static get observedAttributes(){return["name"]}attributeChangedCallback(e,n,o){}connectedCallback(){this.name=this.getAttribute("name"),console.log("color y name en table-header",this.name),f.innerHTML=`
  			<style>
  			*,
			::before,
			::after{
				margin:0;
				padding: 0;
				box-sizing: border-box;
			}
			header{
	  			width:100%;
	  			height:8vh;
	  			background: #ffffff3b;
				color: var(--background-100);
				font-weight: 800;
				font-size: 1.2rem;
				backdrop-filter: blur(10px);
				border-bottom: 1px solid rgba(255,255,255,1);
	  			z-index:-1;
  				margin-bottom:20px;
			}
  			</style>
  			<header>
  				<div>${this.name}</div>
  			</header>
  		`;const e=f.content.cloneNode(!0);this.shadowRoot.children.length<2&&this.shadowRoot.append(e)}}customElements.define("table-header",N);const x=document.createElement("template");class E extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}handleEvent(t){if(t.type==="keydown"&&t.key==="Enter"){const e=this.shadowRoot.querySelector("p"),n=this.shadowRoot.querySelector("input");e.textContent=t.target.value,e.classList.toggle("hidden"),n.classList.toggle("hidden")}}static get observedAttributes(){return[]}attributeChangedCallback(t,e,n){}connectedCallback(){if(this.shadowRoot.children.length<2){x.innerHTML=`
  				<style>
  				*,::before,::after{
	  				margin:0;
	  				padding:0;
	  				box-sizing: border-box;
	  			}
  				.container{
  					display:flex;
  					justify-content:space-between;
  					align-items:center;
  					width:272px;
  					height:40px;
  					background-color:var(--background-100);
  					span{
  						margin-right:10px;
  					}
  					input{
  						margin-left:10px;
  					}
  					p{
  						display:flex;
  						align-items:center;
  						flex-grow:1;
  						height:100%;
  						text-indent: 10px;
  						
  					}
  					p.hidden, input.hidden{
  						display:none;
  					}
	  				&:hover{
	  					background-color:var(--background-300);
	  				}
  				}
  				
  				</style>
  				<div class="container">
  					<p class="hidden">tittle</p>
  					<input type="text" >
  					<span>...</span>
  				</div>
  			`;const t=x.content.cloneNode(!0);this.shadowRoot.append(t),this.shadowRoot.querySelector("p").addEventListener("click",this);const e=this.shadowRoot.querySelector("input");e.addEventListener("keydown",this),e.focus()}}}customElements.define("card-component",E);const w=document.createElement("template");class C extends HTMLElement{constructor(t){super(),this.attachShadow({mode:"open"}),this.name=t}handleEvent(t){if(t.type==="click"){if(t.target.classList.contains("tittle")){const e=this.shadowRoot.querySelector(".inputTittle"),n=this.shadowRoot.querySelector(".tittle");e.classList.toggle("hidden"),n.classList.toggle("hidden")}if(t.target.classList.contains("add-card")){const e=new E;this.shadowRoot.querySelector(".add-card").insertAdjacentElement("beforebegin",e)}}if(t.type==="keydown"&&t.key==="Enter"){const e=this.shadowRoot.querySelector(".tittle");console.log(e),e.textContent=t.target.value;const n=this.shadowRoot.querySelector(".inputTittle");e.classList.toggle("hidden"),n.classList.toggle("hidden"),t.target.value=""}}static get observedAttributes(){return[]}attributeChangedCallback(t,e,n){}connectedCallback(){if(this.shadowRoot.children.length<2){w.innerHTML=`
	  		<style>
	  			*,::before,::after{
	  				margin:0;
	  				padding:0;
	  				box-sizing: border-box;
	  			}
	  			.container{
	  				color:var(--text-300);
	  				.tittle-list, .add-card {
	  					display:flex;
	  					align-items:center;
	  					justify-content: space-between;
	  					width:272px;
	  					height:40px;
	  					text-indent: 10px;
	  					background-color:var(--background-100);
	  					p{	
	  						display:flex;
	  						align-items:center;
	  						cursor:pointer;
	  						width:100%;
	  						flex-grow:1;
	  						height:100%;
	  					}
	  					p.hidden{
	  						display:none;
	  					}
	  					input{
	  						margin-left:10px;
	  					}
	  					input.hidden{
	  						display:none;
	  					}
	  					span{	
	  						cursor:pointer;
	  						margin-right:10px;
	  					}
	  					&:hover{
	  						background-color:var(--background-300);
	  					}
	  				&:first-child{
	  					border-radius: 10px 10px 0 0;
	  					
	  					}
	  				&:last-child{
	  					border-radius: 0 0 10px 10px;
	  					
	  					background-color:var(--background-100-hover);
	  					&:hover{
	  						background-color:#2d173a3d;
	  						cursor:pointer;
	  						}
	  					}
	  				
	  					
	  			}
	  			
	  			
	  		}
	  		</style>	
	  		<div class="container">
	  			<div class="tittle-list">
		  			<p class="tittle">${this.name}</p>
		  			<input type="text" placeholder="list name" class="inputTittle hidden">
		  			<span>...</span>
	  			</div>
	  			<p class="add-card">add card</p>
	  		</div>`;const t=w.content.cloneNode(!0);this.shadowRoot.append(t);const e=this.shadowRoot.querySelector(".tittle-list p"),n=this.shadowRoot.querySelector(".tittle-list input");e.addEventListener("click",this),n.addEventListener("keydown",this),this.shadowRoot.querySelector(".add-card").addEventListener("click",this)}}addList(){}}customElements.define("list-component",C);const T=document.createElement("template");T.innerHTML=`
	<style>
		.container{
			
			display:flex;
			flex-wrap:wrap;
			background-color:var(--background-100);
			width:272px;
			height:80px;
			gap:10px;
			align-items:center;
			padding:5px;
			border-radius: 10px;
		}
		input{
			border:1px solid gray;
			padding:1px;
			height:30px;
			border-radius:3px;
			background-color:var(--background-100);
			color: var(--text-300);
			&::placeholder{
				background-color:var(--background-100);
				color: var(--text-300);
			}
		}
		:host{
			display:none;
			position:absolute;
			top:0;
			left:0;
		}
		:host(.isVisible){
			display:block;
		}
	</style>
	<div class="container">
		<input type="text" placeholder="add name list">
		<button-solid class=addList>crear list</button-solid>
		<button-solid class=cancel>cancelar</button-solid>
	</div>
`;class $ extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return[]}attributeChangedCallback(t,e,n){}connectedCallback(){console.log("renderizado newListForm");const t=T.content.cloneNode(!0);if(this.shadowRoot.children.length<2){this.shadowRoot.append(t),this.shadowRoot.querySelector(".cancel").addEventListener("click",i=>{i.target.classList.contains("cancel")&&this.classList.remove("isVisible")}),this.shadowRoot.querySelector("input").addEventListener("change",i=>{this.name=i.target.value});const o=this.shadowRoot.querySelector(".addList");o.addEventListener("click",i=>{if(i.target.classList.contains("addList")){const r=new CustomEvent("add:list",{detail:{name:this.name},bubbles:!0,composed:!0});o.dispatchEvent(r),this.classList.remove("isVisible")}})}}addListComponent(){}}customElements.define("new-list-form",$);const y=document.createElement("template");class b extends HTMLElement{constructor(e,n){super();s(this,"html");s(this,"name");s(this,"color");this.attachShadow({mode:"open"}),this.name=e,this.color=n}static get observedAttributes(){return[]}handleEvent(e){if(e.type==="click"&&e.target.classList.contains("addListButton")&&this.shadowRoot.querySelector("new-list-form").classList.add("isVisible"),e.type==="add:list"){const n=this.shadowRoot.querySelector("main"),o=new C(e.detail.name);n.append(o)}}attributeChangedCallback(e,n,o){}connectedCallback(){console.log("nombre en Table",this.name),y.innerHTML=`
        <style>
        *,::before,::after{
            margin:0;
            padding:0;
            box-sizing: border-box;
        }
        .container{
            background-color:${this.color};
            min-height:94vh;
            max-height:100%;
        }
        button{
            position:relative;
            display:flex;
            gap:20px;
            
            align-items: center;
            background: var(--text-300-hover);
            font-size: 1.2rem;
            backdrop-filter: blur(10px);
            border: 1px solid var(--text-100);
            border-radius:10px;
            width:272px;
            height:40px;
            color: var(--background-100);
            font-weight: 600;
            img{
                margin-left:10px;
                width:18px;
                height:18px;
            }
            &:hover{
                background-color: ffffff3b ;
            }
            &:active{
            background-color: #ffffff3b;
            }
        }
        main{
            display:flex;
            gap:20px;
            padding:20px;
        }
        
        :host{

        }    
        </style>
        <div class="container">
            <table-header name='${this.name}'></table-header>
            <main>
                <button class="addListButton">
                    <img src="/src/icons/plus.svg" alt="boton de add">
                    new list
                    <new-list-form></new-list-form>
                </button>  
            </main>
        </div>`,this.html=y.content.cloneNode(!0),this.shadowRoot.children.length<2&&(this.shadowRoot.append(this.html),this.shadowRoot.querySelector(".addListButton").addEventListener("click",this),this.addEventListener("add:list",this))}}customElements.define("table-component",b);const R=document.createElement("template");R.innerHTML=`
	<style>
	*,::before,::after{
		margin:0;
		padding:0;
		box-sizing: border-box;
	}
		:host{
			display:none;
			position: absolute;
    		left: 100%;
    		top:0;
			width:100%;
			height: 100%;
    		background-color: var(--background-100-hover);
			backdrop-filter: blur(100px);
			
		}
		:host([isVisible]){
			display:block;

		}
	aside{
	
	width:100%;
		input{
			width:100%;
		}
	}
	</style>
	<aside>
		<label htmlFor="color">Color: </label>
		<input type="text" id="color">
		<label htmlFor="name">Nombre: </label>
		<input type="text" id="name">
		<button>Crear tablero</button>
		<button class="cancel">cancelar</button>
	</aside>`;class I extends HTMLElement{constructor(){super();s(this,"color");s(this,"name");this.attachShadow({mode:"open"})}static get observedAttributes(){return[]}attributeChangedCallback(e,n,o){}connectedCallback(){this.html=R.content.cloneNode(!0),this.shadowRoot.append(this.html);const e=this.shadowRoot.getElementById("color"),n=this.shadowRoot.getElementById("name");e.addEventListener("change",r=>{this.color=r.target.value}),n.addEventListener("change",r=>{this.name=r.target.value});const o=this.shadowRoot.querySelector("button"),i=this.shadowRoot.querySelector(".cancel");o.addEventListener("click",r=>{const d=new CustomEvent("send:tableInfo",{detail:{color:this.color,name:this.name},bubbles:!0,composed:!0});e.value="",n.value="",o.dispatchEvent(d),this.removeAttribute("isVisible")}),i.addEventListener("click",()=>{this.removeAttribute("isVisible"),e.value="",n.value=""})}}customElements.define("aside-new-table",I);console.log("main.js cargado");document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector(".tables"),t=new b("Perro","pink");fetch("/src/data.json").then(o=>o.json()).then(o=>console.log(o));const e={"/":t};function n(o){const i=e[o]||e["/"];a.children.length===0||a.removeChild(a.children[0]),a.append(i),window.history.pushState({path:o},"",o)}window.addEventListener("popstate",o=>{console.log(o.state),n(o.state?o.state.path:"/")}),document.addEventListener("create:table",o=>{let i=o.detail.name,r=o.detail.color;const d=new b(i,r);console.log(d),e[`/${i}`]=d,n(`/${i}`)}),document.addEventListener("navigateTo:table",o=>{console.log("se activo el evento navigateTo"),console.log(o.detail.name,o.detail.color),console.log(e),n(`/${o.detail.name}`)}),n(window.location.pathname)});
