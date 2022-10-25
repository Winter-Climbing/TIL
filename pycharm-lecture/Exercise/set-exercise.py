# set은 index가 없기 때문에 index를 원한다면 list(x)를 통해 배열로 변환 후 사용

s1 = set([1,2,3,4,5,6])
s2 = set([4,5,6,7,8,9])

# 교집합 - intersection
print(s1 & s2)

# 차집합 - difference
print(s1 - s2)

# 합집합 - union
print(s1 | s2)

# set 내장함수
# add() - 이미 만들어진 set 자료형에 값 추가
s1.add(100)
print(s1)

# update - 여러 개를 한꺼번에 추가
s1.update([1,2,3,4])

# remove  - 특정 값 제거
s1.remove(4)

# 연습문제

# 1번
sample1 = {1, 2, 3, 4, 5}
sample2 = {2,4,5,6,7}

sample1.add(6)
print('연습문제', sample1)

# 2번
sample2.remove(2)
print(sample2)

# 3번
print(sample1 & sample2)

# 4번
print(sample1 | sample2)

# 5번
print(sample1 - sample2)

# 6번
numList = [1,3,2,3,7,6,8,4,10,5,3,8,9]
set1 = set(numList)
setList = list(set1)
print(setList)
