# Implement a class to hold room information. This should have name and
# description attributes.


class Room:
    def __init__(self, room_name, room_description, n_to=None, e_to=None, s_to=None, w_to=None):
        self.room_name = room_name
        self.room_description = room_description
        self.n_to = n_to
        self.e_to = e_to
        self.s_to = s_to
        self.w_to = w_to


