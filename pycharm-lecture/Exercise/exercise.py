movie = ['어벤져스', '아이언맨', '토르', '스파이더맨']
movie.append('엑스맨')
movie.insert(1, '데드풀')
movie.remove('아이언맨')
movie.remove(movie[1])
kr_movie = ['승리호', '신세계', '타짜']
movie.extend(kr_movie)
movie.sort()
print(movie)

fruit = ['사과', '바나나', '파인애플', '배', '수박', '키위', '오렌지', '망고', '딸기']
del fruit[0:2]
del fruit[3:]
print(fruit)
