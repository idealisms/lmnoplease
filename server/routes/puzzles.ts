import fs from 'fs';

export const listPuzzles = (req: any, res: any) => {
    const path = './data';

    fs.readdir(path, (err, files) => {
      if (err) {
        console.error(err);
        return;
      }
      res.json({names: files
            .filter(filename => filename.endsWith('.json'))
            .map(filename => filename.substring(0, filename.length - 5))});
    });
  };
  
  export const getPuzzle = (req: any, res: any) => {
    res.send(
      `I received your GET? request. This is what you sent me: ${req.body.put}`
    );
  };
  