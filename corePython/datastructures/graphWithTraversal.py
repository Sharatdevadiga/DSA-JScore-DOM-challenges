from collections import deque

class Grapg:
    def __init__(self):
        self.list = {}
    
    def addVertex(self, v):
        if not v in self.list:
            self.list[v] = []
        
    def addEdge(self, v1, v2):
        self.addVertex(v1)
        self.addVertex(v2)
        
        self.list[v1].append(v2)
        self.list[v2].append(v1)

    def removeEdge(self, v1, v2):
        self.list[v1] = list(filter(lambda x: x != v2, self.list[v1]))
        self.list[v2] = list(filter(lambda x: x != v1, self.list[v2]))

    def removeVertex(self, v):
        while(self.list[v]):
            adjacentNode = self.list[v].pop()
            self.removeEdge(v, adjacentNode)
        
        self.list.pop(v)
    
    def dfsrecursion(self, start):
        vals = []
        visited = set()

        def dfs(v):
            if not v:
                return None
            
            vals.append(v)
            visited.add(v)

            for neighbourNode in self.list[v]:
                if not neighbourNode in visited:
                    dfs(neighbourNode)
            
        dfs(start)
        return vals
    
    def dfsIterative(self, start):
        vals, stack, visited = [], [start], set()
        visited.add(start)

        while stack:
            v = stack.pop()
            vals.append(v)
            

            for adjacent in self.list[v]:
                if not adjacent in visited:
                    stack.append(adjacent)
                    visited.add(v)
        
        return vals

    def bfsIterative(self, start):
        vals, q, visited = [],  deque(), set()
        q.append(start)
        visited.add(start)

        while q:
            v = q.popleft()
            vals.append(v)

            for adjacent in self.list[v]:
                if not adjacent in visited:
                    q.append(adjacent)
                    visited.add(adjacent)
            
        return vals
        
    
        

