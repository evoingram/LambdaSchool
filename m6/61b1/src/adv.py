from room import Room
from player import Player
import sys

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
room['overlook'].s_to = room['foyer']
room['narrow'].w_to = room['foyer']
room['narrow'].n_to = room['treasure']
room['treasure'].s_to = room['narrow']

#
# Main
#

# Make a new player object that is currently in the 'outside' room.
player_name = input("What's your name, explorer?")
player = Player(player_name, room['outside'])
current_room_name = player.CurrentRoomName()
current_room_description = player.CurrentRoomDescription()
# * Prints the current room name
print(
    f"You may hit q any time to quit.  Explorer {player_name}, you find yourself in the {current_room_name} room.")

# * Waits for user input and decides what to do.

# Write a loop that:
while True:
    # * Prints the current description (the textwrap module might be useful here).
    direction = input(
        f"Which direction do you want to go, Traveler {player_name}?  {current_room_description}.  Enter n for north, s for south, w for west, e for east, or q to quit.")
    # If the user enters "q", quit the game.
    if direction == 'q':
        print('You ran away from the cave, terrified.')
        sys.exit()

    if current_room_name == 'Outside Cave Entrance':
        if direction == 'n':
            # If the user enters a cardinal direction, attempt to move to the room there.
            player.MoveToRoom(room['outside'].n_to)
            current_room_name = player.CurrentRoomName()
            current_room_description = player.CurrentRoomDescription()
            print(
                f"Explorer {player_name}, you now find yourself in the {current_room_name} room.  {current_room_description}.")

        # If the user enters "q", quit the game.
        if direction == 'q':
            print('You ran away from the cave, terrified.')
            exit

        else:
            # Print an error message if the movement isn't allowed.
            print(f"You cannot move that direction.  Select another direction to travel in.")
            pass

    elif current_room_name == 'Foyer':
        if direction == 'n':
            # If the user enters a cardinal direction, attempt to move to the room there.
            player.MoveToRoom(room['foyer'].n_to)
            current_room_name = player.CurrentRoomName()
            current_room_description = player.CurrentRoomDescription()
            print(
                f"Explorer {player_name}, you now find yourself in the {current_room_name} room.  {current_room_description}.")
        if direction == 's':
            # If the user enters a cardinal direction, attempt to move to the room there.
            player.MoveToRoom(room['foyer'].s_to)
            current_room_name = player.CurrentRoomName()
            current_room_description = player.CurrentRoomDescription()
            print(
                f"Explorer {player_name}, you now find yourself in the {current_room_name} room.  {current_room_description}.")
        if direction == 'e':
            # If the user enters a cardinal direction, attempt to move to the room there.
            player.MoveToRoom(room['foyer'].e_to)
            current_room_name = player.CurrentRoomName()
            current_room_description = player.CurrentRoomDescription()
            print(
                f"Explorer {player_name}, you now find yourself in the {current_room_name} room.  {current_room_description}.")

        else:
            # Print an error message if the movement isn't allowed.
            print(
                f"You cannot move that direction.  Select another direction to travel in.")
            pass

    elif current_room_name == 'Grand Overlook':
        if direction == 's':
            for key in room:
                # If the user enters a cardinal direction, attempt to move to the room there.
                player.MoveToRoom(room['overlook'].s_to)
            current_room_name = player.CurrentRoomName()
            current_room_description = player.CurrentRoomDescription()
            print(
                f"Explorer {player_name}, you now find yourself in the {current_room_name} room.  {current_room_description}.")

        else:
            # Print an error message if the movement isn't allowed.
            print(
                f"You cannot move that direction.  Select another direction to travel in.")
            pass

    elif current_room_name == 'Narrow Passage':
        if direction == 'n':
            for key in room:
                # If the user enters a cardinal direction, attempt to move to the room there.
                player.MoveToRoom(room['narrow'].n_to)
            current_room_name = player.CurrentRoomName()
            current_room_description = player.CurrentRoomDescription()
            print(
                f"Explorer {player_name}, you now find yourself in the {current_room_name} room.  {current_room_description}.")
        if direction == 'w':
            for key in room:
                # If the user enters a cardinal direction, attempt to move to the room there.
                player.MoveToRoom(room['narrow'].w_to)
            current_room_name = player.CurrentRoomName()
            current_room_description = player.CurrentRoomDescription()
            print(
                f"Explorer {player_name}, you now find yourself in the {current_room_name} room.  {current_room_description}.")

        else:
            # Print an error message if the movement isn't allowed.
            print(
                f"You cannot move that direction.  Select another direction to travel in.")
            pass

    elif current_room_name == 'Treasure Chamber':
        if direction == 's':
            for key in room:
                # If the user enters a cardinal direction, attempt to move to the room there.
                player.MoveToRoom(room['treasure'].s_to)
            current_room_name = player.CurrentRoomName()
            current_room_description = player.CurrentRoomDescription()
            print(
                f"Explorer {player_name}, you now find yourself in the {current_room_name} room.  {current_room_description}.")


        else:
            # Print an error message if the movement isn't allowed.
            print(
                f"You cannot move that direction.  Select another direction to travel in.")
            pass
    # If the user enters "q", quit the game.
    elif direction == 'q':
        print('You ran away from the cave, terrified.')
        sys.exit()






