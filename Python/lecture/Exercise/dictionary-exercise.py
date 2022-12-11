# 딕셔너리 쌍 추가
a = {1: 'a'}
a[2] = 'b'
print(a)

# 딕셔너리 내장함수 - a.update(), a.keys(), a.values(), a.items(), a.clear(), 'name' in a, a.get(key)

a = {'name': 'pey', 'phone': '0119993323', 'birth': '1118'}
print(a.keys())
print(a.values())
print(a.items())
print('name' in a)
print(a.get('name'))

# 연습문제

# 1번
score = {'하준': 90, '서윤': 86, '지아': 80}
print(score)

# 2번
score['수지'] = 95
print(score)

# 3번
del score['지아']
print(score)

# 4번
test4 = {'기창': 98, '남철': 60, '기성': 75}
score.update(test4)
print(score)