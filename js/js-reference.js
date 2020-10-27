var message = document.getElementById('message');

function changeContent() {
    message.textContent = 'Qué escroleada!';
}

function convertPretty() {
    message.className = 'pretty';
}

window.addEventListener('scroll', changeContent);
window.addEventListener('resize', convertPretty);
message.addEventListener('click', convertPretty);

$('body').css('background-color', 'red');
$('.message').hide(1000).fadeIn(3000);
$('.animLetter').animate({
    fontSize: '8em',
    padding: 100
}, 3000);

var tokenPos = 0;
var tokenCheck = 0;
// $('.token').on('click', function(index){
//     tokenCheck++;

//     if(tokenPos === 0)
//     {   
//         $(this).each(function(index){
//             $(this).animate({
//                 top: 100,
//                 left: 500
//             }, 100);
//         });
//         tokenPos = 1;
//         // $(this).animate({
//         //     top: 100,
//         //     left: 500
//         // }, 100);
//         // tokenPos = 1;
//     }
//     else{
//         if(tokenCheck > 3)
//         {
//             $(this).animate({
//                 top: 0,
//                 left: 0,
//                 width: +100,
//                 height: +100,
//                 backgroundColor: '#000'
//             }, 1000);
//             tokenPos = 0;
//         }else{
//             $(this).animate({
//                 top: 0,
//                 left: 0,
//             }, 1000);
//             tokenPos = 0;
//         }
//     }
// });

$('.token').on('click', function(){
    tokenCheck++;
    var tokens = $('.token');

    if(tokenPos === 0)
    {
        tokens.each(function(index){
            $(this).delay(0 + 150 * index);
            $(this).animate({
                top: 100,
                left: 500
            }, 150, 'linear');
        });
        tokenPos = 1;
    }
    else
    {
        tokens.each(function(index){
            $(this).delay(0 + 150 * index);
            $(this).animate({
                top: 0,
                left: 0
            }, 150, 'linear');
        });
        tokenPos = 0;
    }
    
});

// AJAX-HTML

var xhrh = new XMLHttpRequest();

xhrh.onload = function()
{
    document.getElementById('content-html').innerHTML() = xhrh.responseText;
};

xhrh.open('GET', 'data/data.html', true);
xhrh.send(null);

// AJAX-XML

var xhrx = new XMLHttpRequest();

xhrx.onload = function()
{
    var response = xhrx.responseXML;
    var events = response.getElementsByTagName('event');

    for(var i=0; i<events.length; i++)
    {
        var container, image, location, city, newline;
        container = document.createElement('div');
        container.className = 'event';

        image = document.createElement('img');
        image.setAttribute('src', getNodeValue(events[i], 'map'));
        image.appendChild(document.createTextNode(getNodeValue(events[i], 'map')));
        container.appendChild(image);

        location = document.createElement('p');
        city = document.createElement('b');
        newline = document.createElement('br');
        city.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));
        location.appendChild(newline);
        location.insertBefore(city, newline);
        location.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));
        container.appendChild(location);

        document.getElementById('content-xml').appendChild(container);
    }

    function getNodeValue(obj, tag)
    {
        return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
    }
};

xhrx.open('GET', 'data/data.xml', true);
xhrx.send(null);

// AJAX-JSON

var xhr = new XMLHttpRequest();

xhr.onload = function()
{
    responseObject = JSON.parse(xhr.responseText);

    var newContent = '';
    for(var i=0; i < responseObject.events.length; i++)
    {
        newContent += '<div class="event">';
        newContent += '<img src="' + responseObject.events[i].map + '" ';
        newContent += 'alt="' + responseObject.events[i].location + '" />';
        newContent += '<p><b>' + responseObject.events[i].location + '</b><br />';
        newContent += responseObject.events[i].date + '</p>';
        newContent += '</div>';
    }

    document.getElementById('content-json').innerHTML = newContent;
};

xhr.open('GET', 'data/data.json', true);
xhr.send(null);