from tokenize import String
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, BooleanField,FloatField
from wtforms.validators import DataRequired, Length, Email, EqualTo

class GradeForm(FlaskForm):
    assignement=StringField('Assignment')
    grade=FloatField("Grade")
    weight=FloatField("Weight")