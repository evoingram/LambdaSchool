from room import Room
from player import Player

# Declare all the rooms
room = {
    'outside':  Room("Outside Cave Entrance", "North of you, the cave mount beckons"),
    'foyer':    Room("Foyer", """Dim light filters in from the south. Dusty
passages run north and east."""),
    'overlook': Room("Grand Overlook", """A steep cliff appears before you, falling
into the darkness. Ahead to the north, a light flickers in
the distance, but there is no way across the chasm."""),
    'narrow':   Room("Narrow Passage", """The narrow passage bends here from west
to north. The smell of gold permeates the air."""),
    'treasure': Room("Treasure Chamber", """You've found the long-lost treasure
chamber! Sadly, it has already been completely emptied by
earlier adventurers. The only exit is to the south."""),
}


# Link rooms together
room['outside'].n_to = room['foyer']
room['foyer'].s_to = room['outside']
room['foyer'].n_to = room['overlook']
room['foyer'].e_to = room['narrow']
room['foyer'].w_to = room['narrow']
room['overlook'].s_to = room['foyer']
room['overlook'].n_to = room['narrow']
room['narrow'].w_to = room['foyer']
room['narrow'].n_to = room['treasure']
room['narrow'].s_to = room['overlook']
room['treasure'].s_to = room['narrow']

#
# Main
#

# Make a new player object that is currently in the 'outside' room.
player_name = input("What's your name, explorer?")
player = Player(player_name, room['outside'])
current_room_name = player.CurrentRoomName()
current_room_description = player.CurrentRoomDescription()

# Write a loop that:

# * Prints the current room name
# * Prints the current description (the textwrap module might be useful here).
# * Waits for user input and decides what to do.
print(
    f"You may hit q any time to quit.  Explorer {player_name}, you find yourself in the {current_room_name} room.")
direction = input(f"Which direction do you want to go, Traveler {player_name}?  {current_room_description}.  Enter n for north.")


# If the user enters a cardinal direction, attempt to move to the room there.
# Print an error message if the movement isn't allowed.

if direction == 'n':
    for key in room:
        if key == 'outside':
            player.MoveToRoom(room[key].n_to)
            new_room_name = player.CurrentRoomName()
            new_room_description = player.CurrentRoomDescription()

            print(
                f"Explorer {player_name}, you now find yourself in the {new_room_name} room.  {new_room_description}.")


# If the user enters "q", quit the game.
if direction == 'q':
    print('You ran away from the cave, terrified.')
    exit


