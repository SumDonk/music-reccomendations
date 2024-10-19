import spotipy
from spotipy.oauth2 import SpotifyOAuth
import os
from dotenv import load_dotenv
from datetime import datetime, timedelta

class SpotifyClient_Oauth:
    def __init__(self):
        self.spotify = None
        self.token_expiration = datetime.now()
    
    def get_client(self): # checks if token already exists/ is expired. 
        if self.spotify is None or datetime.now() > self.token_expiration:
            load_dotenv()
            SPOTIFY_ID = os.getenv('SPOTIFY_CLIENT_ID')
            SPOTIFY_SECRET = os.getenv('SPOTIFY_CLIENT_SECRET')
            client_credentials_manager = SpotifyOAuth(client_id=SPOTIFY_ID,
                                                       client_secret=SPOTIFY_SECRET,
                                                       redirect_uri='http://localhost:8080/callback',
                                                       scope='user-library-read',
                                                       show_dialog=True,
                                                       open_browser=True
                                                       )
            self.spotify = spotipy.Spotify(client_credentials_manager=client_credentials_manager)
            self.token_expiration = datetime.now() + timedelta(hours=1)
        return self.spotify
        
