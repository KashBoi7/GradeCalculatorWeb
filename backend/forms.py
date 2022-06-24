from ast import Sub
from tokenize import String
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, BooleanField,FloatField,IntegerField
from wtforms.validators import DataRequired, Length, Email, EqualTo

class GradeForm(FlaskForm):
    assignment=StringField('Assignment')
    grade=FloatField("Grade")
    weight=FloatField("Weight")
    submit=SubmitField("Submit")