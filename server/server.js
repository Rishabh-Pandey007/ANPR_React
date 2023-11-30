const express = require('express');
const multer = require('multer');
const fs = require('fs-extra');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 5000;
app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/upload', upload.single('video'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file provided' });
    }

    const videoBuffer = req.file.buffer;
    const destinationPath = path.join('D:/MCA/Project/client/Video', 'overspeeding.mp4');

    // Write the video buffer to the destination path
    await fs.writeFile(destinationPath, videoBuffer);

    return res.status(200).json({ message: 'File uploaded and duplicated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
