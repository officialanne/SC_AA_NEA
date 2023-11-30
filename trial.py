import sqlite3
from sqlite3 import Error



print("starting...")
cnn = None
filename = "users.db"
try:
    cnn = sqlite3.connect(filename)
    print("database connected")
    sql = ("Select firstName"
           " From student"
            )
    cs = cnn.curser()
    cs.execute(sql)
    print("done")


except Error as e:
    print(e)

finally:
    if cnn:
        cnn.close()

print("done.")