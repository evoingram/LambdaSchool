from room import Room
from player import Player
from world import World
from util import Stack, Queue, Graph

import random
from ast import literal_eval

# Load world
world = World()

# You may uncomment the smaller graphs for development and testing purposes.
# map_file = "E:\\projects\\LambdaSchool\\m7\\72a1\\projects\\adventure\\maps\\test_line.txt"
# map_file = "E:\\projects\\LambdaSchool\\m7\\72a1\\projects\\adventure\\maps\\test_cross.txt"
# map_file = "E:\\projects\\LambdaSchool\\m7\\72a1\\projects\\adventure\\maps\\test_loop.txt"
# map_file = "E:\\projects\\LambdaSchool\\m7\\72a1\\projects\\adventure\\maps\\test_loop_fork.txt"
map_file = "E:\\projects\\LambdaSchool\\m7\\72a1\\projects\\adventure\\maps\\main_maze.txt"

# Loads the map into a dictionary
room_graph=literal_eval(open(map_file, "r").read())
world.load_graph(room_graph)

# Print an ASCII map
world.print_rooms()

player = Player(world.starting_room)
    
# Instead of searching for a target vertex, searching for an exit with a `'?'` as the value.
# If an exit has been explored, you can put it in your BFS queue like normal.

# BFS will return the path as a list of room IDs.
# You will need to convert this to a list of n/s/e/w directions before you can add it to your traversal path.
# If all paths have been explored, you're done!

# 0: [(3, 5), {'n': 1}],
# room number: [(x, y coordinates), {direction: rooms it leads to}]
# commands:  player.current_room.id, player.current_room.get_exits() and player.travel(direction)

# create potential traversal path
def new_traversal_path():
    # reset current traversal path, possible rooms, and last room
    player.current_traversal = Stack()
    player.possible_rooms_current_path = dict()
    player.last_room = None

    # loop while number of possible rooms is less than number of rooms 
    while len(player.possible_rooms_current_path) < len(world.rooms):

        # if current room not in possible rooms, set current adjacents as unvisited and add to possible rooms
        if player.current_room.id not in player.possible_rooms_current_path:
            player.process_current_room_not_in_possible()

        # if last room exists (none the first time):
        if player.last_room:
            player.last_room_exists()

        # set last room to current room
        player.last_room = player.current_room.id
        # create blank unvisited rooms list 
        player.unvisited_rooms = list()

        # for each direction of current room in possible rooms, if unexplored, append to unvisited 
        for direction, room in player.possible_rooms_current_path[player.current_room.id].items():
            if room == "?":
                player.unvisited_rooms.append(direction)

        # if there are unvisited rooms:
        if len(player.unvisited_rooms) > 0:
            player.process_unvisited_rooms()
        # if there are no unvisited rooms:
        else:
            player.process_no_unvisited()

# lowest moves set to just high enough to consistently find a path that meets the condition
while player.lowest_moves > 970:
    # reset current room to starting room
    player.current_room = world.starting_room
    # reset current path to nothing 
    player.current_path = []
    # create current traversal path
    new_traversal_path()
    # if you found a new record lower than mvp at 2000:
    if player.lowest_moves > len(player.current_path):
        # set path of new record as shortest path
        player.shortest_path = player.current_path
        # reassign value
        player.lowest_moves = len(player.current_path)
    # stop if you hit stretch goal
    if player.lowest_moves < 960:
        break

player.current_path = player.shortest_path
print("shortest path = " + str(player.current_path))
print("------------")
print(str(len(player.current_path)) + " moves")
print("------------")



# TRAVERSAL TEST
visited_rooms = set()
player.current_room = world.starting_room
visited_rooms.add(player.current_room)
traversal_path = player.current_path
for move in traversal_path:
    player.travel(move)
    visited_rooms.add(player.current_room)

if len(visited_rooms) == len(room_graph):
    print(f"TESTS PASSED: {len(traversal_path)} moves, {len(visited_rooms)} rooms visited")
else:
    print("TESTS FAILED: INCOMPLETE TRAVERSAL")
    print(f"{len(room_graph) - len(visited_rooms)} unvisited rooms")


#######
# UNCOMMENT TO WALK AROUND
#######
# player.current_room.print_room_description(player)
# while True:
#     cmds = input("-> ").lower().split(" ")
#     if cmds[0] in ["n", "s", "e", "w"]:
#         player.travel(cmds[0], True)
#     elif cmds[0] == "q":
#         break
#     else:
#         print("I did not understand that command.")
