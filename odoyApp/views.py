from django.shortcuts import render

# Create your views here.

def odoymain(request):
    return render(request, 'odoymain.html')


def secondPage(request):
    return render(request,'secondPage.html')