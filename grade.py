from flask import Flask,render_template
from forms import GradeForm
app=Flask(__name__)

@app.route("/",methods=['Get','Post'])
def home():
      form=GradeForm()
      return render_template('gradecalc.html',form=form)

  
if __name__=="__main__":
    app.run(debug=True)   