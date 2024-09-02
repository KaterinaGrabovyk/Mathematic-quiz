var buttons=$(".buttons>button");
var exs=$(".excercises>div");


function plus(){
var one=Math.floor(Math.random()*100)+1;
var two=Math.floor(Math.random()*100)+1;
$(".plus .excample>p").text(one+" + "+two+" = ");
    var res=one+two;
    $(".plus input").click(function(){
        $(".plus input").removeClass("textColAfter");
    })
    $(".plus button").click(function(){
    var val=parseInt(document.getElementById("plus").value);
    var add=".plus ";
    var oper=" + ";
    CalcRes(val,add,oper,one,two,res,plus);})
}


function minus(){
    var one=Math.floor(Math.random()*100)+1;
    var two=Math.floor(Math.random()*100)+1;
    var res;
    $(".minus .excample>p").text(one+" - "+two+" = ");
    res=one-two;

     $(".minus input").click(function(){
        $(".minus input").removeClass("textColAfter");
    })
    $(".minus button").click(function(){
        var val=parseInt(document.getElementById("minus").value);
        var add=".minus ";
        var oper=" - ";
        CalcRes(val,add,oper,one,two,res,minus);
    })
}


function multiply(){
    var one=Math.floor(Math.random()*100)+1;
    var two=Math.floor(Math.random()*20)+1;
    $(".multiply .excample>p").text(one+" * "+two+" = ");
    var res=one*two;
    $(".multiply input").click(function(){
        $(".multiply input").removeClass("textColAfter");
    })
    $(".multiply button").click(function(){
        var val=parseInt(document.getElementById("mult").value);
        var add=".multiply ";
        var oper=" * ";
        CalcRes(val,add,oper,one,two,res,multiply);
    })
}


function divide(){
    var one=Math.floor(Math.random()*100)+1;
    var two=Math.floor(Math.random()*100)+1;
    var res;
    while(one%two>=1){
     one=Math.floor(Math.random()*100)+1;
     two=Math.floor(Math.random()*100)+1;
    }
    $(".divide input").click(function(){
        $(".divide input").removeClass("textColAfter");
    })

    $(".divide .excample>p").text(one+" / "+two+" = ");
    res=one/two;
    $(".divide button").click(function(){
        var val=parseInt(document.getElementById("divid").value);
        var add=".divide ";
        var oper=" / ";
        CalcRes(val,add,oper,one,two,res,divide);
    })
}

function CalcRes(e, pl,op,one,two,res,funk){
    var dones=$(pl+".done p");
    var a=one+op+two+" = "+res;
    if(e===res){
        console.log("right");
        $(pl+".excample>h3").text("Congratulation!");
        $(pl+".excample>p").text("");
        e=0;
        setTimeout(function(){
            $(pl+".done div").prepend('<p>'+a+'</p>');
            $(pl+".excample>h3").text("№"+(dones.length+2)+".");
            $(pl+"input").addClass("textColAfter");
            var hei = document.querySelector("div"+pl);
            var height = hei.offsetHeight;
            var newHeight = height + 100;
             hei.setAttribute("height",newHeight+"px");
             document.querySelector(".excercises").setAttribute("height",newHeight+"px");
            funk();
        },3000);
        
    }else{
        console.log("wrong");
        $(pl+".excample>p").hide();
        $(pl+".excample>h3").text("Wrong! Try again");
        setTimeout(function(){
            $(pl+".excample>p").show();
            $(pl+".excample>h3").text("№"+(dones.length+2)+".");
        },2000);
        
    }
}


function visibility(){
    buttons.click(function(){
        var clas=this.getAttribute("class");
        console.log(clas);
        for(var i=0;i<exs.length;i++){
            var Ex=exs[i].getAttribute("class");
            if(Ex===clas){
                $(".excercises>div").css("visibility","hidden");
                exs[i].setAttribute("style","visibility:visible");
                switch(clas){
                    case "plus": plus();break;
                    case "minus": minus();break;
                    case "multiply": multiply();break;
                    case "divide": divide();break;
                }
            }
        }
    })   
}
visibility();