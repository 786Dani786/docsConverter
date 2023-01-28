function makesvg(percentage, inner_text=""){

    var abs_percentage = Math.abs(percentage).toString();
    var percentage_str = percentage.toString();
    var classNamees = ""

    if(percentage < 0){
        classNamees = "danger-stroke circle-chart__circle--negative";
    } else if(percentage > 0 && percentage <= 30){
        classNamees = "warning-stroke";
    } else{
        classNamees = "success-stroke";
    }

    var svg = '<svg className="circle-chart" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">'
        + '<circle className="circle-chart__background" cx="16.9" cy="16.9" r="15.9" />'
        + '<circle className="circle-chart__circle '+classNamees+'"'
        + 'stroke-dasharray="'+ abs_percentage+',100"    cx="16.9" cy="16.9" r="15.9" />'
        + '<g className="circle-chart__info">'
        + '   <text className="circle-chart__percent" x="17.9" y="15.5">'+percentage_str+'%</text>';

    if(inner_text){
        svg += '<text className="circle-chart__subline" x="16.91549431" y="22">'+inner_text+'</text>'
    }

    svg += ' </g></svg>';

    return svg
}

(function( $ ) {

    $.fn.circlechart = function() {
        this.each(function() {
            var percentage = $(this).data("percentage");
            var inner_text = $(this).text();
            $(this).html(makesvg(percentage, inner_text));
        });
        return this;
    };

}( jQuery ));