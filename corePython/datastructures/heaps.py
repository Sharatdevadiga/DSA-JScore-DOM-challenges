import heapq

minHeap = []
heapq.heappush(minHeap, 3)
heapq.heappush(minHeap, 6)
heapq.heappush(minHeap, 19)
print(minHeap)
print(minHeap[0])

while len(minHeap):
    print(heapq.heappop(minHeap))

maxheap = []
heapq.heappush(maxheap, -2)
heapq.heappush(maxheap, -5)
heapq.heappush(maxheap, -9)
print(maxheap)
print(maxheap[0])

while len(maxheap):
    print(heapq.heappop(maxheap) * -1)

arr = [1,2,0,2,6,4,6,7,8,8,10]
heapq.heapify(arr)
print(arr)