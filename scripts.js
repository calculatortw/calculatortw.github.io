function _ccl(){
    let x1=document.getElementById("ex1").value
    let x2=document.getElementById("ex2").value
    let x3=document.getElementById("ex3").value//-. -.-- .-.. 
    let xn=document.getElementById("ne").value
    let x11=parseFloat(x1)
    let x22=parseFloat(x2)
    let x33=parseFloat(x3)
    let xnn=parseFloat(xn)//將string value 轉換成int value
    let x=0.2*(x11+x22+x33)+0.4*xnn
    alert("你的期末總成績是"+":"+x)
    }