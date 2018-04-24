$(function () {
    jQuery("#slider-3 .slider").slide({
        mainCell: ".bd ul",
        titCell: ".hd li",
        trigger: "click",
        effect: "leftLoop",
        autoPlay: true,
        delayTime: 700,
        interTime: 7000,
        pnLoop: false,
        titOnClassName: "active"
    })
});
