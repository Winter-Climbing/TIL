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

# count = 해당 ()안의 값의 개수를 찾아라

let_it_be = '''
When I find myself in times of trouble
Mother Mary comes to me
Speaking words of wisdom let it be
And in my hour of darkness
She is standing right in front of me
Speaking words of wisdom let it be

Let it be let it be
Let it be let it be
Whisper words of wisdom let it be

And when the broken-hearted people
Living in the world agree
There will be an answer let it be
For though they may be parted
There is still a chance that they will see
There will be an answer let it be

Let it be let it be
Let it be let it be
Yeah there will be an answer let it be
Let it be let it be
Let it be let it be
Whisper words of wisdom let it be

Let it be let it be
Ah let it be yeah let it be
Whisper words of wisdom let it be

And when the night is cloudy
There is still a light that shines on me
Shine on until tomorrow let it be
I wake up to the sound of music
Mother Mary comes to me
Speaking words of wisdom let it be

Let it be let it be
Let it be yeah let it be
Oh there will be an answer let it be
Let it be let it be
Let it be yeah let it be
Whisper words of wisdom let it be
'''
print(let_it_be.count('be'))


# find 메소드
my_email = 'yangsokk@gmail.com'
split_char = my_email.find('@')
print(split_char)
acc = my_email[:split_char]
print(acc)
host = my_email[:split_char+1]
print(host)

url = 'http://www.kmu.ac.kr'
start = url.find('www')
print(start)

sub_str = url[start:]
print(sub_str)

address = '대구광역시 달서구 호산로'
space_num = address.find(' ')
print(space_num)

test2 = address[:space_num]
print(test2)

# index 메소드 - find와 비슷하지만 find와는 달리 찾는 문자열이 없을 경우 오류 발생

# join 메소드
join = ','.join('abcd')
print('Join',join)
join2 = '-'.join('abcd')
print('Join',join2)

# upper 메소드 - 대문자로 변환
upper = my_email.upper()
print('Upper',upper)

# lower = 소문자로 변환

# capitalize 메소드 - 문장 처음만 대문자
capitalize = my_email.capitalize()
print('Capitalize', capitalize)

# lstrip, rstrip, strip
a = ' hi '
str2 = a.lstrip()
str3 = a.rstrip()
str4 = a.strip()
print(str2, str3, str4)

# replace
대체 = 'javascript is very good'
print(대체.replace('javascript', 'typescript'))

# split
나눔 = 'javascript is very strange'
print(나눔.split())
나눔2 = 'javascript:is:very:strange'
print(나눔2.split(':'))

u = [5,1,12,5,6,21]
u.sort()
u.reverse()
print(u)