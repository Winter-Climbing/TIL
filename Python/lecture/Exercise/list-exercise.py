# 리스트 마지막 값 - [-1]
a = [1,2,3]
print(a[-1])

# 요소 삭제하기 del
del a[1:]
print(a)

# 내장함수 - append, sort, reverse, index, insert(a,b), remove(x), count, extend([x])

# 연습문제

# 1번
movie = ['어벤져스', '아이언맨', '토르', '스파이더맨']
movie.append('엑스맨')
print(movie)

# 2번
movie.insert(1, '데드풀')
print(movie)

# 3번
movie.remove('아이언맨')
print(movie)

# 4번
del movie[1]
print(movie)

# 5번
kr_movie = ['승리호', '신세계', '타짜']
movie.extend(kr_movie)
# movie += kr_movie
print(movie)

# 6번
movie.sort()
print(movie)

# 7번
fruit = ['사과', '바나나', '파인애플', '배', '수박', '키위', '오렌지', '망고', '딸기']
# del fruit[0:2]
# del fruit[3:]
# del fruit[:7]
print(fruit[7:])

# 8번 - 제어문
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print([nums[1], nums[3], nums[5], nums[7], nums[9]] )
# 9번
sample = [1, 2, 3, 4, 5, 6, 7, 8]
print([sample[1], sample[4], sample[-1]])
print([sample[2], sample[4], sample[6]])
sample.reverse()
print(sample)

# 10번
myList = [[1,2,3],[4,5,6],[7,8]]
myList[2].append(9)
print(myList)
