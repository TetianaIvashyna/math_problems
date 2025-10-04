from flask import Flask, render_template, request, redirect, url_for
import json

app = Flask(__name__)

# Load problems from JSON file
def load_problems():
    with open('problems.json', 'r') as f:
        return json.load(f)

@app.route('/')
def index():
    problems = load_problems()
    current_problem = problems[0]  # Start with first problem
    return render_template('problem.html', problem=current_problem)

if __name__ == '__main__':
    app.run(debug=True)
