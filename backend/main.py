from flask_server.server import app, jsonify
from methods.artist_methods import *
from methods.track_methods import *
from pprint import pformat

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

if __name__ == "__main__":
    # spotify = SPOTIFY_CLIENT.get_client()
    #print(search_artists("Nothing more", "artist", 10))
    #print(spotify.search('Nothing More',5))
    #print(pformat(spotify.search('Nothing More',5)))
    # hello = pformat(spotify.album_tracks(album_id='0qy5d8KcdLS8Uv7001VP43'))
    

    # with open("Output.txt", "w", encoding="utf-8") as text_file:
        # text_file.write(str(hello))


    
    app.run(debug=True, port=8080)

    