# p112~ 연습문제

# 1번
print((80 + 75 + 55) / 3)

# 2번
print(13 % 2 == 1)

# 3번
a = '881120-1068234'
print(a[:6])
print(a[7:])

# 4번
print(a[7])

# 5번
a = 'a:b:c:d'
b = a.replace(':', '#')
print(b)

# 6번
a = [1,3, 5, 4, 2]
a.sort()
a.reverse()
print(a)

# 7번
a = ['Life', 'is', 'too', 'short']
result = ' '.join(a)
print(result)

# 8번 --------------------------------------------------
a = (1,2,3)
a= a + (4,)
print(a)

# 9번  ---------------------------------------------

# 10번
a = {'A': 90, 'B': 80, 'C': 70}
result = a.pop('B')
print(a)
print(result)

# 11번 ----------------------------------------------
a = [1,1,1,2,2,3,3,3,4,4,5]
aSet = set(a)
b = list(aSet)
print(b)

# 12번
a = b = [1,2,3]
a[1] = 4
print(b)
