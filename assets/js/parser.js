'use strict';

module.exports = function (content) {
  const lines = content.split('\n');
  const data = [];
  const title = parseLine(lines.shift());
  lines.forEach((line) => {
    if (line.trim().length > 0) {
      const buffer = {};
      parseLine(line).forEach((value, i) => buffer[title[i]] = value);
      data.push(buffer);
    }
  });
  return data;
};

function parseLine(line) {
  return line.split('\t').map((content) => {
    return content.trim();
  });
}