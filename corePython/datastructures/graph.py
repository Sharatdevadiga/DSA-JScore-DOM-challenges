class Graph:
    def __init__(self):
        self.list = {}
    
    def addVertex(self, vertex):
        if not vertex in self.list:
            self.list[vertex] = []
    
    def addEdge(self, v1, v2):
        if not v1 in self.list:
            self.list[v1] = []
        
        if not v2 in self.list:
            self.list[v2] = []
        
        self.list[v1].append(v2)
        self.list[v2].append(v1)
    
    def removeEdge(self, v1, v2):
        self.list[v1] = list(filter(lambda x: x != v2, self.list[v1]))
        self.list[v2] = list(filter(lambda x: x != v1, self.list[v2]))
    
    def removeVertex(self, v):
        while self.list[v]:
            adjacentV = self.list[v].pop()
            self.removeEdge(v, adjacentV)
        
        self.list.pop(v)



