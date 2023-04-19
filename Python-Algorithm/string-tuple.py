#  문자열도 인덱싱과 슬라이싱을 할 수 있다.
# 다만 문자열은 특정 인덱스의 값을 변경할 수는 없다.

a = 'ABCDEF'
print(a[2:4])

# 튜플
# 한 번 선언된 값은 변경할 수 없다.
# 리스트는 대괄호, 튜플은 소괄호를 이용한다.
# 튜플은 상대적으로 공간 효율성이 좋다.

a = (1,2,3,4,5,6,7)
print(a[3])
print(a[1:4])

# 서로 다른 성질의 데이터를 묶어서 관리해야 할 때
# 데이터의 나열을 해싱의 키 값으로 사용해야 할 때
# 리스트보다 메모리를 효율적으로 사용해야 할 때