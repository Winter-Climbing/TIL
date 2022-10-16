
test = '''
life is too short
python is very lazy
'''
print(test)

# 문자열 세기 - len()
a = 'js is a strange language'
print(len(a))

# 문자열 슬라이싱 - a[x:y]
b = 'js is a strange Language'
print(b[0:4]) # 0 <= b < 4
print(b[0:])

# 문자열 포맷팅 - %s %n .format(x)
str = 'I eat %s apples.' % a
print(str)
str1 = 'I eat {0} apples'.format(3)
print(str1)

# count 함수 - a.count('x')
hobby = 'hobby'
print(hobby.count('b'))

# find 함수 - a.find('x')
find = 'python is th best choice'
print(find.find('i'))

# index 함수 - a.index('x')
index = 'Life is too short'
print(index.index('t'))

# join 함수 - 문자열 삽입 ",".join('')
print(",".join('abcd'))

# 소문자 대문자 - upper(), lower()

# 공백 지우기 - lstrip(), rstrip(), strip()