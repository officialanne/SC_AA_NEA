import sqlite3
import numpy as np

print("starting...")
try:
    cnn = sqlite.connect(users.db)
    print("database connected")
    sql = ("Select firstName"
           " From student"
            )
    cs = cnn.curser()
    cs.execute(sql)
    rst = cs.fetchall ()

except Error as e:
    print(e)

finally:
    if cnn:
        cnn.close()

print("done.")