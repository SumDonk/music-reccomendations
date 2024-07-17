from pprint import pformat
from methods.login import SpotifyClient
from flask import jsonify
import time
SPOTIFY_CLIENT = SpotifyClient()

import time

def ms_to_mmss(ms):
    seconds = ms / 1000
    formatted_time = time.strftime('%M:%S', time.gmtime(seconds))
    return formatted_time

# can even get more advanced with #target/min/max_<attribute> probably not happening though
def get_recommended_tracks(seed_tracks: list, seed_artists: list = None, seed_genres: list = None, limit = 10) -> jsonify:
    spotify = SPOTIFY_CLIENT.get_client()
    results = spotify.recommendations(seed_tracks=seed_tracks, seed_artists=seed_artists, seed_genres=seed_genres, limit=limit)
    recs = []
    for track in results['tracks']:
        track_info = {
            'track': track['name'],
            'album': track['album']['name'],
            'audio': track['preview_url'],
            'cover_art': track['album']['images'][1]['url'],
            'artist': track['album']['artists'][0]['name'],
        }
        recs.append(track_info)
    return jsonify(recs)

def get_audio_info(uri):
    spotify = SPOTIFY_CLIENT.get_client()
    results = spotify.audio_features(uri) 
    audio_info = []
    for info in results:
        track_info = {
            'Danceability': info['danceability'],
            'Duration': ms_to_mmss(info['duration_ms']),
            'Energy': info['energy'],
            'Acousticness':info["acousticness"],
            'Instrumentalness':info["instrumentalness"],
            'Key':info["key"],
            'Liveness':info["liveness"],
            'Loudness':info["loudness"],
            'Speechiness':info["speechiness"],
            'Tempo':info['tempo'],
            'URI':info["uri"] ,
            'Valence':info["valence"]
        }
        audio_info.append(track_info)
    json_info = jsonify(audio_info)
    return json_info

def get_tracks_from_album(album_id):
    spotify = SPOTIFY_CLIENT.get_client()
    results = spotify.album_tracks(album_id)
    print(results)
    return NotImplementedError


