def add(a, b):
    return a + b

print(add(1, 2))

def test():
    a_count = 0
    l_count = 0
    c_count = 0

    is_open = True

    while is_open:
        coffee = input('What kind of coffee:')
        print(coffee)

        if coffee == 'A':
            a_count += 1
        elif coffee == 'L':
            l_count += 1
        elif coffee == 'C':
            c_count += 1
        elif coffee == 'close':
            is_open = False
            print('Close')
        else:
            print('Wrong input')

    print('Finish today coffee')
    print('A:%d' % a_count)
    print('L:%d' % l_count)
    print('C:%d' % c_count)
test()
