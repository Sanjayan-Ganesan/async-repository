var container = document.getElementById("slideshow");


var movie_container = document.getElementById("movies");
var arr_img = [
    {img_url:`https://wallpapercave.com/wp/wp9068276.jpg`},
    {img_url:`https://wallpapercave.com/wp/wp1946040.jpg`},
    {img_url:`https://m.media-amazon.com/images/M/MV5BZmMwMmUzYmMtMTEwZC00MTEwLWI1ZmQtZjJmMWZkOTM3NjFjXkEyXkFqcGdeQXVyNTA2MzMwMjA@._V1_.jpg`},
    {img_url:`https://hdfreewallpaper.net/wp-content/uploads/2015/08/tamil-movie-new-free-hd-wallpapers.jpg`},
    {img_url:`https://celestleletsart.files.wordpress.com/2019/10/lucifer22.jpeg`},
];



var arr_movie = [
    {img:`https://rnbkk.files.wordpress.com/2020/01/sergio_poster-1920px-1.jpg`,
    name:`Sergio`,
    date:`2020`,
    rating:6.2,
},
{img:`https://m.media-amazon.com/images/M/MV5BNGFlOTVkMmMtOWE1OC00Y2Q1LThmNTctM2IxMWVkY2EyYjBlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg`,
name:`Chehre`,
date:`2021`,
rating:6.8,
},
{img:`https://www.scrolldroll.com/wp-content/uploads/2020/01/Interstellar-2014-Must-Watch-Hollywood-Movies.jpg`,
name:`Interstellar`,
date:`2014`,
rating:8.4,
},
{img:`https://c4.wallpaperflare.com/wallpaper/852/644/1008/alien-movie-poster-sigourney-weaver-movie-poster-wallpaper-preview.jpg`,
name:`Alien`,
date:`2018`,
rating:6.3,
},
{img:`https://i.pinimg.com/originals/8f/25/db/8f25db5d5f9a6d6fd3cdc7b993e8cb06.jpg`,
name:`Darbar`,
date:`2019`,
rating:6.0,
},
{img:`https://thenewsbay.com/wp-content/uploads/2021/01/Master-1.jpg`,
name:`Master`,
date:`2020`,
rating:7.0,
},
{img:`https://www.teahub.io/photos/full/302-3029795_city-lights-movie-poster-city-lights-hindi-movie.jpg`,
name:`City Lights`,
date:`2014`,
rating:8.1,
},
{img:`https://alchetron.com/cdn/Happy-New-Year-2014-film-images-0b3c7edc-e984-43ab-8ca3-1c652020610.jpg`,
name:`Happy New Year`,
date:`2014`,
rating:6.3,
},
{img:`https://webneel.com/daily/sites/default/files/images/daily/04-2020/12-india-movie-poster-design-tanhaji.jpg`,
name:`Tanhaji`,
date:`2020`,
rating:6.8,
},
]




var rating_container = document.getElementById(`sort-buttons`);
function store_movie(){


    var movie_data = JSON.parse(localStorage.getItem (`movies`)) || [];
    //console.log(`data`,movie_data);

    if(movie_data == null){
        movie_data = [];
    }


  localStorage.setItem(`movies`,JSON.stringify(arr_movie));
  display_data(arr_movie);
    

}

store_movie()
display_data(arr_movie);

function display_data(arr_movie){

  
    arr_movie.map(function(elem){


        var movie_div = document.createElement(`div`);
        movie_div.style.border = `1 px solid:white`


        var movie_image = document.createElement(`img`);


        movie_image.src = elem.img;

        movie_image.style.width = `325px`;
        movie_image.style.height = `270px`;
        movie_image.style.border = `1px solid white`;


        var movie_title = document.createElement(`h3`);
        movie_title.innerHTML = `Name:${elem.name}`;
        movie_title.style.color = `white`;


        var date_of_release = document.createElement(`p`);
        date_of_release.innerHTML = `release_date: ${elem.date}`;
        date_of_release.style.color = `white`;


        var rate = document.createElement(`p`);
        rate.innerHTML =  ` Imdb-Rating : ${elem.rating}`;
        rate.style.color = `white`;


        movie_div.append(movie_image,movie_title,date_of_release,rate);
        movie_container.append(movie_div);

    })
}




function store(){
    

var images = JSON.parse(localStorage.getItem(`images_data`))|| [];
//console.log(`images`,images);


if(images == null){
    images = [];
}


localStorage.setItem(`images_data`,JSON.stringify(arr_img));
  
   
    
}

store();



function start(){
    var arr_of_images = JSON.parse(localStorage.getItem(`images_data`));

var main_div = document.createElement("div");
    var images_datum = document.getElementById("slide");
    images_datum.style.width = `1000px`;
    images_datum.style.height = `500px`;
    images_datum.style.marginTop=`-2%`;
    images_datum.style.border = `1px solid white`

    var i = 0;
let x = setInterval(function(){

    if(i === arr_of_images.length){
        i = 0;
    }
    images_datum.src = arr_of_images[i].img_url;

    i = i + 1;


    main_div.append(images_datum);
    container.append(main_div);

},3000);
    


}
start()




function pricesort(){

    document.getElementById("movies").innerHTML = null;
    var selected = document.getElementById("sort").value;
    console.log(selected);



    if(selected == "Rating High to Low"){
        arr_movie.sort(function(a,b){
            return b.rating - a.rating;
        });
         
    }else if(selected = "Rating Low to High"){
        arr_movie.sort(function(a,b){
            return a.rating - b.rating;
        });
        
    }
    
    console.log(arr_movie);
    display_data(arr_movie); 

}
//pricesort();


    

