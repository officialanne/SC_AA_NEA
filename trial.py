import sqlite3
from flask import Flask, app, render_template, request




con = sqlite3.connect("users.db")

cur = con.cursor()
app = Flask(__name__)
@app.route('/trial.py', methods = ["GET", "POST"])
def gfg():
    if request.method == "POST":
       # getting input with name = fname in HTML form
       first_name = request.form.get("fname")
       # getting input with name = lname in HTML form 
       last_name = request.form.get("lname") 
       return "Your name is "+first_name + last_name
    return render_template("signup.html")

if __name__=='__main__':
   app.run()