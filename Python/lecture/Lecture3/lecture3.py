# 파이썬은 배열이 아니라 리스트다.
a = [1, 2, 3]
print(a)

# append / push다
# 배열 안에 또 다른 배열 넣을 수 있다.
a.append(4)
print(a)

b = [5, 6]
a.append(b)
print(a)

# sort / sort다
# 요소들의 데이터 타입이 다르면 에러 뜬다.
a = [7, 2, 4]
a.sort()
print(a)

# reverse / reverse와 같지만 사용 방법이 다르다.
a.sort(reverse=False)
print(a)
a.sort(reverse=True)
print(a)

# index / indexOf다 indexOf는 요소가 없으면 -1을 뱉지만 파이썬은 에러를 뱉는다
names = ['kim', 'cho', 'mo', 'park', 'lee']
print(names.index('cho'))
print(names.index('lee'))

# insert / splice다 다만 쓰는 방식이 조금 다르다.
a = [1, 3, 9, 18]
a.insert(0, 5) # a.splice(0, 0, 5)
print(a) # [5,1,3,9,18]

# remove - 값을 찾아 첫 번째 나오는 해당 요소를 삭제한다.
a.remove(1)
print(a)

# pop -
a.pop(2) # index[2]
print(a)

# sort와 함수 그리고 return
list = [3, 1, 4, 2]
print(list)
list.sort()
print(list)

def mysort(list):
    list.sort()
    return list

list = [3, 1, 4, 2]
mysort(list)
print(mysort(list))

# remove
a = [1,2,3,4,5]
a.remove(3)
print(a)

# pop
print(list)
x = list.pop()
print(x)
print(list)

# split, count
a = [1, 2, 3, 1]
le = a.count(1)
print(le)

#
a = [1, 2, 3]
print(a.append([4,5]))
print(a.extend((4,5)))

# tuple
t2 = (1,)
print(t2)
t4 = 1,2,3
print(t4)
t5 = (1,2,3,('a', 'b'))
print(t5)

x = (1,2,3,[1,2])
print(x)

y = [1,2,3,(4,5)]
print(y)
y[3].insert(0, 'a')
x[3].insert(0, 'a')
print(x)

t1 = (1, 2, 'a', 'b')
# del t1[2] 튜플의 요소는 삭제할 수 없다

