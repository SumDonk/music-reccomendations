from pprint import pformat
from flask import jsonify
from methods.artist_methods import SPOTIFY_CLIENT




def search_artists(query:str, type:str):
    spotify = SPOTIFY_CLIENT.get_client()
    results = spotify.search(query,offset=0,type= type, limit=50)
    pformat(print(results))
    artists = []
    for artist in results['artists']['items']:
        try:
            artist_info = {
                'artist': artist['name'],
                'genres': artist['genres'],
                'artist_img': artist['images'][0]['url'],
                'spotify_link': artist['external_urls']['spotify']
            }
            artists.append(artist_info)
            json_artists = jsonify(artists)
        except:
            print("Something went wrong, but we move")
        finally: continue
 
        
    return json_artists