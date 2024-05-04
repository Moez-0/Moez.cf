var token = "";
var client_id = "c1438bf8711a4e3ba322a76f6d0c6893";
var client_secret = "701a935cc8aa47e69c8096fc2b80dd4e";


fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',

    },
    body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret
}).then(function(response) {
    return response.json();
}
).then(function(data) {

    token = data.access_token;
    
var url = "https://api.spotify.com/v1/playlists/6Hp2JtGvHXVzL29VC2dMkq";
var playlist = document.querySelector('.playlist');
var playlist_img = document.querySelector('.playlist_img');
var playlist_name = document.querySelector('.playlist_name');
var playlist_description = document.querySelector('.playlist_description');

fetch(url, {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer ' + token
    }
}).then(function(response) {
    console.log("token"+token);
    return response.json();
}
).then(function(data) {

    console.log(data);
    // playlist_img.src = data.images[0].url;
    // playlist_name.innerHTML = data.name;
    // playlist_description.innerHTML = data.description;
    var tracks = data.tracks.items;
    tracks.forEach(function(item) {
        var track = document.createElement('div');
        track.className = 'track';
        var track_img = document.createElement('img');
        track_img.src = item.track.album.images[0].url;
        track.appendChild(track_img);
        var track_name = document.createElement('p');
        // // track_name.innerHTML = item.track.name;
        // // track.appendChild(track_name);
        // var track_artist = document.createElement('p');
        // track_artist.innerHTML = item.track.artists[0].name;
        // track.appendChild(track_artist);
        playlist.appendChild(track);
    });
}
).catch(function(error) {
    console.log(error);
}
);


}
).catch(function(error) {
    console.log(error);
}
);





// get playlist info from spotify
