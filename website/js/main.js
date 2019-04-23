var square = document.getElementById('logo')

TweenMax.to(square, 1, {rotation:"360", ease:Linear.easeNone, repeat:0});

function Tween(){
    var T = TweenLite.to(".box",0.5,{x:R(-10,10),y:R(-10,10),scale:R(1.1,0.9),rotation:R(-10,10),ease:Sine.easeInOut,onComplete:Tween})
    };
    
    Tween();
    
    function R(max,min){return Math.random()*(max-min)+min};