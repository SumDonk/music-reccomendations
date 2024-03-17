from flask import jsonify
from methods.artist_methods import SPOTIFY_CLIENT




def search_artists(query:str, type:str, num_artist = 10):
    spotify = SPOTIFY_CLIENT.get_client()
    results = spotify.search(query,limit=num_artist,offset=0,type= type)
    artists = []
    for artist in results['artists']['items']:
        artist_info = {
            'artist': artist['name'],
            'genres': artist['genres'],
            'artist_img': artist['images'][0]['url'],
            'spotify_link': artist['external_urls']['spotify']
        }
        artists.append(artist_info)
        print(artist_info)
        json_artists = jsonify(artists)
    return json_artists