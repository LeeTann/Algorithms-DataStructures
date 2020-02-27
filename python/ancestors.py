class Queue():
    def __init__(self):
        self.queue = []
    def enqueue(self, value):
        self.queue.append(value)
    def dequeue(self):
        if self.size() > 0:
            return self.queue.pop(0)
    def size(self):
        return len(self.queue)

class Graph:
    def __init__(self):
        self.verticies = {}
    def add_vertex(self, vertex_id):
        if vertex_id not in self.verticies:
            self.verticies[vertex_id] = set()
    def add_edge(self, v1, v2):
        if v1 in self.verticies and v2 in self.verticies:
            self.verticies[v1].add(v2)
        else:
            raise IndexError("That vertex does not exist")

def earliest_ancestor(ancestors, starting_node):
    # Build the graph
    graph = Graph()
    for pair in ancestors:
        graph.add_vertex(pair[0])
        graph.add_vertex(pair[1])
        #Build edges in reverse
        graph.add_edge(pair[1], pair[0])

    
    # Do BFS
    q = Queue()
    # add first path in q
    q.enqueue([starting_node])
    # keep track of max path length and earliest ancestor
    max_path_length = 1
    my_earliest_ancestor = -1 

    # while the q is not empty:
    while q.size() > 0:
        # dequeue off the path from start of q
        current_path = q.dequeue()
        # grab the last node from the path
        current_last_node = current_path[-1]
        # check if the current path is longer than or equal 
        if (current_last_node < my_earliest_ancestor and len(current_path) >= max_path_length) or (len(current_path) > max_path_length):
            earliest_ancestor = current_last_node
            max_path_length = len(current_path)
        # then loop thru all the neigbhors:
        for neighbor in graph.verticies[current_last_node]:
            path_copy = list(current_path)
            path_copy.append(neighbor)
            q.enqueue(path_copy)
    return earliest_ancestor
