import normalizedData from '../schema'
const { entities, result } = normalizedData
const { categories } = result

const data = (state = { entities, categories }, action) => {
  switch (action.type) {
    case 'SEARCH_VIDEO': {
      if (action.payload.query === '') {
        return { ...state, query: '' }
      }
      let mediaPlaylist = Object.keys(entities.media).map(e => {
        return entities.media[e]
      })

      let filterQuery = mediaPlaylist.filter(e => {
        return e.title
          .toLowerCase()
          .includes(action.payload.query.toLowerCase())
      })

      return { ...state, query: filterQuery }
    }
    default: {
      return state
    }
  }
}

export default data
