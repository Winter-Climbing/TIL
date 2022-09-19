print('hello world sdfgfgd')

# 수치형 데이터 연습

a = 123
print(a)

a = -178
print(a)

b = 1.2
print(b)

a = 4.24E10
print(a)

b = 4.24e-10
print(b)

print(2 ** 3 ** 2)

# 스트링 연습

x = 'life is short \nyon need python\n'
y = 'javascript is strange \t\t\tyou need typescript'
z = '\"python is very easy\" he says'
print(x)
print(y)
print(z)

# 스트링 연산

head = 'JS'
tail = 'is strange'
print(head +" "+ tail)

mul = 'python'
print(mul * 4)

# 문자열 길이
leng = 'life is too short'
print(len(leng))
len(leng)

# slice
s = 'http://www.google.com'
protocol = s[0:4]
hostname = s[7:]
print(protocol +'://'+ hostname)

url = 'https://www.kmu.ac.kr/uni/main/page.jsp?mnu_uid=143&cmd=2&parm_bod_uid=219435'
protocol2 = url[0:4]
part = url[7:20]
path = url[20:]
print(protocol2 + ':/' + part + path)
print(path.upper())

# Formatting
# %d - int
# %s - string
# %c - 문자 1개
# %f - real(실수)
# %% - Literal % (문자 '%' 자체)

formatting = 'I ate %d apples and %d bananas '%(3, 2)
print(formatting)
number1 = 30
test = 'i ate %d apple' %number1
print(test)

name1 = '홍길도'
age = 30
f'나의 이름은 {name1} 나이는 ${age}'

# 문자열에 관한 함수
