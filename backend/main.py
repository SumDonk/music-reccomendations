from flask_server.server import app, jsonify
from methods.artist_methods import *
from methods.track_methods import *
from pprint import pprint, pformat

uri = "spotify:artist:760kxYHN5QTrD1DehiimjB"
track_uri = "spotify:track:7JMYfRIXzRl6PRC3YMLXf1"
    
def track_link_to_uri(url):
    spotify = SPOTIFY_CLIENT.get_client()
    uri = spotify._get_uri(type="track",id=url)
    return uri

def artist_link_to_uri(url):
    spotify = SPOTIFY_CLIENT.get_client()
    uri = spotify._get_uri(type="artist",id=url)
    return uri

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
        pformat(print(artist_info))
        json_artists = jsonify(artists)
    return json_artists

def search_tracks(query:str, type:str, num_artist = 10):
    spotify = SPOTIFY_CLIENT.get_client()
    results = spotify.search(query,limit=num_artist,offset=0,type= "tracks")
    artists = []
    for artist in results['artists']['items']:
        artist_info = {
            'artist': artist['name'],
            'genres': artist['genres'],
            'artist_img': artist['images'][0]['url'],
            'spotify_link': artist['external_urls']['spotify']
        }
        artists.append(artist_info)
        pformat(print(artist_info))
        # json_artists = jsonify(artists)
    return artist_info

    

if __name__ == "__main__":
    spotify = SPOTIFY_CLIENT.get_client()
    #print(search_artists("Nothing more", "artist", 10))
    #print(spotify.search('Nothing More',5))
    #print(pformat(spotify.search('Nothing More',5)))
    #hello = pformat(spotify.search('Nothing More',5,0,'track'))
    #hello = pformat(spotify.search('Nothing More',5,0,"track"))
    #hello2 = pformat(spotify.search('Nothing More',5,0,"artist"))
    hello3 =  get_related_artists(uri,10)
    hello4 = pformat(spotify.artist_related_artists(uri))

    

    #with open("Output.txt", "w", encoding="utf-8") as text_file:
        #text_file.write(str(hello))

    #with open("Output2.txt", "w", encoding="utf-8") as text_file:
        #text_file.write(str(hello2))
    
    # with open("Output4.txt", "w", encoding="utf-8") as text_file:
        # text_file.write(str(hello4))


    
    app.run(debug=True, port=8080)
