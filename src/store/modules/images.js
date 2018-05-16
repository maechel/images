const state = {
    images: []
};

const getters = {
    allImages: state => state.images
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};

const actions = {
    fetchImages: () => {}
};

export default {
    state,
    getters,
    mutations,
    actions,
}