from pprint import pformat
from flask import jsonify
from methods.artist_methods import SPOTIFY_CLIENT

def search_tracks(query:str, type='track', num_artist = 10):
    spotify = SPOTIFY_CLIENT.get_client()
    results = spotify.search(query,limit=num_artist,offset=0,type= "track")
    tracks = []
    for track in results['tracks']['items']:
        track_info = {
            'track': track['name'],
            'image': track['album']['images'][0]['url'],
            'spotify_link': track['external_urls']['spotify']
        }
        tracks.append(track_info)
        pformat(print(track_info))
    json_tracks = jsonify(tracks)
    return json_tracks


def search_artists(query:str, type= 'artist', num_artist=10):
    spotify = SPOTIFY_CLIENT.get_client()
    results = spotify.search(query,offset=0,type= type, limit=num_artist)
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