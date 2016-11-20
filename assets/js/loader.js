'use strict';

import marked from 'marked';

module.exports = function (url, component) {
  component.$http.get(url)
    .then((response) => {
      return response.text();
    })
    .then((content) => {
      const title = content.match(/###(.+)/);
      component.content = marked(content.replace(/^###.+/, ''));
      component.title = title && title.length > 1 ? title[1].trim() : '';
      component.done = true;
    })
    .catch((e) => {
      console.error(e.stack);
      component.title = 'Opps! Error occur!';
      component.content = 'Please check your network or any typing missing in the website. If you confirm no this two, please report it at <a href="https://github.com/spyc/library/issues/new">Github</a> or email to tony@opensource.hk';
      component.done = true;
    });
};