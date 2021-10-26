console.log('im linked');

// object array

let objectArray = [
    {
        id: 1,
        photo: 'the-conjuring.jpg',
        title: 'The Conjuring',
        director: 'James Wan',
        date: '2013',
        era: 'twentyone',
        info: 'The Perron family moves into a farmhouse where they experience paranormal phenomena. They consult demonologists, Ed and Lorraine Warren, to help them get rid of the evil entity haunting them.'
    },
    {
        id: 2,
        photo: 'it.jpg',
        title: 'IT',
        director: 'Andrés Muschietti',
        date: '2017',
        era: 'twentyone',
        info: 'Seven helpless and bullied children are forced to face their worst nightmares when Pennywise, a shape-shifting clown, reappears. The clown, an ancient evil torments children before feeding on them.'
    },
    {
        id: 3,
        photo: 'nightmare.jpg',
        title: 'A Nightmare on Elm Street',
        director: 'Wes Craven',
        date: '1984',
        era: 'nineteen',
        info: 'A young girl realises that she has to stay awake at any cost to avoid the clawed killer who is butchering her friends one by one in their dreams.'
    },
    {
        id: 4,
        photo: 'the-eye.jpg',
        title: 'The Eye',
        director: 'Oxide Pang Chun',
        date: '2002',
        era: 'twenty',
        info: 'After 18 years of blindness, 20-year-old violinist Wong regains her vision when she undergoes a corneal transplant. Shes overjoyed with the procedure, but her elation dissipates when she begins experiencing ghostly encounters. When she travels to her cornea donors hometown to investigate, her symptoms worsen.'
    },
    {
        id: 5,
        photo: 'friday.jpg',
        title: 'Friday the 13th',
        director: 'Sean Cunningham',
        date: '1980',
        era: 'nineteen',
        info: 'A group of counsellors are brutally killed one by one at a summer camp held at the Camp Crystal Lake, when the entrepreneur Steve Christie reopens the site, which was shut for years.'
    },
    {
        id: 6,
        photo: 'ju-on.jpg',
        title: 'Ju-On: The Grudge',
        director: 'Takashi Shimizu',
        date: '2002',
        era: 'twenty',
        info: 'A very evil curse and vengeful spirits seem to linger upon a house where the horrific murder of a woman and child took place and anyone who sets foot inside the house is marked for a terrifying haunting which will not rest. One by one, those who have been tainted by the house begin to die, and nowhere is safe.'
    },
    {
        id: 7,
        photo: 'hereditary.jpg',
        title: 'Hereditary',
        director: 'Ari Aster',
        date: '2018',
        era: 'twentyone',
        info: 'When the matriarch of the Graham family passes away, her daughter and grandchildren begin to unravel cryptic and increasingly terrifying secrets about their ancestry, trying to outrun the sinister fate they have inherited.'
    },
    {
        id: 8,
        photo: 'ringu.jpg',
        title: 'Ringu',
        director: 'Hideo Nakata',
        date: '1998',
        era: 'nineteen',
        info: 'A woman and her ex-husband investigate a series of teen deaths caused by a mysterious videotape. Their investigation takes an ugly turn when their own son becomes a victim.'
    }
];

//  end of object array
function modalFunction(){
    
    $('.btn-primary').click(function(){
        let i = 0;
        for(i = 0; i < objectArray.length; i++){
            if(parseInt(this.id) === objectArray[i].id){
                $('#exampleModalLongTitle').empty().append(
                    `
                    <h5>${objectArray[i].title}</h5>
                    `
                );
                $('#modalBody').empty().append(
                    `
                    <img class = "objectArrayModalImage" src="${objectArray[i].photo}" alt=""></img>
                    `
                )
            };
        };
    });

};


function objectArrayCards(){
    
    let i = 0;
    for(i = 0; i < objectArray.length; i++){
        $('#cardContent').append(
            `
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${objectArray[i].photo}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${objectArray[i].title}</h5>
                <p class="card-text">${objectArray[i].director}</p>
                <p class="card-text">${objectArray[i].date}</p>
                <button id="${objectArray[i].id}" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                    Rent Now
                </button>
            </div>
            </div>
            `
        );
    };

    modalFunction()
};

objectArrayCards();

// function modalFunction(){
    
//     $('.btn-primary').click(function(){
//         let i = 0;
//         for(i = 0; i < objectArray.length; i++){
//             if(parseInt(this.id) === objectArray[i].id){
//                 $('#exampleModalLongTitle').empty().append(
//                     `
//                     <h5>${objectArray[i].title}</h5>
//                     `
//                 );
//                 $('#modalBody').empty().append(
//                     `
//                     <img class = "objectArrayModalImage" src="${objectArray[i].photo}" alt=""></img>
//                     `
//                 )
//             };
//         };
//     });

// };

// modalFunction();








// start of filter function
function filterYear(event){
    event.preventDefault();
    $('#cardContent').empty();
    // console.log('clicked');

    let selectedYear = [];
    // console.log(selectedYear);
    $('input[name = "era"]:checked').each( function(){
        selectedYear.push(this.value);
    });
    console.log(selectedYear);
    // end of value check

    let i = 0;
    // start of selected year loop
    for(i = 0; i < selectedYear.length; i++){
        console.log(selectedYear[i])
        if(selectedYear[i] === 'nineteen'){
            console.log('is equal to nineteen');
            let i = 0;
            for(i = 0; i < objectArray.length; i++){
                if (objectArray[i].era==='nineteen'){
                    $('#cardContent').append(
                        `
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="${objectArray[i].photo}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${objectArray[i].title}</h5>
                            <p class="card-text">${objectArray[i].director}</p>
                            <p class="card-text">${objectArray[i].date}</p>
                            <button id="${objectArray[i].id}" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                                Rent Now
                            </button>
                        </div>
                        </div>
                        `
                    );
                }
            }
        }


        if(selectedYear[i] === 'twenty'){
            console.log('is equal to twenty');
            let i = 0;
            for(i = 0; i < objectArray.length; i++){
                if (objectArray[i].era==='twenty'){
                    $('#cardContent').append(
                        `
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="${objectArray[i].photo}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${objectArray[i].title}</h5>
                            <p class="card-text">${objectArray[i].director}</p>
                            <p class="card-text">${objectArray[i].date}</p>
                            <button id="${objectArray[i].id}" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                                Rent Now
                            </button>
                        </div>
                        </div>
                        `
                    );
                }
            }
        }


        if(selectedYear[i] === 'twentyone'){
            console.log('is equal to twenty one');
            let i = 0;
            for(i = 0; i < objectArray.length; i++){
                if (objectArray[i].era==='twentyone'){
                    $('#cardContent').append(
                        `
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="${objectArray[i].photo}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${objectArray[i].title}</h5>
                            <p class="card-text">${objectArray[i].director}</p>
                            <p class="card-text">${objectArray[i].date}</p>
                            <button id="${objectArray[i].id}" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                                Rent Now
                            </button>
                        </div>
                        </div>
                        `
                    );
                }
            }
        }



    };
    // end of selected year loop


};
// end of filter function

clickFilter.addEventListener('click', filterYear);