## OVERVIEW

**GuessTheTrack: Educational Edition** is a browser-based, single-page app (SPA) designed to help users learn music history and cultural context through quiz interactions. The app uses **local storage** to persist the user's learning progress and behavior, enabling personalized quiz experiences.

---

## FEATURE SET

### 1. **Quiz Modes**

* **Random Mode**: Draws quiz questions randomly from the full pool.
* **Personalized Mode**: Selects questions based on a user model (stored in local storage) to focus on the user’s weak areas and reinforce strong ones.

### 2. **User Model (Local Storage)**

* A record of user performance across:

  * Genres (e.g., genre\_Rock, genre\_Blues)
  * Eras (e.g., era\_1960s, era\_1980s)
  * Question types (e.g., type\_audio, type\_context)
* Stored in browser’s local storage as a JSON object.
* Updated after each quiz session.

### 3. **Hamburger Menu**

* Always available at the top-left corner of the screen.
* Toggles a dropdown with:

  * **Clear Data**: Resets all local storage values (clears progress).
  * **Developer Tab**: Expands a hidden section with:

    * Current quiz mode (toggle switch: Random / Personalized)
    * Visualized user model (formatted JSON or table)

---

## USER FLOW

### Home / Main Quiz Page

* On load, user sees:

  * App title/logo
  * Brief instructions (e.g., "Test your music history skills!")
  * “Start Quiz” button

### Quiz Session

* Each quiz consists of 1 question at a time:

  * Audio Mode:

    * Play a 10-second snippet
    * User guesses: Era, Genre, Cultural Context (multiple choice)
  * Context Mode:

    * Text-only question about music history, instruments, or culture
* After submission:

  * Immediate feedback: correct/incorrect + explanation
  * Update user model in local storage accordingly
  * "Next Question" button appears

### End of Quiz

* After 5–10 questions, user sees:

  * Summary screen with stats:

    * Accuracy rate per category
    * Time taken per question
  * "Restart Quiz" button

---

## PERSONALIZATION LOGIC

* If **Personalized Mode** is selected:

  * App looks at the lowest performing topics (based on accuracy % or count of wrong answers)
  * Selects \~70% of questions from weaker areas
  * Selects \~30% from areas the user has mastered (to maintain engagement)
* This behavior is invisible to the user but is controlled by the stored user model

---

## HAMBURGER MENU FUNCTIONALITY

* **Tapping the ☰ icon** opens a side/dropdown panel with:

  1. **Clear Data**

     * Button labeled: “Reset All Progress”
     * Confirmation dialog (e.g., “Are you sure?”)
     * On confirmation: deletes user model from local storage

  2. **Developer Tab**

     * Toggle for quiz mode (Radio or Switch button)

       * “Random” or “Personalized”
       * Immediately changes selection strategy
     * Live display of current user model

       * Shows keys like `genre_Jazz: 3`, `era_1970s: 1`
       * Format: table or scrollable JSON view

     * Export user model button

       * exports the usermodel into a json file

---

## UI & DESIGN

### Overall Style:

* Minimalist, mobile-friendly layout
* High-contrast UI for readability
* Audio controls styled clearly for usability
* Buttons: Large, with haptic-like visual feedback
* Icons: Simple line or flat icons for mode toggle and hamburger

### Page Structure:

#### 1. **Header**

* Title (center)
* Hamburger menu (top-left)

#### 2. **Main Area**

* Quiz or summary content
* Audio player (if applicable)
* Form inputs for answers (buttons or radio)
* Feedback message (after answer submission)

#### 3. **Footer**

* "Start Quiz" or "Next Question" or "Restart" button

---

## EXPERIMENTAL SUPPORT

* Tracks quiz accuracy, answer time
* Uses this data for:

  * Experimental comparison between random and personalized modes
  * Generating subjective and objective metrics for analysis

---

## DATA HANDLING RULES

* All data stored **locally** in `localStorage` (no server backend)
* User model is persistent between sessions unless manually cleared
* Users can inspect and reset their data freely via the developer tab
