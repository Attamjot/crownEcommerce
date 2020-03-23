import React from 'react';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';


class  Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'Hats',
                    imageUrl: '',
                    id: 1
                },
                {
                    title: 'jackets',
                    imageUrl: '',
                    id: 2
                },
                {
                    title: 'sneakers',
                    imageUrl: '',
                    id: 3
                },
                {
                    title: 'womens',
                    imageUrl: '',
                    id: 4
                },
                {
                    title: 'mens',
                    imageUrl: '',
                    id: 5
                }
            ]
        }
    }

    render() {
      const { sections } = this.state;
      return (
        <div className="directory-menu">
          {sections.map( (section) => (
              <MenuItem key={section.id} {...section} />
          ) )}
        </div>
      )
    }
}

export default Directory;