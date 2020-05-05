from room import Room
from player import Player
from item import Item

import sys
import os

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
    'dungeon': Room("Unlocked Creepy Dungeon", """You've found an unlocked prison cell where someone perished."""),
    'hall': Room("Decrepit Royal Hall", """You've found a large hall that might have once held royal parties."""),
}


# Link rooms together
room['outside'].n_to = room['foyer']
room['foyer'].s_to = room['outside']
room['foyer'].n_to = room['overlook']
room['foyer'].e_to = room['narrow']
room['foyer'].w_to = room['hall']
room['overlook'].s_to = room['foyer']
room['overlook'].n_to = room['hall']
room['narrow'].w_to = room['foyer']
room['narrow'].n_to = room['treasure']
room['narrow'].e_to = room['dungeon']
room['narrow'].s_to = room['hall']
room['treasure'].s_to = room['narrow']
room['treasure'].n_to = room['dungeon']
room['dungeon'].e_to = room['narrow']
room['hall'].s_to = room['overlook']
room['hall'].e_to = room['foyer']

item = {
    'weapon': Item('sword', 'Sharp blade used to slash horrifying creatures.'),
    'light': Item('lantern', 'illuminates whatever room the traveler is in.'),
}

room['overlook'].AddItem(item['weapon'])
room['foyer'].AddItem(item['light'])
room['dungeon'].AddItem(item['weapon'])
room['narrow'].AddItem(item['light'])
room['hall'].AddItem(item['weapon'])


# Make a new player object that is currently in the 'outside' room.
player_name = input("What's your name, explorer?")
player = Player(player_name, room['outside'])

# os.chdir('E:\\projects\\LambdaSchool\\m6\\61b1\\src')

# Write a loop that:
while True:
    # * Prints the current description (the textwrap module might be useful here).
    current_room_name = player.CurrentRoomName()
    current_room_description = player.CurrentRoomDescription()
    for key, value in room.items():
        if current_room_name == value.room_name:
            current_room_key = key
            print(f"found key:  {current_room_key}")

    # * Prints the current room name
    print(
        f"You may hit q any time to quit.  Explorer {player_name}, you now find yourself in the {current_room_name} room.  {current_room_description}.")
    # * Waits for user input and decides what to do.
    direction = input(
        f"Which direction do you want to go, Traveler {player_name}?  Enter: \nn for north\ns for south\nw for west\ne for east\ni or inventory to list your inventory\nsearch to look for items in {current_room_name}\nq to quit.")
    print('----------------------------------')

    user_input = direction.split(' ')
    print(user_input)
    if(len(user_input) == 1):
        # If the user enters "q", quit the game.
        if direction == 'q':
            print('You ran away from the cave, terrified.')
            sys.exit()
        if direction == 'i':
            player.ListInventory()
        if direction == 'inventory':
            player.ListInventory()
        if direction == 'search':
            print(f"key:  {current_room_key}")
            room[current_room_key].ListItems()
        else: 
            if current_room_name == 'Outside Cave Entrance':
                if direction == 'n':
                    # If the user enters a cardinal direction, attempt to move to the room there.
                    player.MoveToRoom(room['outside'].n_to)
                else:
                    # Print an error message if the movement isn't allowed.
                    print(f"You cannot move that direction.  Select another direction to travel in.")
                    pass

            elif current_room_name == 'Foyer':
                if direction == 'n':
                    player.MoveToRoom(room['foyer'].n_to)
                if direction == 's':
                    player.MoveToRoom(room['foyer'].s_to)
                if direction == 'e':
                    player.MoveToRoom(room['foyer'].e_to)
                if direction == 'w':
                    player.MoveToRoom(room['foyer'].w_to)
                else:
                    # Print an error message if the movement isn't allowed.
                    print(
                        f"You cannot move that direction.  Select another direction to travel in.")
                    pass

            elif current_room_name == 'Grand Overlook':
                if direction == 's':
                    player.MoveToRoom(room['overlook'].s_to)
                if direction == 'n':
                    player.MoveToRoom(room['overlook'].n_to)
                else:
                    # Print an error message if the movement isn't allowed.
                    print(
                        f"You cannot move that direction.  Select another direction to travel in.")
                    pass

            elif current_room_name == 'Narrow Passage':
                if direction == 'n':
                    player.MoveToRoom(room['narrow'].n_to)
                if direction == 'w':
                    player.MoveToRoom(room['narrow'].w_to)
                if direction == 's':
                    player.MoveToRoom(room['narrow'].s_to)
                if direction == 'e':
                    player.MoveToRoom(room['narrow'].e_to)

                else:
                    # Print an error message if the movement isn't allowed.
                    print(
                        f"You cannot move that direction.  Select another direction to travel in.")
                    pass

            elif current_room_name == 'Treasure Chamber':
                if direction == 's':
                    player.MoveToRoom(room['treasure'].s_to)
                if direction == 'n':
                    player.MoveToRoom(room['treasure'].n_to)
                else:
                    # Print an error message if the movement isn't allowed.
                    print(
                        f"You cannot move that direction.  Select another direction to travel in.")
                    pass

            elif current_room_name == 'Unlocked Creepy Dungeon':
                if direction == 'e':
                    player.MoveToRoom(room['dungeon'].e_to)
                else:
                    # Print an error message if the movement isn't allowed.
                    print(
                        f"You cannot move that direction.  Select another direction to travel in.")
                    pass
            elif current_room_name == 'Decrepit Royal Hall':
                if direction == 's':
                    player.MoveToRoom(room['hall'].s_to)
                if direction == 'e':
                    player.MoveToRoom(room['hall'].e_to)

                else:
                    # Print an error message if the movement isn't allowed.
                    print(
                        f"You cannot move that direction.  Select another direction to travel in.")
                    pass
    elif (len(user_input) == 2):
        # item stuff here
        if direction == 'search':
            print(f"key:  {current_room_key}")
            room[current_room_key].ListItems()
