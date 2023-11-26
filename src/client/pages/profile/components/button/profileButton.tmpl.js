import Handlebars from 'handlebars';
import button from '../../../../components/button/button.tmpl';

Handlebars.registerPartial('button', button);

const profileButton = `
  <div class="profile__button-container">
    {{>button}}
  </div>
`;

export default profileButton;
