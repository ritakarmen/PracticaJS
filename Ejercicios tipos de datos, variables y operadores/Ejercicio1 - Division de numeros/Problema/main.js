// Escribe aquí tu codigo Javascript
function valor(){
 a=document.form1.textnum1.value;
 b=document.form1.textnum2.value;
 c=parseInt(a)+parseInt(b)
 opera=document.form1.opera.value=c;
document.form1.resultado.value=opera
}
function divide(){
 a=document.form1.textnum1.value;
 b=document.form1.textnum2.value;
 c=parseInt(a)/parseInt(b)
 divide=document.form1.opera.value=c;
document.form1.resultado.value=divide
}
function multiplica(){
 a=document.form1.textnum1.value;
 b=document.form1.textnum2.value;
 c=parseInt(a)*parseInt(b)
 multiplica=document.form1.opera.value=c;
document.form1.resultado.value=multiplica
}
function resta(){
 a=document.form1.textnum1.value;
 b=document.form1.textnum2.value;
 c=parseInt(a)-parseInt(b)
 resta=document.form1.opera.value=c;
document.form1.resultado.value=resta
}