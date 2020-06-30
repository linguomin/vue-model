const moduleGenerator = require('./plop-templates/prompt-module');
const pageGenerator = require('./plop-templates/prompt-page');

module.exports = function(plop) {
  plop.setGenerator('module', moduleGenerator);
  plop.setGenerator('page', pageGenerator);

  // 管道函数
  // plop.setHelper('upperCase', txt => txt.toUpperCase());

  // plop.setWelcomeMessage('[WINDMILL] Please choose a generator.');
};
