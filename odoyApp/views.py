from django.http import HttpResponseRedirect
from django.shortcuts import render, get_object_or_404
from .form import User_Form


# Create your views here.

def odoymain(request):
    return render(request, "odoymain.html")


def add_User_by_ModelForm(request):


    if request.method == 'POST':
        form = User_Form(request.POST)
        if form.is_valid():
            '''obj=User_info(name=form.data['name'], gender=form.data['birth'],
                         birth=form.data['birth'], life=form.data['life'])
            obj.save()'''
            new_name = form.cleaned_data['name']
            new_gender = form.cleaned_data['gender']
            new_birth = form.cleaned_data['birth']
            new_life = form.cleaned_data['life']
            data =User_info(name=form.data['name'], gender=form.data['birth'],
                      birth=form.data['birth'], life=form.data['life'])

            return HttpResponseRedirect('/secondPage/')
        else:
            form = User_Form()

        return render(request, 'odoymain.html', {'form': form})


'''
def add_User(request): # 이름,날짜,성별,수명을 입력받는 함수
    if (request.method == 'POST'):
         #user에 odoyUser를 복사
        name = request.POST['name'] #이름을 입력받는다.

        if (request.POST['gender'] == '0'):
            gender = "female"
        else:
            gender = "male"

         # String type이기때문에 바꾸어줘야함
        format= '%Y-%M-%D'
        temp_birth = request.POST['birth']
        birth = datetime.strtrime(temp_birth,format)



        life = int(request.POST['life'])

        userInfo = User_Info(name=name,gender=gender,birth=birth,life=life)
        userInfo.save()

    return render(request, 'odoymain.html')
'''
def secondPage(request):
    return render(request, 'secondPage.html')
