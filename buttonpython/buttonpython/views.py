import sys
import requests
from django.shortcuts import render
from subprocess import run, PIPE

# renders when button NOT clicked
def button(request):
    return render(request, 'about.html')

# renders when button clicked. returns data
def output(request):
    data = requests.get("http://reqres.in/api/users")
    print(data.text)
    data = data.text
    return render(request, "about.html", {"data":data})

# executes external python script
def external(request):
    inp = request.POST.get('param')
    out = run([sys.executable,'//home//kitt//Documents//Repositories//Stay-Connected//test.py', inp], shell=False, stdout=PIPE)
    print(out)
    return render(request, 'about.html', {'data1':out.stdout})
