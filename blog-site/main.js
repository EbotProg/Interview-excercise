import './style.css'

import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';
import { loadIdentities } from './loadBlogsTest';
import { capitalizeFirstLetter } from './capitalizeFirstLetter';

Alpine.plugin(collapse);

Alpine.data('loadIdentities', loadIdentities);


Alpine.store('capitalizeFirstLetter', {
  capTitleArr: [],
  capitalize(str, id) {
      this.capTitleArr.push(capitalizeFirstLetter(str, id));
      console.log('main test', this.capTitleArr)
  }
})
Alpine.start();

