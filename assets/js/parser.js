//@flow
'use strict';

module.exports = function (content: string): Array<Object> {
  const lines = content.split('\n');
  const data = [];
  const title = parseLine(lines.shift());
  lines.forEach((line: string) => {
    if (line.trim().length > 0) {
      const buffer = {};
      parseLine(line).forEach((value, i) => buffer[title[i]] = value);
      data.push(buffer);
    }
  });
  return data;
};

function parseLine(line: string): Array<string> {
  return line.split('\t').map((content) => {
    return content.trim();
  });
}