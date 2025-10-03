# Math Problems Web App

A Flask-based web application for practicing math 
problems with Ukrainian language support.

## Features

- **Interactive Problem Solving**: Users solve math 
problems one at a time
- **Ukrainian Language Support**: Problems and 
interface in Ukrainian
- **Progress Tracking**: Tracks correct and 
incorrect answers
- **Responsive Design**: Works on desktop and mobile 
devices
- **Error Handling**: Graceful handling of incorrect 
answers
- **Session Management**: Remembers user progress 
during session

## Technologies Used

- **Backend**: Python 3.13, Flask 3.x
- **Frontend**: HTML5, CSS3, JavaScript
- **Data Storage**: JSON file-based storage
- **Development Tools**: Poetry, Black, Flake8, 
Pytest

## Installation

### Prerequisites

- Python 3.13+
- Poetry (for dependency management)

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone 
https://github.com/yourusername/math_problems.git
   cd math_problems
   ```

2. **Install dependencies:**
   ```bash
   poetry install --no-root
   ```

3. **Activate virtual environment:**
   ```bash
   poetry shell
   ```
4. **Run the application:**
   ```bash
   python app.py
   ```

5. **Open your browser:**
   Navigate to `http://127.0.0.1:5000`

## Usage

1. **Start the application** using the installation 
instructions above
2. **Read the math problem** displayed on the screen
3. **Enter your answer** in the input field
4. **Click "Apply"** to submit your answer
5. **View feedback** - correct answers show the next 
problem, incorrect answers show an error message
6. **Continue solving** until all problems are 
completed

## Project Structure

math_problems/
├── app.py # Main Flask application
├── config.py # Configuration settings
├── problems.json # Math problems database
├── requirements.txt # Dependencies
├── .env.example # Environment variables template
├── .gitignore # Git ignore file
├── README.md # This file
├── static/
│ ├── css/
│ │ └── style.css # Styled CSS
│ └── js/
│ └── script.js # JavaScript for interactivity
├── templates/
│ ├── base.html # Base template
│ └── index.html # Main page template
└── tests/
└── test_app.py # Unit tests

## Development

### Running Tests
```bash
poetry run pytest
```

### Code Formatting
```bash
poetry run black .
```

### Code Linting
```bash
poetry run flake8 .
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b 
feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some 
amazing feature'`)
4. Push to the branch (`git push origin 
feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see 
the [LICENSE](LICENSE) file for details.

## Author

**Tanja Ivashyna** - [Tanja Ivashyna's GitHub 
Profile](https://github.com/TetianaIvashyna)

## Acknowledgments

- Flask documentation and community
