from flask import Flask, jsonify, request, redirect, session
from flask_cors import CORS
import spotipy
import os
from dotenv import load_dotenv
from spotipy.oauth2 import SpotifyOAuth
from methods.artist_methods import *
from methods.track_methods import *
from search import search_artists



app = Flask(__name__)
CORS(app)


load_dotenv()
SPOTIFY_ID = os.getenv('SPOTIFY_CLIENT_ID')
SPOTIFY_SECRET = os.getenv('SPOTIFY_CLIENT_SECRET')
FLASK_KEY = os.getenv('FLASK_SECRET_KEY')
app.secret_key = FLASK_KEY  


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
        'message': "Hello world!"
    })

@app.route("/artists/")
def artist():
    artist = get_related_artists("https://open.spotify.com/artist/760kxYHN5QTrD1DehiimjB?si=ZyaF_19dQxK8-HN3jrX3uA",1)
    return (artist)

@app.route("/artists/<artist>/toptracks")
def artist_top_tracks(artist):
    tracks = top_tracks_for_artist("https://open.spotify.com/artist/760kxYHN5QTrD1DehiimjB?si=ZyaF_19dQxK8-HN3jrX3uA",10)
    return tracks

@app.route("/search/<query>")
def artists(query):
    artists = search_artists(query, "artist", 5)
    return artists


@app.route("/tracks/")
def track_info():
    audio_info = get_audio_info("https://open.spotify.com/track/7JMYfRIXzRl6PRC3YMLXf1?si=36ec2f8e612944d0")
    return audio_info


@app.route("/tracks/<track>/audio_info/")
def audio_info(track):
    audio_info = get_audio_info(track)
    return audio_info
