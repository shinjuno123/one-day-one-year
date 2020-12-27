from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect
from odoyApp.models import odoyUser
from django import forms
import datetime


# Create your views here.

def odoymain(request): # 이름,날짜,성별,수명을 입력받는 함수
    if (request.method == 'POST'):
        user = get_object_or_404(odoyUser) #user에 odoyUser를 복사
        user.name = request.POST['name'] #이름을 입력받는다.
        if (request.POST['gender'] == '0'):
            user.gender = 0
        else:
            user.gender = 1
        user.birth = datetime.strptime(request.POST['birth'],'%Y-%M-%D' )
        # String type이기때문에 바꾸어줘야함

        user.life = request.POST['life']

    return render(request, 'odoymain.html')

def secondPage(request):
    return render(request, 'secondPage.html')
