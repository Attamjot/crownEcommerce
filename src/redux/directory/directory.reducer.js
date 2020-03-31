const INITIAL_STATE = {
    sections: [
        {
            title: 'Hats',
            imageUrl: '/images/hats.png',
            id: 1,
            linkUrl: 'hats'
        },
        {
            title: 'jackets',
            imageUrl: '/images/jackets.png',
            id: 2,
            linkUrl: ''
        },
        {
            title: 'sneakers',
            imageUrl: '/images/sneakers.png',
            id: 3,
            linkUrl: ''
        },
        {
            title: 'womens',
            imageUrl: '/images/womens.png',
            id: 4,
            linkUrl: ''
        },
        {
            title: 'mens',
            imageUrl: '/images/men.png',
            id: 5,
            linkUrl: ''
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
    
        default:
            return state;
    }
};

export default directoryReducer;