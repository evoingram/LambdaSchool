from room import Room
from player import Player
from world import World
from util import Stack, Queue, Graph.

import random
from ast import literal_eval

# Load world
world = World()

# You may uncomment the smaller graphs for development and testing purposes.
# map_file = "maps/test_line.txt"
# map_file = "maps/test_cross.txt"
# map_file = "maps/test_loop.txt"
# map_file = "maps/test_loop_fork.txt"
map_file = "maps/main_maze.txt"

# Loads the map into a dictionary
room_graph=literal_eval(open(map_file, "r").read())
world.load_graph(room_graph)

# Print an ASCII map
world.print_rooms()

player = Player(world.starting_room)

# Fill this out with directions to walk
# traversal_path = ['n', 'n']
traversal_path = []

    
# Instead of searching for a target vertex, searching for an exit with a `'?'` as the value.
# If an exit has been explored, you can put it in your BFS queue like normal.

# BFS will return the path as a list of room IDs.
# You will need to convert this to a list of n/s/e/w directions before you can add it to your traversal path.
# If all paths have been explored, you're done!


# Explore rooms to get all traversable paths
# THEN calculate shortest path


# 0: [(3, 5), {'n': 1}],
# room number: [(x, y coordinates), {direction: rooms it leads to}]
# commands:  player.current_room.id, player.current_room.get_exits() and player.travel(direction)


def unexplored_room():
    pass
    # get current player room (player.current_room.id, current_player_room)
    # get available directions by searching for '?' (player.current_room.get_exits(), get_room_in_direction(), current_room_exits)
    # select available direction (current_room_exits)
    # log that direction to your graph (traversed_paths, current_path)
    # go that direction (player.travel(direction), next_room)
    # if room has no unexplored paths, walk back to nearest room w/ one (separate function maybe, current_path/next_path)
    # then loop



# organize above steps into separate functions:
    # unexplored room function
    # room with no unexplored paths function
    # maybe function to get directions and next-rooms from a current room




# find the path to the shortest unexplored room by using a breadth-first search for a room with a `'?'` for an exit.


# TRAVERSAL TEST
visited_rooms = set()
player.current_room = world.starting_room
visited_rooms.add(player.current_room)

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
player.current_room.print_room_description(player)
while True:
    cmds = input("-> ").lower().split(" ")
    if cmds[0] in ["n", "s", "e", "w"]:
        player.travel(cmds[0], True)
    elif cmds[0] == "q":
        break
    else:
        print("I did not understand that command.")
