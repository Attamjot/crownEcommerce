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
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: '',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'sneakers',
                    imageUrl: '',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'womens',
                    imageUrl: '',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'mens',
                    imageUrl: '',
                    id: 5,
                    linkUrl: ''
                }
            ]
        }
    }

    render() {
      const { sections } = this.state;
      return (
        <div className="directory-menu">
          {sections.map( ({ id, ...otherSectionProps }) => (
              <MenuItem key={id} {...otherSectionProps} />
          ) )}
        </div>
      )
    }
}

export default Directory;