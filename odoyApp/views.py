from django.shortcuts import render
from django.db.models import Avg
from .models import *
from datetime import date
import datetime
import math
import json
import re
# Create your views here.

def odoymain(request):
    return render(request, 'odoymain.html')

def resultpage(request):
   
    ''' 데이터 베이스 저장 '''

    if(request.method == 'POST'):
        nickname = request.POST['nickname']
        #닉네임 공백 검증
        nickname = nickname.replace(' ', '') #문자열 양쪽 공백 지우기
        #닉네임 길이 검증
        if len(nickname) > 8:
            nickname = nickname[0:7]

        if request.POST['gender']=="여성": 
            ngender = 'female'
        else:
            ngender = 'male'
    #life 값이 생년월일보다 작거나, 임의값을 넣을 경우
        nbirth = request.POST['birth']
        patterns = re.compile['[1-2][0-9][0-9][0-9]-[0-1][0-9]-[0-3][0-9]']
        nbirth_patterns = patterns.match(nbirth)

        if nbirth_patterns :
            if int(nbirth[5:7]) > 12:
                nbirth.replace(nbirth[5:7], str(date.today().month))
            elif int(nbirth[8:]) > 32:
                nbirth.replace(nbirth[8:], str(date.today().day))
        
        nlife = request.POST['life']
        nbirth_temp = nbirth
        nbirth_temp = nbirth_temp.replace('-',',')
        nbirth_temp = datetime.date(int(nbirth_temp[0:4]), int(nbirth_temp[5:7]), int(nbirth_temp[8:]))
        nbirth_temp = (date.today().year - nbirth_temp.year) + 1

        patterns = re.compile('[^0-9]|[0-9]+[^0-9]|[^0-9]+[0-9]|[0-9]+[^0-9]+[0-9]|[^0-9]+[0-9]+[^0-9]') 
        nlife_patterns = patterns.match(nlife)
        
        if nlife_patterns : 
            nlife = 100
        else:
            if nbirth_temp > int(nlife) :
                nlife = 100
                        
        
        new_data = User_Info(name = nickname ,gender = ngender ,birth = nbirth ,life = nlife)
        new_data.save()
    
    ''' 데이터 베이스 저장 완료 '''
    #데이터베이스 생년월일 불러오기
    mybirth = User_Info.objects.last().birth
    #데이터베이스 수명 불러오기
    mylife = User_Info.objects.last().life
    #사용자 나이 계산하기
    age = ( date.today().year - mybirth.year ) + 1
    #생년원일부터 수명까지의 시간 계산
    mybirthyear_mylife_sum = (mybirth.year + mylife) - 1 #태어난연도 + 수명값  ex) 1996 + 100 = 2096, 2021 + 1 = 2022
    mylife_date = mybirth #생년월일 mylife_date에 저장 ex) datetime.date((1996,02,26), datetime.date(2021,01,01)
    mylife_date = mylife_date.replace(year = mybirthyear_mylife_sum) #수명값 교체 ex) (1996,02,26 -> 2096,02,26), (2021,01,01 -> 2022,01,01)
    mylife_mybirth_minus = mylife_date - mybirth #총 일수 구하기 ex) 계산된 일수, 365 
    mylife_days = mylife_mybirth_minus.days #총 일수 저장하기  
    day_time_sec = 24 * 60 * 60 #하루 24시간을 초(1sec)로 계산
    mylife_time_sec = mylife_days * day_time_sec #태어난날부터 수명날짜까지의 초(1sec)값 ex) 총 일수에 하루 시간을 초로 계산한 값을 곱함.
    mytoday = date.today() #오늘 날짜 
    mylife_current_day = mytoday - mybirth #현재까지 살아온 일 수 계산 ex) 오늘 날짜에서 생년월일 빼기, 2021,01,14 - 2021,01,01 => 13일
    mylife_current_day_time_sec = mylife_current_day.days * day_time_sec #현재까지 시간(초) ex) 13일 * 86400초(1day)
    
    try:
        mylife_percentage = round(mylife_current_day_time_sec / mylife_time_sec * 100.0, 2) #수명까지의 비율 ex) (13*86400 / 365*86400 * 100.0)
    except ZeroDivisionError:
        mylife_percentage = 1
    mylife_time_oneday = round(mylife_percentage * day_time_sec * 1/100, 0) #나의 하루 시간 ex) 
    mylife_time_oneday_str = str(datetime.timedelta(seconds=mylife_time_oneday)) #나의 현재 시간
 
    #일년으로 계산
    year_time_sec = day_time_sec * 365.2425
    default_year = datetime.date(1,1,1)
    mylife_year_percentage = round(year_time_sec * mylife_percentage * 1/100, 1) #일년으로 나타낸 시간(초) 비율
    mylife_year_days = mylife_year_percentage / day_time_sec #나의 1년으로 나타난 일 수
    mylife_year_days_date = default_year + datetime.timedelta(days=mylife_year_days) 
    mylife_year_days_date = str(mylife_year_days_date.month) + '월' + ' ' + str(mylife_year_days_date.day) + '일'

    if mylife_date == mytoday:
        mylife_time_oneday_str = '24:00:00'
        mylife_year_days_date = '12월 31일'
        mylife_percentage = 100
    elif mylife_percentage == 1:
        mylife_percentage = 10
    else:
        mylife_percentage = int(round(mylife_percentage,0))

    #하루 시간 및 일년 비율 json 포맷 변경
    
    timeyeardict = {'timeper': mylife_percentage, 'yearper': mylife_percentage }
    timeyearjson = json.dumps(timeyeardict)

    #당신이 책을 꾸준히 읽었다면...
    def my_books():
        nonlocal mybirth #바깥쪽 지역변수 사용
        birth = mybirth.replace(year=mybirth.year+7, month=1, day=1)
        my_book = int(round((date.today() - birth).days / 7, 0))
        
        return my_book

    books = my_books()
    if books < 0:
        books = 0

    #당신이 저금을 꾸준히 했다면..
    def my_saving_money():
        nonlocal mybirth
        for i in range(14,23,3):
            saving_money_age = mybirth.replace(year=mybirth.year + (i-1), month=1, day=1)
            my_money = int(round((date.today() - saving_money_age).days / 7, 0))
            if i==14:
                my_money *= 5000
                total_14 = my_money
            elif i==17:
                my_money *= 10000
                total_17 = my_money
            else:
                my_money *= 20000
                total_20 = my_money
            my_money = 0

        return total_14, total_17, total_20
    
    money = my_saving_money()
    money = list(money)
    for i in range(len(money)):
        if money[i] < 0:
            money[i] = 0

    money1, money2, money3, total = money[0], money[1], money[2], sum(money)

    #남녀 참가자 비율
    male = int(round(User_Info.objects.filter(gender='male').count() / User_Info.objects.count() * 100.0,0))
    female = int(round(User_Info.objects.filter(gender='female').count() / User_Info.objects.count() * 100.0,0))
    mysex = {'male':male, 'female':female}
    mysex = json.dumps(mysex)

    #남녀 평균 기대수명

    def temp_life(life):
        
        temp_life = int(round(life.get('life__avg'), 0))
        life['life__avg'] = temp_life
        
        return life
    
    try:
        male_life = User_Info.objects.filter(gender='male').aggregate(Avg('life'))
        male_life = temp_life(male_life)
    except TypeError:
        pass

    try:
        female_life = User_Info.objects.filter(gender='female').aggregate(Avg('life'))
        female_life = temp_life(female_life)
    except TypeError:
        pass

    mylifeavg = {'male':male_life,'female':female_life}
    mylifeavg = json.dumps(mylifeavg)

    context = { 'birth' : age, 'life': mylife, 'time' : mylife_time_oneday_str, 'year': mylife_year_days_date,'timeyearjson':timeyearjson, 
    'books': books, 'money1':money1, 'money2':money2, 'money3':money3, 'total':total, 'mysex':mysex, 'mylifeavg':mylifeavg}

    return render(request,'resultpage.html', context)
