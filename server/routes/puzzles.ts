import fs from 'fs';

export const listPuzzles = (req: any, res: any) => {
    const path = './data';

    fs.readdir(path, (err, files) => {
      if (err) {
        console.error(err);
        return;
      }
      res.json({names: files})
    });
  };
  
  export const getPuzzle = (req: any, res: any) => {
    res.send(
      `I received your GET? request. This is what you sent me: ${req.body.put}`
    );
  };
  