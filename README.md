# LifeApps

LifeApps is a small local-first web app for life planning activities. It currently runs in a browser on one PC and stores data in that browser's `localStorage`.

## Current Tools

### Bucketlister

Bucketlister lets a user create bucket list items and place them into future life-stage buckets.

Features:

- Set the current age.
- Set the age to plan through.
- Choose 5-year or 10-year bucket sizes.
- Add bucket list items.
- Assign each item to an age bucket or leave it unassigned.
- Remove bucket list items.
- Reset Bucketlister data for the selected user.

### Value Aligner

Value Aligner helps a user sort values by personal importance.

Features:

- Uses the ACT Value Sort value list.
- Shows each value with its description from the ACT Value Sort PDF.
- Sorts values into:
  - Not Important To Me
  - Important To Me
  - Very Important To Me
  - Most Important To Me
- Keeps unsorted values in a full-width value bank above the sorted columns.
- Lets users drag values between groups.
- Shows quick-placement buttons on unsorted values for moving them into a sorted column.
- Lets users remove values.
- Resets Value Aligner data for the selected user.

## Local Users

Multiple people can use the app on the same computer/browser by selecting who they are acting as.

Features:

- Choose an existing local user from the header.
- Create a new local user from the header.
- View and edit Bucketlister and Value Aligner data for the selected user.
- Keep each user's results separate.

There is no password, login, or security layer yet. User selection only scopes locally stored results.

## Value Comparisons

Value Aligner can compare the selected user's sorted values with another local user.

Comparison rules:

- Values left unsorted by either user are excluded.
- `Very Different`: the two users' choices are separated by three levels.
- `Quite Different`: the two users' choices are separated by two levels.
- `Slightly Different`: the two users' choices are separated by one level.
- `Same`: both users chose the same importance level.

Comparison views:

- `Four columns`: groups cards into Very Different, Quite Different, Slightly Different, and Same columns. Each column shows a count and total.
- `4x4 matrix`: rows represent the selected user's value choice and columns represent the compared user's value choice, with color-coded user labels. The compared user's label spans the four response columns, and the selected user's label sits in its own left-side column spanning the four response rows. Each cell is the same size and shows a proportional circle with the count inside; hover over a circle to see the values in that cell in a large floating tooltip. Matching cells are dark gray, one-level differences are light gray, and larger differences are white. The matrix also includes row totals, column totals, and a grand total.

## Run Locally

Open `index.html` in a browser.

For a local web server, run this from the project folder if Python is installed:

```powershell
python -m http.server 5173
```

Then open `http://localhost:5173`.

## Data Storage

The app stores data in the browser's `localStorage`.

This means:

- Data stays on the local machine/browser.
- Different browsers or browser profiles will have different stored data.
- Clearing browser site data will clear the app's saved users and results.
- There is no server-side database yet.
