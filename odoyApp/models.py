from django.db import models
# Create your models here.

class odoyUser(models.Model):
    pub_date = models.DateTimeField('date published')  # data생성일자
    name = models.CharField(max_length = 200, help_text='닉네임을 입력하세요') # user이름
    gender = models.BinaryField(default=0) # 성별 0은 여자, 1은 남자
    birth = models.DateField() # 생년월일
    life = models.IntegerField(default = 0) # 수명 없다면 0

    def __str__(self):
        return self.name

