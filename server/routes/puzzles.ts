import fs from 'fs';

const PUZZLE_DIR = './data';

export const listPuzzles = (req: any, res: any) => {

    fs.readdir(PUZZLE_DIR, (err, files) => {
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
    const date : string = req.query['date'] || '';
    if (!date.match(/^\d{4}-\d{2}-\d{2}$/)) {
        res.json({
            'error': `Puzzle not found for "${date}".`,
        })
        return;
    }

    fs.readFile(`${PUZZLE_DIR}/${date}.json`, 'utf8', (err, data) => {
        if (err) {
            res.json({
                'error': `Puzzle not found for "${date}".`,
                'err': err.message,
            })
            return;
        }
        res.json(JSON.parse(data));
    });
};
