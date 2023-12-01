import sqlite3
from flask import Flask, app, render_template, request




con = sqlite3.connect("users.db")

cur = con.cursor()


app = Flask(__name__)
@app.route('/')
def index():
   return render_template('signup.html')

app.route('/forms', methods=['POST'])
def getValue():
   name = request.form['fname']
   print(name)
   return render_template("index.html", n=name)


index()