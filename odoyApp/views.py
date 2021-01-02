from django.shortcuts import render
from .models import *
from datetime import date
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

    ''' 현재 나이 값 '''
    datas = User_Info.objects.last().birth
    age = ( date.today().year - datas.year ) + 1
    db_age = { 'birth' : age }

    ''' 수명(life)값 '''
    datas = User_Info.objects.last().life
    db_life = { 'life': datas }

    return render(request,'resultpage.html', (db_age,db_life))