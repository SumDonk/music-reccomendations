

def get_user_info() -> NotImplementedError:
    return NotImplementedError # look for current_user()

# Gets a list of the artists followed by the current authorized user
def get_users_followed_artists() -> NotImplementedError:
    return NotImplementedError

def is_user_following_artist(artist_id) -> NotImplementedError:
    return NotImplementedError

# maybe can use to not show tracks that the user has recently listened to
def get_recently_played_tracks() -> NotImplementedError:
    return NotImplementedError

def get_user_top_tracks() -> NotImplementedError:
    return NotImplementedError

