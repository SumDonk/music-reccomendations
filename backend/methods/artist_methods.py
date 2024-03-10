from methods.login import SpotifyClient
from flask import jsonify
SPOTIFY_CLIENT = SpotifyClient()

#artist
#   popularity

def top_tracks_for_artist(uri, num_tracks=10):
    spotify = SPOTIFY_CLIENT.get_client()
    results = spotify.artist_top_tracks(uri) 
    tracks = []
    for track in results['tracks'][:num_tracks]:
        track_info = {
            'track': track['name'],
            'audio': track['preview_url'],
            'cover_art': track['album']['images'][0]['url']
        }
        tracks.append(track_info)
    json_tracks = jsonify(tracks)
    return json_tracks


def get_related_artists(uri,num_artists):
    spotify = SPOTIFY_CLIENT.get_client()
    results = spotify.artist_related_artists(uri)
    related_artists = []
    for artist in results['artists'][:num_artists]:
        artist_info = {
            'artist': artist['name'],
            'genres': artist['genres'],
            'artist_img': artist['images'][0]['url'],
            'spotify_link': artist['external_urls']['spotify']
        }
        related_artists.append(artist_info)
        json_artists = jsonify(related_artists)
    return json_artists

def get_artist_albums(uri,num_albums):
    
    return None