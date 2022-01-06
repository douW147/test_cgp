async function getResponse() {
    let queue = 0;

    let response = await fetch("./data.json");
    let content = await response.json();
    function setData (title, firstPercent, secondPercent, photo) {
        animateText(".status__info__project-name", title);
        animateText("#firstPercent", firstPercent);
        animateText("#secondPercent", secondPercent);
        $("#companyImage").animate({opacity: "0"}, 1000, function(){
            $("#companyImage").attr("src", photo).animate({opacity: "1"}, 1000)
        });
    } 
    function animateText(element, content) {
        $(element).animate({opacity: "0"}, 1000, function(){
            $(element).text(content).animate({opacity: "1"}, 1000)
        });
    }
    function setCarousel(queue) {
        $(".carousel-span").removeClass("active");
        switch (queue) {
            case 0:
                $("#carousel-span-1").addClass("active")
                break;
            case 1:
                $("#carousel-span-2").addClass("active")
                break;
            case 2:
                $("#carousel-span-3").addClass("active")
                break;
            case 3:
                $("#carousel-span-4").addClass("active")
                break;
        
            default:
                break;
        }
    }

    $(".prev-button").click(function() { 
        queue === 0 ? queue = 3 : queue -= 1;
        const { companyName, firstPercent, secondPercent, companyPhoto } = content[queue];
        setData(companyName, firstPercent, secondPercent, companyPhoto);
        setCarousel(queue);
    });
    $(".next-button").click(function() { 
        queue === 3 ? queue = 0 : queue += 1;
        const { companyName, firstPercent, secondPercent, companyPhoto } = content[queue];
        setData(companyName, firstPercent, secondPercent, companyPhoto);
        setCarousel(queue);
    });
}

getResponse();

$(".navigation__button").click(function() {
    console.log("click"); 
    $(".navigation__list__container").toggleClass("navigation__list__container--active");
    $(".navigation__list").toggleClass("navigation__list--active");
    $(".navigation__list__item").toggleClass("navigation__list__item--active")

});