wow = list(map(int, input().split()))
#  input을 공백 기준으로 나눈 다음 map을 통해 int로 매핑한다.
a,b,c = map(int, input().split())

print(wow)
print(a,b,c)

# 빠르게 입력 받기
# sys.stdin.readline() 메서드를 사용하면 최대한 빠르게 입력을 받을 수 있다.
# 다만 enter가 줄 바꿈 기호로 자동으로 나오므로 rstrip() 메서드를 함께 사용한다.
# ex) 이진탐색, 정렬, 그래프에서 많이 사용된다.

import sys
data = sys.stdin.readline().rstrip()
print(data)

# print()는 기본적으로 출력 이후에 줄 바꿈을 수행한다.
# 줄 바꿈을 원하지 않는다면 end를 사용한다.

a = 1
b = 2
print(7, end=' ')
print(8, end=' ')

# f-string
answer = 7
print(f"정답은 {answer}입니다")