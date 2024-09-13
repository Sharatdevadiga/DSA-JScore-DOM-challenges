# dynamically typed language
n = 0
print('n ', n)

n = 'abc'
print('n')

# multiple assign ment
a,b = 10, 20


# incremtnt
n = n + 1
n += 1

# None in python 
n = 4
n = None
print(n)


# no need of parentheses
n = 1
if n > 2: 
    print(n)
elif n ==2:
    n *= 2
else:
    n += 1

# and or
n, m = 4, 5
if (n > 4 and 
    m < 10):
    print(n , m)

# while
n = 0
while n < 10:
    print(n)
    n += 1

for i in range(0, 5):
    print(i)

for i in range(2, 6):
    print(i)

for i in range(5, 1, -1):
    print(i)

for i in range(4, 2, -1):
    print(i)

for i in range(10, 0, -2):
    print(1)


# dividion 
print(5 / 2)
print(5 // 2)
print(-3 // 2)
print(int(-3/2))
print(int(-3/2))
print(int(-5/3))
print(-10 % 3)


# math -> fmod, floor, ceil, pow
import math
print(math.fmod(-10 % 3))
print(math.fmod(-5% 3))
print(math.fmod(-10 % 3))
print(math.floor(3 / 3))
print(math.ceil(-6/10))
print(math.pow(2, 3))

# infinity
float('inf')
float('-inf')
float('inf')
float('-inf')
float('inf')
float('-inf')

# python numbers never overflow
import math
print(math.pow(2, 300))
print(math.pow(2, 200) < float('inf'))

# arrays in python
arr = [1,2,3,4,5]
print(arr)

# python arr are dynamic
arr.append(3)
arr.apprnd(5)
arr.append(6)
arr.append(9)

arr.pop()

arr.insert(1, 7)
arr.insert(1, 7)
arr.insert(4, 9)
arr.insert(3, 2)
arr.insert(0, 3)

arr[0] = 0
arr[1] = 3
arr[4] = 7
arr[0] = 4

n = 5
arr = [1]*n

m = 10
arr = [2]*m
arr = [-3]*m

k = 10
arr = [0]*k

print(arr[-1])
print(arr[-3])
print(arr[-4])
print(arr[-6])

print(arr[0: 3])
print(arr[3:])
print(arr[:6])

a,b,c = [1,2,3]
print(a,b,c)

c,d,e = [4,5,6]
print(a,d,e)

for i in range(len(arr)):
    print(arr[i])

for num in arr:
    print(arr)

for i, n in enumerate(arr):
    print(i, n)

for i, n in enumerate(arr):
    print(i, n)


for i, n in enumerate(arr):
    print(i, arr)

for i, n in enumerate(arr):
    print(i, arr)

for i,  in enumerate(arr):
    print(i, arr)

for num in arr:
    print(arr)

for i in range(0, len(arr)):
    print(arr[i])

n = 4
arr = [1,2,3,4,5]
arr = [0]*n
arr.sort()
res = list(filter(lambda x : x!= 3, arr))
print(arr)

nums1= [1,2,3,4,5]
nums2 = [1,2,3,4,5]
for n1, n2 in zip(nums1, nums2):
    print(n1, n2)

# zip and unpack
for n1, n2 in zip(nums1, nums2):
    print(n1, n2)

for n1, n2 in zip(nums1, nums2):
    print(n1, n2)

for n1, n2 in zip(nums1, nums2):
    print(n1, n2)


# reversing
arr = [1,2,3,4,5]
arr.reverse()
arr.sort()
arr.sort(reverse = True)

arr = ['abs', 'anng', 'ererer']
arr.sort(key = lambda x: len(x))
arr.sort(key = lambda x: len(x))
arr.sort(key = lambda x: len(x))
arr.sort(key= lambda x: len(x))

# list comprehension
arr = [i for i in range(0, 5)]
arr = [i+i for i in range(0, 3)]
arr = [i+2 for  i in range(0, 5)]
arr = [-i for i in range(5)]
arr = [[0]*4 for i in range(4)]
arr = [[0]*2  for i in range(10)]
arr = [[0]*3 for i in range(3)]
arr = [[0]*4 for i in range(4)]

arr = [-i for i in range(14, 9)]
arr = [[0]*4 for i in range(4)]


# stings 
s = "abc"
print(s)
print(s[0:2])
print(s[1:2])

# srting -> immutable, modifying creates a new string

# conversion
print(int("!23") + int("456"))
print(str(123) + str(456))
print(int(123) + str(456))
print(int("123") + int("456"))

print(ord('a'))
print(ord('b'))
print(ord('z') - ord('a'))
print(ord('z') - ord('a'))
print(ord('z') - ord('a'))
print(ord('z') - ord('a'))
print(ord('z') - ord('a'))
print(ord('z') - ord('a'))
print(ord('z') - ord('a'))

# combining the list of strings with a delimeter
strings = ['a', 'b', 'c', 'd', 'e']
print(" ".join(strings))
print("-".join(strings))
print("*".join(strings))
print("/".join(strings))
print("=".join(strings))



# queue -> double ended queue
from collections import deque
q = deque()
q.append(4)
q.append(4)
q.append(8)
q.popleft()
q.popleft()

q.appendleft(3)
q.appendleft(3)
q.appendleft(6)

# hash set
set = set()
set.add(4)
set.add(2)
set.add(8)
set.remove(2)
print(len(set))
print(3 in set)
print(2 in set)

set2 = set([1,2,3,4,5])
set3 = { i for i in range(5)}
set4 = {i+2 for i in range(10)}
set5 = {i+3 for i in range(5)}

set = set()
set.add(4)
set.add(5)
set.remove()
print(2 in set)
set2 = set([1,2,3,4,5])
set3 = [i for i in range(5)]

# Hash map dict
map = {}
map['k'] = 'a'
map['k2'] = 'b'
print(len(map))

map['k1'] = 'hh'
print('k' in map)
map.pop('k')
map.popitem()

map  = {
    'k': 1,
    'l': 2
}

map = {i : i*2 for i in range(5)}

for key in map:
    print(map[key])

for val in map.values():
    print(val)

for key, val in map.entries():
    print(key, val)


# hash map
map = {}
map['a'] = 1
map['b'] = 2

map = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,

}

map.pop('b')
map.popitem()

print('a' in map)

for key in map:
    print(key)

for val in map.values():
    print(val)


for key, val in map.entries():
    print(key, val)

map = {i: i*2 for i in range(4)}
print(map)


# Tuples -> immutable
tup = (1,2,3,4)
print(tup)
print(tup[1])

map = {
    (1,2) : 3,
    (3,4) : 4
}

# tuples can be keys but the lists cannot be keys
print((1,2) in map)


# tuples  -> () similar to arrays but are immutable
rup = (1,2,3,4,5)
print(tup)
print(tup[4])

map = {
    (1,2) : 3,
    (2,3) : 4
}

print((1, 3) in map)


# Haps -> under the hood they are arrays
import heapq
minHeap = []
heapq.heappush(minHeap, 3)
heapq.heappush(minHeap, 5)
heapq.heappush(minHeap, 5)

print(minHeap[0])

while len(minHeap):
    print(heapq.heappop(minHeap))


# workaround
arr = [1,2,3,4,5]
arr = [-num for num in arr]
heapq.heapify(arr)
print(arr)

heapq.heappush(arr, -4)

while len(arr):
    print(-1 * heapq.heappop(arr))

# functions
def func(n, m):
    return m * n

print(func(3, 4))

def func1():
    c = 'c'

    def func2():
        print(c)
    
    return func2()

print(func1())



def double(arr, val):
    def helper():
        for i, n in enumerate(arr):
            arr[i] *= 2

        nonlocal val
        val *= 2

    helper()
    print(arr, val)

nums = [1,2]
val = 5
double(nums, val)


    
class muClass:
    def __init__(self, nums):
        self.nums = nums
        self.size = len(nums)
    
    def getLength(self):
        return self.size
    
    def getDoubleLength(self):
        return 2 * self.getLength()
