from methods.login import SpotifyClient
from flask import jsonify
import time
SPOTIFY_CLIENT = SpotifyClient()

import time

def ms_to_mmss(ms):
    seconds = ms / 1000
    formatted_time = time.strftime('%M:%S', time.gmtime(seconds))
    return formatted_time



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
