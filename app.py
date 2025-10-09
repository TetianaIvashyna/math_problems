from flask import Flask, render_template, request, redirect, url_for, session
from flask_babel import Babel, gettext
import json

app = Flask(__name__)
app.secret_key = 'your-secret-key-here'  # Change this to a random string

# Configure Babel
app.config['BABEL_DEFAULT_LOCALE'] = 'uk'
app.config['BABEL_TRANSLATION_DIRECTORIES'] = 'translations'
babel = Babel(app)

def get_locale():
    # Get language from session or use default
    return session.get('language', 'uk')

babel.init_app(app, locale_selector=get_locale)

def load_problems():
    with open('problems.json', 'r') as f:
        data = json.load(f)
        return data['problems']

@app.route('/')
def index():
    problems = load_problems()
    current_problem_index = session.get('current_problem_index', 0)
    
    if current_problem_index >= len(problems):
        return render_template('completion.html')
    
    current_problem = problems[current_problem_index]
    return render_template('problem.html', problem=current_problem)

@app.route('/check_answer', methods=['POST'])
def check_answer():
    problems = load_problems()
    current_problem_index = session.get('current_problem_index', 0)
    current_problem = problems[current_problem_index]
    
    user_answer = request.form.get('answer')
    correct_answer = current_problem['answer']
    
    if int(user_answer) == correct_answer:
        # Correct answer - move to next problem
        session['current_problem_index'] = current_problem_index + 1
        return redirect(url_for('index'))
    else:
        # Wrong answer - show error message
        error_message = gettext("Упс, відповідь неправильна. Подумайте ще раз")
        return render_template('problem.html', 
                             problem=current_problem, 
                             error_message=error_message)

@app.route('/set_language/<lang>')
def set_language(lang):
    session['language'] = lang
    return redirect(request.referrer or url_for('index'))

@app.route('/reset')
def reset_session():
    session.clear()
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)