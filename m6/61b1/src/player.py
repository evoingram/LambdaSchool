# Write a class to hold player information, e.g. what room they are in
# currently.
class Player:
    def __init__(self, player_name, current_room, items={}):
        self.player_name = player_name
        self.current_room = current_room
        self.items = items

    def Name(self):
        return self.player_name

    def CurrentRoomName(self):
        return self.current_room.room_name
    
    def CurrentRoomDescription(self):
        return self.current_room.room_description
    
    def MoveToRoom(self, room):
        self.current_room = room
