import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import os
from dotenv import load_dotenv
from datetime import datetime, timedelta

class SpotifyClient:
    def __init__(self):
        self.spotify = None
        self.token_expiration = datetime.now()
    
    def get_client(self): # checks if token already exists/ is expired. 
        if self.spotify is None or datetime.now() > self.token_expiration:
            load_dotenv()
            SPOTIFY_ID = os.getenv('SPOTIFY_CLIENT_ID')
            SPOTIFY_SECRET = os.getenv('SPOTIFY_CLIENT_SECRET')
            client_credentials_manager = SpotifyClientCredentials(client_id=SPOTIFY_ID, client_secret=SPOTIFY_SECRET)
            self.spotify = spotipy.Spotify(client_credentials_manager=client_credentials_manager)
            self.token_expiration = datetime.now() + timedelta(hours=1)
        return self.spotify
        
