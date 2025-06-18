# Typing Master

Typing Master is a web-based application designed to help users improve their typing speed and accuracy through personalized practice drills and real-time feedback.

## Features

- **Typing Test:** Practice typing with randomly selected words or personalized drills based on your typing weaknesses.
- **Personalized Drills:** The app analyzes your typing performance and generates practice sets focusing on your weakest letters and bigrams (2-letter sequences).
- **User Profile:** Visualize your typing statistics, including your best and worst letters and bigrams, with interactive charts.
- **Developer Screen:** Toggle between personalized and random word selection for the typing test.
- **Real-Time Feedback:** See your WPM (words per minute), accuracy, and elapsed time as you type.
- **On-Screen Keyboard:** Highlights the next key to press and shows your keypresses for better learning.
- **Result Screen:** View your test results and quickly restart or return to the home page.

## File Structure

- `index.html` - Home page and entry point.
- `typing-test.html` - Main typing test interface.
- `user-profile.html` - View your typing statistics and charts.
- `developer-screen.html` - Toggle personalized drills.
- `result.html` - Displays your test results.
- `personalization.js` - Logic for personalized drill selection based on user stats.
- `style.css` - Application styling.
- `public/words.csv` - Word list used for typing tests.

## How It Works

1. **Start a Test:** Click "Take Practice Test" on the home page.
2. **Type the Prompt:** Type the displayed words as quickly and accurately as possible. Your stats update in real time.
3. **Personalization:** The app tracks your accuracy for each letter and bigram. If enabled, future tests will focus on your weakest areas.
4. **View Results:** After finishing, see your WPM, accuracy, and time.
5. **Analyze Performance:** Visit the User Profile to see detailed charts of your strengths and weaknesses.

## Customization

- Use the Developer Screen to switch between personalized and random word selection.
- Your typing statistics are stored in your browser's local storage.

## Getting Started

1. Clone or download the repository.
2. Open `index.html` in your web browser.
3. No server or build step is required.

## License

This project is for educational purposes.

---

Enjoy improving your typing skills with Typing Master!