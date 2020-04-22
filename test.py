import sys
import datetime

time = datetime.datetime.now()

output = "Hello %s the current time is %s" % (sys.argv[1], time)

print(output)