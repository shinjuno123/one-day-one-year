from django.shortcuts import render
from .models import *
# Create your views here.

def odoymain(request):
    return render(request, 'odoymain.html')


def resultpage(request):
    if(request.method == 'POST'):
        nickname = request.POST['nickname']

        if request.POST['gender']=="0":
            ngender = 'female'
        else:
            ngender = 'male'
        nbirth = request.POST['birth']
        nlife = request.POST['life']
        new_data = User_Info(name = nickname,gender = ngender,birth = nbirth,life = nlife)
        new_data.save()
        print(nickname + " " + ngender + " " + nbirth + " " + nlife)
    return render(request,'resultpage.html')
