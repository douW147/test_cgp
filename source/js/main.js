

// const data = fetch("data.json")
//   .then((response) => response.json())
//   .then((response) => {
//     return response;
//   });

// // let result =[];
// console.log(await data);
// const returnResult = async () => {
//   result = await data;
//   console.log(result);
// };

// returnResult();


async function getResponse() {
    let queue = 0;

    let response = await fetch("data.json");
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
        var all = $(".carousel-span").map(item => {
            console.log(item);
        }).get();
    }

    $(".prev-button").click(function() { 
        queue === 0 ? queue = 3 : queue -= 1;
        const { companyName, firstPercent, secondPercent, companyPhoto } = content[queue];
        setData(companyName, firstPercent, secondPercent, companyPhoto);
    });
    $(".next-button").click(function() { 
        queue === 3 ? queue = 0 : queue += 1;
        const { companyName, firstPercent, secondPercent, companyPhoto } = content[queue];
        setData(companyName, firstPercent, secondPercent, companyPhoto);
    });
}

getResponse();
