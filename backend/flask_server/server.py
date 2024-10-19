from flask import Flask, jsonify, request, redirect, session
from flask_cors import CORS
import spotipy
import os
from dotenv import load_dotenv
from spotipy.oauth2 import SpotifyOAuth
from methods.artist_methods import *
from methods.track_methods import *
from search import *
from methods.login_oauth import SpotifyClient_Oauth
import urllib.parse



app = Flask(__name__)
CORS(app)


load_dotenv()
SPOTIFY_ID = os.getenv('SPOTIFY_CLIENT_ID')
SPOTIFY_SECRET = os.getenv('SPOTIFY_CLIENT_SECRET')
FLASK_KEY = os.getenv('FLASK_SECRET_KEY')
app.secret_key = FLASK_KEY  

@app.route('/testing')
def testing():
    return jsonify()

@app.route('/login')
def index():
    user_auth = SpotifyOAuth(client_id=SPOTIFY_ID,
                            client_secret=SPOTIFY_SECRET,
                            redirect_uri='http://localhost:8080/callback',
                            scope='user-library-read')
    auth_url = user_auth.get_authorize_url()
    return redirect(auth_url)

@app.route('/callback')
def callback():
    user_auth = SpotifyOAuth(client_id=SPOTIFY_ID,
                            client_secret=SPOTIFY_SECRET,
                            redirect_uri='http://localhost:8080/callback',
                            scope='user-library-read')
    code = request.args.get('code')
    token_info = user_auth.get_access_token(code)
    session['access_token'] = token_info['access_token']
    return redirect('/loggedin')

@app.route('/loggedin')
def loggedin():
    spotify = spotipy.Spotify(auth=session.get('access_token'))
    results = spotify.current_user_saved_tracks()
    return jsonify(results)

@app.route('/')
def landing():
    return jsonify({
        'message': "erm i believe you meant to test something else"
    })

@app.route("/artists/")
def artist():
    artist = get_related_artists("https://open.spotify.com/artist/760kxYHN5QTrD1DehiimjB?si=ZyaF_19dQxK8-HN3jrX3uA",1)
    return (artist)

@app.route("/artists/<artist>/toptracks")
def artist_top_tracks(artist):
    tracks = top_tracks_for_artist("https://open.spotify.com/artist/760kxYHN5QTrD1DehiimjB?si=ZyaF_19dQxK8-HN3jrX3uA",10)
    return tracks

@app.route("/search/artist/<query>")
def artists(query):
    artists = search_artists(query=query)
    return artists

@app.route("/search/track/<query>")
def tracks(query):
    tracks = search_tracks(query=query)
    return tracks
    


@app.route("/tracks/")
def track_info():
    audio_info = get_audio_info("https://open.spotify.com/track/7JMYfRIXzRl6PRC3YMLXf1?si=36ec2f8e612944d0")
    return audio_info


@app.route("/tracks/<track>/audio_info/")
def audio_info(track):
    audio_info = get_audio_info(track)
    return audio_info

@app.route("/tracks/recommendations")
def recommendations():
    spotify = spotipy.Spotify(auth=session.get('access_token'))
    results = spotify.current_user_saved_tracks(limit=5)
    final = get_saved_tracks(results)
    seed_tracks = []
    seed_artists = []
    for track in final:
        seed_tracks.append(track['uri'])
        seed_artists.append(track['artist_id'])
    print(seed_tracks, seed_artists)
    
    try:
        recommendations = get_recommended_tracks(seed_tracks = (seed_tracks), seed_artists= [],seed_genres=[], limit=5)
    except Exception as e:
        print(e)
        return "Something went wrong, but we move"
    return recommendations

@app.route("/currentuser")
def current_user():
    spotify = spotipy.Spotify(auth=session.get('access_token'))
    results = spotify.current_user()
    return jsonify(results)

@app.route("/currentuser/savedtracks")
def current_user_saved_tracks():
    spotify = spotipy.Spotify(auth=session.get('access_token'))
    results = spotify.current_user_saved_tracks(limit=10)
    final = get_saved_tracks(results)
    return jsonify(results)