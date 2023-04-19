# list

# 크기가 4개고, 모든 값이 0인 1차원 리스트 초기화
a = [0] * 4
print(a)

# 뒤에서 첫 번째 원소 출력
a = [1,2,3,4,5,6,7]
print(a[-1])

# 연속적인 위치를 갖는 원소들을 가져와야 할 때 슬라이싱을 이용한다.
# 대괄호 안에 콜론으로 시작인덱스와 끝 인덱스를 설정한다.
# <= <

# 두 번재 원소부터 네 번째 원소까지 가져오기
print(a[1:4])

# 리스트 컴프리헨션
# 리스트를 초기화하는 방법 중 하나이다.
# 2차원 리스트를 초기화할 때 효과적으로 사용될 수 있다.
array = [i for i in range(10)]

print(array)

# 0부터 19까지의 수 중에서 홀수만 포함하는 리스트
array = [i for i in range(20) if i % 2 ==1]
print(array)

# 1부터 9까지의 수들의 제곱 값을 포함하는 리스트
array = [i * i for i in range(1, 10)]
print(array)

# 특히 N x M 크기의 2차원 리스트를 한 번에 초기화 해야 할 때 매우 요용하다.
n = 4
m = 3
array = [[0] * m for _ in range(n)]
print(array)

array[1][1] = 5
print(array)

# 잘못된 방법
# 해당 배열을 똑같은 객체로 인식한다는 문제가 생긴다.
array = [[0] * m] * n
array[1][1] = 5
print(array)

# 파이썬에서의 언더바는 반복을 수행하되 반복을 위한 변수의 값을 무시하고자 할 때 언더바를 사용한다.
for _ in range(5):
    print("Hello World")

# 리스트 관련 메서드
변수명 = [1,2,3,4,5,5,6,67,7,]
변수명.append(2) # push()
변수명.sort() # sort() 오름차순, sort(reverse=True) 내림차순, nlogn
변수명.reverse()
변수명.insert(2, 4) # (삽입할 위치 인덱스, 삽입할 값)
변수명.count(5) # 특정한 값을 가지는 데이터의 개수
변수명.remove(1) # 특정한 값을 갖는 원소를 제거하는데, 하나만 딱 제거한다.

a = [1,4,3]

a.append(4)
a.sort()
a.sort(reverse=True)
a.reverse()
a.insert(2,3)
a.count(3)
a.remove(1)

# 리스트에서 특정 값을 가지는 원소를 모두 제거하기
a = [1,2,3,4,5,5,5]
remove_set = {3,5} # 집합 자료형
result = [i for i in a if i not in remove_set]
print(result)