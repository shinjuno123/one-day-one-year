from django.shortcuts import render
from .models import *
from datetime import date
import datetime
import math
import json
# Create your views here.

def odoymain(request):
    return render(request, 'odoymain.html')

def resultpage(request):
   
    ''' 데이터 베이스 저장 '''

    if(request.method == 'POST'):
        nickname = request.POST['nickname']
        if request.POST['gender']=="0":
            ngender = 'female'
        else:
            ngender = 'male'
        nbirth = request.POST['birth']
        nlife = request.POST['life']
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
    mybirthyear_mylife_sum = mybirth.year + mylife #태어난연도 + 수명값
    mylife_date = mybirth #생년월일 mylife_date에 저장
    mylife_date = mylife_date.replace(year = mybirthyear_mylife_sum) #수명값 교체
    mylife_mybirth_minus = mylife_date - mybirth #총 일수 구하기
    mylife_days = mylife_mybirth_minus.days #총 일수 저장하기
    day_time_sec = 24 * 60 * 60 #하루 24시간을 초(1sec)로 계산
    mylife_time_sec = mylife_days * day_time_sec #태어난날부터 수명날짜까지의 초(1sec)값
    mytoday = date.today() #오늘 날짜
    mylife_current_day = mytoday - mybirth #현재까지 살아온 일 수 계산
    mylife_current_day_time_sec = mylife_current_day.days * day_time_sec #현재까지 시간(초)
    mylife_percentage = round(mylife_current_day_time_sec / mylife_time_sec * 100.0, 2) #수명까지의 비율
    mylife_time_oneday = round(mylife_percentage * day_time_sec * 1/100, 0) #나의 하루 시간
    mylife_time_oneday_str = str(datetime.timedelta(seconds=mylife_time_oneday)) #나의 현재 시간

    #일년으로 계산
    year_time_sec = day_time_sec * 365
    default_year = datetime.date(1,1,1)
    mylife_year_percentage = round(year_time_sec * mylife_percentage * 1/100, 1) #일년으로 나타낸 시간(초) 비율
    mylife_year_days = mylife_year_percentage / day_time_sec #나의 1년으로 나타난 일 수
    mylife_year_days_date = default_year + datetime.timedelta(days=mylife_year_days)
    mylife_year_days_date = str(mylife_year_days_date.month) + '월' + ' ' + str(mylife_year_days_date.day) + '일'

    #하루 시간 및 일년 비율 json 포맷 변경
    mylife_percentage = int(round(mylife_percentage,0))
    timeyeardict = {'timeper':mylife_percentage, 'yearper': mylife_percentage }
    timeyearjson = json.dumps(timeyeardict)

    def my_books():
        mybirth = mybirth.year + 7
        mybirth = mybirth.replace(month=1, day=1)
        my_book = round((date.today() - mybirth).days / 7, 0)
        
        return my_book

    books = my_books

    context = { 'birth' : age, 'life': mylife, 'time' : mylife_time_oneday_str, 'year': mylife_year_days_date,'timeyearjson':timeyearjson, 'books': books}

    return render(request,'resultpage.html', context)
