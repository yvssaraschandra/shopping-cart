(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),l=n.n(c),o=(n(14),n(8)),u=n(1),i=n(2),m=n(5),s=n(3),d=n(4),h=(n(15),function(e){return"\u20b9 "+Number(e.toFixed(2)).toLocaleString()+"  "}),p=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.products.map((function(t){return r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"thumbnail text-center background-color: blue"},r.a.createElement("a",{href:"#".concat(t.id),onClick:function(n){return e.props.handleAddToCart(n,t)}},r.a.createElement("img",{src:"products/".concat(t.sku,"_2.jpg"),alt:t.title}),r.a.createElement("p",null,t.title)),r.a.createElement("div",null,r.a.createElement("b",null,h(t.price)),r.a.createElement("button",{className:"btn btn-primary",onClick:function(n){return e.props.handleAddToCart(n,t)}},"Add To Cart"))))}));return r.a.createElement("div",{className:"row"},t)}}]),n}(a.Component),b=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.cartItems;return r.a.createElement("div",{className:"alert text-center container-border"},r.a.createElement("b",null,"Shopping Cart"),r.a.createElement("hr",null),0===t.length?"Basket is empty":r.a.createElement("div",null,"You have ",t.length," items in the basket. ",r.a.createElement("hr",null)),t.length>0&&r.a.createElement("div",null,t.map((function(t){return r.a.createElement("div",null,r.a.createElement("a",{href:"#".concat(t.id),onClick:function(n){return e.props.handleRemoveFromCart(n,t)}},r.a.createElement("img",{src:"products/".concat(t.sku,"_2.jpg"),alt:t.title,class:"center"}),r.a.createElement("p",null,t.title)),r.a.createElement("b",null,"Quantity : ",t.count),r.a.createElement("br",null),r.a.createElement("b",null,"Price : ",h(t.price*t.count)),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-primary",onClick:function(n){return e.props.handleRemoveFromCart(n,t)}},"Remove"),r.a.createElement("hr",null))})),r.a.createElement("b",null,"Sub Total : ",h(t.reduce((function(e,t){return e+t.price*t.count}),0))," "),r.a.createElement("br",null),r.a.createElement("b",null,"GST(5%) : ",h(t.reduce((function(e,t){return.05*(e+t.price*t.count)}),0))," "),r.a.createElement("br",null),r.a.createElement("b",null,"Total : ",h(t.reduce((function(e,t){return e+t.price*t.count+.05*(e+t.price*t.count)}),0))," "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return alert("Checkout needs to be implemented")}},"Checkout"),r.a.createElement("hr",null)))}}]),n}(a.Component),E=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={products:[],filteredProducts:[],cartItems:[]},a.handleAddToCart=a.handleAddToCart.bind(Object(m.a)(a)),a.handleRemoveFromCart=a.handleRemoveFromCart.bind(Object(m.a)(a)),a}return Object(i.a)(n,[{key:"componentWillMount",value:function(){var e=this;fetch("https://my-json-server.typicode.com/Surya0550/db/products/").then((function(e){return e.json()})).then((function(t){return e.setState({products:t,filteredProducts:t})})),localStorage.getItem("cartItems")&&this.setState({cartItems:JSON.parse(localStorage.getItem("cartItems"))})}},{key:"handleAddToCart",value:function(e,t){this.setState((function(e){var n=e.cartItems,a=!1;return n.forEach((function(e){e.id===t.id&&(a=!0,e.count++)})),a||n.push(Object(o.a)({},t,{count:1})),localStorage.setItem("cartItems",JSON.stringify(n)),n}))}},{key:"handleRemoveFromCart",value:function(e,t){this.setState((function(e){var n=e.cartItems.filter((function(e){return e.id!==t.id}));return localStorage.setItem("cartItems",n),{cartItems:n}}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container text-center"},r.a.createElement("h1",null,"The Klothing Store"),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-9"},r.a.createElement(p,{products:this.state.filteredProducts,handleAddToCart:this.handleAddToCart})),r.a.createElement("div",{className:"col-md-3"},r.a.createElement(b,{cartItems:this.state.cartItems,handleRemoveFromCart:this.handleRemoveFromCart}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.005a353e.chunk.js.map