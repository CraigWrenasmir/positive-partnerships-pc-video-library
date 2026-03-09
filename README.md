# Positive Partnerships PC Video Library

Static Pages site for the Positive Partnerships `1 Day PC` and `2 Day PC` workshop video library.

## Contents

- `index.html`: local viewer for workshop selection and transcript reading
- `styles.css`: site styling
- `app.js`: client-side rendering logic
- `data.json`: generated dataset used by the site
- `build_dataset.py`: rebuilds `data.json` from `PC_video_inventory.xlsx` and transcript text files

## Rebuild the dataset

```bash
python3 build_dataset.py
```
