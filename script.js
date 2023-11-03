import { data } from "./data.js";

$(document).ready(function() {

    data.forEach((element) => {
        var img = $('<img>').attr('src', element.image);
        var individual = $('<div>').addClass('individual');
        var divider = $('<div>').addClass('portfolio-divider');
        var desc = $('<div>').addClass('descriptions');
        var titles = $('<div>').addClass('titles');
        var h1 = $('<h1>').text(element.title);
        var h2 = $('<h2>').text(element.tech);
        var p = $('<p>').text(element.description);
        var buttons = $('<div>').addClass('buttons');
        var a1 = $('<a>').attr('href', element.link).text('Live App');
        var a2 = $('<a>').attr('href', element.github).text('Github');

        individual.append(img)
        individual.append(desc)

        desc.append(titles)
        desc.append(p)
        desc.append(buttons)

        titles.append(h1)
        titles.append(h2)

        buttons.append(a1)
        buttons.append(a2)

        $(".portfolio-display").append(individual);
        $(".portfolio-display").append(divider)
        
    });

  });