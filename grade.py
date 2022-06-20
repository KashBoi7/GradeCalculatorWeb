from flask import Flask,render_template
app=Flask(__name__)

@app.route("/")
def home():
      return render_template('gradecalc.html')
  
if __name__=="__main__":
    app.run(debug=True)   