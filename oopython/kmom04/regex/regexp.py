#!/usr/bin/env python3

import re

def printRef(match):
    """
    Prints each match on new line
    """
    for m in match:
        print(m)

textfile = open('ircLog.txt', 'r')
ircLog = textfile.read()
textfile.close()

pattern = r'(<.(.+)>)(.*)mos'
replace = r'\1\3\2(fd. mos)'
res = re.sub(pattern, replace, ircLog)

res = re.findall(r'.*\(fd\. mos\).*', res)

printRef(res)
