import "../style/style.css"
import { renderStartItem } from "./renderStartItem.js"
const { renderProfessionItem } = require('./renderProfessionItem.js');
const { getPartnersLogo } = require('./partnersLogo.js');
const { getEducationLogo } = require('./educationLogo.js');
const { getTeachersLogo } = require('./teachersLogo.js');
const { renderSocialItem } = require('./renderSocialItem.js');
const { getTimerHeader } = require('./timerHeader.js');
const { animation } = require('./animationLogo.js');
const swiper = require('./slider.js');
const { goUp } = require('./goToUp.js');
const { burgerMenu } = require('./burgerMenu.js');
const { getPartners } = require('./updatePartners.js');
const { getEducation } = require('./updateEducation.js');

renderStartItem()
renderProfessionItem()
getPartnersLogo()
getEducationLogo()
getTeachersLogo()
renderSocialItem()
getTimerHeader()
animation()
goUp()
burgerMenu()
getPartners()
getEducation()

var ghpages = require('gh-pages');

ghpages.publish(dir, callback);


