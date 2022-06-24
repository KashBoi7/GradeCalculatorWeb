from flask import Flask,render_template,jsonify
from flask_cors import CORS
from forms import GradeForm
app=Flask(__name__)
app.config['SECRET_KEY']='36fac6f661040abe0c748c3b'
app.config.from_object(__name__)
CORS(app,resources={r"/*":{'origins':"*"}})
CORS(app,resources={r"/*":{'origins':"https://localhost:8080",'allow_headers':
                           "Access-Control-Allow-Origin"}})
@app.route("/",methods=['GET','POST'])
def home():
      form= GradeForm()
      return render_template('gradecalc.html',form=form)

  
if __name__=="__main__":
    app.run(debug=True)   