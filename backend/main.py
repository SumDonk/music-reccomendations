from flask_server.server import app, jsonify
from methods.artist_methods import SPOTIFY_CLIENT
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

    

if __name__ == "__main__":
    spotify = SPOTIFY_CLIENT.get_client()
    # print(pformat(spotify.categories()))
    # print(pformat(spotify.audio_features(track_uri)))

    # print(get_audio_info(track_uri))

    # hello = pformat(get_related_artists(uri, 2))
    # print(hello)
    

    # with open("Output.txt", "w", encoding="utf-8") as text_file:
       # text_file.write(hello)

    
    app.run(debug=True, port=8080)
