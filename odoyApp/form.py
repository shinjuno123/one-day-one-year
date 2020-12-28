from django import forms
from django.forms import ModelForm
from .models import User_Info

class User_Form(forms.Form):
    user_name = forms.CharField(max_length=200, help_text='닉네임을 입력하세요')  # user이름
    user_gender = forms.CharField(max_length=10)  # 성별 0은 여자, 1은 남자
    user_birth = forms.DateField()  # 생년월일
    user_life = forms.IntegerField(default=100)  # 수명 없다면 0
'''
class User_Form(ModelForm):
    class Meta:
        model = User_Info
        fields = '__all__'
'''