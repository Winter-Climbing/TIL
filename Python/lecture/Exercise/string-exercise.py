a = 'ts is very good'
len(a) # 문자열 길이를 구하는 내장함수
print(len(a))
a[0]
print(a[0])

# 포매팅 - %d, %s
# 숫자대입 %d
strNum = 'I eat %d apples' %3
print(strNum)

# 문자열 포매팅 %s
strFormatting = 'I eat %s apples' % 'five'
print(strFormatting)

# f 문자열 포매팅
name = '홍길동'
fFormatting = f'나의 이름은 {name}'
print(fFormatting)

# 문자열 내장함수 - count, find, index, join, upper, lower, lstrip, rstrip, strip, replace, split

# 연습문제

# 1번
a = 1234
test1 = 'a의 값은 %d입니다' %a
print(test1)

# 2번
a = 3.141592
b = 6.181112
test2 = 'a의 값은 %0.3f, b의 값은 %0.3f입니다' %(a, b)
print(test2)

# 3번
registration_number = '210101-1234567'
print(registration_number[7])

# 4번
sample = '20210101Sunny'
date = sample[:8]
weather = sample[8:]
print(f'date: {date}, weather: {weather}')

# 5번
license_plate = '13나 5645'
print(license_plate[4:])

# 6번 - 제어문

# 7번

sample = 'abc-def.789/100'
print(sample.split('.'))
print(sample.split('-'))

# 8번

sample = ['Python', 'is', 'too', 'interesting']
phone_number = ['010', '1234', '5678']
string = ' * '.join(sample)
stringPhone = '-'.join(phone_number)
print(string)
print(stringPhone)