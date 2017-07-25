// Use the list or object to render the items in the movie page
window.attorneyList = [{
    name: "Daniel Radcliffe",
    title: "Harry Potter - The boy who lived",
    profileImg: "./images/characters/harry-profile.png",
    image: "./images/characters/harry.png" 
},{
    name: "Rupert Grint",
    title: "Ron Weasley - Best Harry's friend",
    profileImg: "./images/characters/ron-profile.png",
    image: "./images/characters/ron.png" 
},{
    name: "Emma Watson",
    title: "Hermione Granger - Best Harry's friend",
    profileImg: "./images/characters/hermione-profile.png",
    image: "./images/characters/hermione.png" 
},{
    name: "Helena Bonham Carter",
    title: "Bellatrix Lestrange - Dark Lord's servant",
    profileImg: "./images/characters/bellatrix-profile.png",
    image: "./images/characters/bellatrix.png" 
},{
    name: "Robbie Coltrane",
    title: "Rubeus Hagrid - The key keeper",
    profileImg: "./images/characters/hagrid-profile.png",
    image: "./images/characters/hagrid.png" 
},{
    name: "Tom Felton",
    title: "Draco Malfoy - Young Death Eater",
    profileImg: "./images/characters/malfoy-profile.png",
    image: "./images/characters/malfoy.png" 
},{
    name: "Ralph Fiennes",
    title: "Lord Voldemort - The Dark Lord",
    profileImg: "./images/characters/lord-profile.png",
    image: "./images/characters/lord.png" 
},{
    name: "Julie Walters",
    title: "Molly Weasley - The Mother",
    profileImg: "./images/characters/molly-profile.png",
    image: "./images/characters/molly.png" 
},{
    name: "Bonnie Wright",
    title: "Ginny Weasley - Harry's girl friend",
    profileImg: "./images/characters/ginny-profile.png",
    image: "./images/characters/ginny.png" 
},{
    name: "Toby Jones",
    title: "Dobby the House Elf - A free Elf",
    profileImg: "./images/characters/dobby-profile.png",
    image: "./images/characters/dobby.png" 
}];


jQuery(document).ready(function($) {
    var list = window.attorneyList || [];
    var $nav = $(".atty-par-nav");
    var $panels = $(".atty-panels");

    /* RUN IT!! */
    initiate();

    /* Look over the list above and append the data into item */
    function render() {
        for (var i = 0; i < list.length; i++) {
            // First loop for the TITLE content at left
            var $navItem = $nav.find("ul").find(".sample").clone();
            $navItem.removeClass("sample hidden");
            $navItem.find(".name").html(list[i].name);
            $navItem.find(".title").html(list[i].title);
            $navItem.find(".profile-img").css("background-image", "url('" + list[i].profileImg + "')");
            $navItem.attr({
                "data-atty": i+1,
                "data-item": i+1,
                "data-key": i+1,
            });
            // Append <li> item
            $nav.find("ul").append($navItem);

            // Second loop for the images at right side
            var $panelItem = $panels.find(".panel.sample").clone();
            $panelItem.removeClass("sample hidden");
            $panelItem.find(".name").html(list[i].name);
            $panelItem.find(".title").html(list[i].title);
            $panelItem.find(".full-image").css("background-image", "url('" + list[i].image + "')");
            $panelItem.attr({
                "data-item": i+1,
                "data-key": i+1,
            });
            // Append <div> item
            $panels.append($panelItem);

            
        }
    }

    function initiate() {
        render();

        // Register event on elements
        $(document).on("mouseover", ".atty-par-nav li", function() {
            $(".atty-parent").addClass("active");
            var dataKey = $(this).attr("data-key");
            $panels.find("div.panel").removeClass("active");
            $panels.find("div.panel[data-key='" + dataKey + "']").addClass("active");
        });
        $(document).on("mouseout", ".atty-par-nav li", function() {
            $(".atty-parent").removeClass("active");
            $panels.find("div.panel").removeClass("active");
        });
    }
});


