var token = "BQD85Wchcm1_h2vzo0Jm0DAVUCH-goPRWyM5PWKIdB8CRDEXPpacksTw-cs8h0NS53CJ_9YN3ky6O6A36UdrgaGixm_SdUWzqfEMWx9PpIpiZn5Qgyk";


// get playlist info from spotify

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
