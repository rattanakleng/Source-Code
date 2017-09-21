'use strict';
const doc = document;

$('#topNav').on('click',
    function (e) {

        e.stopPropagation();

        $(this).children('li').removeAttr('active');

        e.target.setAttribute('active', true);

        let ul =
            $('#subNav');

        let allContent =
            $('.content');



        if (e.target.innerText ===
            'Web Project') {

            ul.removeAttr('hidden');

            allContent

                .find(' > div')

                .attr('hidden', true);

        } else {

            allContent

                .find(' > div')

                .attr('hidden', true);

            allContent.find(' > div[id="' + e.target.textContent.toLowerCase()
                + '"]').removeAttr('hidden');
            ul.attr('hidden', true);
        }
    });

$('body').on('click',
    function (e) {

        let ul =
            $('#subNav');

        if (e.target !== ul) {

            ul.attr('hidden', true);

        }

    });



// TODO: remove this function when you have the link to pen in top navigation

$('#subNav').on('click',
    function (e) {

        confirm(`Be patient - cooming soon. But you clicked on:

${ e.target.innerText}`);

    });

 // placeholder to store Element 

let fragmentButton = doc.createDocumentFragment();

let fragmentLi = doc.createDocumentFragment();



// loop of 30 images here to follow 

// all images you have in image folder



for (let i =
    0; i <=
    28; i++) {

    //create button

    let button = doc.createElement('button');

    //set button attribute

    button.setAttribute('role',
        'tab');

    button.setAttribute('aria-selected',
        'false');

    button.setAttribute('aria-label', `View slide${i}`);

    button.setAttribute('aria-controls', `hero-slide-${i}`);

    button.setAttribute('title', `Slide ${i}`);

    // add button to placeholder

    fragmentButton.appendChild(button);



    //create li

    let li = doc.createElement('li');



    //create section

    let section = doc.createElement('section');



    //create picture

    let picture = doc.createElement('picture');



    //create image

    let img = doc.createElement('img');



    // set image attributes

    img.setAttribute('src', `image/page${i}.jpg`);

    img.setAttribute('alt',
        'Portfolip Page');



    // add image as a child of picture

    picture.appendChild(img);



    section.setAttribute('class',
        'm-hero-item f-x-left f-y-center context-game theme-dark');



    // add picture as a child of section

    section.appendChild(picture);



    // set attributes to li

    li.setAttribute('id', `hero-slide-${i}`)

    li.setAttribute('data-f-theme',
        'dark')

    li.setAttribute('role',
        'tabpanel')

    li.appendChild(section);



    // add li to placeholder

    fragmentLi.appendChild(li);

}



// in the end add all buttons into buottonContainer

doc.getElementById('buttonContainer').appendChild(fragmentButton);



// in the end add all li into slideContainer

doc.getElementById('slideContainer').appendChild(fragmentLi);
