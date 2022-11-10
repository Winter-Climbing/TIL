#
# a = input('당신의 키를 입력하세요:')
# print('%a cm' % a)

# BMI

weight = 78
height = 176 / 188

bmi = weight / (height * height)
print(bmi)

def bmi_calculator(height, weight):
    height = height/100
    bmi = weight / (height * height)
    print(bmi)

bmi_calculator(176, 70)

is_start = True

while is_start:
    height = input('키 입력:')
    weight = input('몸무게 입력:')
    bmi_calculator(int(height), int(weight))
    op = input('계속하시겠습니까? Y/N')
    if op == 'N':
        is_start = False