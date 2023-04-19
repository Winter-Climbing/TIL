# 사전 자료형

data = dict()
data['사과'] = 'Apple'
data['바나나'] = 'Banana'
data['코코넛'] = 'Coconut'

print(data)

if '사과' in data:
    print("'사과'를 키로 가지는 데이터가 존재합니다.")

# 키 데이터만 담은 배열
key_list = list(data.keys())
# 값 데이터만 담은 배열
value_list = list(data.values())

# 집합 자료형
# 배열 혹은 문자열을 이용하여 초기화할 수 있다.
# 혹은 중괄호 ({})안에 각 원소를 콤마(,)를 기준으로 구분하여 삽입함으로써 초기화 할 수 있다.

data = set([1,1,2,3,4,4,5])
print(data)

a = set([1,2,3,4,5])
b = set([3,4,5,6,7])
# 합집합
print(a | b)
# 교집합
print(a & b)
# 차집합
print(a - b)
# 새로운 원소 추가
a.add(4)
# 새로운 원소 여러 개 추가
a.update([5,6])
# 특정 값을 갖는 원소 삭제
a.remove(3)