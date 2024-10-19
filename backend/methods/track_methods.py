from pprint import pformat
from methods.login import SpotifyClient
from flask import jsonify
import time
SPOTIFY_CLIENT = SpotifyClient()

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
            'audio': track.get('preview_url', None),
            'cover_art': track['album']['images'][1]['url'],
            'artist': track['album']['artists'][0]['name'],
            'uri': track['uri'],
            'url': track['external_urls']['spotify']
        }
        recs.append(track_info)
    return jsonify(recs)

def get_audio_info(uri):
    spotify = SPOTIFY_CLIENT.get_client()
    results = spotify.audio_features(uri) 
    audio_info = []
    for info in results:
        track_info = {
            'Danceability': info.get('danceability', None),
            'Duration': ms_to_mmss(info.get('duration_ms', 0)),
            'Energy': info.get('energy', 0),
            'Acousticness':info.get("acousticness", 0),
            'Instrumentalness':info.get("instrumentalness", 0),
            'Key':info.get("key", 0),
            'Liveness':info.get("liveness", 0),
            'Loudness':info.get("loudness", 0),
            'Speechiness':info.get("speechiness", 0),
            'Tempo':info.get('tempo', 0),
            'URI':info.get("uri", None) ,
            'Valence':info.get("valence", 0)
        }
        audio_info.append(track_info)
    json_info = jsonify(audio_info)
    return json_info

def get_tracks_from_album(album_id):
    spotify = SPOTIFY_CLIENT.get_client()
    results = spotify.album_tracks(album_id)
    print(results)
    return NotImplementedError

# to use for the music recommendations
def get_saved_tracks(results):
    tracks = []
    for track in results['items']:
        track_info = {
            'track': track['track']['name'],
            'album': track['track']['album']['name'],
            # 'audio': track['track'].get('preview_url', None),
            # 'cover_art': track['track']['album']['images'][1]['url'],
            'artist': track['track']['artists'][0]['name'],
            'uri': track['track']['uri'],
            'url': track['track']['external_urls']['spotify'],
            'artist_id': track['track']['artists'][0]['uri'],

        }
        tracks.append(track_info)
    return tracks


