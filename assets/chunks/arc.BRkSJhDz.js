import{R as ln,S as an,T as y,V as tn,W as z,X as S,Y as _,$ as un,a0 as rn,a1 as F,a2 as o,a3 as X,a4 as sn,a5 as on,a6 as fn}from"../app.BTAu3bn_.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function dn(l){return l.endAngle}function mn(l){return l&&l.padAngle}function pn(l,h,E,q,v,R,Y,a){var I=E-l,i=q-h,n=Y-v,d=a-R,u=d*I-n*i;if(!(u*u<y))return u=(n*(h-R)-d*(l-v))/u,[l+u*I,h+u*i]}function M(l,h,E,q,v,R,Y){var a=l-E,I=h-q,i=(Y?R:-R)/F(a*a+I*I),n=i*I,d=-i*a,u=l+n,s=h+d,f=E+n,c=q+d,$=(u+f)/2,t=(s+c)/2,m=f-u,g=c-s,A=m*m+g*g,T=v-R,P=u*c-f*s,O=(g<0?-1:1)*F(fn(0,T*T*A-P*P)),V=(P*g-m*O)/A,W=(-P*m-g*O)/A,w=(P*g+m*O)/A,p=(-P*m+g*O)/A,x=V-$,e=W-t,r=w-$,j=p-t;return x*x+e*e>r*r+j*j&&(V=w,W=p),{cx:V,cy:W,x01:-n,y01:-d,x11:V*(v/T-1),y11:W*(v/T-1)}}function hn(){var l=cn,h=yn,E=X(0),q=null,v=gn,R=dn,Y=mn,a=null,I=ln(i);function i(){var n,d,u=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-an,c=R.apply(this,arguments)-an,$=un(c-f),t=c>f;if(a||(a=n=I()),s<u&&(d=s,s=u,u=d),!(s>y))a.moveTo(0,0);else if($>tn-y)a.moveTo(s*z(f),s*S(f)),a.arc(0,0,s,f,c,!t),u>y&&(a.moveTo(u*z(c),u*S(c)),a.arc(0,0,u,c,f,t));else{var m=f,g=c,A=f,T=c,P=$,O=$,V=Y.apply(this,arguments)/2,W=V>y&&(q?+q.apply(this,arguments):F(u*u+s*s)),w=_(un(s-u)/2,+E.apply(this,arguments)),p=w,x=w,e,r;if(W>y){var j=sn(W/u*S(V)),G=sn(W/s*S(V));(P-=j*2)>y?(j*=t?1:-1,A+=j,T-=j):(P=0,A=T=(f+c)/2),(O-=G*2)>y?(G*=t?1:-1,m+=G,g-=G):(O=0,m=g=(f+c)/2)}var B=s*z(m),C=s*S(m),H=u*z(T),J=u*S(T);if(w>y){var K=s*z(g),L=s*S(g),N=u*z(A),Q=u*S(A),D;if($<rn)if(D=pn(B,C,N,Q,K,L,H,J)){var U=B-D[0],Z=C-D[1],k=K-D[0],b=L-D[1],nn=1/S(on((U*k+Z*b)/(F(U*U+Z*Z)*F(k*k+b*b)))/2),en=F(D[0]*D[0]+D[1]*D[1]);p=_(w,(u-en)/(nn-1)),x=_(w,(s-en)/(nn+1))}else p=x=0}O>y?x>y?(e=M(N,Q,B,C,s,x,t),r=M(K,L,H,J,s,x,t),a.moveTo(e.cx+e.x01,e.cy+e.y01),x<w?a.arc(e.cx,e.cy,x,o(e.y01,e.x01),o(r.y01,r.x01),!t):(a.arc(e.cx,e.cy,x,o(e.y01,e.x01),o(e.y11,e.x11),!t),a.arc(0,0,s,o(e.cy+e.y11,e.cx+e.x11),o(r.cy+r.y11,r.cx+r.x11),!t),a.arc(r.cx,r.cy,x,o(r.y11,r.x11),o(r.y01,r.x01),!t))):(a.moveTo(B,C),a.arc(0,0,s,m,g,!t)):a.moveTo(B,C),!(u>y)||!(P>y)?a.lineTo(H,J):p>y?(e=M(H,J,K,L,u,-p,t),r=M(B,C,N,Q,u,-p,t),a.lineTo(e.cx+e.x01,e.cy+e.y01),p<w?a.arc(e.cx,e.cy,p,o(e.y01,e.x01),o(r.y01,r.x01),!t):(a.arc(e.cx,e.cy,p,o(e.y01,e.x01),o(e.y11,e.x11),!t),a.arc(0,0,u,o(e.cy+e.y11,e.cx+e.x11),o(r.cy+r.y11,r.cx+r.x11),t),a.arc(r.cx,r.cy,p,o(r.y11,r.x11),o(r.y01,r.x01),!t))):a.arc(0,0,u,T,A,t)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,d=(+v.apply(this,arguments)+ +R.apply(this,arguments))/2-rn/2;return[z(d)*n,S(d)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:X(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:X(+n),i):h},i.cornerRadius=function(n){return arguments.length?(E=typeof n=="function"?n:X(+n),i):E},i.padRadius=function(n){return arguments.length?(q=n==null?null:typeof n=="function"?n:X(+n),i):q},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:X(+n),i):v},i.endAngle=function(n){return arguments.length?(R=typeof n=="function"?n:X(+n),i):R},i.padAngle=function(n){return arguments.length?(Y=typeof n=="function"?n:X(+n),i):Y},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{hn as d};
